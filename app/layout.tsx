import type { Metadata } from "next";
import {
  DynaPuff,
  Fraunces,
  Inter,
  Lilita_One,
  Roboto,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import FloatingBadges from "@/components/FloatingBadges";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
});

const lilitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lilita-one",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// My Info
const siteConfig = {
  name: "Rohit",
  title: "Rohit | Web Engineer",
  description:
    "Web Engineer crafting digital art for the web. TypeScript and React are my go-to tools, backed by rigorous engineering.",
  url: "https://rohitvince.in",
  profileImage: "/images/profile/profile-image.png",
  ogImage: "/images/profile/card.png",
  XHandle: "@rohitcpp",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Web Developer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
    "Rust Developer",
    "Computer science",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [
      {
        url: siteConfig.profileImage,
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: siteConfig.profileImage,
    apple: siteConfig.profileImage,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name}'s Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.XHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable} ${fraunces.variable} ${dynaPuff.variable} ${lilitaOne.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-screen font-inter bg-background">
        <ThemeProvider defaultTheme="system" enableSystem>
          {/* Notion-style: one centred column, sidebar hugs its left edge */}
          <div className="mx-auto w-full max-w-4xl min-h-screen relative">
            <Navbar />
            <main className="ml-52 py-16 pr-8 pl-12 relative z-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
