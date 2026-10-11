"use client";

import { useState } from "react";
import {
  IconBolt,
  IconCheck,
  IconHand,
  IconHeart,
  IconNeedle,
  IconPerson,
  IconTrend,
} from "../icons";
import { Reveal } from "../Reveal";

const filters = [
  { id: "all", label: "All treatments" },
  { id: "sports", label: "Sports & performance" },
  { id: "rehab", label: "Post-surgery" },
  { id: "pain", label: "Pain & spine" },
  { id: "handson", label: "Hands-on therapy" },
];

const treatments = [
  {
    id: "sports",
    cat: "sports",
    delay: "",
    tag: "Sports injuries",
    img: "/img/treat-sports.jpg",
    alt: "Physical therapist taping an athlete's injured ankle in a clinic",
    icon: IconBolt,
    title: "Sports Injury Rehab",
    text: "Sprains, strains, ligament tears and overuse injuries — assessed, taped and progressively rehabbed so you get back to your sport safely, not just quickly.",
    points: ["Acute injury assessment & taping", "Progressive strength & loading plan", "Return-to-sport testing before clearance"],
    durationLabel: "Session",
    duration: "45 min",
    price: "$110",
  },
  {
    id: "post-op",
    cat: "rehab",
    delay: " reveal-d1",
    tag: "Post-surgery",
    img: "/img/treat-post-op.jpg",
    alt: "Therapist guiding a post-surgery patient through knee bending exercises on a treatment table",
    icon: IconHeart,
    title: "Post-Surgery Rehab",
    text: "Surgeon-aligned protocols for ACL, rotator cuff, joint replacement and spine surgery — rebuilding range of motion, strength and trust in your body, phase by phase.",
    points: ["Protocol coordinated with your surgeon", "Guided range-of-motion & scar care", "Staged strength & function milestones"],
    durationLabel: "Session",
    duration: "45 min",
    price: "$110",
  },
  {
    id: "spine",
    cat: "pain",
    delay: " reveal-d2",
    tag: "Pain & spine",
    img: "/img/treat-spine.jpg",
    alt: "Physical therapist assessing a patient's lower back and spine posture",
    icon: IconPerson,
    title: "Back & Neck Pain",
    text: "Sciatica, herniated discs, whiplash and stubborn desk-posture pain. We calm the flare-up first, then fix the movement mechanics that keep bringing it back.",
    points: ["Root-cause movement screen", "Hands-on spinal mobilization", "Posture & ergonomics coaching"],
    durationLabel: "Session",
    duration: "45 min",
    price: "$110",
  },
  {
    id: "manual",
    cat: "handson",
    delay: "",
    tag: "Hands-on therapy",
    img: "/img/treat-manual.jpg",
    alt: "Close-up of a therapist performing hands-on soft-tissue massage on a patient's shoulder",
    icon: IconHand,
    title: "Manual Therapy",
    text: "Skilled hands-on joint mobilization, soft-tissue release and myofascial work that restores the motion rest and medication alone simply can't reach.",
    points: ["Joint mobilization & manipulation", "Soft-tissue & myofascial release", "Paired with active corrective exercise"],
    durationLabel: "Session",
    duration: "45 min",
    price: "$110",
  },
  {
    id: "needling",
    cat: "handson",
    delay: " reveal-d1",
    tag: "Hands-on therapy",
    img: "/img/treat-needling.jpg",
    alt: "Therapist applying a thin dry-needling needle to a patient's calf muscle",
    icon: IconNeedle,
    title: "Dry Needling",
    text: "Targeted trigger-point needling that releases deep muscle knots, reduces spasm and switches off referred pain — often within a session or two.",
    points: ["Sterile, single-use filament needles", "Certified (CMTPT) therapists only", "Add on to any treatment session"],
    durationLabel: "Add-on",
    duration: "20 min",
    price: "$45",
  },
  {
    id: "performance",
    cat: "sports",
    delay: " reveal-d2",
    tag: "Sports & performance",
    img: "/img/treat-performance.jpg",
    alt: "Athlete performing a single-leg strength test while a therapist observes their form",
    icon: IconTrend,
    title: "Sports Performance",
    text: "Movement screens, strength testing and return-to-sport programming for athletes who want to come back faster — and finish the season stronger than they started.",
    points: ["Full movement & asymmetry screen", "Objective strength & power testing", "Personalized performance program"],
    durationLabel: "Screen",
    duration: "75 min",
    price: "$175",
  },
];

export function Treatments() {
  const [filter, setFilter] = useState("all");
  const visible = treatments.filter((item) => filter === "all" || item.cat === filter);

  return (
    <section className="section">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div className="filter-bar" role="group" aria-label="Filter treatments by type">
            {filters.map((item) => (
              <button
                key={item.id}
                className={`filter-btn${filter === item.id ? " active" : ""}`}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="price-note mb-0">Same-week appointments · Most insurance accepted</p>
        </div>

        <div className="row g-4">
          {visible.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <Reveal key={treatment.id} className={`col-md-6 col-lg-4${treatment.delay}`} id={treatment.id}>
                <div className="treat-card">
                  <div className="treat-media">
                    <img src={treatment.img} width={640} height={400} loading="lazy" alt={treatment.alt} />
                    <span className="tag">{treatment.tag}</span>
                  </div>
                  <div className="treat-ico" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="treat-body">
                    <h3>{treatment.title}</h3>
                    <p>{treatment.text}</p>
                    <ul className="treat-list">
                      {treatment.points.map((point) => (
                        <li key={point}>
                          <IconCheck strokeWidth={3} /> {point}
                        </li>
                      ))}
                    </ul>
                    <div className="treat-meta">
                      <div className="m">
                        <div className="k">{treatment.durationLabel}</div>
                        <div className="v">{treatment.duration}</div>
                      </div>
                      <div className="m">
                        <div className="k">From</div>
                        <div className="v price">{treatment.price}</div>
                      </div>
                    </div>
                    <a className="btn btn-teal" href="#book">
                      Book this treatment
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
