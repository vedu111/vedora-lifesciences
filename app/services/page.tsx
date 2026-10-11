import { CtaBand } from "../../components/CtaBand";
import { Booking } from "../../components/services/Booking";
import { PageHead } from "../../components/services/PageHead";
import { Pricing } from "../../components/services/Pricing";
import { Treatments } from "../../components/services/Treatments";
import { clinic } from "../../lib/clinic";

export const metadata = {
  title: "Treatments & Booking | Restore Physical Therapy",
  description: "Explore physical therapy treatments, transparent pricing, and appointment booking at Restore Physical Therapy.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHead />
      <Treatments />
      <Pricing />
      <Booking />
      <CtaBand
        sectionClassName="section bg-mist"
        title="Still have questions before you book?"
        text="Grab a free 15-minute phone consult with a doctor of physical therapy. We'll tell you honestly whether PT can help — no pressure, no obligation."
        actions={[
          { href: `tel:${clinic.phoneTel}`, label: "Call now", variant: "coral" },
          { href: "/#faq", label: "Read the FAQ", variant: "ghost" },
        ]}
      />
    </main>
  );
}
