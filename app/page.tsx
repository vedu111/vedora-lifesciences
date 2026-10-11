import { CtaBand } from "../components/CtaBand";
import { Conditions } from "../components/home/Conditions";
import { Faq } from "../components/home/Faq";
import { Hero } from "../components/home/Hero";
import { Insurance } from "../components/home/Insurance";
import { Journey } from "../components/home/Journey";
import { Location } from "../components/home/Location";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { Testimonials } from "../components/home/Testimonials";
import { Therapists } from "../components/home/Therapists";
import { TrustStrip } from "../components/home/TrustStrip";
import { WhyChoose } from "../components/home/WhyChoose";
import { clinic } from "../lib/clinic";

export const metadata = {
  title: "Restore Physical Therapy | Recover Movement, Rebuild Strength",
  description: "Doctor-led physical therapy in Portland for sports injuries, post-surgery recovery, and back and neck pain.",
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyChoose />
      <Therapists />
      <Journey />
      <Conditions />
      <Testimonials />
      <Insurance />
      <Faq />
      <CtaBand
        title="Start your recovery this week."
        text="Book a full evaluation with a doctor of physical therapy — no referral needed, most insurance accepted, same-week openings available."
        actions={[
          { href: "#book", label: "Book appointment", variant: "coral" },
          { href: `tel:${clinic.phoneTel}`, label: "Call now", variant: "ghost" },
        ]}
      />
      <Location />
    </main>
  );
}
