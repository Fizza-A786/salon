"use client";
import React from "react";
import sideGirl from "@/assets/bg3.png";

// ─── Data ────────────────────────────────────────────────────────────────────

const issueCards = [
  {
    title: "Missed Calls During Busy Hours",
    desc: "Missed calls uncain during busy hours",
  },
  {
    title: "Clients Hung Up →Lost Revenue",
    desc: "Clients hung up revenue in plants",
  },
  {
    title: "Double Bookings & Scheduling Errors",
    desc: "Problem bookings & enrie scheduling errors",
  },
  {
    title: "No Follow-Up with Clients",
    desc: "No follow-up with liews and clients",
  },
  {
    title: "Messages & DMs Ignored",
    desc: "Mersage & DMs data professional messages",
  },
  {
    title: "No Centralized Customer Data",
    desc: "Centralized professional, minimal accessories",
  },
];

const analyticsStats = [
  { value: "30%", label: "calls unanswered" },
  { value: "30%", label: "never call back" },
  { value: "$10,00s", label: "lost every month" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AlertIcon() {
  return (
    <div
      style={{
        width: 43,
        height: 43,
        minWidth: 43,
        borderRadius: "50%",
        background: "#FDDAD7",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          transform: "rotate(180deg)",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="#F05855" />
        <rect x="11" y="7" width="2" height="2" rx="1" fill="white" />
        <rect x="11" y="11" width="2" height="6" rx="1" fill="white" />
      </svg>
    </div>
  );
}

function IssueCard({ title, desc }) {
  return (
    <div
      style={{
        position: "relative",
        width: "239.52px",
        height: "177px",
        flexShrink: 0,
        filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.15))",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#E4F8F1",
          border: "0.5px solid #3C995B",
          borderRadius: "16px",
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 12,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "178.41px",
        }}
      >
        <AlertIcon />
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: "120%",
            color: "#000000",
            width: "100%",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "16px",
            color: "#484848",
            width: 139,
          }}
        >
          {desc}
        </span>
      </div>
    </div>
  );
}

function AnalyticsBar() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "67px",
        filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.15))",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#F0FAF7",
          border: "0.5px solid #3C995B",
          borderRadius: "16px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 21,
          top: 11,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          height: 46,
          right: 21,
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "23px",
            color: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          Analytics
        </span>

        {analyticsStats.map((stat, i) => (
          <React.Fragment key={i}>
            <div
              style={{
                width: 1,
                height: 39,
                background: "rgba(0,0,0,0.1)",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                height: 46,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  lineHeight: "100%",
                  color: "#000000",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                  fontSize: 16,
                  lineHeight: "18px",
                  color: "#000000",
                }}
              >
                {stat.label}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ProblemSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

        .problem-section-root {
          width: 100%;
          background: #FFFFFF;
          padding: 60px 24px;
          box-sizing: border-box;
        }

        .problem-container {
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        }

        .problem-title {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 36px;
          line-height: 120%;
          color: #000000;
          text-align: center;
          margin: 0;
        }

        .problem-inner-layout {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: stretch; /* Height card aur image wrapper dono ki same karne ke liye */
          justify-content: center;
          gap: 40px;
          position: relative;
        }

        .problem-card-panel {
          width: 798px;
          position: relative;
          z-index: 2;
        }

        .problem-right-image-wrap {
          width: 440px;
          display: flex;
          align-items: flex-end; /* Image ko box ke baseline par touch karne ke liye */
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        .problem-right-image-wrap img {
          width: 100%;
          height: 100%; /* Parent ki puri height fill karegi */
          object-fit: cover; /* Contain ki jagah Cover jo frame fill rakhegi */
          object-position: center 15%; /* Height balance fix karne ke liye aur cutout frame maintain karne k liye */
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .problem-inner-layout {
            flex-direction: column !important;
            align-items: center !important;
            gap: 50px;
          }
          .problem-right-image-wrap {
            width: 380px;
            height: 450px;
          }
        }

        @media (max-width: 840px) {
          .problem-card-panel {
            width: 100% !important;
            max-width: 520px;
          }
          .problem-cards-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
          }
          .analytics-bar-wrap {
            display: none !important;
          }
        }
      `}</style>

      <section className="problem-section-root">
        <div className="problem-container">
          
          {/* Layout wrapper */}
          <div className="problem-inner-layout">
            
            {/* ── Left: Card Panel ── */}
            <div className="problem-card-panel">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%", /* Pure container row height fill rakhega layout match k liye */
                  background: "rgba(228,248,241,0.3)",
                  border: "0.5px solid #3C995B",
                  borderRadius: 24,
                  backdropFilter: "blur(19px)",
                  WebkitBackdropFilter: "blur(19px)",
                  padding: "32px 24px 24px",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                  
                  {/* Row 1 */}
                  <div
                    className="problem-cards-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 16,
                      width: "100%",
                    }}
                  >
                    {issueCards.slice(0, 3).map((card, i) => (
                      <IssueCard key={i} title={card.title} desc={card.desc} />
                    ))}
                  </div>

                  {/* Row 2 */}
                  <div
                    className="problem-cards-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 16,
                      width: "100%",
                    }}
                  >
                    {issueCards.slice(3, 6).map((card, i) => (
                      <IssueCard key={i} title={card.title} desc={card.desc} />
                    ))}
                  </div>

                  {/* Analytics Bar */}
                  <div className="analytics-bar-wrap" style={{ width: "100%", marginTop: 8 }}>
                    <AnalyticsBar />
                  </div>
                </div>

                {/* Disclaimer */}
                <p
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 13,
                    lineHeight: "16px",
                    textAlign: "center",
                    color: "#666666",
                    margin: "24px 0 0 0",
                    width: "100%",
                  }}
                >
                  *Disclaimer are susponsible to respect in the ensuring any environmenial a modern Al vibe.
                </p>
              </div>
            </div>

            {/* ── Right: Woman Image  ── */}
            <div className="problem-right-image-wrap">
              <img
                src={sideGirl}
                alt="Dental practice receptionist"
              />
            </div>

            {/* ── Decorative Background Dots ── */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1, 
              }}
            >
              <div style={{ position: "absolute", width: 11, height: 11, left: "2%", top: "80%", borderRadius: "50%", background: "#95D8C7" }} />
              <div style={{ position: "absolute", width: 13, height: 13, left: "1%", top: "15%", borderRadius: "50%", background: "#96DBC8" }} />
              <div style={{ position: "absolute", width: 12, height: 12, left: "55%", top: "5%", borderRadius: "50%", background: "#94D9C6" }} />
              <div style={{ position: "absolute", width: 7, height: 7, left: "62%", top: "2%", borderRadius: "50%", background: "#CEF7EC" }} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}