import type { Metadata } from "next";
import localFont from "next/font/local";
import { MotionProvider } from "@/components/motion";
import { SiteGate } from "@/features/site-gate";
import { site } from "@/core/site";
import "./globals.css";

// Fonts are self-hosted (latin subset of each variable font from Google Fonts,
// SIL OFL — licenses in ./fonts) so the build never fetches Google Fonts: a
// Google response with query-string font URLs broke Turbopack's next/font/google
// on Vercel ("next/font/google queries have exactly one entry").
const geistSans = localFont({
  src: "./fonts/geist-latin-var.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin-var.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Brand typefaces for the Progix document (referenced as CSS variables from the
// devis + site-gate stylesheets): Space Grotesk for display, Inter for body.
const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin-var.woff2",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-var.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  // Private, password-gated document — keep it out of search indexes.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <SiteGate>{children}</SiteGate>
        </MotionProvider>
      </body>
    </html>
  );
}
