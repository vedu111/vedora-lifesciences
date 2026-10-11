import { Faq } from "../components/home/Faq";
import { Hero } from "../components/home/Hero";
import { Location } from "../components/home/Location";
import AboutUs from "../components/home/AboutUs";
import { Testimonials } from "../components/home/Testimonials";
import  Product   from "../components/home/Products";
import { clinic } from "../lib/clinic";


export const metadata = {
  title: "VEDORA LIFESCIENCES | Connecting Healthcare, Delivering Trust",
  description:
    "VEDORA LIFESCIENCES is a B2B healthcare distribution business connecting manufacturers and authorised suppliers with pharmacies, healthcare retailers, wellness stores, and eligible institutions. Explore our nutraceuticals and healthcare products.",
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <AboutUs />
      <Product />
      {/* <Testimonials /> */}
      <Faq />
      <Location />
    </main>
  );
}
