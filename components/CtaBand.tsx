import { Reveal } from "./Reveal";

type CtaAction = {
  href: string;
  label: string;
  variant: "coral" | "ghost";
};

type CtaBandProps = {
  title: string;
  text: string;
  actions: CtaAction[];
  sectionClassName?: string;
};

export function CtaBand({ title, text, actions, sectionClassName = "section" }: CtaBandProps) {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <Reveal className="cta-band">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="col-lg-4">
              <div className="cta-actions justify-content-lg-end">
                {actions.map((action) => (
                  <a
                    key={action.label}
                    className={`btn btn-lg ${action.variant === "coral" ? "btn-coral" : "btn-ghost-light"}`}
                    href={action.href}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
