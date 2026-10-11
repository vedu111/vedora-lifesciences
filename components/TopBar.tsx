"use client";

import { clinic } from "../lib/clinic";
import { IconCheck } from "./icons";
import { useHomeHref } from "./use-home-href";

export function TopBar() {
  const homeHref = useHomeHref();

  return (
    <div className="topbar">
      <div className="container d-flex align-items-center justify-content-between">
        <span className="direct-access">
          <IconCheck />
          Direct access — no referral needed
        </span>
        <div className="top-links">
          <a className="hide-sm" href={homeHref("location")}>
            {clinic.addressShort}
          </a>
          <span className="divider hide-sm">|</span>
          <a href={`tel:${clinic.phoneTel}`}>Call {clinic.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
