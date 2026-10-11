"use client";

import { Brand } from "./Brand";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconPhone,
  IconPin,
  IconYouTube,
} from "./icons";
import { useHomeHref } from "./use-home-href";

const productLinks = [
  "Vitamins",
  "Minerals",
  "Multivitamins",
  "Omega-3",
  "Bone & joint health",
  "General wellness",
];

const companyLinks = [
  { id: "about", label: "About Us" },
  { id: "products", label: "Our products" },
  { id: "network", label: "Our network" },
  { id: "contact", label: "Contact us" },
];

export function SiteFooter() {
  const homeHref = useHomeHref();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer vd-footer">
      <style jsx>{`
        .vd-footer {
          background: #071f40;
          color: #a8c6e4;
          padding: 64px 0 0;
        }

        .vd-footer :global(.container) {
          max-width: 1360px;
        }

        .vd-footer :global(.footer-about) {
          max-width: 360px;
          margin: 22px 0 24px;
          color: #a8c6e4;
          font-size: 15px;
          line-height: 1.85;
        }

        .vd-footer :global(.footer-col h4) {
          margin: 0 0 24px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .vd-footer :global(.footer-col ul) {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vd-footer :global(.footer-col ul a),
        .vd-footer :global(.footer-contact-line a) {
          color: #a8c6e4;
          text-decoration: none;
          transition: color 180ms ease;
        }

        .vd-footer :global(.footer-col ul a:hover),
        .vd-footer :global(.footer-contact-line a:hover) {
          color: #ffffff;
        }

        .vd-footer :global(.footer-contact-line) {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 22px;
          color: #b7cde5;
          font-size: 15px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .vd-footer :global(.footer-contact-line svg) {
          width: 21px;
          height: 21px;
          flex-shrink: 0;
          margin-top: 3px;
          color: #27b8e5;
        }

        .vd-footer :global(.footer-social) {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .vd-footer :global(.footer-social a) {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          transition: background 180ms ease,
            transform 180ms ease;
        }

        .vd-footer :global(.footer-social a:hover) {
          transform: translateY(-2px);
          background: #0868c9;
        }

        .vd-footer :global(.footer-social svg) {
          width: 21px;
          height: 21px;
        }

        .vd-footer :global(.footer-bottom) {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          margin-top: 52px;
          padding: 24px 0;
          border-top: 1px solid rgba(185, 213, 242, 0.15);
          color: #80a4c9;
          font-size: 13px;
          line-height: 1.8;
        }

        .vd-footer :global(.footer-bottom a) {
          color: #c6d9ed;
          text-decoration: none;
        }

        .vd-footer :global(.footer-bottom a:hover) {
          color: #ffffff;
        }

        .vd-footer__tagline {
          margin: 0;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
        }

        .vd-footer__tagline span {
          color: #36c6a0;
        }

        .vd-footer__contact-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 991px) {
          .vd-footer {
            padding-top: 48px;
          }

          .vd-footer :global(.footer-about) {
            max-width: 480px;
          }

          .vd-footer :global(.footer-bottom) {
            margin-top: 32px;
          }
        }

        @media (max-width: 575px) {
          .vd-footer {
            padding-top: 38px;
          }

          .vd-footer :global(.footer-col h4) {
            margin-bottom: 17px;
            font-size: 12px;
          }

          .vd-footer :global(.footer-col ul) {
            gap: 13px;
            font-size: 13px;
          }

          .vd-footer :global(.footer-contact-line) {
            gap: 10px;
            font-size: 13px;
          }

          .vd-footer :global(.footer-bottom) {
            flex-direction: column;
            padding: 20px 0;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row g-4">
          {/* Brand and company overview */}
          <div className="col-lg-4 col-md-12">
            <Brand />

            <p className="footer-about">
              VEDORA LIFESCIENCES is building a trusted B2B healthcare
              distribution network, connecting manufacturers and authorised
              suppliers with pharmacies, healthcare retailers, wellness
              stores, and eligible institutions.
            </p>

            <p className="vd-footer__tagline">
              Connecting Healthcare, <span>Delivering Trust.</span>
            </p>

            <div className="footer-social mt-4">
              <a
                href={homeHref("contact")}
                aria-label="Contact VEDORA LIFESCIENCES"
              >
                <IconPhone />
              </a>

              <a
                href={homeHref("about")}
                aria-label="About VEDORA LIFESCIENCES"
              >
                <IconPin />
              </a>

              <a
                href={homeHref("products")}
                aria-label="Explore our products"
              >
                <IconLinkedIn />
              </a>

              <a
                href={homeHref("network")}
                aria-label="Explore our distribution network"
              >
                <IconYouTube />
              </a>
            </div>
          </div>

          {/* Product categories */}
          <div className="col-6 col-lg-2 footer-col">
            <h4>Products</h4>

            <ul>
              {productLinks.map((label) => (
                <li key={label}>
                  <a href={homeHref("products")}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company navigation */}
          <div className="col-6 col-lg-2 footer-col">
            <h4>Company</h4>

            <ul>
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <a href={homeHref(link.id)}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="col-lg-4 col-md-12 footer-col">
            <h4>Get in Touch</h4>

            <div className="footer-contact-line">
              <IconPin />

              <span>
                Navi Mumbai,
                <br />
                Maharashtra, India
              </span>
            </div>

            <div className="footer-contact-line">
              <IconPhone />

              <a
                className="vd-footer__contact-link"
                href="mailto:info@vedora.in"
              >
                info@vedora.in
              </a>
            </div>

            <div className="footer-contact-line">
              <IconPin />

              <a href={homeHref("contact")}>
                Business enquiries and distribution partnerships
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} VEDORA LIFESCIENCES. All rights reserved.
          </span>

          <span>
            Connecting Healthcare, Delivering Trust.
          </span>
        </div>
      </div>
    </footer>
  );
}
