"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/* ── Owner Screens ─────────────────────────────────────────── */

function OwnerScreen1() {
  return (
    <div className="phone-screen">
      <div className="ps-topbar">
        <span className="ps-logo"><span style={{ color: "var(--orange)" }}>B</span>aatwa</span>
        <span className="ps-wallet-row">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="1" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M1 7h14" stroke="currentColor" strokeWidth="1.2" />
            <rect x="10" y="8.5" width="3" height="2.5" rx="1" fill="currentColor" opacity="0.5" />
            <path d="M5 4V2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          ₹12,400
        </span>
      </div>
      <button className="ps-btn-primary">+ Post a new trip</button>
      <p className="ps-label-muted">Active trips</p>
      <div className="ps-trip-card">
        <div className="ps-trip-info">
          <span className="ps-trip-route">Pune → Nashik</span>
          <span className="ps-trip-sub">Ramesh K · on route</span>
        </div>
        <span className="ps-pill-green">Live</span>
      </div>
    </div>
  );
}

function OwnerScreen2() {
  return (
    <div className="phone-screen">
      <p className="ps-screen-title">Review driver</p>
      <div className="ps-driver-row">
        <span className="ps-avatar-green">RK</span>
        <div className="ps-driver-info">
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
            <span className="ps-driver-name">Ramesh Kumar</span>
            <span className="ps-pill-amber">Gold</span>
          </div>
          <span className="ps-driver-meta">★ 4.8 · 62 trips · 0 cancellations</span>
        </div>
      </div>
      <div className="ps-trust-chips">
        <span className="ps-chip">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="6" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.2" />
            <line x1="9.5" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="9.5" y1="9" x2="12" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          Licence verified
        </span>
        <span className="ps-chip">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2L13 4.5V8C13 11 10.5 13.75 8 14.5C5.5 13.75 3 11 3 8V4.5L8 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
            <path d="M5.5 8L7.25 9.75L10.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          KYC done
        </span>
      </div>
      <div className="ps-action-row">
        <button className="ps-btn-outline">Decline</button>
        <button className="ps-btn-primary ps-btn-flex">Accept driver</button>
      </div>
    </div>
  );
}

