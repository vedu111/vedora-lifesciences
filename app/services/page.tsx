import Script from "next/script";

export const metadata = {
  title: "Treatments & Booking | Restore Physical Therapy",
  description: "Explore physical therapy treatments, transparent pricing, and appointment booking at Restore Physical Therapy.",
};

const pageMarkup = `<a class="skip-link" href="#main">Skip to content</a>

<!-- ============ TOP BAR ============ -->
<div class="topbar">
  <div class="container d-flex align-items-center justify-content-between">
    <span class="direct-access">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      Direct access — no referral needed
    </span>
    <div class="top-links">
      <a class="hide-sm" href="/#location">312 Harbor Point Dr, Portland</a>
      <span class="divider hide-sm">|</span>
      <a href="tel:+15035550142">
        Call (503) 555-0142
      </a>
    </div>
  </div>
</div>

<!-- ============ NAVBAR ============ -->
<header class="site-nav">
  <nav class="container d-flex align-items-center justify-content-between flex-wrap" aria-label="Primary">
    <a class="brand" href="/" aria-label="Restore Physical Therapy home">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 6 4-14 2 8h6"/></svg>
      </span>
      <span>
        <span class="brand-name">Restore<span>.</span></span>
        <span class="brand-sub">Physical Therapy</span>
      </span>
    </a>

    <button class="nav-toggle d-lg-none" type="button" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation menu">
      <span></span>
    </button>

    <div class="nav-menu d-lg-flex align-items-lg-center" id="navMenu">
      <ul class="navbar-nav flex-lg-row align-items-lg-center mb-0 ms-lg-auto" style="list-style:none;padding-left:0;gap:2px;display:flex;flex-direction:column;">
        <li class="nav-item"><a class="nav-link" href="/#home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="/#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="/#team">Therapists</a></li>
        <li class="nav-item"><a class="nav-link" href="/#journey">Process</a></li>
        <li class="nav-item"><a class="nav-link active" href="/services" aria-current="page">Treatments</a></li>
        <li class="nav-item"><a class="nav-link" href="/#faq">FAQ</a></li>
      </ul>
      <div class="nav-cta-wrap d-flex align-items-center gap-3 ms-lg-4">
        <a class="nav-phone d-none d-xl-inline-flex" href="tel:+15035550142">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          (503) 555-0142
        </a>
        <a class="btn btn-coral" href="#book">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
          Book appointment
        </a>
      </div>
    </div>
  </nav>
</header>

<main id="main">

<!-- ============ PAGE HEAD ============ -->
<section class="page-head">
  <div class="container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a><span>/</span>Treatments &amp; Booking
    </nav>
    <h1>Treatments built around <span style="color:var(--teal)">your recovery</span></h1>
    <p>Every program starts with a full 60-minute evaluation, then a hands-on plan tailored to your goals. Browse what we treat, see transparent session pricing, and book your first visit in under a minute.</p>
  </div>
</section>

<!-- ============ FILTER + TREATMENTS ============ -->
<section class="section">
  <div class="container">
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
      <div class="filter-bar" data-filter-bar role="group" aria-label="Filter treatments by type">
        <button class="filter-btn active" type="button" data-filter="all" aria-pressed="true">All treatments</button>
        <button class="filter-btn" type="button" data-filter="sports" aria-pressed="false">Sports &amp; performance</button>
        <button class="filter-btn" type="button" data-filter="rehab" aria-pressed="false">Post-surgery</button>
        <button class="filter-btn" type="button" data-filter="pain" aria-pressed="false">Pain &amp; spine</button>
        <button class="filter-btn" type="button" data-filter="handson" aria-pressed="false">Hands-on therapy</button>
      </div>
      <p class="price-note mb-0">Same-week appointments · Most insurance accepted</p>
    </div>

    <div class="row g-4">
      <!-- Sports Injuries -->
      <div class="col-md-6 col-lg-4 reveal" data-cat="sports" id="sports">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-sports.jpg" width="640" height="400" loading="lazy" alt="Physical therapist taping an athlete's injured ankle in a clinic">
            <span class="tag">Sports injuries</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <div class="treat-body">
            <h3>Sports Injury Rehab</h3>
            <p>Sprains, strains, ligament tears and overuse injuries — assessed, taped and progressively rehabbed so you get back to your sport safely, not just quickly.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Acute injury assessment &amp; taping</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Progressive strength &amp; loading plan</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Return-to-sport testing before clearance</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Session</div><div class="v">45 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$110</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>

      <!-- Post-Surgery Rehab -->
      <div class="col-md-6 col-lg-4 reveal reveal-d1" data-cat="rehab" id="post-op">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-post-op.jpg" width="640" height="400" loading="lazy" alt="Therapist guiding a post-surgery patient through knee bending exercises on a treatment table">
            <span class="tag">Post-surgery</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3.5 12h4l1.5-3 2 5 1.5-3h4"/></svg></div>
          <div class="treat-body">
            <h3>Post-Surgery Rehab</h3>
            <p>Surgeon-aligned protocols for ACL, rotator cuff, joint replacement and spine surgery — rebuilding range of motion, strength and trust in your body, phase by phase.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Protocol coordinated with your surgeon</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Guided range-of-motion &amp; scar care</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Staged strength &amp; function milestones</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Session</div><div class="v">45 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$110</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>

      <!-- Back & Neck Pain -->
      <div class="col-md-6 col-lg-4 reveal reveal-d2" data-cat="pain" id="spine">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-spine.jpg" width="640" height="400" loading="lazy" alt="Physical therapist assessing a patient's lower back and spine posture">
            <span class="tag">Pain &amp; spine</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.2"/><path d="M12 7v7M12 9l-4 2M12 9l4 2M9 21l3-7 3 7"/></svg></div>
          <div class="treat-body">
            <h3>Back &amp; Neck Pain</h3>
            <p>Sciatica, herniated discs, whiplash and stubborn desk-posture pain. We calm the flare-up first, then fix the movement mechanics that keep bringing it back.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Root-cause movement screen</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Hands-on spinal mobilization</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Posture &amp; ergonomics coaching</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Session</div><div class="v">45 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$110</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>

      <!-- Manual Therapy -->
      <div class="col-md-6 col-lg-4 reveal" data-cat="handson" id="manual">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-manual.jpg" width="640" height="400" loading="lazy" alt="Close-up of a therapist performing hands-on soft-tissue massage on a patient's shoulder">
            <span class="tag">Hands-on therapy</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v7M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2a8 8 0 0 1-7-4l-2.5-4a2 2 0 0 1 3.5-2L8 15"/></svg></div>
          <div class="treat-body">
            <h3>Manual Therapy</h3>
            <p>Skilled hands-on joint mobilization, soft-tissue release and myofascial work that restores the motion rest and medication alone simply can't reach.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Joint mobilization &amp; manipulation</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Soft-tissue &amp; myofascial release</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Paired with active corrective exercise</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Session</div><div class="v">45 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$110</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>

      <!-- Dry Needling -->
      <div class="col-md-6 col-lg-4 reveal reveal-d1" data-cat="handson" id="needling">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-needling.jpg" width="640" height="400" loading="lazy" alt="Therapist applying a thin dry-needling needle to a patient's calf muscle">
            <span class="tag">Hands-on therapy</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3 21 7M18 4 8.5 13.5M14 8l-9 9-2 4 4-2 9-9"/></svg></div>
          <div class="treat-body">
            <h3>Dry Needling</h3>
            <p>Targeted trigger-point needling that releases deep muscle knots, reduces spasm and switches off referred pain — often within a session or two.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Sterile, single-use filament needles</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Certified (CMTPT) therapists only</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Add on to any treatment session</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Add-on</div><div class="v">20 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$45</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>

      <!-- Sports Performance -->
      <div class="col-md-6 col-lg-4 reveal reveal-d2" data-cat="sports" id="performance">
        <div class="treat-card">
          <div class="treat-media">
            <img src="/img/treat-performance.jpg" width="640" height="400" loading="lazy" alt="Athlete performing a single-leg strength test while a therapist observes their form">
            <span class="tag">Sports &amp; performance</span>
          </div>
          <div class="treat-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 3h4v4"/></svg></div>
          <div class="treat-body">
            <h3>Sports Performance</h3>
            <p>Movement screens, strength testing and return-to-sport programming for athletes who want to come back faster — and finish the season stronger than they started.</p>
            <ul class="treat-list">
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Full movement &amp; asymmetry screen</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Objective strength &amp; power testing</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Personalized performance program</li>
            </ul>
            <div class="treat-meta">
              <div class="m"><div class="k">Screen</div><div class="v">75 min</div></div>
              <div class="m"><div class="k">From</div><div class="v price">$175</div></div>
            </div>
            <a class="btn btn-teal" href="#book">Book this treatment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ PRICING TABLE ============ -->
<section class="section bg-mist" id="pricing">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4 reveal">
        <span class="eyebrow">Transparent pricing</span>
        <h2 class="section-title">No surprises, ever</h2>
        <p class="section-lead mb-3">These are our standard self-pay rates. Most visits are covered by insurance — we verify your exact benefits before your first appointment so you always know your cost up front.</p>
        <div class="cp-hours" style="display:flex;gap:10px;align-items:center;color:var(--teal-800);font-weight:700;margin-bottom:8px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:var(--teal);flex:none;"><path d="M20 6 9 17l-5-5"/></svg>
          Benefits verified before you pay
        </div>
        <div class="cp-hours" style="display:flex;gap:10px;align-items:center;color:var(--teal-800);font-weight:700;margin-bottom:8px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;color:var(--teal);flex:none;"><path d="M20 6 9 17l-5-5"/></svg>
          Flexible payment plans available
        </div>
        <a class="btn btn-coral mt-3" href="#book">Book an appointment</a>
      </div>
      <div class="col-lg-8 reveal reveal-d1">
        <div class="price-row">
          <div><div class="pr-name">Initial Evaluation &amp; Assessment</div><div class="pr-desc">Full movement exam, diagnosis and personalized care plan</div></div>
          <div class="pr-dur">60 min</div>
          <div class="pr-cost">$145</div>
        </div>
        <div class="price-row">
          <div><div class="pr-name">Follow-up Treatment Session</div><div class="pr-desc">One-on-one hands-on therapy plus guided exercise</div></div>
          <div class="pr-dur">45 min</div>
          <div class="pr-cost">$110</div>
        </div>
        <div class="price-row">
          <div><div class="pr-name">Dry Needling Add-on</div><div class="pr-desc">Trigger-point needling added to any treatment session</div></div>
          <div class="pr-dur">20 min</div>
          <div class="pr-cost">$45</div>
        </div>
        <div class="price-row">
          <div><div class="pr-name">Sports Performance Screen</div><div class="pr-desc">Movement, strength and power testing with a written program</div></div>
          <div class="pr-dur">75 min</div>
          <div class="pr-cost">$175</div>
        </div>
        <div class="price-row">
          <div><div class="pr-name">Telehealth Home Program Review</div><div class="pr-desc">Virtual check-in to progress and refine your home exercises</div></div>
          <div class="pr-dur">30 min</div>
          <div class="pr-cost">$75</div>
        </div>
        <div class="price-row">
          <div><div class="pr-name">Complimentary Phone Consult</div><div class="pr-desc">Not sure PT is right for you? Talk to a therapist first</div></div>
          <div class="pr-dur">15 min</div>
          <div class="pr-cost">Free</div>
        </div>
        <p class="price-note mt-3">Prices shown are typical self-pay rates and may vary based on your plan of care. Co-pays and coverage depend on your individual insurance.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ BOOKING ============ -->
<section class="section" id="book">
  <div class="container">
    <div class="heading-wrap center reveal">
      <span class="eyebrow center">Book your visit</span>
      <h2 class="section-title">Request an appointment</h2>
      <p class="section-lead">Tell us what's going on and when works for you. Our front desk will call to confirm your slot within one business hour — no referral required.</p>
    </div>

    <div class="row g-4 mt-2 align-items-stretch">
      <div class="col-lg-5 reveal">
        <div class="booking-side">
          <h3>What to expect</h3>
          <p>Your first visit is a relaxed, thorough 60-minute evaluation with a doctor of physical therapy — no rushing, no assembly line.</p>
          <div class="bs-item">
            <span class="bi" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
            <div><h4>Fast confirmation</h4><p>We call to confirm your appointment within one business hour.</p></div>
          </div>
          <div class="bs-item">
            <span class="bi" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
            <div><h4>No referral needed</h4><p>Direct access means you can start care right away in most cases.</p></div>
          </div>
          <div class="bs-item">
            <span class="bi" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg></span>
            <div><h4>Insurance handled</h4><p>We verify your benefits before the visit so there are no surprises.</p></div>
          </div>
          <div class="bs-item">
            <span class="bi" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <div><h4>Prefer to talk?</h4><p>Call <a href="tel:+15035550142" style="color:#fff;font-weight:800;">(503) 555-0142</a> — we're happy to help.</p></div>
          </div>
        </div>
      </div>

      <div class="col-lg-7 reveal reveal-d1">
        <form class="booking-wrap" data-validate aria-label="Appointment booking form">
          <div class="row g-3">
            <div class="col-md-6 field">
              <label class="form-label" for="bk-name">Full name</label>
              <input class="form-control" type="text" id="bk-name" name="name" placeholder="Jamie Rivera" required>
              <span class="field-error">Please enter your name.</span>
            </div>
            <div class="col-md-6 field">
              <label class="form-label" for="bk-phone">Phone</label>
              <input class="form-control" type="tel" id="bk-phone" name="phone" placeholder="(503) 555-0142" required>
              <span class="field-error">Enter a valid phone number.</span>
            </div>
            <div class="col-md-6 field">
              <label class="form-label" for="bk-email">Email</label>
              <input class="form-control" type="email" id="bk-email" name="email" placeholder="you@email.com" required>
              <span class="field-error">Enter a valid email address.</span>
            </div>
            <div class="col-md-6 field">
              <label class="form-label" for="bk-service">Condition / service</label>
              <select class="form-select" id="bk-service" name="service" required>
                <option value="">Select one…</option>
                <option>Sports injury rehab</option>
                <option>Post-surgery rehab</option>
                <option>Back &amp; neck pain</option>
                <option>Manual therapy</option>
                <option>Dry needling</option>
                <option>Sports performance</option>
                <option>Not sure yet</option>
              </select>
              <span class="field-error">Please choose a service.</span>
            </div>
            <div class="col-md-6 field">
              <label class="form-label" for="bk-date">Preferred date</label>
              <input class="form-control" type="date" id="bk-date" name="date" required>
              <span class="field-error">Please pick a date.</span>
            </div>
            <div class="col-md-6 field">
              <label class="form-label" for="bk-time">Preferred time</label>
              <select class="form-select" id="bk-time" name="time" required>
                <option value="">Select a window…</option>
                <option>Morning (7:00 – 11:00)</option>
                <option>Midday (11:00 – 14:00)</option>
                <option>Afternoon (14:00 – 17:00)</option>
                <option>Evening (17:00 – 19:00)</option>
              </select>
              <span class="field-error">Please choose a time.</span>
            </div>
            <div class="col-12 field">
              <label class="form-label" for="bk-msg">Tell us what's going on <span style="color:var(--muted);font-weight:600;">(optional)</span></label>
              <textarea class="form-control" id="bk-msg" name="message" placeholder="A quick note about your injury, symptoms or goals helps us match you with the right therapist."></textarea>
            </div>
            <div class="col-12 field">
              <label class="d-flex align-items-start gap-2" style="font-size:.9rem;color:var(--body);font-weight:600;cursor:pointer;">
                <input type="checkbox" id="bk-consent" name="consent" required style="margin-top:5px;width:18px;height:18px;accent-color:var(--teal);flex:none;">
                <span>I agree to be contacted about my appointment request.</span>
              </label>
              <span class="field-error">Please confirm to continue.</span>
            </div>
            <div class="col-12 d-grid">
              <button class="btn btn-coral btn-lg" type="submit">Request my appointment</button>
            </div>
          </div>
          <div class="form-success" tabindex="-1" role="status">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            Thanks! Your request is in — our front desk will call to confirm your slot shortly.
          </div>
          <p class="form-note mt-3">By requesting an appointment you agree to our clinic's privacy practices. We never share your information.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ============ CTA BAND ============ -->
<section class="section bg-mist">
  <div class="container">
    <div class="cta-band reveal">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <h2>Still have questions before you book?</h2>
          <p>Grab a free 15-minute phone consult with a doctor of physical therapy. We'll tell you honestly whether PT can help — no pressure, no obligation.</p>
        </div>
        <div class="col-lg-4">
          <div class="cta-actions justify-content-lg-end">
            <a class="btn btn-coral btn-lg" href="tel:+15035550142">Call now</a>
            <a class="btn btn-ghost-light btn-lg" href="/#faq">Read the FAQ</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<!-- ============ FOOTER ============ -->
<footer class="site-footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <a class="brand" href="/" aria-label="Restore Physical Therapy home">
          <span class="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 6 4-14 2 8h6"/></svg>
          </span>
          <span>
            <span class="brand-name">Restore<span>.</span></span>
            <span class="brand-sub">Physical Therapy</span>
          </span>
        </a>
        <p class="footer-about">Doctor-led physical therapy and physiotherapy helping our community move without pain — one honest, hands-on session at a time.</p>
        <div class="footer-social">
          <a href="#" aria-label="Restore on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg></a>
          <a href="#" aria-label="Restore on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="Restore on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg></a>
          <a href="#" aria-label="Restore on YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
        </div>
      </div>
      <div class="col-6 col-lg-2 footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/services#sports">Sports injuries</a></li>
          <li><a href="/services#post-op">Post-surgery rehab</a></li>
          <li><a href="/services#spine">Back &amp; neck pain</a></li>
          <li><a href="/services#manual">Manual therapy</a></li>
          <li><a href="/services#needling">Dry needling</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 footer-col">
        <h4>Clinic</h4>
        <ul>
          <li><a href="/#team">Our therapists</a></li>
          <li><a href="/#journey">How it works</a></li>
          <li><a href="/#stories">Patient stories</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="#book">Book online</a></li>
        </ul>
      </div>
      <div class="col-lg-4 footer-col">
        <h4>Visit us</h4>
        <div class="footer-contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>312 Harbor Point Drive, Suite 4<br>Portland, OR 97204</span></div>
        <div class="footer-contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+15035550142">(503) 555-0142</a></div>
        <div class="footer-contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Mon–Thu 7–19 · Fri 7–17 · Sat 8–13</span></div>
      </div>
    </div>
    <div class="footer-bottom d-flex flex-wrap justify-content-between gap-2">
      <span>&copy; 2026 Restore Physical Therapy. All rights reserved.</span>
      <span>Built with Bootstrap 5 · <a href="/#home">Back to top</a></span>
    </div>
  </div>
</footer>`;
const pageBehavior = `/* ============================================================
   RESTORE — vanilla JavaScript (no jQuery)
   One function per feature · guard clauses · IntersectionObserver
   Honours prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile navigation ---------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    function open() {
      menu.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    }
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });
    // Close when a link is tapped (mobile)
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.innerWidth < 992) close();
    });
    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    // Reset when resizing to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) close();
    });
  }

  /* ---------- Navbar shadow on scroll ---------- */
  function initNavScroll() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle("scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Active nav link (scroll spy) ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.site-nav .nav-link[href^="#"]')
    );
    if (!links.length) return;
    var sections = links
      .map(function (l) {
        var id = l.getAttribute("href");
        return id.length > 1 ? document.querySelector(id) : null;
      })
      .filter(Boolean);
    if (!sections.length) return;

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.toggle(
              "active",
              l.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { obs.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(
      function (entries, o) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Count-up statistics ---------- */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var decimals = (el.getAttribute("data-decimals") || "0") | 0;
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduceMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
      }
      var start = null;
      var dur = 1600;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      nums.forEach(run);
      return;
    }
    var obs = new IntersectionObserver(
      function (entries, o) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run(entry.target);
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach(function (n) { obs.observe(n); });
  }

  /* ---------- Testimonials slider ---------- */
  function initTestimonials() {
    var slider = document.querySelector("[data-tslider]");
    if (!slider) return;
    var track = slider.querySelector(".ttrack");
    var slides = slider.querySelectorAll(".tslide");
    var prev = slider.querySelector("[data-tprev]");
    var next = slider.querySelector("[data-tnext]");
    var dotsWrap = slider.querySelector("[data-tdots]");
    if (!track || !slides.length) return;

    var index = 0;

    function perView() {
      return window.innerWidth >= 768 ? 2 : 1;
    }
    function maxIndex() {
      return Math.max(0, slides.length - perView());
    }
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      var count = maxIndex() + 1;
      for (var i = 0; i < count; i++) {
        var b = document.createElement("button");
        b.className = "tdot";
        b.type = "button";
        b.setAttribute("aria-label", "Go to testimonial group " + (i + 1));
        (function (i) {
          b.addEventListener("click", function () { go(i); });
        })(i);
        dotsWrap.appendChild(b);
      }
    }
    function update() {
      var slideW = 100 / perView();
      track.style.transform = "translateX(-" + index * slideW + "%)";
      if (dotsWrap) {
        var dots = dotsWrap.querySelectorAll(".tdot");
        dots.forEach(function (d, i) { d.classList.toggle("active", i === index); });
      }
    }
    function go(i) {
      index = Math.max(0, Math.min(i, maxIndex()));
      update();
    }
    if (next) next.addEventListener("click", function () {
      index = index >= maxIndex() ? 0 : index + 1;
      update();
    });
    if (prev) prev.addEventListener("click", function () {
      index = index <= 0 ? maxIndex() : index - 1;
      update();
    });

    // Keyboard support
    slider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" && next) next.click();
      if (e.key === "ArrowLeft" && prev) prev.click();
    });

    // Basic touch/swipe
    var startX = 0, dragging = false;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; dragging = true; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (!dragging) return;
      dragging = false;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) { dx < 0 ? (next && next.click()) : (prev && prev.click()); }
    });

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (index > maxIndex()) index = maxIndex();
        buildDots();
        update();
      }, 150);
    });

    buildDots();
    update();
  }

  /* ---------- Service / condition filtering (services.html) ---------- */
  function initFilter() {
    var bar = document.querySelector("[data-filter-bar]");
    if (!bar) return;
    var buttons = bar.querySelectorAll(".filter-btn");
    var items = document.querySelectorAll("[data-cat]");
    if (!items.length) return;

    bar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      var cat = btn.getAttribute("data-filter");
      buttons.forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      items.forEach(function (item) {
        var match = cat === "all" || item.getAttribute("data-cat") === cat;
        item.style.display = match ? "" : "none";
      });
    });
  }

  /* ---------- Appointment / booking form validation ---------- */
  function initForms() {
    var forms = document.querySelectorAll("[data-validate]");
    if (!forms.length) return;

    forms.forEach(function (form) {
      form.setAttribute("novalidate", "novalidate");
      var success = form.querySelector(".form-success");

      function validateField(field) {
        var group = field.closest(".mb-3, .col, .field") || field.parentElement;
        var err = group ? group.querySelector(".field-error") : null;
        var valid = true;
        var isCheckable = field.type === "checkbox" || field.type === "radio";
        var value = isCheckable ? (field.checked ? "on" : "") : (field.value || "").trim();

        if (field.hasAttribute("required") && !value) valid = false;
        if (valid && field.type === "email" && value) {
          valid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
        }
        if (valid && field.type === "tel" && value) {
          valid = value.replace(/[^\\d]/g, "").length >= 7;
        }
        field.classList.toggle("is-invalid", !valid);
        field.setAttribute("aria-invalid", valid ? "false" : "true");
        if (err) err.classList.toggle("show", !valid);
        return valid;
      }

      var fields = form.querySelectorAll("input, select, textarea");
      fields.forEach(function (f) {
        f.addEventListener("blur", function () { validateField(f); });
        f.addEventListener("input", function () {
          if (f.classList.contains("is-invalid")) validateField(f);
        });
      });

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var allValid = true;
        var firstBad = null;
        fields.forEach(function (f) {
          if (f.type === "hidden") return;
          if (!validateField(f)) {
            allValid = false;
            if (!firstBad) firstBad = f;
          }
        });
        if (!allValid) {
          if (firstBad) firstBad.focus();
          return;
        }
        if (success) {
          success.classList.add("show");
          form.reset();
          fields.forEach(function (f) { f.classList.remove("is-invalid"); });
          success.focus && success.focus();
          setTimeout(function () { success.classList.remove("show"); }, 6000);
        }
      });
    });
  }

  /* ---------- Set min date on date inputs to today ---------- */
  function initDateMin() {
    var inputs = document.querySelectorAll('input[type="date"]');
    if (!inputs.length) return;
    var today = new Date().toISOString().split("T")[0];
    inputs.forEach(function (i) {
      if (!i.getAttribute("min")) i.setAttribute("min", today);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function initAccordion() {
    document.addEventListener("click", function (event) {
      var button = event.target.closest('[data-bs-toggle="collapse"]');
      if (!button) return;
      var target = document.querySelector(button.getAttribute("data-bs-target"));
      if (!target) return;
      var opening = !target.classList.contains("show");
      var parent = button.closest("[data-bs-parent]");
      if (opening && parent) {
        parent.querySelectorAll(".accordion-collapse.show").forEach(function (panel) {
          panel.classList.remove("show");
          var trigger = parent.querySelector('[data-bs-target="#' + panel.id + '"]');
          if (trigger) {
            trigger.classList.add("collapsed");
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }
      target.classList.toggle("show", opening);
      button.classList.toggle("collapsed", !opening);
      button.setAttribute("aria-expanded", String(opening));
    });
  }

  /* ---------- Init all ---------- */
    initAccordion();
    initMobileNav();
    initNavScroll();
    initScrollSpy();
    initReveal();
    initCountUp();
    initTestimonials();
    initFilter();
    initForms();
    initDateMin();
    initYear();
})();`;

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
      <Script id="services-behavior" strategy="afterInteractive">
        {pageBehavior}
      </Script>
    </>
  );
}
