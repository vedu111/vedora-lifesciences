
"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { IconPhone } from "./icons";
import { useHomeHref } from "./use-home-href";

const hashLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "location", label: "Contact" },
];

function NavIcon({ id }: { id: string }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "home":
      return (
        <svg {...common}>
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v11h14V9" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );

    case "about":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21a7 7 0 0 1 14 0" />
        </svg>
      );

    case "products":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
          <circle cx="7" cy="7" r="1" fill="currentColor" />
          <circle cx="7" cy="12" r="1" fill="currentColor" />
          <circle cx="7" cy="17" r="1" fill="currentColor" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

export function SiteNav() {
  const homeHref = useHomeHref();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

  // Scroll effect
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active link aligned with the section below the fixed header.
  useEffect(() => {
    const sections = hashLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    function updateActiveSection() {
      const headerOffset =
        document.querySelector(".site-nav")?.getBoundingClientRect().height ?? 0;
      const activationLine = headerOffset + 80;
      const atPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (atPageBottom) {
        setActiveHash(sections[sections.length - 1].id);
        return;
      }

      let activeSection = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          activeSection = section;
        } else {
          break;
        }
      }

      setActiveHash(activeSection.id);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  // Escape key and resize
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    function onResize() {
      if (window.innerWidth >= 992) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Lock background scroll
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`site-nav${scrolled ? " scrolled" : ""}`}
    >
      <nav
        className="container d-flex align-items-center justify-content-between flex-wrap"
        aria-label="Primary navigation"
      >
        <Brand />

        {/* Mobile Toggle */}
        <button
          className={`nav-toggle d-lg-none${
            menuOpen ? " menu-active" : ""
          }`}
          type="button"
          aria-controls="navMenu"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="nav-toggle-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <div
          className={`nav-menu d-lg-flex align-items-lg-center${
            menuOpen ? " open" : ""
          }`}
          id="navMenu"
        >
          {/* Drawer Header */}
          <div className="drawer-header d-lg-none">
            <div className="drawer-title">
              <span className="drawer-eyebrow">
                VEDORA LIFESCIENCES
                <svg
                  viewBox="0 0 122.88 114.86"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="#01a437"
                    d="M59.07,110.77C110.92,105,139.6,71.12,112.44,0c-21.29,14.9-50.39,24.6-65,44.55C57,52.94,64.89,62.23,67.08,74.37c13.19-16.08,27.63-30.72,35.23-47-7.79,39.07-20,53.84-38.78,73.81a93.64,93.64,0,0,1-4.46,9.62Zm-14.9,4C4,105-15.18,76.09,14.27,24.75c23.8,22.92,65.79,37.48,38.39,85.86a27.08,27.08,0,0,1-1.83,2.93C45.9,89.62,26.21,70.69,20.43,50.61,21.77,83.42,31.23,93,45.88,114.86c-.57,0-1.14-.06-1.71-.13Z"
                  />
                </svg>
              </span>

              <span className="drawer-subtitle">
                Connecting Healthcare, Delivering Trust.
              </span>
            </div>

            <button
              className="drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <span />
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className="navbar-nav flex-lg-row align-items-lg-center mb-0"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            {hashLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${
                    activeHash === link.id ? " active" : ""
                  }`}
                  href={homeHref(link.id)}
                  onClick={() => {
                    setActiveHash(link.id);
                    closeMenu();
                  }}
                >
                  <span className="nav-link-icon">
                    <NavIcon id={link.id} />
                  </span>

                  <span className="nav-link-text">
                    {link.label}
                  </span>

                  <span
                    className="nav-active-indicator"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Brand Value Panel */}
          <div className="drawer-info d-lg-none">
            <div className="drawer-info-heading">
              Your Healthcare Distribution Partner
            </div>

            <div className="drawer-info-item">
              <span className="info-dot" />
              <span>Quality-focused sourcing</span>
            </div>

            <div className="drawer-info-item">
              <span className="info-dot" />
              <span>Reliable product supply</span>
            </div>

            <div className="drawer-info-item">
              <span className="info-dot" />
              <span>Professional B2B support</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="nav-cta-wrap d-flex align-items-center gap-3">
            <a
              className="btn btn-coral nav-contact-btn"
              href="https://wa.me/918928945887?text=Hello%20VEDORA%20LIFESCIENCES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20healthcare%20and%20nutraceutical%20products."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <IconPhone />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <button
          className="nav-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

      <style jsx>{`
        /* Desktop CTA */
        .nav-contact-btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 12px;
          white-space: nowrap;
          font-weight: 700;
          text-decoration: none;
        }

        .nav-contact-btn :global(svg) {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .drawer-header,
        .drawer-info,
        .nav-backdrop {
          display: none;
        }

        /* Mobile drawer */
        @media (max-width: 991px) {
          .site-nav :global(nav.container) {
            position: relative;
          }

          /* Backdrop */
          .nav-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 9998;
            width: 100%;
            height: 100dvh;
            padding: 0;
            margin: 0;
            border: 0;
            background: rgba(10, 24, 42, 0.42);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            animation: backdropIn 0.25s ease forwards;
          }

          /* Drawer */
          .site-nav :global(.nav-menu) {
            display: flex !important;
            flex-direction: column;
            align-items: stretch;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            box-sizing: border-box;
            width: min(85vw, 360px);
            max-width: 100%;
            height: 100dvh;
            overflow-y: auto;
            margin: 0;
            padding: 24px 22px;
            border: 0;
            border-radius: 24px 0 0 24px;
            background: #ffffff;
            box-shadow: -15px 0 45px rgba(14, 50, 90, 0.14);
            transform: translateX(105%);
            visibility: hidden;
            transition:
              transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
              visibility 0.28s ease;
          }

          .site-nav :global(.nav-menu.open) {
            transform: translateX(0);
            visibility: visible;
          }

          /* Header */
          .drawer-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding-bottom: 20px;
            margin-bottom: 16px;
            border-bottom: 1px solid #e8eff7;
          }

          .drawer-title {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .drawer-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            color: #0b315a;
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.8px;
          }

          .drawer-eyebrow svg {
            width: 15px;
            height: 15px;
            flex: 0 0 15px;
          }

          .drawer-subtitle {
            color: #71839a;
            font-size: 12px;
            line-height: 1.5;
            font-weight: 500;
          }

          /* Close */
          .drawer-close {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            min-width: 44px;
            padding: 0;
            border: 1px solid #e2ebf5;
            border-radius: 14px;
            background: #f7faff;
            cursor: pointer;
          }

          .drawer-close span,
          .drawer-close span::after {
            position: absolute;
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background: #183653;
          }

          .drawer-close span {
            transform: rotate(45deg);
          }

          .drawer-close span::after {
            content: "";
            transform: rotate(90deg);
          }

          /* Links */
          .site-nav :global(.navbar-nav) {
            align-items: stretch !important;
            gap: 7px !important;
            width: 100%;
          }

          .site-nav :global(.nav-item) {
            width: 100%;
          }

          .site-nav :global(.nav-link) {
            position: relative;
            display: flex;
            align-items: center;
            gap: 13px;
            width: 100%;
            box-sizing: border-box;
            padding: 14px 13px;
            border-radius: 14px;
            color: #183653;
            font-size: 15px;
            font-weight: 600;
            line-height: 1.4;
            text-decoration: none;
            transition:
              background 0.2s ease,
              color 0.2s ease;
          }

          .site-nav :global(.nav-link.active) {
            background: #eef6ff;
            color: #0068c9;
          }

          .site-nav :global(.nav-link-icon) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            flex-shrink: 0;
            opacity: 0.85;
          }

          .site-nav :global(.nav-link.active .nav-link-icon) {
            opacity: 1;
          }

          .site-nav :global(.nav-active-indicator) {
            width: 4px;
            height: 22px;
            margin-left: auto;
            border-radius: 10px;
            background: transparent;
          }

          .site-nav :global(.nav-link.active .nav-active-indicator) {
            background: #0872ce;
          }

          /* Brand value panel */
          .drawer-info {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 26px;
            padding: 18px 16px;
            border: 1px solid #e5effa;
            border-radius: 16px;
            background: #f7fbff;
          }

          .drawer-info-heading {
            margin-bottom: 2px;
            color: #173653;
            font-size: 13px;
            font-weight: 700;
          }

          .drawer-info-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #657d98;
            font-size: 13px;
            font-weight: 500;
          }

          .info-dot {
            width: 7px;
            height: 7px;
            flex-shrink: 0;
            border-radius: 50%;
            background: #20b765;
          }

          /* CTA bottom */
          .site-nav :global(.nav-cta-wrap) {
            display: flex !important;
            flex-direction: column;
            align-items: stretch !important;
            width: 100%;
            gap: 0 !important;
            margin: auto 0 0 !important;
            padding-top: 20px;
            border-top: 1px solid #e8eff7;
          }

          .nav-contact-btn {
            display: flex;
            width: 100%;
            min-height: 52px;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 16px;
            border-radius: 14px;
            white-space: nowrap;
            font-size: 16px;
            font-weight: 700;
          }

          .nav-contact-btn :global(svg) {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          .site-nav :global(.nav-toggle) {
            position: relative;
            z-index: 1;
          }
        }

        /* Small mobile */
        @media (max-width: 575px) {
          .site-nav :global(.nav-menu) {
            width: min(88vw, 340px);
            padding: 22px 18px;
            border-radius: 22px 0 0 22px;
          }

          .drawer-header {
            padding-bottom: 18px;
            margin-bottom: 14px;
          }

          .site-nav :global(.nav-link) {
            padding: 13px 12px;
            font-size: 15px;
          }

          .drawer-info {
            margin-top: 22px;
            padding: 16px 14px;
            gap: 11px;
          }

          .nav-contact-btn {
            min-height: 48px;
            padding: 12px 14px;
          }
        }

        /* Animation */
        @keyframes backdropIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .site-nav :global(.nav-menu),
          .nav-backdrop,
          .site-nav :global(.nav-link) {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </header>
  );
}
