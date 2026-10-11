import Script from "next/script";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { SkipLink } from "../components/SkipLink";
import { TopBar } from "../components/TopBar";
import "./globals.css";

export const metadata = {
  title: "Restore Physical Therapy",
  description: "Doctor-led physical therapy and rehabilitation in Portland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        <TopBar />
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