function OwnerScreen3() {
  return (
    <div className="phone-screen">
      <p className="ps-screen-title">Live tracking</p>
      <div className="ps-map-placeholder">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#8a929e" }}>
          <path d="M10 2C6.69 2 4 4.69 4 8C4 13 10 18 10 18C10 18 16 13 16 8C16 4.69 13.31 2 10 2Z" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span>Live map · truck moving</span>
      </div>
      <div className="ps-data-rows">
        <div className="ps-data-row">
          <span className="ps-data-label">Distance left</span>
          <span className="ps-data-value">86 km</span>
        </div>
        <div className="ps-data-row">
          <span className="ps-data-label">Waiting at unload</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}>
            <span className="ps-data-value ps-amber">1h 12m</span>
            <span className="ps-data-note">(2h free)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnerScreen4() {
  return (
    <div className="phone-screen">
      <p className="ps-screen-title">Trip complete — confirm to pay</p>
      <div className="ps-photo-grid">
        {["Front", "Odometer"].map((label) => (
          <div key={label} className="ps-photo-tile">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#8a929e" }}>
              <rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M13 5V3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="ps-data-rows">
        <div className="ps-data-row">
          <span className="ps-data-label">Gig amount</span>
          <span className="ps-data-value">₹6,800</span>
        </div>
        <div className="ps-data-row">
          <span className="ps-data-label">Detention (owner site)</span>
          <span className="ps-data-value">₹0</span>
        </div>
      </div>
      <button className="ps-btn-green">✓ Confirm &amp; release ₹6,800</button>
    </div>
  );
}

/* ── Driver Screens ────────────────────────────────────────── */

function DriverScreen1() {
  return (
    <div className="phone-screen phone-screen--driver">
      <div className="ps-topbar">
        <span className="ps-hindi ps-topbar-title">आपके पास काम</span>
        <span className="ps-wallet-row ps-green">₹8,200</span>
      </div>
      <div className="ps-gig-card">
        <p className="ps-gig-route">Pune → Nashik</p>
        <div className="ps-gig-chips">
          <span className="ps-chip">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="4" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="12" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" />
              <line x1="6.5" y1="8" x2="9.5" y2="8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M8.5 6L10.5 8L8.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            210 km
          </span>
          <span className="ps-chip">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 4.5V8L10.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="ps-hindi">1 दिन</span>
          </span>
        </div>
        <p className="ps-gig-amount">₹6,800</p>
        <button className="ps-btn-primary ps-btn-driver-view"><span className="ps-hindi">देखें</span></button>
      </div>
    </div>
  );
}

function DriverScreen2() {
  return (
    <div className="phone-screen phone-screen--driver">
      <p className="ps-screen-title ps-hindi">पूरा रास्ता देखें</p>
      <div className="ps-route-rows">
        <div className="ps-route-row">
          <span className="ps-route-label ps-hindi">दूरी</span>
          <span className="ps-route-val">210 km</span>
        </div>
        <div className="ps-route-row">
          <span className="ps-route-label ps-hindi">दिन</span>
          <span className="ps-route-val ps-hindi">1 दिन</span>
        </div>
        <div className="ps-route-row">
          <span className="ps-route-label ps-hindi">घाट सेक्शन</span>
          <span className="ps-route-val ps-amber-val ps-hindi">हाँ — Igatpuri</span>
        </div>
        <div className="ps-route-row">
          <span className="ps-route-label ps-hindi">माल</span>
          <span className="ps-route-val">Steel · 9 टन</span>
        </div>
        <div className="ps-route-row">
          <span className="ps-route-label ps-hindi">डीज़ल/टोल</span>
          <span className="ps-route-val ps-green-val ps-hindi">Owner देगा</span>
        </div>
      </div>
      <div className="ps-voice-strip">
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect x="6" y="2" width="6" height="9" rx="3" stroke="currentColor" strokeWidth="1.3" />
          <path d="M3 9C3 12.31 5.69 15 9 15C12.31 15 15 12.31 15 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <line x1="9" y1="15" x2="9" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span className="ps-hindi">रास्ता सुनें (आवाज़ में)</span>
      </div>
      <button className="ps-btn-primary ps-btn-confirm-route">
        <span className="ps-hindi">✓ मैंने रास्ता देख लिया — काम लूँ</span>
      </button>
    </div>
  );
}

function DriverScreen3() {
  return (
    <div className="phone-screen phone-screen--driver">
      <p className="ps-screen-title ps-hindi">गाड़ी की फ़ोटो लें</p>
      <p className="ps-screen-sub ps-hindi">अपनी सुरक्षा के लिए — झूठा इल्ज़ाम नहीं लगेगा</p>
      <div className="ps-photo-grid">
        <div className="ps-photo-tile">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#8a929e" }}>
            <rect x="2" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="10" cy="11" r="3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="ps-hindi">आगे</span>
        </div>
        <div className="ps-photo-tile ps-photo-done">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#0F6E56" }}>
            <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ps-hindi" style={{ color: "#0F6E56" }}>पीछे ✓</span>
        </div>
        <div className="ps-photo-tile">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#8a929e" }}>
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
            <path d="M10 6V10L13 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="ps-hindi">मीटर</span>
        </div>
        <div className="ps-photo-tile">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: "#8a929e" }}>
            <ellipse cx="10" cy="14" rx="6" ry="3" stroke="currentColor" strokeWidth="1.3" />
            <path d="M4 14V8C4 6 5 5 7 4.5L10 4L13 4.5C15 5 16 6 16 8V14" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          <span className="ps-hindi">डीज़ल</span>
        </div>
      </div>
      <button className="ps-btn-primary">
        <span className="ps-hindi">आगे बढ़ें</span>
      </button>
    </div>
  );
}

function DriverScreen4() {
  return (
    <div className="phone-screen phone-screen--driver ps-trip-active">
      <p className="ps-trip-status ps-hindi">Pune → Nashik · चालू</p>
      <p className="ps-trip-km ps-hindi">86 km बाकी</p>
      <div className="ps-escrow-line">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ color: "#0F6E56" }}>
          <rect x="2" y="7" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.3" />
          <path d="M5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="8" cy="11" r="1.5" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span className="ps-hindi">₹6,800 सुरक्षित — काम पूरा होते ही मिलेगा</span>
      </div>
      <button className="ps-btn-green ps-btn-arrived">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 3V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 3L14.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 3L5.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="6" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="ps-hindi">पहुँच गया — फ़ोटो लें</span>
      </button>
      <div className="ps-sos-row">
        <button className="ps-btn-outline ps-btn-help">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 4V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="8" cy="11" r="1" fill="currentColor" />
          </svg>
          <span className="ps-hindi">मदद</span>
        </button>
        <button className="ps-btn-sos">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 4V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="8" cy="11.5" r="1" fill="currentColor" />
          </svg>
          SOS
        </button>
      </div>
    </div>
  );
}

