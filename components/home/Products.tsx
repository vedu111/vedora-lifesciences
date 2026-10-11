"use client";

import React from "react";

const productCategories = [
  {
    number: "01",
    title: "Vitamins",
    description: "Vitamin D3, Vitamin B12, Vitamin C and essential vitamin supplements.",
    color: "#0b74d1",
    icon: "✳",
  },
  {
    number: "02",
    title: "Minerals",
    description: "Calcium, iron, zinc and other essential mineral supplements.",
    color: "#1597d4",
    icon: "◈",
  },
  {
    number: "03",
    title: "Multivitamins",
    description: "Daily multivitamin formulations for nutritional support.",
    color: "#7562e8",
    icon: "✿",
  },
  {
    number: "04",
    title: "Omega-3",
    description: "Fish oil and other eligible omega-3 nutritional products.",
    color: "#079eb8",
    icon: "≈",
  },
  {
    number: "05",
    title: "Bone & Joint Health",
    description: "Calcium combinations and selected joint-health supplements.",
    color: "#079b80",
    icon: "◇",
  },
  {
    number: "06",
    title: "Gut Health",
    description: "Eligible probiotic and prebiotic healthcare products.",
    color: "#e84e91",
    icon: "◎",
  },
  {
    number: "07",
    title: "General Wellness",
    description: "Selected wellness and nutritional supplement products.",
    color: "#18a66b",
    icon: "✦",
  },
  {
    number: "08",
    title: "Women's Nutrition",
    description: "Selected nutritional supplements for women's wellness.",
    color: "#db5797",
    icon: "♀",
  },
];

