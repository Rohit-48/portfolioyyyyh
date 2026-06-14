"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "system",
  setTheme: () => {},
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
    (t: Theme): ResolvedTheme =>
      t === "system" && enableSystem ? getSystem() : (t as ResolvedTheme),
    [enableSystem, getSystem]
  );

  const setTheme = useCallback(
    (t: Theme) => {
      setThemeState(t);
      try {
        localStorage.setItem(storageKey, t);
      } catch {}
      apply(resolve(t));
    },
    [storageKey, resolve, apply]
  );

  useEffect(() => {
    let stored: Theme | null = null;
    try {
      stored = localStorage.getItem(storageKey) as Theme | null;
    } catch {}
    const initial = stored || defaultTheme;
    setThemeState(initial);
    apply(resolve(initial));
    setMounted(true);
  }, [storageKey, defaultTheme, resolve, apply]);

  useEffect(() => {
    if (!enableSystem) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") apply(getSystem());
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme, enableSystem, getSystem, apply]);

  return (
    <ThemeContext.Provider
      value={{ theme: mounted ? theme : defaultTheme, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