/* ── Phone frame ───────────────────────────────────────────── */

function PhoneFrame({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="phone-wrapper">
      <div className="phone-frame">
        <div className="phone-notch" />
        {children}
      </div>
      <p className="phone-caption">{caption}</p>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────── */

export default function AppPreviewSection() {
  const [tab, setTab] = useState<"owner" | "driver">("owner");

  return (
    <section className="app-preview" id="app-preview">
      <div className="app-preview-inner">
        <Reveal>
          <p className="section-eyebrow">See it in action</p>
          <h2 className="section-title">Two apps. One simple flow.</h2>
          <p className="app-preview-intro">
            Owners stay in control. Drivers stay on the road. Both built to be dead simple.
          </p>
        </Reveal>

        {/* Tab toggle (mobile) */}
        <Reveal delay={1}>
          <div className="app-preview-tabs">
            <button
              className={`app-tab-btn${tab === "owner" ? " active" : ""}`}
              onClick={() => setTab("owner")}
            >
              For owners
            </button>
            <button
              className={`app-tab-btn${tab === "driver" ? " active" : ""}`}
              onClick={() => setTab("driver")}
            >
              For drivers
            </button>
          </div>
        </Reveal>

        <div className="app-preview-cols">
          {/* Owner column */}
          <div className={`app-preview-col${tab === "driver" ? " app-col-hidden" : ""}`}>
            <p className="app-col-label">Owner app</p>
            <div className="phone-row">
              <PhoneFrame caption="1 · Post a trip"><OwnerScreen1 /></PhoneFrame>
              <PhoneFrame caption="2 · Pick your driver"><OwnerScreen2 /></PhoneFrame>
              <PhoneFrame caption="3 · Track live"><OwnerScreen3 /></PhoneFrame>
              <PhoneFrame caption="4 · Confirm & pay"><OwnerScreen4 /></PhoneFrame>
            </div>
            <p className="app-col-caption">
              Post a trip, pick your driver, watch the truck live, and release payment only after safe delivery — with the detention clock always in view.
            </p>
          </div>

          {/* Driver column */}
          <div className={`app-preview-col${tab === "owner" ? " app-col-hidden" : ""}`}>
            <p className="app-col-label">Driver app</p>
            <div className="phone-row">
              <PhoneFrame caption="1 · Nearby gigs"><DriverScreen1 /></PhoneFrame>
              <PhoneFrame caption="2 · Full route"><DriverScreen2 /></PhoneFrame>
              <PhoneFrame caption="3 · Handover photos"><DriverScreen3 /></PhoneFrame>
              <PhoneFrame caption="4 · On the trip"><DriverScreen4 /></PhoneFrame>
            </div>
            <p className="app-col-caption">
              Drivers see the full route before they accept, take handover photos for their own protection, and watch their locked payment the whole way. Built in Hindi, for one-thumb use on any phone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
