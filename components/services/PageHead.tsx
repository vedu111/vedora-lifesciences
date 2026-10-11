import Link from "next/link";

export function PageHead() {
  return (
    <section className="page-head">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          Treatments & Booking
        </nav>
        <h1>
          Treatments built around <span style={{ color: "var(--teal)" }}>your recovery</span>
        </h1>
        <p>
          Every program starts with a full 60-minute evaluation, then a hands-on plan tailored to your goals. Browse
          what we treat, see transparent session pricing, and book your first visit in under a minute.
        </p>
      </div>
    </section>
  );
}
