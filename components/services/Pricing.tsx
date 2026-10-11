import { IconCheck } from "../icons";
import { Reveal } from "../Reveal";

const prices = [
  {
    name: "Initial Evaluation & Assessment",
    desc: "Full movement exam, diagnosis and personalized care plan",
    duration: "60 min",
    cost: "$145",
  },
  {
    name: "Follow-up Treatment Session",
    desc: "One-on-one hands-on therapy plus guided exercise",
    duration: "45 min",
    cost: "$110",
  },
  {
    name: "Dry Needling Add-on",
    desc: "Trigger-point needling added to any treatment session",
    duration: "20 min",
    cost: "$45",
  },
  {
    name: "Sports Performance Screen",
    desc: "Movement, strength and power testing with a written program",
    duration: "75 min",
    cost: "$175",
  },
  {
    name: "Telehealth Home Program Review",
    desc: "Virtual check-in to progress and refine your home exercises",
    duration: "30 min",
    cost: "$75",
  },
  {
    name: "Complimentary Phone Consult",
    desc: "Not sure PT is right for you? Talk to a therapist first",
    duration: "15 min",
    cost: "Free",
  },
];

export function Pricing() {
  return (
    <section className="section bg-mist" id="pricing">
      <div className="container">
        <div className="row g-5">
          <Reveal className="col-lg-4">
            <span className="eyebrow">Transparent pricing</span>
            <h2 className="section-title">No surprises, ever</h2>
            <p className="section-lead mb-3">
              These are our standard self-pay rates. Most visits are covered by insurance — we verify your exact
              benefits before your first appointment so you always know your cost up front.
            </p>
            <div
              className="cp-hours"
              style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--teal-800)", fontWeight: 700, marginBottom: 8 }}
            >
              <IconCheck style={{ width: 18, height: 18, color: "var(--teal)", flex: "none" }} />
              Benefits verified before you pay
            </div>
            <div
              className="cp-hours"
              style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--teal-800)", fontWeight: 700, marginBottom: 8 }}
            >
              <IconCheck style={{ width: 18, height: 18, color: "var(--teal)", flex: "none" }} />
              Flexible payment plans available
            </div>
            <a className="btn btn-coral mt-3" href="#book">
              Book an appointment
            </a>
          </Reveal>
          <Reveal className="col-lg-8 reveal-d1">
            {prices.map((row) => (
              <div className="price-row" key={row.name}>
                <div>
                  <div className="pr-name">{row.name}</div>
                  <div className="pr-desc">{row.desc}</div>
                </div>
                <div className="pr-dur">{row.duration}</div>
                <div className="pr-cost">{row.cost}</div>
              </div>
            ))}
            <p className="price-note mt-3">
              Prices shown are typical self-pay rates and may vary based on your plan of care. Co-pays and coverage
              depend on your individual insurance.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
