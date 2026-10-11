import { IconCheck, IconClock } from "../icons";
import { Reveal } from "../Reveal";

const conditions = [
  "Rotator cuff & shoulder pain",
  "ACL & knee reconstruction",
  "Sciatica & herniated discs",
  "Chronic low-back pain",
  "Plantar fasciitis",
  "Tennis & golfer's elbow",
  "Frozen shoulder",
  "Whiplash & neck strain",
  "Runner's knee & shin splints",
  "Achilles & ankle injuries",
  "Total knee & hip replacement",
  "Post-fracture stiffness",
];

export function Conditions() {
  return (
    <section className="section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <Reveal className="col-lg-7">
            <span className="eyebrow">Conditions we treat</span>
            <h2 className="section-title">If it limits how you move, we can help</h2>
            <p className="section-lead mb-4">
              From acute injuries to nagging chronic pain, our therapists treat a wide range of orthopedic and
              neuromuscular conditions.
            </p>
            <div className="cond-list">
              {conditions.map((condition) => (
                <div className="cond-item" key={condition}>
                  <span className="chk" aria-hidden="true">
                    <IconCheck strokeWidth={3} />
                  </span>
                  <span>{condition}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="col-lg-5 reveal-d1">
            <div className="cond-panel">
              <h3>Not sure if PT is right for you?</h3>
              <p>
                Book a complimentary 15-minute phone consult. Tell us what's going on and we'll tell you honestly whether
                physical therapy can help — no pressure, no obligation.
              </p>
              <div className="cp-hours">
                <IconClock /> Same-week appointments available
              </div>
              <div className="cp-hours">
                <IconCheck /> No physician referral required
              </div>
              <a className="btn btn-coral mt-4" href="#book">
                Book a free consult
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
