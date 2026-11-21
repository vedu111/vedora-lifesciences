
import { IconMail, IconPhone, IconPin } from "../icons";
import { Reveal } from "../Reveal";

export function Location() {
  const address =
    "Room No.05, SHARDDHA CHS, 2ND FLOOR, PLOT NO 25, SEC 13, Kalamboli Node, Raigarh, Panvel, Maharashtra - 410218";

  const phone = "8928945887";
  const email = "vedoralifesciencesin@gmail.com";

  const mapsUrl =
    "https://www.google.com/maps/place/Sharddha+chs,plot+no+25+sector+13,Kalamboli+panvel/@19.0353589,73.0974459,1647m/data=!3m1!1e3!4m6!3m5!1s0x3be7e9007a67b0c3:0x10bbc086fabfc66c!8m2!3d19.03544!4d73.10045!16s%2Fg%2F11yr_hzt5c?entry=ttu";

  return (
    <section className="section bg-sand" id="location">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Find Us */}
          <div className="col-lg-5">
            <Reveal className="loc-card">
              <span className="eyebrow">Find Us</span>

              {/* Address */}
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconPin />
                </span>
                <div>
                  <div className="lt">Address</div>
                  <p className="loc-address">
                    Room No.05, SHARDDHA CHS, 2ND FLOOR,
                    <br />
                    PLOT NO 25, SEC 13, Kalamboli Node,
                    <br />
                    Raigarh, Panvel, Maharashtra - 410218
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <div className="lt">Phone</div>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <div className="lt">Email</div>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>

              {/* Get Directions below email */}
              <div className="mt-4">
                <a
                  className="btn btn-teal"
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </div>
            </Reveal>
          </div>

          {/* Google Maps */}
          <div className="col-lg-7">
            <Reveal className="map-embed reveal-d1">
              <div className="mb-3">
                <div className="map-pin" aria-hidden="true">
                  <IconPin />
                </div>

                <p
                  className="mb-3"
                  style={{
                    color: "var(--teal-800)",
                    fontWeight: 700,
                  }}
                >
                  Sharddha CHS, Plot No. 25, Sector 13,
                  Kalamboli, Panvel, Maharashtra - 410218
                </p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=19.03544,73.10045&z=16&output=embed"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  borderRadius: "12px",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Sharddha CHS Kalamboli location"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
