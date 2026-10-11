import { Faq } from "../components/home/Faq";
import { Hero } from "../components/home/Hero";
import { Location } from "../components/home/Location";
import AboutUs from "../components/home/AboutUs";
import { Testimonials } from "../components/home/Testimonials";
import  Product   from "../components/home/Products";
import { clinic } from "../lib/clinic";


export const metadata = {
  title: "VEDORA LIFESCIENCES | Connecting Healthcare, Delivering Trust",
description: "Trusted B2B distribution of nutraceuticals and healthcare products across India.",
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
