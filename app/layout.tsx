import Script from "next/script";
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { SkipLink } from "../components/SkipLink";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vedoralifesciences.in"),
  title: {
    default: "Vedora Lifesciences | Nutraceutical & Healthcare Distribution",
    template: "%s | Vedora Lifesciences",
  },
  description:
    "B2B nutraceutical and healthcare product distribution for pharmacies, healthcare retailers and institutions in Panvel, Maharashtra.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;600;700;800&family=Mulish:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SkipLink />
        <SiteNav />
        {children}
        <SiteFooter />
        <Script id="enable-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js");`}
        </Script>
      </body>
    </html>
  );
}
