"use client";
import React from "react";
import coinDrain from "@/assets/bg3.png";

const stats = [
  { value: "87", label: "Missed Calls ( Last 7 Days)", red: false },
  { value: "$18,500", label: "Estimated Lost Production", red: false },
  { value: "30%", label: "Unanswered Calls", red: true },
  { value: "25%", label: "Never Call Back", red: true },
];

// Content ko static array mein break kar diya taake exact design match ho aur logic break na ho
const issueCardsContent = [
  {
    topTitle: "Missed Calls = Lost Revenue",
    topSub: "Avg $1,200",
    bottomTitle: "Front Desk Overload Over",
    bottomSub: "Avg $1,200 per new patient lost",
  },
  {
    topTitle: "Front Desk Overload",
    topSub: "Over 4 hour daily on repetitive tasks",
    bottomTitle: "Appointment No-Shows",
    bottomSub: "15% loss of daily capacity",
  },
  {
    topTitle: "Poor Follow-Up on",
    topSub: "High loss of daily capacity",
    bottomTitle: "Poor Follow-Up on High-Value Treatments",
    bottomSub: "$50,000+ annual loss from unaccepted plans",
  },
  {
    topTitle: "Insurance Confusion",
    topSub: "20% of front desk time wasted",
    bottomTitle: "Marketing Leakage",
    bottomSub: "Low ROI due to uncaptured leads",
  },
];

function StatCard({ value, label, red }) {
  return (
    <div
      style={{
        position: "relative",
        flex: "1 1 200px",
        minWidth: "160px",
        height: "113px",
        filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.25))",
        backdropFilter: "blur(19px)",
        WebkitBackdropFilter: "blur(19px)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(241,238,238,0.3) 100%)",
          border: "0.5px solid rgba(255,255,255,0.14)",
          borderRadius: "16px",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          padding: "0 12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "100%",
            textAlign: "center",
            color: red ? "#E51619" : "#000000",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "18px",
            textAlign: "center",
            color: "#484848",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function AlertIcon() {
  return (
    <div
      style={{
        width: "36px",
        height: "36px",
        minWidth: "36px",
        background: "rgba(255, 218, 218, 0.6)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 21h20L12 3z" fill="#FF0000" />
        <rect x="11" y="10" width="2" height="5" rx="1" fill="white" />
        <rect x="11" y="16.5" width="2" height="2" rx="1" fill="white" />
      </svg>
    </div>
  );
}

function IssueCard({ topTitle, topSub, bottomTitle, bottomSub }) {
  return (
    <div
      style={{
        position: "relative",
        flex: "1 1 245px", /* Optimized width to fit inside 100% desktop layouts beautifully */
        minWidth: "235px",
        maxWidth: "280px",
        minHeight: "175px",
        filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.04))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255, 255, 255, 0.45)",
          border: "1.5px solid rgba(255, 255, 255, 0.6)",
          borderRadius: "24px",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "20px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
          gap: "10px",
        }}
      >
        {/* Top Block */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "10px" }}>
          <AlertIcon />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "120%", color: "#000000" }}>
              {topTitle}
            </span>
            <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "130%", color: "#555555" }}>
              {topSub}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "rgba(0,0,0,0.06)", margin: "2px 0" }} />

        {/* Bottom Block */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "10px" }}>
          <AlertIcon />
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "120%", color: "#000000" }}>
              {bottomTitle}
            </span>
            <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "130%", color: "#555555" }}>
              {bottomSub}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RevenueLeakageSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section
        style={{
          fontFamily: "'Roboto', sans-serif",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          className="responsive-section-container"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1440px",
            background: "#FFFFFF",
            boxSizing: "border-box",
          }}
        >
          {/* Background blobs */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 1104, height: 825, left: "calc(50% - 552px - 371px)", top: -181, background: "rgba(163,180,199,0.78)", filter: "blur(80px)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", width: 975, height: 729, left: "calc(50% - 487.5px + 340.5px)", top: 186, background: "rgba(163,180,199,0.64)", filter: "blur(80px)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", width: 855, height: 639, left: "calc(50% - 427.5px + 473.5px)", top: -153, background: "rgba(163,213,194,0.62)", filter: "blur(80px)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", width: 855, height: 639, left: "calc(50% - 427.5px - 461.5px)", top: 301, background: "rgba(163,213,194,0.57)", filter: "blur(80px)", borderRadius: "50%" }} />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
              width: "100%",
            }}
          >

            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "23px",
                width: "100%",
                maxWidth: "1041px",
                justifyContent: "center",
              }}
            >
              {stats.map((s, i) => <StatCard key={i} {...s} />)}
            </div>

            {/* Middle Row: Badge + Coin */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1290px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "257px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "486px",
                  maxWidth: "90%",
                  height: "257px",
                  flexShrink: 0,
                  filter: "drop-shadow(0px 22px 22px rgba(241,12,6,0.3))",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(166.42deg, rgba(219,202,204,0.9) 14.36%, rgba(220,57,54,0.9) 87.89%)",
                    border: "2px solid #FFFFFF",
                    borderRadius: "20px 20px 84px 84px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    width: "181px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "20px",
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "21px",
                    textAlign: "center",
                    color: "#000000",
                    whiteSpace: "nowrap",
                  }}
                >
                  Analytics Dashboard
                </span>
                <div
                  style={{
                    position: "absolute",
                    left: "13px",
                    right: "13px",
                    top: "87px",
                    height: "148px",
                    background: "linear-gradient(111.83deg, #C68385 18.41%, #DC3936 59.58%)",
                    border: "1px solid rgba(255,255,255,0.29)",
                    borderRadius: "100px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
                    backdropFilter: "blur(19px)",
                    WebkitBackdropFilter: "blur(19px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(22px, 3vw, 32px)",
                      lineHeight: "120%",
                      textAlign: "center",
                      color: "#FFFFFF",
                    }}
                  >
                    CRITCAL REVENUE<br />LEAKAGE
                  </span>
                </div>
              </div>

              <img
                src={coinDrain}
                alt="coin drain"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "274px",
                  height: "274px",
                  objectFit: "contain",
                  display: "block",
                }}
                className="rl-coin"
              />
            </div>

            {/* ─── FIXED ROW TRACK: SAFE FILL NO-CLIP ─── */}
            <div
              style={{
                width: "100%",
                maxWidth: "1290px",
                overflowX: "auto", 
                boxSizing: "border-box",
                padding: "0 10px 15px",
              }}
              className="no-scrollbar"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: "16px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                className="cards-inner-row"
              >
                {issueCardsContent.map((card, i) => <IssueCard key={i} {...card} />)}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .responsive-section-container {
          padding: 34px 40px 60px;
        }
        @media (max-width: 1024px) {
          .cards-inner-row {
            width: max-content !important; /* Touch/Scroll safe context for smaller monitors */
          }
        }
        @media (max-width: 900px) {
          .rl-coin { display: none !important; }
          .responsive-section-container {
            padding: 24px 16px 40px !important;
          }
        }
        @media (min-width: 1100px) {
          .cards-inner-row {
            justify-content: center !important; /* Perfect align center on 100% desktop viewport */
          }
        }
      `}</style>
    </>
  );
}