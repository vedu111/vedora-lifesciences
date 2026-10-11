"use client";

export function Hero() {
  return (
    <section className="vedora-hero" id="home">
      <div className="vedora-hero-container">
        <div className="vedora-hero-grid">

          {/* LEFT CONTENT */}
          <div className="vedora-hero-content">
            <div className="vedora-hero-pill">
              <span className="vedora-hero-pill-line" />
              <span>B2B HEALTHCARE DISTRIBUTION</span>
            </div>

            <h1 className="vedora-hero-title">
              Connecting
              <br />
              Healthcare,
              <br />
              <span className="vedora-hero-accent">
                Delivering Trust.
              </span>
            </h1>

            <p className="vedora-hero-description">
              A reliable B2B distribution partner for nutraceuticals and
              healthcare products, serving pharmacies, healthcare retailers,
              wellness stores, and eligible institutions.
            </p>

            <div className="vedora-hero-actions">
              <a
                className="vedora-hero-btn vedora-hero-btn-primary"
                href="#products"
              >
                Our Products
                <span aria-hidden="true">→</span>
              </a>

              <a
                className="vedora-hero-btn vedora-hero-btn-outline"
                href="#contact"
              >
                Partner With Us
              </a>
            </div>

            {/* BUSINESS BENEFITS */}
            <div className="vedora-hero-benefits">
              <div className="vedora-hero-benefit">
                <span className="vedora-hero-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <div>
                  <strong>Quality Sourcing</strong>
                  <small>From authorised suppliers</small>
                </div>
              </div>

              <div className="vedora-hero-benefit">
                <span className="vedora-hero-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </span>
                <div>
                  <strong>Efficient Distribution</strong>
                  <small>Reliable supply operations</small>
                </div>
              </div>

              <div className="vedora-hero-benefit">
                <span className="vedora-hero-benefit-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <div>
                  <strong>Trusted B2B Partner</strong>
                  <small>Growing together</small>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="vedora-hero-visual">
            <div className="vedora-hero-image-frame">
              <img
                className="vedora-hero-image"
                src="/img/hero-bg-backup.png"
                width={1208}
                height={756}
                fetchPriority="high"
                alt="Nutraceutical supplements, botanical leaves, capsules and a healthcare distribution warehouse"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}