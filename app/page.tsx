import type { Metadata } from "next";
import AboutUs from "../components/home/AboutUs";
import { Hero } from "../components/home/Hero";
import { Location } from "../components/home/Location";
import Product from "../components/home/Products";

export const metadata: Metadata = {
  title: "Nutraceutical & Healthcare Distributor",
  description:
    "VEDORA LIFESCIENCES supplies nutraceutical and healthcare products to pharmacies, retailers and institutions in Panvel, Maharashtra.",
  keywords: [
    "nutraceutical distributor Panvel",
    "nutraceutical products wholesale",
    "healthcare product distribution Maharashtra",
    "nutraceutical distributor",
    "B2B healthcare products",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nutraceutical & Healthcare Distributor",
    description:
      "B2B nutraceutical and healthcare product distribution for pharmacies, retailers and institutions in Panvel, Maharashtra.",
    url: "/",
    siteName: "Vedora Lifesciences",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/img/og-brand.png",
        width: 1200,
        height: 630,
        alt: "VEDORA LIFESCIENCES — Connecting Healthcare, Delivering Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutraceutical & Healthcare Distributor",
    description:
      "B2B nutraceutical and healthcare product distribution for pharmacies, retailers and institutions in Panvel, Maharashtra.",
    images: ["/img/og-brand.png"],
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.vedoralifesciences.in/#organization",
    name: "VEDORA LIFESCIENCES",
    url: "https://www.vedoralifesciences.in/",
    logo: "https://www.vedoralifesciences.in/img/vedora-logo.png",
    description:
      "B2B nutraceutical and healthcare product distribution for pharmacies, healthcare retailers and institutions.",
    email: "vedoralifesciencesin@gmail.com",
    telephone: "+91-8928945887",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room No. 05, Sharddha CHS, 2nd Floor, Plot No. 25, Sector 13, Kalamboli Node",
      addressLocality: "Panvel",
      addressRegion: "Maharashtra",
      postalCode: "410218",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8928945887",
      email: "vedoralifesciencesin@gmail.com",
      contactType: "business enquiries",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main id="main">
        <Hero />
        <AboutUs />
        <Product />
        <Location />
      </main>
    </>
  );
}
