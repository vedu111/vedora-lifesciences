"use client";

export function Hero() {
  return (
    <>
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
                  src="/img/hero-bg.png"
                  width={1648}
                  height={1104}
                  fetchPriority="high"
                  alt="Nutraceutical supplements, botanical leaves, capsules and a healthcare distribution warehouse"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* All selectors are unique to the Vedora hero component. */

        .vedora-hero,
        .vedora-hero * {
          box-sizing: border-box;
        }

        .vedora-hero {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          padding: 54px 0 64px;
          background:
            radial-gradient(
              circle at 96% 12%,
              rgba(34, 197, 158, 0.12),
              transparent 310px
            ),
            #f0f8ff;
          font-family: "Mulish", system-ui, sans-serif;
          color: #071a36;
          line-height: 1.6;
        }

        .vedora-hero-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1512px;
          margin-inline: auto;
          padding-inline: 34px;
        }

        .vedora-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(36px, 4.2vw, 66px);
          width: 100%;
        }

        /* LEFT CONTENT */

        .vedora-hero-content {
          min-width: 0;
          width: 100%;
          padding: 0;
        }

        .vedora-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          max-width: 100%;
          margin: 0 0 27px;
          padding: 10px 18px 10px 12px;
          border: 1px solid #d5e6f7;
          border-radius: 999px;
          background: #ffffff;
          box-shadow: 0 4px 16px rgba(28, 78, 125, 0.05);
          color: #0066cc;
          font-family: "Mulish", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.5;
          letter-spacing: 2px;
          white-space: normal;
        }

        .vedora-hero-pill-line {
          display: block;
          width: 48px;
          height: 4px;
          flex: 0 0 48px;
          background: linear-gradient(90deg, #0874d0, #00b99b);
        }

        .vedora-hero-title {
          margin: 0 0 25px;
          padding: 0;
          color: #0b1e3d;
          font-family: "Hanken Grotesk", system-ui, sans-serif;
          font-size: clamp(44px, 4.15vw, 74px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -2.8px;
        }

        .vedora-hero-accent {
          color: #0868cf;
          font: inherit;
          letter-spacing: inherit;
          white-space: normal;
        }

        .vedora-hero-description {
          max-width: 650px;
          margin: 0 0 30px;
          padding: 0;
          color: #526987;
          font-family: "Mulish", system-ui, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.85;
        }

        /* BUTTONS */

        .vedora-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin: 0 0 38px;
          padding: 0;
        }

        .vedora-hero .vedora-hero-btn {
          display: inline-flex;
          min-height: 58px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 0;
          padding: 14px 26px;
          border: 1.5px solid transparent;
          border-radius: 15px;
          font-family: "Hanken Grotesk", system-ui, sans-serif;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.4;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition:
            background-color 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .vedora-hero .vedora-hero-btn-primary {
          color: #ffffff;
          background: #0868ca;
          border-color: #0868ca;
          box-shadow: 0 10px 24px rgba(0, 104, 202, 0.14);
        }

        .vedora-hero .vedora-hero-btn-primary:hover {
          color: #ffffff;
          background: #0755a8;
          border-color: #0755a8;
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 104, 202, 0.2);
        }

        .vedora-hero .vedora-hero-btn-outline {
          color: #0868ca;
          background: rgba(255, 255, 255, 0.8);
          border-color: #3487ff;
        }

        .vedora-hero .vedora-hero-btn-outline:hover {
          color: #0755a8;
          background: #ffffff;
          border-color: #0755a8;
          transform: translateY(-2px);
        }

        .vedora-hero .vedora-hero-btn:focus-visible {
          outline: 3px solid rgba(0, 102, 204, 0.35);
          outline-offset: 3px;
        }

        /* BENEFITS */

        .vedora-hero-benefits {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
          gap: 22px 20px;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .vedora-hero-benefit {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 12px;
          margin: 0;
          padding: 0;
        }

        .vedora-hero-benefit-icon {
          display: flex;
          width: 50px;
          height: 50px;
          flex: 0 0 50px;
          align-items: center;
          justify-content: center;
          border: 1px solid #e0efff;
          border-radius: 50%;
          background: #ffffff;
          color: #0870d2;
        }

        .vedora-hero-benefit-icon svg {
          display: block;
          width: 24px;
          height: 24px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .vedora-hero-benefit strong {
          display: block;
          margin: 0 0 4px;
          color: #102444;
          font-family: "Hanken Grotesk", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.45;
        }

        .vedora-hero-benefit small {
          display: block;
          margin: 0;
          color: #6a7f9b;
          font-family: "Mulish", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
        }

        /* IMAGE PANEL */

        .vedora-hero-visual {
          min-width: 0;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .vedora-hero-image-frame {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          border: 0;
          border-radius: 25px;
          background: #e5f4ff;
          box-shadow: 0 28px 65px rgba(28, 64, 103, 0.13);
        }

        .vedora-hero .vedora-hero-image {
          display: block;
          width: 100%;
          max-width: none;
          height: auto;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          aspect-ratio: 1648 / 1104;
          object-fit: contain;
          object-position: center;
          box-shadow: none;
        }

        /* TABLET */

        @media (max-width: 1199px) {
          .vedora-hero-container {
            padding-inline: 28px;
          }

          .vedora-hero-grid {
            gap: 30px;
          }

          .vedora-hero-title {
            font-size: clamp(42px, 4.5vw, 58px);
            letter-spacing: -2px;
          }

          .vedora-hero-pill {
            gap: 10px;
            font-size: 11px;
            letter-spacing: 1.2px;
          }

          .vedora-hero-pill-line {
            width: 32px;
            flex-basis: 32px;
          }

          .vedora-hero-description {
            font-size: 16px;
          }

          .vedora-hero-benefits {
            gap: 18px 12px;
          }

          .vedora-hero-benefit-icon {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }

          .vedora-hero-benefit strong {
            font-size: 12px;
          }

          .vedora-hero-benefit small {
            font-size: 11px;
          }
        }

        /* MOBILE NAVIGATION WIDTH / TABLET LAYOUT */

        @media (max-width: 991.98px) {
          .vedora-hero {
            padding: 44px 0 48px;
          }

          .vedora-hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 36px;
          }

          .vedora-hero-content {
            max-width: 760px;
          }

          .vedora-hero-title {
            font-size: clamp(44px, 7vw, 66px);
          }

          .vedora-hero-description {
            max-width: 700px;
            font-size: 17px;
          }

          .vedora-hero-visual {
            max-width: 760px;
          }

          .vedora-hero-benefits {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* MOBILE */

        @media (max-width: 575.98px) {
          .vedora-hero {
            padding: 32px 0;
          }

          .vedora-hero-container {
            padding-inline: 18px;
          }

          .vedora-hero-grid {
            gap: 28px;
          }

          .vedora-hero-pill {
            gap: 9px;
            margin-bottom: 22px;
            padding: 9px 12px 9px 9px;
            font-size: 10px;
            letter-spacing: 0.8px;
          }

          .vedora-hero-pill-line {
            width: 24px;
            height: 3px;
            flex-basis: 24px;
          }

          .vedora-hero-title {
            margin-bottom: 18px;
            font-size: clamp(37px, 10vw, 48px);
            line-height: 1.1;
            letter-spacing: -1.8px;
          }

          .vedora-hero-description {
            margin-bottom: 24px;
            font-size: 15px;
            line-height: 1.8;
          }

          .vedora-hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-bottom: 28px;
          }

          .vedora-hero .vedora-hero-btn {
            width: 100%;
            min-height: 54px;
            padding: 13px 18px;
            border-radius: 12px;
          }

          .vedora-hero-benefits {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }

          .vedora-hero-benefit strong {
            font-size: 13px;
          }

          .vedora-hero-benefit small {
            font-size: 12px;
          }

          .vedora-hero-image-frame {
            border-radius: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vedora-hero .vedora-hero-btn {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}