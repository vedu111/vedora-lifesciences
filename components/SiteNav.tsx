"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { IconPhone } from "./icons";
import { useHomeHref } from "./use-home-href";

const hashLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "faq", label: "FAQ" },
  { id: "location", label: "Contact" },
];

export function SiteNav() {
  const homeHref = useHomeHref();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

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

  useEffect(() => {
    const sections = hashLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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

        <button
          className="nav-toggle d-lg-none"
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
          <span />
        </button>

        <div
          className={`nav-menu d-lg-flex align-items-lg-center${
            menuOpen ? " open" : ""
          }`}
          id="navMenu"
        >
          <ul
            className="navbar-nav flex-lg-row align-items-lg-center mb-0 ms-lg-auto"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              gap: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {hashLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${
                    activeHash === link.id ? " active" : ""
                  }`}
                  href={homeHref(link.id)}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta-wrap d-flex align-items-center gap-3 ms-lg-4">
            

            <a
              className="btn btn-coral nav-contact-btn"
              href={homeHref("location")}
              onClick={closeMenu}
            >
              <IconPhone />
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .site-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid #e0ebf7;
          transition: box-shadow 180ms ease,
            background 180ms ease;
        }

        .site-nav.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 5px 22px rgba(14, 50, 90, 0.08);
        }

        .nav-address {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #102345;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
          text-decoration: none;
        }

        .nav-address-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0870d8;
        }

        .nav-address-text {
          white-space: nowrap;
        }

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

        @media (max-width: 991px) {
          .site-nav :global(.nav-menu) {
            display: none !important;
            width: 100%;
            padding: 14px 0 20px;
          }

          .site-nav :global(.nav-menu.open) {
            display: block !important;
          }

          .site-nav :global(.navbar-nav) {
            align-items: stretch !important;
            gap: 4px !important;
          }

          .site-nav :global(.nav-link) {
            display: block;
            padding: 12px 10px;
          }

          .site-nav :global(.nav-cta-wrap) {
            align-items: stretch !important;
            margin: 12px 0 0 !important;
          }

          .nav-contact-btn {
            width: 100%;
          }
        }

        @media (max-width: 575px) {
          .nav-contact-btn {
            min-height: 46px;
            padding: 11px 16px;
          }
        }
      `}</style>
    </header>
  );
}
