/* ============================================================
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
          valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (valid && field.type === "tel" && value) {
          valid = value.replace(/[^\d]/g, "").length >= 7;
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

  /* ---------- Init all ---------- */
  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();
