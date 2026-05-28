"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { translations, type Lang } from "@/translations";

/* ── Static icon arrays (no translatable text) ─────────────── */

function IconIdentity() {
  return (
    <svg className="trust-card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="11" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="18" y1="13" x2="26" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="21" x2="22" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCompetence() {
  return (
    <svg className="trust-card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3L19.6 10.4L28 11.6L22 17.4L23.4 26L16 22.1L8.6 26L10 17.4L4 11.6L12.4 10.4L16 3Z"
        stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function IconAccountability() {
  return (
    <svg className="trust-card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3L27 8V16C27 22 22 27.5 16 29C10 27.5 5 22 5 16V8L16 3Z"
        stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M11 16L14.5 19.5L21 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTracking() {
  return (
    <svg className="trust-card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 4C10.5 4 6 8.5 6 14C6 21 16 28 16 28C16 28 26 21 26 14C26 8.5 21.5 4 16 4Z"
        stroke="currentColor" strokeWidth="1.75" />
      <circle cx="24" cy="26" r="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="26" y1="24" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconEscrow() {
  return (
    <svg className="trust-card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="13" width="24" height="15" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 13V10C10 6.7 12.7 4 16 4C19.3 4 22 6.7 22 10V13"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="16" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const TRUST_ICONS = [
  <IconIdentity key="id" />,
  <IconCompetence key="comp" />,
  <IconAccountability key="acc" />,
  <IconTracking key="track" />,
  <IconEscrow key="escrow" />,
];

function IconCheck() {
  return (
    <svg className="benefit-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10L9 12.5L13.5 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconEscrowProt() {
  return (
    <svg className="protection-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="13" width="24" height="15" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 13V10C10 6.7 12.7 4 16 4C19.3 4 22 6.7 22 10V13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="16" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconInsurance() {
  return (
    <svg className="protection-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 3L27 8V16C27 22 22 27.5 16 29C10 27.5 5 22 5 16V8L16 3Z"
        stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M12 16H20M16 12V20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconDispute() {
  return (
    <svg className="protection-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 8V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="22" r="1.25" fill="currentColor" />
    </svg>
  );
}

function IconHistory() {
  return (
    <svg className="protection-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 10V16L20 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PROTECTION_ICONS = [
  <IconEscrowProt key="ep" />,
  <IconInsurance key="ins" />,
  <IconDispute key="dis" />,
  <IconHistory key="his" />,
];

function IconApple() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14.5 2C14.5 3.9 13.2 5.5 11.5 6C11.4 4.1 12.8 2.5 14.5 2Z" fill="currentColor" opacity="0.6" />
      <path d="M16.8 14.5C16.3 15.6 16 16.1 15.2 17C14.1 18.3 12.6 18.5 11.5 17.5C10.4 16.5 9.6 16.5 8.5 17.5C7.3 18.5 5.8 18.3 4.8 17C2.5 14.1 2 9.5 4 7C5 5.5 6.6 4.5 8.2 4.5C9.3 4.5 10 5 11 5C12 5 12.5 4.5 13.8 4.5C15.2 4.5 16.6 5.3 17.5 6.6C14.6 8.1 15.1 12.3 16.8 14.5Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function IconAndroid() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 6.5L17 6.5V15C17 15.6 16.6 16 16 16H14.5V18.5C14.5 19.3 13.8 20 13 20C12.2 20 11.5 19.3 11.5 18.5V16H8.5V18.5C8.5 19.3 7.8 20 7 20C6.2 20 5.5 19.3 5.5 18.5V16H4C3.4 16 3 15.6 3 15V6.5Z" fill="currentColor" opacity="0.6" />
      <path d="M7 5.5C7 3.6 8.3 2 10 2C11.7 2 13 3.6 13 5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <circle cx="1.5" cy="11.5" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="18.5" cy="11.5" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ── Hero route decoration ───────────────────────────────────── */
function HeroRoutes() {
  return (
    <svg
      className="hero-routes"
      viewBox="0 0 620 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M620 260 C520 260 440 210 340 170 C240 130 120 145 0 185"
        stroke="#0F1B2D" strokeWidth="1.5" strokeOpacity="0.08" />
      <path d="M620 260 C520 260 440 210 340 170 C240 130 120 145 0 185"
        stroke="#0F1B2D" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="14 10" />
      <path d="M620 360 C490 330 380 315 270 330 C160 345 70 385 0 350"
        stroke="#0F1B2D" strokeWidth="1.25" strokeOpacity="0.06" strokeDasharray="12 9" />
      <path d="M620 120 C540 155 460 175 370 165 C280 155 200 115 140 75 L70 45"
        stroke="#0F1B2D" strokeWidth="1" strokeOpacity="0.05" />
      <path d="M620 430 C520 408 430 370 330 355 L200 345 L90 375 L0 415"
        stroke="#0F1B2D" strokeWidth="1.25" strokeOpacity="0.07" />
      <line x1="340" y1="170" x2="330" y2="355" stroke="#0F1B2D" strokeWidth="1" strokeOpacity="0.04" />
      <line x1="230" y1="155" x2="230" y2="338" stroke="#0F1B2D" strokeWidth="1" strokeOpacity="0.04" strokeDasharray="10 8" />
      <line x1="465" y1="195" x2="455" y2="360" stroke="#0F1B2D" strokeWidth="1" strokeOpacity="0.04" />
      <circle cx="340" cy="170" r="5" fill="#E85D24" fillOpacity="0.22" />
      <circle cx="340" cy="170" r="10" stroke="#E85D24" strokeWidth="1" strokeOpacity="0.1" />
      <circle cx="465" cy="195" r="4" fill="#0F1B2D" fillOpacity="0.12" />
      <circle cx="230" cy="150" r="3.5" fill="#0F1B2D" fillOpacity="0.1" />
      <circle cx="330" cy="350" r="4" fill="#E85D24" fillOpacity="0.15" />
      <rect x="84" y="63" width="22" height="13" rx="2.5" fill="#E85D24" fillOpacity="0.25" />
      <rect x="96" y="57" width="10" height="7" rx="1.5" fill="#E85D24" fillOpacity="0.15" />
    </svg>
  );
}

/* ── Driver illustration ─────────────────────────────────────── */
function DriverIllustration() {
  return (
    <svg
      className="driver-illustration"
      viewBox="0 0 440 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="440" height="400" rx="20" fill="#F0EDE8" />
      <line x1="0" y1="100" x2="440" y2="100" stroke="#D8D4CF" strokeWidth="1" />
      <line x1="0" y1="200" x2="440" y2="200" stroke="#D8D4CF" strokeWidth="1" />
      <line x1="0" y1="300" x2="440" y2="300" stroke="#D8D4CF" strokeWidth="1" />
      <line x1="110" y1="0" x2="110" y2="400" stroke="#D8D4CF" strokeWidth="1" />
      <line x1="220" y1="0" x2="220" y2="400" stroke="#D8D4CF" strokeWidth="1" />
      <line x1="330" y1="0" x2="330" y2="400" stroke="#D8D4CF" strokeWidth="1" />
      {/* Road */}
      <rect x="0" y="215" width="440" height="50" fill="#E2DDD8" />
      <line x1="0" y1="215" x2="440" y2="215" stroke="#CBC6C0" strokeWidth="1.5" />
      <line x1="0" y1="265" x2="440" y2="265" stroke="#CBC6C0" strokeWidth="1.5" />
      {/* Dashes */}
      {[0, 70, 140, 210, 280, 350, 420].map((x) => (
        <line key={x} x1={x} y1="240" x2={x + 50} y2="240" stroke="white" strokeWidth="3" strokeLinecap="round" />
      ))}
      {/* Truck */}
      <g transform="translate(196, 236)">
        <rect x="-56" y="-18" width="68" height="28" rx="4" fill="#0F1B2D" />
        <rect x="8" y="-23" width="32" height="28" rx="3" fill="#1A2E47" />
        <rect x="14" y="-20" width="20" height="14" rx="2" fill="#2D4463" />
        <rect x="36" y="-12" width="6" height="7" rx="1.5" fill="#CBD5E0" opacity="0.6" />
        <rect x="-59" y="-9" width="5" height="7" rx="1" fill="#E85D24" opacity="0.85" />
        <circle cx="-36" cy="12" r="8" fill="#243A56" />
        <circle cx="-14" cy="12" r="8" fill="#243A56" />
        <circle cx="20" cy="12" r="7" fill="#243A56" />
        <circle cx="-36" cy="12" r="3.5" fill="#8A929E" opacity="0.5" />
        <circle cx="-14" cy="12" r="3.5" fill="#8A929E" opacity="0.5" />
        <circle cx="20" cy="12" r="3" fill="#8A929E" opacity="0.5" />
      </g>
      {/* GPS pulse */}
      <circle cx="196" cy="236" r="38" stroke="#E85D24" strokeWidth="1.5" strokeOpacity="0.18" />
      <circle cx="196" cy="236" r="60" stroke="#E85D24" strokeWidth="1" strokeOpacity="0.09" />
      {/* Origin pin */}
      <path d="M52 228 C52 219 59.5 212 68 212 C76.5 212 84 219 84 228 C84 238 68 252 68 252 C68 252 52 238 52 228Z" fill="#E85D24" />
      <circle cx="68" cy="227" r="5.5" fill="white" />
      {/* Destination pin */}
      <path d="M368 228 C368 219 375.5 212 384 212 C392.5 212 400 219 400 228 C400 238 384 252 384 252 C384 252 368 238 368 228Z" fill="#0F1B2D" />
      <circle cx="384" cy="227" r="5.5" fill="white" />
      {/* Route arc */}
      <path d="M68 212 Q220 140 384 212" stroke="#E85D24" strokeWidth="1.75" strokeDasharray="9 7" strokeOpacity="0.5" />
      {/* Earnings card */}
      <rect x="268" y="28" width="150" height="96" rx="14" fill="#0F1B2D" />
      <rect x="268" y="28" width="150" height="44" rx="14" fill="#1A2E47" />
      <rect x="268" y="56" width="150" height="16" fill="#1A2E47" />
      <rect x="284" y="40" width="64" height="7" rx="3.5" fill="rgba(255,255,255,0.14)" />
      <rect x="284" y="76" width="96" height="16" rx="4" fill="#E85D24" opacity="0.75" />
      <rect x="284" y="100" width="56" height="10" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="348" y="100" width="50" height="10" rx="3" fill="rgba(232,93,36,0.18)" />
      <circle cx="395" cy="50" r="20" fill="#0F1B2D" />
      <circle cx="395" cy="50" r="14" fill="#E85D24" opacity="0.85" />
      {/* Rupee symbol */}
      <line x1="389" y1="43" x2="402" y2="43" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="389" y1="48" x2="402" y2="48" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="390" y1="43" x2="390" y2="57" stroke="white" strokeWidth="2.25" strokeLinecap="round" />
      <line x1="397" y1="48" x2="390" y2="57" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* KYC badge */}
      <rect x="22" y="28" width="132" height="48" rx="10" fill="white" />
      <circle cx="46" cy="52" r="14" fill="#F0FDF4" />
      <path d="M40 52 L44.5 56.5 L52 47" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="66" y="43" width="72" height="8" rx="4" fill="#E2DDD8" />
      <rect x="66" y="56" width="52" height="7" rx="3.5" fill="#F0EDE8" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const [lang, setLang] = useState<Lang>("hi");
  const t = translations[lang];

  /* Sync html[lang] and .lang-hi class for font + aria */
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang === "hi" ? "hi" : "en");
    html.classList.toggle("lang-hi", lang === "hi");
  }, [lang]);

  const stepNums = ["01", "02", "03", "04"];

  return (
    <>
      {/* 1 ── NAV */}
      <Nav lang={lang} setLang={setLang} t={t.nav} />

      <main>
        {/* 2 ── HERO */}
        <section className="hero">
          <HeroRoutes />
          <div className="hero-inner">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>

            <h1 className="hero-headline">{t.hero.headline}</h1>

            <p className="hero-sub">{t.hero.sub}</p>

            <div className="hero-ctas">
              <a href="#how-it-works" className="btn btn-primary">
                {t.hero.cta1}
              </a>
              <a href="#for-drivers" className="btn btn-outline-navy">
                {t.hero.cta2}
              </a>
            </div>

            <div className="hero-pills">
              {t.hero.pills.map((pill) => (
                <span key={pill} className="trust-pill">
                  <span className="trust-pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 3 ── TRUST STRIP */}
        <section className="trust-strip">
          <div className="trust-strip-inner">
            <Reveal>
              <p className="section-eyebrow">{t.trust.eyebrow}</p>
              <h2 className="section-title">{t.trust.title}</h2>
            </Reveal>

            <div className="trust-cards">
              {t.trust.cards.map(({ label, desc }, i) => (
                <Reveal key={label} delay={((i + 1) as 1 | 2 | 3 | 4 | 5)}>
                  <div className="trust-card">
                    {TRUST_ICONS[i]}
                    <p className="trust-card-label">{label}</p>
                    <p className="trust-card-desc">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 ── HOW IT WORKS */}
        <section className="how-it-works" id="how-it-works">
          <div className="how-inner">
            <Reveal>
              <p className="section-eyebrow">{t.how.eyebrow}</p>
              <h2 className="section-title">{t.how.title}</h2>
            </Reveal>

            <div className="steps">
              {t.how.steps.map(({ title, desc }, i) => (
                <Reveal key={title} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                  <div className="step">
                    <span className="step-num">{stepNums[i]}</span>
                    <div className="step-body">
                      <p className="step-title">{title}</p>
                      <p className="step-desc">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 ── FOR DRIVERS */}
        <section className="for-drivers" id="for-drivers">
          <div className="drivers-inner">
            <div className="driver-left">
              <Reveal>
                <p className="section-eyebrow">{t.drivers.eyebrow}</p>
                <h2 className="driver-headline">
                  {t.drivers.headline.line1}
                  <br />
                  {t.drivers.headline.pre}{" "}
                  <span className="hl-orange">{t.drivers.headline.orange}</span>{" "}
                  {t.drivers.headline.post}
                </h2>
              </Reveal>

              <Reveal delay={1}>
                <p className="driver-sub">{t.drivers.sub}</p>
              </Reveal>

              <Reveal delay={2}>
                <ul className="driver-benefits">
                  {t.drivers.benefits.map((b) => (
                    <li key={b} className="driver-benefit">
                      <IconCheck />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={3}>
                <div className="driver-ctas">
                  <a href="#" className="btn btn-outline-sm">
                    {t.drivers.cta1}
                  </a>
                  <a href="#" className="btn btn-outline-sm">
                    {t.drivers.cta2}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2} className="driver-right">
              <DriverIllustration />
            </Reveal>
          </div>
        </section>

        {/* 6 ── PROOF BAR */}
        <section className="proof-bar">
          <div className="proof-inner">
            {t.proof.stats.map(({ value, desc }, i) => (
              <Reveal key={value} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="proof-stat">
                  <p className="proof-stat-value">{value}</p>
                  <p className="proof-stat-desc">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 7 ── WHY BAATWA */}
        <section className="why-baatwa" id="why-baatwa">
          <div className="why-inner">
            <Reveal>
              <p className="section-eyebrow">{t.why.eyebrow}</p>
              <h2 className="section-title">{t.why.title}</h2>
            </Reveal>

            <div className="protection-grid">
              {t.why.cards.map(({ title, desc, badge }, i) => (
                <Reveal key={title} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                  <div className="protection-card">
                    {PROTECTION_ICONS[i]}
                    <p className="protection-title">{title}</p>
                    <p className="protection-desc">{desc}</p>
                    <span className="protection-badge">{badge}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 ── FINAL CTA */}
        <section className="final-cta" id="final-cta">
          <div className="final-cta-inner">
            <Reveal>
              <h2 className="final-cta-headline">{t.cta.headline}</h2>
              <p className="final-cta-sub">{t.cta.sub}</p>
            </Reveal>

            <Reveal delay={1}>
              <div className="final-cta-buttons">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ fontSize: "1rem", padding: "0.875rem 1.875rem" }}
                >
                  {t.cta.btn1}
                </a>
                <a
                  href="#for-drivers"
                  className="btn btn-outline-navy"
                  style={{ fontSize: "1rem", padding: "0.875rem 1.875rem" }}
                >
                  {t.cta.btn2}
                </a>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="app-badges">
                <div className="app-badge">
                  <IconApple />
                  <div className="app-badge-text">
                    <span className="app-badge-coming">{t.cta.appComingSoon}</span>
                    <span className="app-badge-store">{t.cta.appStore}</span>
                  </div>
                </div>
                <div className="app-badge">
                  <IconAndroid />
                  <div className="app-badge-text">
                    <span className="app-badge-coming">{t.cta.appComingSoon}</span>
                    <span className="app-badge-store">{t.cta.playStore}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 9 ── FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <p className="footer-logo">
                <span className="logo-b">B</span>aatwa
              </p>
              <p className="footer-tagline">{t.footer.tagline}</p>
            </div>

            <div>
              <p className="footer-col-title">{t.footer.col1}</p>
              <nav className="footer-links">
                <a href="#how-it-works">{t.footer.links1[0]}</a>
                <a href="#why-baatwa">{t.footer.links1[1]}</a>
                <a href="#final-cta">{t.footer.links1[2]}</a>
                <a href="#for-drivers">{t.footer.links1[3]}</a>
              </nav>
            </div>

            <div>
              <p className="footer-col-title">{t.footer.col2}</p>
              <nav className="footer-links">
                {t.footer.links2.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">{t.footer.copy}</p>
            <p className="footer-copy">
              <a href="#" style={{ marginRight: "1.25rem" }}>
                {t.footer.privacy}
              </a>
              <a href="#">{t.footer.terms}</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
