"use client";

import { useState, useEffect } from "react";
import type { Lang, NavT } from "@/translations";

interface NavProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: NavT;
}

export default function Nav({ lang, setLang, t }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <span className="logo-b">B</span>aatwa
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {t.links.map((label, i) => (
              <li key={i}>
                <a href={t.linkHrefs[i]}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          {/* Language toggle */}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            aria-label={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
          >
            <span className={lang === "hi" ? "active" : ""}>हिं</span>
            <span className={lang === "en" ? "active" : ""}>EN</span>
          </button>

          <a href="#" className="nav-signin">{t.signin}</a>
          <a href="#final-cta" className="nav-cta">{t.postTrip}</a>

          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`nav-mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {t.links.map((label, i) => (
          <a key={i} href={t.linkHrefs[i]} onClick={close}>
            {label}
          </a>
        ))}
        <div className="nav-mobile-actions">
          {/* Language toggle inside mobile menu */}
          <button
            className="lang-toggle lang-toggle-mobile"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
          >
            <span className={lang === "hi" ? "active" : ""}>हिंदी</span>
            <span className={lang === "en" ? "active" : ""}>English</span>
          </button>
          <a href="#" className="btn-outline-sm btn" onClick={close}>
            {t.signin}
          </a>
          <a
            href="#final-cta"
            className="nav-cta"
            style={{ textAlign: "center" }}
            onClick={close}
          >
            {t.postTrip}
          </a>
        </div>
      </nav>
    </header>
  );
}
