import Link from "next/link";
import { IconPulse } from "./icons";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Restore Physical Therapy home">
      <span className="brand-mark" aria-hidden="true">
        <IconPulse />
      </span>
      <span>
        <span className="brand-name">
          Restore<span>.</span>
        </span>
        <span className="brand-sub">Physical Therapy</span>
      </span>
    </Link>
  );
}
