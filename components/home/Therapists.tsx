import { Reveal } from "../Reveal";

const therapists = [
  {
    name: "Dr. Marcus Alvarez",
    cred: "PT · DPT · OCS",
    role: "Clinic Director · Orthopedics",
    photo: "/img/therapist-alvarez.jpg",
    delay: "",
    text: "15 years rebuilding knees, shoulders and post-op patients back to the field and the trail.",
    tags: ["Sports", "Post-op", "Knee & shoulder"],
  },
  {
    name: "Dr. Elena Bennett",
    cred: "PT · DPT · SCS",
    role: "Sports Rehab Specialist",
    photo: "/img/therapist-bennett.jpg",
    delay: " reveal-d1",
    text: "Board-certified sports clinical specialist and former collegiate track coach.",
    tags: ["Running", "ACL rehab", "Return-to-sport"],
  },
  {
    name: "Dr. David Okafor",
    cred: "PT · DPT · CMTPT",
    role: "Manual Therapy & Dry Needling",
    photo: "/img/therapist-okafor.jpg",
    delay: " reveal-d2",
    text: "Certified in trigger-point dry needling and hands-on spinal mobilization.",
    tags: ["Manual therapy", "Dry needling", "Neck"],
  },
  {
    name: "Dr. Mai Nguyen",
    cred: "PT · DPT · MTC",
    role: "Spine & Chronic Pain",
    photo: "/img/therapist-nguyen.jpg",
    delay: " reveal-d3",
    text: "Manual therapy certified, with a focus on persistent back pain and mobility.",
    tags: ["Spine", "Sciatica", "Chronic pain"],
  },
];

export function Therapists() {
  return (
    <section className="section" id="team">
      <div className="container">
        <Reveal className="heading-wrap center">
          <span className="eyebrow center">Meet the team</span>
          <h2 className="section-title">The doctors in your corner</h2>
          <p className="section-lead">
            Experienced, board-certified physical therapists who treat you like a person — and an athlete of your own
            life.
          </p>
        </Reveal>

        <div className="row g-4 mt-2">
          {therapists.map((therapist) => (
            <Reveal key={therapist.name} className={`col-sm-6 col-lg-3${therapist.delay}`}>
              <div className="tp-card">
                <div className="tp-photo">
                  <img src={therapist.photo} width={320} height={320} loading="lazy" alt={`Portrait of ${therapist.name}, physical therapist`} />
                  <span className="tp-cred">{therapist.cred}</span>
                </div>
                <div className="tp-body">
                  <h3>{therapist.name}</h3>
                  <div className="tp-role">{therapist.role}</div>
                  <p>{therapist.text}</p>
                  <div className="tp-tags">
                    {therapist.tags.map((tag) => (
                      <span className="tp-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
