"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  enableSystem = true,
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableSystem?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  const apply = useCallback((t: ResolvedTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(t);
    root.style.colorScheme = t;
  }, []);

  const getSystem = useCallback((): ResolvedTheme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, []);

  const resolve = useCallback(
    (t: Theme): ResolvedTheme => {
      if (t === "system") {
        return enableSystem ? getSystem() : "light";
      }

      return t;
    },
    [enableSystem, getSystem]
  );

  const setTheme = useCallback(
    (t: Theme) => {
      const nextResolvedTheme = resolve(t);

      setThemeState(t);
      setResolvedTheme(nextResolvedTheme);
      try {
        localStorage.setItem(storageKey, t);
      } catch {}
      apply(nextResolvedTheme);
    },
    [storageKey, resolve, apply]
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    let stored: Theme | null = null;
    try {
      const value = localStorage.getItem(storageKey);
      if (value === "light" || value === "dark" || value === "system") {
        stored = value;
      }
    } catch {}
    const initial = stored || defaultTheme;
    const nextResolvedTheme = resolve(initial);

    setThemeState(initial);
    setResolvedTheme(nextResolvedTheme);
    apply(nextResolvedTheme);
    setMounted(true);
  }, [storageKey, defaultTheme, resolve, apply]);

  useEffect(() => {
    if (!enableSystem) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const nextResolvedTheme = getSystem();
        setResolvedTheme(nextResolvedTheme);
        apply(nextResolvedTheme);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, enableSystem, getSystem, apply]);

  const value = useMemo(
    () => ({
      theme: mounted ? theme : defaultTheme,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [defaultTheme, mounted, resolvedTheme, setTheme, theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
