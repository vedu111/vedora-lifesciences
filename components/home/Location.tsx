import { clinic } from "../../lib/clinic";
import { IconMail, IconPhone, IconPin } from "../icons";
import { Reveal } from "../Reveal";

const hours = [
  { name: "Monday", hours: "7:00 – 19:00", day: 1 },
  { name: "Tuesday", hours: "7:00 – 19:00", day: 2 },
  { name: "Wednesday", hours: "7:00 – 19:00", day: 3 },
  { name: "Thursday", hours: "7:00 – 19:00", day: 4 },
  { name: "Friday", hours: "7:00 – 17:00", day: 5 },
  { name: "Saturday", hours: "8:00 – 13:00", day: 6 },
  { name: "Sunday", hours: "Closed", day: 0 },
];

export function Location() {
  const today = new Date().getDay();

  return (
    <section className="section bg-sand" id="location">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-4">
            <Reveal className="loc-card">
              <span className="eyebrow">Clinic hours</span>
              <table className="hours-table">
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.name} className={row.day === today ? "today" : undefined}>
                      <td>{row.name}</td>
                      <td>{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
          <div className="col-lg-4">
            <Reveal className="loc-card reveal-d1">
              <span className="eyebrow">Find us</span>
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconPin />
                </span>
                <div>
                  <div className="lt">Address</div>
                  <p>
                    {clinic.addressLine1}
                    <br />
                    {clinic.addressLine2}
                  </p>
                </div>
              </div>
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <div className="lt">Phone</div>
                  <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
                </div>
              </div>
              <div className="loc-line">
                <span className="li" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <div className="lt">Email</div>
                  <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-4">
            <Reveal className="map-embed reveal-d2">
              <div>
                <div className="map-pin" aria-hidden="true">
                  <IconPin />
                </div>
                <p className="mb-3" style={{ color: "var(--teal-800)", fontWeight: 700 }}>
                  Free parking · Ground-floor, wheelchair accessible
                </p>
                <a className="btn btn-teal" href={clinic.mapsUrl} target="_blank" rel="noopener">
                  Get directions
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