export default function Product() {
  return (
    <section className="vd-products" id="products">
      <style>{`
        .vd-products {
          --vd-blue: #0868c9;
          --vd-navy: #0b1e3d;
          --vd-text: #536986;
          --vd-border: #d8e8f8;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 90px 24px 100px;
          color: var(--vd-navy);
          background: #f2f9ff;
          font-family: inherit;
        }

        .vd-products *,
        .vd-products *::before,
        .vd-products *::after {
          box-sizing: border-box;
        }

        .vd-products__container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .vd-products__intro {
          max-width: 800px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .vd-products__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          color: var(--vd-blue);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .vd-products__eyebrow::before {
          content: "";
          display: block;
          width: 36px;
          height: 3px;
          background: linear-gradient(90deg, #0870d5, #10b99a);
        }

        .vd-products__heading {
          margin: 0 0 18px;
          color: var(--vd-navy);
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .vd-products__heading span {
          color: var(--vd-blue);
        }

        .vd-products__description {
          max-width: 740px;
          margin: 0 auto;
          color: var(--vd-text);
          font-size: 17px;
          line-height: 1.85;
        }

        .vd-products__showcase {
          position: relative;
          display: flex;
          min-height: 410px;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: 48px;
          overflow: hidden;
          border: 1px solid rgba(190, 220, 246, 0.85);
          border-radius: 26px;
          background-color: #eaf6ff;
          background-image: url("/img/product-bg.png");
          background-position: center 62%;
          background-size: cover;
          background-repeat: no-repeat;
          box-shadow: 0 20px 55px rgba(18, 64, 105, 0.09);
        }

        .vd-products__showcase::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(240, 249, 255, 0.02) 45%,
            rgba(240, 249, 255, 0.15) 100%
          );
          pointer-events: none;
        }

        .vd-products__showcase-caption {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 16px 20px;
          color: #123d68;
          background: rgba(255, 255, 255, 0.88);
          border-top: 1px solid rgba(210, 230, 247, 0.9);
          backdrop-filter: blur(10px);
          font-size: 14px;
          font-weight: 700;
          text-align: center;
        }

        .vd-products__showcase-caption span {
          color: var(--vd-blue);
        }

        .vd-products__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .vd-products__card {
          position: relative;
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          padding: 26px 23px 25px;
          border: 1px solid var(--vd-border);
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 5px 20px rgba(22, 65, 105, 0.035);
          transition: transform 180ms ease, box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .vd-products__card:hover {
          transform: translateY(-5px);
          border-color: #a9d2f8;
          box-shadow: 0 15px 35px rgba(22, 65, 105, 0.10);
        }

        .vd-products__icon {
          display: flex;
          width: 54px;
          height: 54px;
          flex: 0 0 54px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 15px;
          background: var(--vd-icon-bg);
          color: var(--vd-icon-color);
          font-size: 28px;
          font-weight: 600;
        }

        .vd-products__number {
          position: absolute;
          top: 25px;
          right: 22px;
          color: #a4bad0;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .vd-products__card-title {
          margin: 0 0 10px;
          color: var(--vd-navy);
          font-size: 18px;
          font-weight: 750;
          line-height: 1.4;
        }

        .vd-products__card-description {
          margin: 0;
          color: var(--vd-text);
          font-size: 14px;
          line-height: 1.8;
        }

        .vd-products__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 48px;
          padding: 30px 34px;
          border: 1px solid var(--vd-border);
          border-radius: 20px;
          background: #fff;
        }

        .vd-products__bottom-title {
          margin: 0 0 8px;
          color: var(--vd-navy);
          font-size: 21px;
          font-weight: 750;
        }

        .vd-products__bottom-text {
          margin: 0;
          color: var(--vd-text);
          font-size: 14px;
          line-height: 1.8;
        }

        .vd-products__button {
          display: inline-flex;
          flex-shrink: 0;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 14px 24px;
          border: 1px solid var(--vd-blue);
          border-radius: 11px;
          background: var(--vd-blue);
          color: #fff;
          font: inherit;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 180ms ease, transform 180ms ease;
        }

        .vd-products__button:hover {
          transform: translateY(-2px);
          background: #0756a6;
          color: #fff;
        }

        @media (max-width: 1000px) {
          .vd-products {
            padding: 70px 22px 75px;
          }

          .vd-products__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .vd-products__showcase {
            min-height: 330px;
          }
        }

        @media (max-width: 600px) {
          .vd-products {
            padding: 54px 16px 60px;
          }

          .vd-products__intro {
            margin-bottom: 30px;
          }

          .vd-products__heading {
            letter-spacing: -0.7px;
          }

          .vd-products__description {
            font-size: 15px;
            line-height: 1.75;
          }

          .vd-products__showcase {
            min-height: 230px;
            margin-bottom: 30px;
            border-radius: 16px;
            background-position: center center;
          }

          .vd-products__showcase-caption {
            gap: 7px;
            padding: 12px 8px;
            font-size: 11px;
          }

          .vd-products__grid {
            gap: 12px;
          }

          .vd-products__card {
            padding: 19px 14px;
            border-radius: 13px;
          }

          .vd-products__icon {
            width: 44px;
            height: 44px;
            flex-basis: 44px;
            margin-bottom: 15px;
            border-radius: 12px;
            font-size: 23px;
          }

          .vd-products__number {
            top: 19px;
            right: 13px;
            font-size: 10px;
          }

          .vd-products__card-title {
            font-size: 15px;
          }

          .vd-products__card-description {
            font-size: 12px;
            line-height: 1.7;
          }

          .vd-products__bottom {
            align-items: flex-start;
            flex-direction: column;
            margin-top: 30px;
            padding: 23px 19px;
          }

          .vd-products__bottom-title {
            font-size: 19px;
          }

          .vd-products__button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vd-products__card,
          .vd-products__button {
            transition: none;
          }
        }
      `}</style>

      <div className="vd-products__container">
        <header className="vd-products__intro">
          <div className="vd-products__eyebrow">
            Our Product Categories
          </div>

          <h2 className="vd-products__heading">
            Healthcare products for
            <br />
            <span>everyday wellness.</span>
          </h2>

          <p className="vd-products__description">
            VEDORA LIFESCIENCES is building a focused portfolio of
            nutraceuticals and healthcare products for pharmacies, healthcare
            retailers, wellness stores and eligible institutional customers.
          </p>
        </header>

        <div
          className="vd-products__showcase"
          role="img"
          aria-label="Nutraceutical supplement bottles displayed in a healthcare distribution warehouse"
        >
        </div>

        <div className="vd-products__grid">
          {productCategories.map((product) => (
            <article className="vd-products__card" key={product.number}>
              <span className="vd-products__number">
                {product.number}
              </span>

              <div
                className="vd-products__icon"
                style={
                  {
                    "--vd-icon-color": product.color,
                    "--vd-icon-bg": `${product.color}14`,
                  } as React.CSSProperties
                }
                aria-hidden="true"
              >
                {product.icon}
              </div>

              <h3 className="vd-products__card-title">
                {product.title}
              </h3>

              <p className="vd-products__card-description">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}