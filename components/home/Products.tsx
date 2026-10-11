"use client";

import React from "react";

export default function Product() {
  return (
    <section className="vd-products" id="products">
      <div className="vd-products__banner">
        {/* Left: text overlay */}
        <div className="vd-products__copy">
          <div className="vd-products__eyebrow">Our Products</div>

          <h2 className="vd-products__heading">
            Nutraceuticals &amp; <br />
            <span>Healthcare</span> Products
          </h2>

          <p className="vd-products__description">
            A focused range of high-quality nutraceuticals and healthcare
            products from authorised suppliers, catered to the needs of
            pharmacies, healthcare retailers, wellness stores, and institutions.
          </p>
        </div>

        {/* Right: product image fills the banner */}
        <div className="vd-products__visual" aria-hidden="true" />
      </div>
    </section>
  );
}