const insurers = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Kaiser",
  "Medicare",
  "Humana",
  "Tricare",
];

export function Insurance() {
  return (
    <section className="insurance section-sm">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-4">
            <p className="ins-lead mb-1">In-network with major insurers</p>
            <p className="mb-0 form-note">
              We verify your benefits before your first visit. Have a question about coverage?{" "}
              <a href="#book">Ask our front desk.</a>
            </p>
          </div>
          <div className="col-lg-8">
            <div className="ins-chips justify-content-lg-end">
              {insurers.map((name) => (
                <span className="ins-chip" key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
