import { Faq } from "../components/home/Faq";
import { Hero } from "../components/home/Hero";
import { Location } from "../components/home/Location";
import AboutUs from "../components/home/AboutUs";
import { Testimonials } from "../components/home/Testimonials";
import  Product   from "../components/home/Products";
import { clinic } from "../lib/clinic";

export const metadata = {
  title: "Restore Physical Therapy | Recover Movement, Rebuild Strength",
  description: "Doctor-led physical therapy in Portland for sports injuries, post-surgery recovery, and back and neck pain.",
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
