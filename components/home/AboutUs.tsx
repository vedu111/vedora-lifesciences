"use client";

import React from "react";
import {
  Building2,
  ShieldCheck,
  Truck,
  TrendingUp,
  Target,
  Eye,
  Heart,
  Handshake,
} from "lucide-react";

const companyHighlights = [
  {
    icon: Building2,
    value: "B2B",
    label: "Healthcare Distribution",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    value: "Quality",
    label: "Focused Sourcing",
    color: "green",
  },
  {
    icon: Truck,
    value: "Reliable",
    label: "Supply Operations",
    color: "blue",
  },
  {
    icon: TrendingUp,
    value: "Growth",
    label: "Long-Term Partnerships",
    color: "green",
  },
];

const companyPrinciples = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To connect quality healthcare products with those who need them through trusted partnerships and dependable distribution.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a trusted B2B healthcare distribution network known for reliability, quality, and professional service.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, quality, transparency, and lasting partnerships guide the way we do business.",
  },
  {
    icon: Handshake,
    title: "Our Commitment",
    description:
      "To support healthcare businesses with reliable sourcing, efficient supply, and responsive customer service.",
  },
];

export default function AboutUs() {
  return (
    <section className="vedora-about" id="about">
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
                    <item.icon size={22} strokeWidth={1.75} />
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
                <div className="va-principle-icon"><item.icon size={24} strokeWidth={1.75} /></div>
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
