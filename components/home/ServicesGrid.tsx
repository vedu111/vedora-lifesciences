import {
  IconArrowRight,
  IconBolt,
  IconHand,
  IconHeart,
  IconNeedle,
  IconPerson,
  IconTrend,
} from "../icons";
import { Reveal } from "../Reveal";

const services = [
  {
    title: "Sports Injuries",
    href: "/services#sports",
    delay: "",
    icon: IconBolt,
    text: "Sprains, strains, ligament tears and overuse injuries — assessed, taped and rehabbed so you return to your sport safely and confidently.",
  },
  {
    title: "Post-Surgery Rehab",
    href: "/services#post-op",
    delay: " reveal-d1",
    icon: IconHeart,
    text: "Structured, surgeon-aligned protocols for ACL, rotator cuff, joint replacement and spine surgery — rebuilding range, strength and trust in your body.",
  },
  {
    title: "Back & Neck Pain",
    href: "/services#spine",
    delay: " reveal-d2",
    icon: IconPerson,
    text: "Sciatica, herniated discs, whiplash and stubborn desk-posture pain. We calm the flare-up, then fix the mechanics that keep it coming back.",
  },
  {
    title: "Manual Therapy",
    href: "/services#manual",
    delay: "",
    icon: IconHand,
    text: "Skilled hands-on joint mobilization, soft-tissue release and myofascial work that restores motion medication and rest alone can't reach.",
  },
  {
    title: "Dry Needling",
    href: "/services#needling",
    delay: " reveal-d1",
    icon: IconNeedle,
    text: "Targeted trigger-point needling to release deep muscle knots, reduce spasm and switch off referred pain — often within a session or two.",
  },
  {
    title: "Sports Performance",
    href: "/services#performance",
    delay: " reveal-d2",
    icon: IconTrend,
    text: "Movement screens, strength testing and return-to-sport programming for athletes who want to come back faster — and finish stronger.",
  },
];

export function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="heading-wrap center">
          <span className="eyebrow center">What we treat</span>
          <h2 className="section-title">Specialized care for every stage of recovery</h2>
          <p className="section-lead">
            From the first acute injury to peak-performance return, our doctors of physical therapy build a plan around
            your goals — not a template.
          </p>
        </Reveal>

        <div className="row g-4 mt-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} className={`col-md-6 col-lg-4${service.delay}`}>
                <div className="svc-card">
                  <div className="svc-ico" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="svc-link" href={service.href}>
                    Explore treatment <IconArrowRight />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
