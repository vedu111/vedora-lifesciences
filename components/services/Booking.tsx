"use client";

import { FormEvent, useMemo, useState } from "react";
import { clinic } from "../../lib/clinic";
import { IconCheck, IconClock, IconPhone, IconShield } from "../icons";
import { Reveal } from "../Reveal";

const bookingServices = [
  "Sports injury rehab",
  "Post-surgery rehab",
  "Back & neck pain",
  "Manual therapy",
  "Dry needling",
  "Sports performance",
  "Not sure yet",
];

const timeWindows = [
  "Morning (7:00 – 11:00)",
  "Midday (11:00 – 14:00)",
  "Afternoon (14:00 – 17:00)",
  "Evening (17:00 – 19:00)",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
  consent: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Booking() {
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState(false);

  function update<K extends keyof typeof initialForm>(field: K, value: (typeof initialForm)[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: false }));
  }

  function validate() {
    const next = {
      name: !form.name.trim(),
      phone: form.phone.replace(/\D/g, "").length < 7,
      email: !emailPattern.test(form.email),
      service: !form.service,
      date: !form.date,
      time: !form.time,
      consent: !form.consent,
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setForm(initialForm);
    setTimeout(() => setSuccess(false), 6000);
  }

  return (
    <section className="section" id="book">
      <div className="container">
        <Reveal className="heading-wrap center">
          <span className="eyebrow center">Book your visit</span>
          <h2 className="section-title">Request an appointment</h2>
          <p className="section-lead">
            Tell us what's going on and when works for you. Our front desk will call to confirm your slot within one
            business hour — no referral required.
          </p>
        </Reveal>

        <div className="row g-4 mt-2 align-items-stretch">
          <Reveal className="col-lg-5">
            <div className="booking-side">
              <h3>What to expect</h3>
              <p>
                Your first visit is a relaxed, thorough 60-minute evaluation with a doctor of physical therapy — no
                rushing, no assembly line.
              </p>
              <div className="bs-item">
                <span className="bi" aria-hidden="true">
                  <IconClock />
                </span>
                <div>
                  <h4>Fast confirmation</h4>
                  <p>We call to confirm your appointment within one business hour.</p>
                </div>
              </div>
              <div className="bs-item">
                <span className="bi" aria-hidden="true">
                  <IconCheck />
                </span>
                <div>
                  <h4>No referral needed</h4>
                  <p>Direct access means you can start care right away in most cases.</p>
                </div>
              </div>
              <div className="bs-item">
                <span className="bi" aria-hidden="true">
                  <IconShield />
                </span>
                <div>
                  <h4>Insurance handled</h4>
                  <p>We verify your benefits before the visit so there are no surprises.</p>
                </div>
              </div>
              <div className="bs-item">
                <span className="bi" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <h4>Prefer to talk?</h4>
                  <p>
                    Call{" "}
                    <a href={`tel:${clinic.phoneTel}`} style={{ color: "#fff", fontWeight: 800 }}>
                      {clinic.phoneDisplay}
                    </a>{" "}
                    — we're happy to help.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-lg-7 reveal-d1">
            <form className="booking-wrap" noValidate aria-label="Appointment booking form" onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-name">
                    Full name
                  </label>
                  <input
                    className={`form-control${errors.name ? " is-invalid" : ""}`}
                    type="text"
                    id="bk-name"
                    name="name"
                    placeholder="Jamie Rivera"
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                  />
                  <span className={`field-error${errors.name ? " show" : ""}`}>Please enter your name.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-phone">
                    Phone
                  </label>
                  <input
                    className={`form-control${errors.phone ? " is-invalid" : ""}`}
                    type="tel"
                    id="bk-phone"
                    name="phone"
                    placeholder={clinic.phoneDisplay}
                    required
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                  />
                  <span className={`field-error${errors.phone ? " show" : ""}`}>Enter a valid phone number.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-email">
                    Email
                  </label>
                  <input
                    className={`form-control${errors.email ? " is-invalid" : ""}`}
                    type="email"
                    id="bk-email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    value={form.email}
                    onChange={(event) => update("email", event.target.value)}
                  />
                  <span className={`field-error${errors.email ? " show" : ""}`}>Enter a valid email address.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-service">
                    Condition / service
                  </label>
                  <select
                    className={`form-select${errors.service ? " is-invalid" : ""}`}
                    id="bk-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={(event) => update("service", event.target.value)}
                  >
                    <option value="">Select one…</option>
                    {bookingServices.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className={`field-error${errors.service ? " show" : ""}`}>Please choose a service.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-date">
                    Preferred date
                  </label>
                  <input
                    className={`form-control${errors.date ? " is-invalid" : ""}`}
                    type="date"
                    id="bk-date"
                    name="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                  />
                  <span className={`field-error${errors.date ? " show" : ""}`}>Please pick a date.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="bk-time">
                    Preferred time
                  </label>
                  <select
                    className={`form-select${errors.time ? " is-invalid" : ""}`}
                    id="bk-time"
                    name="time"
                    required
                    value={form.time}
                    onChange={(event) => update("time", event.target.value)}
                  >
                    <option value="">Select a window…</option>
                    {timeWindows.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className={`field-error${errors.time ? " show" : ""}`}>Please choose a time.</span>
                </div>
                <div className="col-12 field">
                  <label className="form-label" htmlFor="bk-msg">
                    Tell us what's going on <span style={{ color: "var(--muted)", fontWeight: 600 }}>(optional)</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="bk-msg"
                    name="message"
                    placeholder="A quick note about your injury, symptoms or goals helps us match you with the right therapist."
                    value={form.message}
                    onChange={(event) => update("message", event.target.value)}
                  />
                </div>
                <div className="col-12 field">
                  <label
                    className="d-flex align-items-start gap-2"
                    style={{ fontSize: ".9rem", color: "var(--body)", fontWeight: 600, cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      id="bk-consent"
                      name="consent"
                      required
                      checked={form.consent}
                      onChange={(event) => update("consent", event.target.checked)}
                      style={{ marginTop: 5, width: 18, height: 18, accentColor: "var(--teal)", flex: "none" }}
                    />
                    <span>I agree to be contacted about my appointment request.</span>
                  </label>
                  <span className={`field-error${errors.consent ? " show" : ""}`}>Please confirm to continue.</span>
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-coral btn-lg" type="submit">
                    Request my appointment
                  </button>
                </div>
              </div>
              <div className={`form-success${success ? " show" : ""}`} tabIndex={-1} role="status">
                <IconCheck strokeWidth={2.5} />
                Thanks! Your request is in — our front desk will call to confirm your slot shortly.
              </div>
              <p className="form-note mt-3">
                By requesting an appointment you agree to our clinic's privacy practices. We never share your
                information.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
