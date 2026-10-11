"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic } from "../lib/clinic";
import { Brand } from "./Brand";
import { IconCalendar, IconPhone } from "./icons";
import { useHomeHref } from "./use-home-href";

const hashLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "team", label: "Therapists" },
  { id: "journey", label: "Process" },
];

export function SiteNav() {
  const pathname = usePathname();
  const homeHref = useHomeHref();
  const isServices = pathname.startsWith("/services");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(isServices ? "" : "home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isServices) return;

    const sections = hashLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];
    const faq = document.getElementById("faq");
    if (faq) sections.push(faq);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isServices]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 992) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function closeIfMobile() {
    if (window.innerWidth < 992) setMenuOpen(false);
  }

  return (
    <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <nav className="container d-flex align-items-center justify-content-between flex-wrap" aria-label="Primary">
        <Brand />

        <button
          className="nav-toggle d-lg-none"
          type="button"
          aria-controls="navMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
        </button>

        <div className={`nav-menu d-lg-flex align-items-lg-center${menuOpen ? " open" : ""}`} id="navMenu">
          <ul
            className="navbar-nav flex-lg-row align-items-lg-center mb-0 ms-lg-auto"
            style={{ listStyle: "none", paddingLeft: 0, gap: 2, display: "flex", flexDirection: "column" }}
          >
            {hashLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a
                  className={`nav-link${activeHash === link.id ? " active" : ""}`}
                  href={homeHref(link.id)}
                  onClick={closeIfMobile}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <Link
                className={`nav-link${isServices ? " active" : ""}`}
                href="/services"
                aria-current={isServices ? "page" : undefined}
                onClick={closeIfMobile}
              >
                Treatments
              </Link>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${activeHash === "faq" ? " active" : ""}`}
                href={homeHref("faq")}
                onClick={closeIfMobile}
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="nav-cta-wrap d-flex align-items-center gap-3 ms-lg-4">
            <a className="nav-phone d-none d-xl-inline-flex" href={`tel:${clinic.phoneTel}`}>
              <IconPhone />
              {clinic.phoneDisplay}
            </a>
            <a className="btn btn-coral" href={isServices ? "#book" : homeHref("book")} onClick={closeIfMobile}>
              <IconCalendar />
              Book appointment
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
