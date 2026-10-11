"use client";

import { clinic } from "../lib/clinic";
import { Brand } from "./Brand";
import { IconClock, IconFacebook, IconInstagram, IconLinkedIn, IconPhone, IconPin, IconYouTube } from "./icons";
import { useHomeHref } from "./use-home-href";

const serviceLinks = [
  { href: "/services#sports", label: "Sports injuries" },
  { href: "/services#post-op", label: "Post-surgery rehab" },
  { href: "/services#spine", label: "Back & neck pain" },
  { href: "/services#manual", label: "Manual therapy" },
  { href: "/services#needling", label: "Dry needling" },
];

export function SiteFooter() {
  const homeHref = useHomeHref();
  const year = new Date().getFullYear();

  const clinicLinks = [
    { href: homeHref("team"), label: "Our therapists" },
    { href: homeHref("journey"), label: "How it works" },
    { href: homeHref("stories"), label: "Patient stories" },
    { href: homeHref("faq"), label: "FAQ" },
    { href: "#book", label: "Book online" },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Brand />
            <p className="footer-about">
              Doctor-led physical therapy and physiotherapy helping our community move without pain — one honest,
              hands-on session at a time.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Restore on Facebook">
                <IconFacebook />
              </a>
              <a href="#" aria-label="Restore on Instagram">
                <IconInstagram />
              </a>
              <a href="#" aria-label="Restore on LinkedIn">
                <IconLinkedIn />
              </a>
              <a href="#" aria-label="Restore on YouTube">
                <IconYouTube />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2 footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2 footer-col">
            <h4>Clinic</h4>
            <ul>
              {clinicLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 footer-col">
            <h4>Visit us</h4>
            <div className="footer-contact-line">
              <IconPin />
              <span>
                {clinic.addressLine1}
                <br />
                {clinic.addressLine2}
              </span>
            </div>
            <div className="footer-contact-line">
              <IconPhone />
              <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
            </div>
            <div className="footer-contact-line">
              <IconClock />
              <span>{clinic.hoursNote}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-wrap justify-content-between gap-2">
          <span>&copy; {year} Restore Physical Therapy. All rights reserved.</span>
          <span>
            Built with Bootstrap 5 · <a href={homeHref("home")}>Back to top</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
