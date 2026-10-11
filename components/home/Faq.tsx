"use client";

import { useState } from "react";
import { clinic } from "../../lib/clinic";
import { IconPhone } from "../icons";
import { Reveal } from "../Reveal";

const faqs = [
  {
    id: "q1",
    question: "Do I need a doctor's referral to start physical therapy?",
    answer:
      "No. Every state allows some form of direct access to physical therapy, so in most cases you can book an evaluation and begin treatment without a physician referral. If your specific insurance plan requires one for reimbursement, our front desk will let you know when we verify your benefits.",
  },
  {
    id: "q2",
    question: "What should I bring to my first appointment?",
    answer:
      "Bring your photo ID, insurance card, and any relevant imaging or surgical notes if you have them. Wear comfortable clothing you can move in — athletic wear or anything that lets us access the area we're treating. Plan to arrive 10 minutes early to complete your intake paperwork.",
  },
  {
    id: "q3",
    question: "How long is each session, and how many will I need?",
    answer:
      "Your initial evaluation runs a full 60 minutes and follow-up treatments are 45 minutes, always one-on-one with your therapist. Most patients see meaningful progress within 6 to 12 visits, but your therapist will give you an honest, personalized estimate after the first evaluation.",
  },
  {
    id: "q4",
    question: "Does dry needling hurt, and is it safe?",
    answer:
      "Dry needling uses a very thin filament needle and most people feel only a brief cramp or twitch as the trigger point releases. It's performed by our certified therapists using sterile, single-use needles. Some mild soreness for a day afterward is normal and typically fades quickly.",
  },
  {
    id: "q5",
    question: "Will I see the same therapist every visit?",
    answer:
      "Yes. Continuity of care is central to how we work, so you keep the same doctor of physical therapy from your first evaluation through discharge. That consistency means faster progress and a therapist who truly knows your history and goals.",
  },
  {
    id: "q6",
    question: "Can you treat me after surgery?",
    answer:
      "Absolutely. Post-surgical rehabilitation is one of our specialties. We follow your surgeon's protocol closely and coordinate directly with their office when needed, guiding you safely through each phase of recovery for ACL, rotator cuff, joint replacement and spinal procedures.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section bg-mist" id="faq">
      <div className="container">
        <div className="row g-5">
          <Reveal className="col-lg-5">
            <span className="eyebrow">Good to know</span>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-lead">
              Everything you need before your first appointment. Still have a question? <a href="#book">Reach out</a> —
              we're happy to help.
            </p>
            <a className="btn btn-outline-teal mt-3" href={`tel:${clinic.phoneTel}`}>
              <IconPhone />
              Call {clinic.phoneDisplay}
            </a>
          </Reveal>
          <Reveal className="col-lg-7 reveal-d1">
            <div className="accordion faq-accordion">
              {faqs.map((faq) => {
                const open = openId === faq.id;
                return (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button${open ? "" : " collapsed"}`}
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? null : faq.id)}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div className={`accordion-collapse collapse${open ? " show" : ""}`}>
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
