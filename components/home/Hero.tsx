"use client";

import { FormEvent, useMemo, useState } from "react";
import { clinic, serviceOptions } from "../../lib/clinic";
import { CountUp } from "../CountUp";
import { IconCalendar, IconCheck, IconPhone, IconShield } from "../icons";

const initialForm = {
  service: "",
  date: "",
  name: "",
  phone: "",
};

export function Hero() {
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState(false);

  function update(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: false }));
  }

  function validate() {
    const next = {
      service: !form.service,
      date: !form.date,
      name: !form.name.trim(),
      phone: form.phone.replace(/\D/g, "").length < 7,
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
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="hero-pill">
              <span className="dot" aria-hidden="true">
                <IconCheck strokeWidth={2.5} />
              </span>
              Rated 4.9/5 by 500+ recovered patients
            </span>
            <h1>
              Get back to the movement you <span className="accent">love</span>.
            </h1>
            <p className="hero-lead">
              Doctor-led, one-on-one physical therapy that treats the cause of your pain — not just the symptoms. Sports
              injuries, post-surgery rehab, back and neck pain, and everything in between.
            </p>
            <div className="hero-actions">
              <a className="btn btn-coral btn-lg" href="#book">
                Book your first visit
              </a>
              <span className="call-note">
                <IconPhone />
                or call {clinic.phoneDisplay}
              </span>
            </div>

            <form className="mini-form" id="book" noValidate aria-labelledby="mfTitle" onSubmit={onSubmit}>
              <p className="mf-title" id="mfTitle">
                <IconCalendar />
                Request an appointment
              </p>
              <p className="mf-sub">We'll confirm your slot within one business hour. No referral required.</p>
              <div className="row g-3">
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="mf-service">
                    Condition / service
                  </label>
                  <select
                    className={`form-select${errors.service ? " is-invalid" : ""}`}
                    id="mf-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={(event) => update("service", event.target.value)}
                    aria-invalid={errors.service || undefined}
                  >
                    <option value="">Select one…</option>
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className={`field-error${errors.service ? " show" : ""}`}>Please choose a service.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="mf-date">
                    Preferred date
                  </label>
                  <input
                    className={`form-control${errors.date ? " is-invalid" : ""}`}
                    type="date"
                    id="mf-date"
                    name="date"
                    required
                    min={minDate}
                    value={form.date}
                    onChange={(event) => update("date", event.target.value)}
                    aria-invalid={errors.date || undefined}
                  />
                  <span className={`field-error${errors.date ? " show" : ""}`}>Please pick a date.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="mf-name">
                    Full name
                  </label>
                  <input
                    className={`form-control${errors.name ? " is-invalid" : ""}`}
                    type="text"
                    id="mf-name"
                    name="name"
                    placeholder="Jamie Rivera"
                    required
                    value={form.name}
                    onChange={(event) => update("name", event.target.value)}
                    aria-invalid={errors.name || undefined}
                  />
                  <span className={`field-error${errors.name ? " show" : ""}`}>Please enter your name.</span>
                </div>
                <div className="col-md-6 field">
                  <label className="form-label" htmlFor="mf-phone">
                    Phone
                  </label>
                  <input
                    className={`form-control${errors.phone ? " is-invalid" : ""}`}
                    type="tel"
                    id="mf-phone"
                    name="phone"
                    placeholder={clinic.phoneDisplay}
                    required
                    value={form.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    aria-invalid={errors.phone || undefined}
                  />
                  <span className={`field-error${errors.phone ? " show" : ""}`}>Enter a valid phone number.</span>
                </div>
                <div className="col-12 d-grid">
                  <button className="btn btn-teal" type="submit">
                    Request appointment
                  </button>
                </div>
              </div>
              <div className={`form-success${success ? " show" : ""}`} tabIndex={-1} role="status">
                <IconCheck strokeWidth={2.5} />
                Thanks! Your request is in — our front desk will call to confirm shortly.
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="hero-visual">
              <img
                className="hero-img"
                src="/img/hero-therapy.jpg"
                width={720}
                height={612}
                fetchPriority="high"
                alt="Physical therapist guiding a patient through a resistance-band exercise in a bright modern clinic"
              />
              <div className="hero-badge-card">
                <span className="ico" aria-hidden="true">
                  <IconShield />
                </span>
                <span>
                  <span className="big">
                    <CountUp value={94} suffix="%" />
                  </span>
                  <span className="lbl">return to full activity</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
