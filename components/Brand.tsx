import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Vedora Lifesciences home">
      <Image
        src="/img/vedora-logo.png"
        alt="Vedora Lifesciences"
        width={1920}
        height={819}
        className="brand-logo"
        sizes="280px"
        priority
      />
    </Link>
  );
}
