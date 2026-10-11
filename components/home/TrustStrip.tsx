import { CountUp } from "../CountUp";
import { Reveal } from "../Reveal";

const stats = [
  { value: 12000, label: "Patients treated", plus: true },
  { value: 8, label: "Licensed DPT therapists" },
  { value: 15, label: "Years in practice" },
  { value: 4.9, decimals: 1, label: "Average patient rating", star: true },
];

export function TrustStrip() {
  return (
    <section className="trust-strip section-sm" aria-label="Clinic highlights">
      <div className="container">
        <div className="row g-3 justify-content-center">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className={`col-6 col-md-3 trust-item${index ? ` reveal-d${index}` : ""}`}>
              <div className="t-num">
                <CountUp value={stat.value} decimals={stat.decimals} />
                {stat.plus ? <span className="plus">+</span> : null}
                {stat.star ? <span className="star">★</span> : null}
              </div>
              <div className="t-lbl">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
