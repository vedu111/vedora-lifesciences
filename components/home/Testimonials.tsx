"use client";

import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { IconCheck, IconChevronLeft, IconChevronRight } from "../icons";
import { Reveal } from "../Reveal";

const testimonials = [
  {
    recovered: "ACL reconstruction · full return",
    quote:
      "Nine months after my knee surgery I ran a half marathon. Dr. Bennett mapped out every phase and never let me rush it or hold back. I trust my knee completely now.",
    name: "Jordan Ellis",
    meta: "Recreational runner",
    photo: "/img/patient-jordan.jpg",
  },
  {
    recovered: "Chronic back pain · pain-free daily",
    quote:
      "I'd lived with back pain for years and assumed it was permanent. Dr. Nguyen found the real cause in one visit. Six weeks later I'm gardening and sleeping through the night again.",
    name: "Diane Whitmore",
    meta: "Retired teacher",
    photo: "/img/patient-diane.jpg",
  },
  {
    recovered: "Rotator cuff · back overhead",
    quote:
      "A few dry-needling sessions with Dr. Okafor released a shoulder that two other clinics couldn't budge. The hands-on work here is genuinely a different level.",
    name: "Ray Coleman",
    meta: "Warehouse supervisor",
    photo: "/img/patient-ray.jpg",
  },
  {
    recovered: "Post-op knee replacement",
    quote:
      "The full hour of one-on-one time made all the difference after my knee replacement. Dr. Alvarez pushed me exactly the right amount. I'm back on the golf course a month ahead of schedule.",
    name: "Harold Pratt",
    meta: "Weekend golfer",
    photo: "/img/patient-jordan.jpg",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    function updatePerView() {
      setPerView(window.innerWidth >= 768 ? 2 : 1);
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);
  const dotCount = maxIndex + 1;

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const slideWidth = useMemo(() => 100 / perView, [perView]);

  function go(next: number) {
    setIndex(Math.max(0, Math.min(next, maxIndex)));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") go(index >= maxIndex ? 0 : index + 1);
    if (event.key === "ArrowLeft") go(index <= 0 ? maxIndex : index - 1);
  }

  return (
    <section className="section testimonials" id="stories">
      <div className="container">
        <Reveal className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div className="heading-wrap">
            <span className="eyebrow">Recovery stories</span>
            <h2 className="section-title mb-0">Real patients, real comebacks</h2>
          </div>
          <div className="tslider-nav">
            <button
              className="tbtn"
              type="button"
              aria-label="Previous testimonials"
              onClick={() => go(index <= 0 ? maxIndex : index - 1)}
            >
              <IconChevronLeft />
            </button>
            <button
              className="tbtn"
              type="button"
              aria-label="Next testimonials"
              onClick={() => go(index >= maxIndex ? 0 : index + 1)}
            >
              <IconChevronRight />
            </button>
          </div>
        </Reveal>

        <Reveal className="reveal-d1">
          <div
            className="tslider"
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
            onKeyDown={onKeyDown}
          >
            <div
              className="ttrack"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={(event) => {
                const dx = event.changedTouches[0].clientX - touchStart;
                if (Math.abs(dx) > 45) {
                  dx < 0 ? go(index >= maxIndex ? 0 : index + 1) : go(index <= 0 ? maxIndex : index - 1);
                }
              }}
            >
              {testimonials.map((item) => (
                <div className="tslide" key={item.name}>
                  <div className="tcard">
                    <div className="quote-mark" aria-hidden="true">
                      “
                    </div>
                    <span className="recovered">
                      <IconCheck strokeWidth={2.5} /> {item.recovered}
                    </span>
                    <div className="stars" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <blockquote>{item.quote}</blockquote>
                    <div className="who">
                      <img src={item.photo} width={54} height={54} loading="lazy" alt={`Patient ${item.name}`} />
                      <span>
                        <span className="nm">{item.name}</span>
                        <span className="mt">{item.meta}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tdots" aria-hidden="true">
              {Array.from({ length: dotCount }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  className={`tdot${dotIndex === index ? " active" : ""}`}
                  type="button"
                  aria-label={`Go to testimonial group ${dotIndex + 1}`}
                  onClick={() => go(dotIndex)}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
