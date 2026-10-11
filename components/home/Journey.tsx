import { IconClipboard, IconPinHeart, IconSearch, IconTrend } from "../icons";
import { Reveal } from "../Reveal";

const steps = [
  {
    num: "1",
    icon: IconSearch,
    title: "Assess",
    delay: "",
    text: "A full 60-minute movement evaluation to find the true source of your pain — not just where it hurts.",
  },
  {
    num: "2",
    icon: IconClipboard,
    title: "Plan",
    delay: " reveal-d1",
    text: "Your therapist builds a personalized care plan with clear goals, timelines and milestones you can track.",
  },
  {
    num: "3",
    icon: IconPinHeart,
    title: "Treat",
    delay: " reveal-d2",
    text: "Hands-on therapy plus guided exercise every session, adjusted to how your body responds week to week.",
  },
  {
    num: "4",
    icon: IconTrend,
    title: "Thrive",
    delay: " reveal-d3",
    text: "A home program and prevention strategy so the pain stays gone and you come back stronger than before.",
  },
];

export function Journey() {
  return (
    <section className="section journey" id="journey">
      <div className="container">
        <Reveal className="heading-wrap center">
          <span className="eyebrow center">Your recovery journey</span>
          <h2 className="section-title">Four steps from pain to performance</h2>
          <p className="section-lead">A clear, measurable path — so you always know where you are and what comes next.</p>
        </Reveal>

        <div className="row g-4 mt-2 journey-row">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} className={`col-md-6 col-lg-3${step.delay}`}>
                <div className="jstep">
                  <div className="num">{step.num}</div>
                  <span className="jico" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
