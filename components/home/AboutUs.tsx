"use client";

import React from "react";

const companyHighlights = [
  {
    icon: "▤",
    value: "B2B",
    label: "Healthcare Distribution",
    color: "blue",
  },
  {
    icon: "♧",
    value: "Quality",
    label: "Focused Sourcing",
    color: "green",
  },
  {
    icon: "◎",
    value: "Reliable",
    label: "Supply Operations",
    color: "blue",
  },
  {
    icon: "↗",
    value: "Growth",
    label: "Long-Term Partnerships",
    color: "green",
  },
];

const companyPrinciples = [
  {
    icon: "◇",
    title: "Our Mission",
    description:
      "To connect quality healthcare products with those who need them through trusted partnerships and dependable distribution.",
  },
  {
    icon: "◎",
    title: "Our Vision",
    description:
      "To build a trusted B2B healthcare distribution network known for reliability, quality, and professional service.",
  },
  {
    icon: "♡",
    title: "Our Values",
    description:
      "Integrity, quality, transparency, and lasting partnerships guide the way we do business.",
  },
  {
    icon: "↗",
    title: "Our Commitment",
    description:
      "To support healthcare businesses with reliable sourcing, efficient supply, and responsive customer service.",
  },
];

export default function AboutUs() {
  return (
    <section className="vedora-about" id="about">
      <style jsx>{`
        .vedora-about {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 76px 0 0;
          color: #102345;
          background:
            radial-gradient(
              circle at 94% 8%,
              rgba(104, 226, 193, 0.13),
              transparent 25%
            ),
            linear-gradient(135deg, #f2f8ff 0%, #ffffff 65%);
          font-family: inherit;
        }

        .vedora-about *,
        .vedora-about *::before,
        .vedora-about *::after {
          box-sizing: border-box;
        }

        .va-container {
          width: min(1320px, calc(100% - 64px));
          margin: 0 auto;
        }

        .va-main {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
          align-items: center;
          gap: 48px;
        }

        .va-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
          color: #0867cf;
          font-size: 14px;
          font-weight: 750;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .va-eyebrow::before {
          width: 44px;
          height: 3px;
          flex: 0 0 44px;
          background: linear-gradient(90deg, #0871df, #04b99b);
          content: "";
        }

        .va-heading {
          max-width: 690px;
          margin: 0 0 22px;
          color: #0b1e3e;
          font-size: clamp(36px, 3.6vw, 57px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1.8px;
        }

        .va-heading span {
          color: #0870d8;
          background: linear-gradient(90deg, #0870d8, #08a99f);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .va-description {
          max-width: 650px;
          margin: 0;
          color: #536987;
          font-size: 17px;
          line-height: 1.85;
        }

        .va-highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          margin-top: 30px;
          overflow: hidden;
          border: 1px solid #d6e7fb;
          border-radius: 19px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 28px rgba(24, 70, 120, 0.04);
        }

        .va-highlight {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          padding: 20px;
        }

        .va-highlight:nth-child(odd) {
          border-right: 1px solid #e0ebf8;
        }

        .va-highlight:nth-child(-n + 2) {
          border-bottom: 1px solid #e0ebf8;
        }

        .va-icon {
          display: flex;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          font-size: 27px;
          font-weight: 700;
        }

        .va-icon.blue {
          color: #0870d8;
          background: #e5f2ff;
        }

        .va-icon.green {
          color: #00a982;
          background: #e1f8f0;
        }

        .va-highlight-value {
          margin: 0 0 5px;
          color: #102345;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.25;
        }

        .va-highlight-label {
          margin: 0;
          color: #6b7f9d;
          font-size: 13px;
          line-height: 1.5;
        }

        .va-visual {
          position: relative;
          min-width: 0;
        }

        .va-image-frame {
          position: relative;
          overflow: hidden;
          aspect-ratio: 1.13 / 1;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 30px;
          background: #e7f4ff;
          box-shadow: 0 24px 60px rgba(19, 56, 94, 0.14);
        }

        .va-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .va-image-note {
          position: absolute;
          right: 16px;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px 17px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 8px 28px rgba(10, 40, 80, 0.12);
        }

        .va-note-icon {
          display: flex;
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: #0870d8;
          background: #e6f3ff;
          font-size: 23px;
        }

        .va-note-title {
          margin: 0 0 3px;
          color: #102345;
          font-size: 15px;
          font-weight: 750;
        }

        .va-note-text {
          margin: 0;
          color: #667c99;
          font-size: 12px;
          line-height: 1.5;
        }

        .va-principles {
          margin-top: 56px;
          padding: 35px 0;
          border-top: 1px solid #e1ecf7;
          background: rgba(255, 255, 255, 0.7);
        }

        .va-principles-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
        }

        .va-principle {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 12px 22px;
          min-width: 0;
        }

        .va-principle:first-child {
          padding-left: 0;
        }

        .va-principle + .va-principle {
          border-left: 1px solid #dce8f7;
        }

        .va-principle-icon {
          display: flex;
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #0870d8;
          background: #e5f2ff;
          font-size: 28px;
        }

        .va-principle:nth-child(even) .va-principle-icon {
          color: #00a982;
          background: #e2f8f0;
        }

        .va-principle-title {
          margin: 5px 0 8px;
          color: #102345;
          font-size: 16px;
          font-weight: 800;
        }

        .va-principle-description {
          margin: 0;
          color: #6a7f9c;
          font-size: 13px;
          line-height: 1.75;
        }

        @media (min-width: 1500px) {
          .va-container {
            width: min(1400px, calc(100% - 100px));
          }
        }

        @media (max-width: 1000px) {
          .vedora-about {
            padding-top: 56px;
          }

          .va-container {
            width: calc(100% - 44px);
          }

          .va-main {
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
            gap: 28px;
          }

          .va-heading {
            font-size: clamp(32px, 4.4vw, 45px);
            letter-spacing: -1px;
          }

          .va-description {
            font-size: 15px;
          }

          .va-highlight {
            gap: 10px;
            padding: 15px 12px;
          }

          .va-icon {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
            font-size: 23px;
          }

          .va-highlight-value {
            font-size: 16px;
          }

          .va-principles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 22px;
          }

          .va-principle {
            padding: 12px 16px;
          }

          .va-principle:nth-child(odd) {
            padding-left: 0;
            border-left: 0;
          }

          .va-principle:nth-child(even) {
            border-left: 1px solid #dce8f7;
          }
        }

        @media (max-width: 680px) {
          .vedora-about {
            padding-top: 42px;
          }

          .va-container {
            width: calc(100% - 36px);
          }

          .va-main {
            grid-template-columns: minmax(0, 1fr);
            gap: 30px;
          }

          .va-eyebrow {
            gap: 10px;
            margin-bottom: 15px;
            font-size: 11px;
            letter-spacing: 2px;
          }

          .va-eyebrow::before {
            width: 30px;
            flex-basis: 30px;
          }

          .va-heading {
            margin-bottom: 16px;
            font-size: clamp(34px, 9vw, 46px);
            line-height: 1.13;
          }

          .va-description {
            font-size: 15px;
            line-height: 1.8;
          }

          .va-highlights {
            margin-top: 22px;
          }

          .va-highlight {
            gap: 10px;
            padding: 14px 10px;
          }

          .va-icon {
            width: 35px;
            height: 35px;
            flex-basis: 35px;
            border-radius: 11px;
            font-size: 20px;
          }

          .va-highlight-value {
            font-size: 14px;
          }

          .va-highlight-label {
            font-size: 11px;
          }

          .va-image-frame {
            aspect-ratio: 1 / 0.86;
            border-radius: 22px;
          }

          .va-image-note {
            right: 10px;
            bottom: 10px;
            left: 10px;
            padding: 12px;
          }

          .va-principles {
            margin-top: 36px;
            padding: 25px 0;
          }

          .va-principles-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
          }

          .va-principle,
          .va-principle:first-child,
          .va-principle:nth-child(odd),
          .va-principle:nth-child(even) {
            padding: 18px 0;
            border-left: 0;
          }

          .va-principle + .va-principle {
            border-top: 1px solid #e1ecf7;
          }
        }
      `}</style>

      <div className="va-container">
        <div className="va-main">
          <div className="va-copy">
            <div className="va-eyebrow">About Us</div>

            <h2 className="va-heading">
              Your Trusted Partner in{" "}
              <span>Healthcare Distribution</span>
            </h2>

            <p className="va-description">
              VEDORA LIFESCIENCES is an emerging B2B healthcare
              distribution business focused on nutraceuticals and
              healthcare products. We aim to connect manufacturers
              and authorised suppliers with pharmacies, healthcare
              retailers, wellness stores, and eligible institutions
              through reliable sourcing, competitive procurement,
              efficient inventory management, and professional
              customer service.
            </p>

            <div className="va-highlights">
              {companyHighlights.map((item) => (
                <div className="va-highlight" key={item.label}>
                  <div className={`va-icon ${item.color}`}>
                    {item.icon}
                  </div>

                  <div>
                    <p className="va-highlight-value">
                      {item.value}
                    </p>
                    <p className="va-highlight-label">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="va-visual">
            <div className="va-image-frame">
              <img
                className="va-image"
                src="/img/about-us.png"
                alt="Healthcare distribution, supplement products, and professional supply operations"
                loading="lazy"
              />
            </div>

            
          </div>
        </div>
      </div>

      <div className="va-principles">
        <div className="va-container">
          <div className="va-principles-grid">
            {companyPrinciples.map((item) => (
              <article className="va-principle" key={item.title}>
                <div className="va-principle-icon">{item.icon}</div>
                <div>
                  <h3 className="va-principle-title">{item.title}</h3>
                  <p className="va-principle-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
