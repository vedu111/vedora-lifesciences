import { IconGrad, IconPinHeart, IconShieldPlain, IconUser } from "../icons";
import { Reveal } from "../Reveal";

const reasons = [
  {
    icon: IconUser,
    delay: "",
    title: "Genuine one-on-one care",
    text: "Every appointment is a full hour of hands-on time with your therapist — no double-booking, no passing you to a tech.",
  },
  {
    icon: IconGrad,
    delay: " reveal-d1",
    title: "Doctors of physical therapy",
    text: "Our whole clinical team holds a DPT, with board certifications in orthopedics, sports and manual therapy.",
  },
  {
    icon: IconPinHeart,
    delay: " reveal-d2",
    title: "Hands-on, not hooked-up",
    text: "Skilled manual therapy and active rehab drive your recovery — not a bank of machines and a hot pack.",
  },
  {
    icon: IconShieldPlain,
    delay: " reveal-d3",
    title: "Most insurance accepted",
    text: "We're in-network with major plans and verify your benefits before your first visit — so there are no billing surprises.",
  },
];

export function WhyChoose() {
  return (
    <section className="section bg-mist" id="why">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="why-img-wrap">
              <img
                className="why-img"
                src="/img/why-clinic.jpg"
                width={520}
                height={572}
                loading="lazy"
                alt="Physical therapist performing hands-on manual therapy on a patient's shoulder in a treatment room"
              />
              <div className="why-stat-card">
                <div className="n">1-on-1</div>
                <div className="t">Full-hour sessions with your therapist — never handed off to an aide</div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <span className="eyebrow">Why Restore</span>
            <h2 className="section-title">Care that actually feels like care</h2>
            <p className="section-lead mb-3">
              You keep the same doctor of physical therapy from evaluation to discharge. That continuity is why our
              patients recover faster and stay recovered.
            </p>
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} className={`why-item${reason.delay}`}>
                  <span className="why-ico" aria-hidden="true">
                    <Icon />
                  </span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
