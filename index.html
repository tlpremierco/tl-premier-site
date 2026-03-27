import { useState, useEffect, useRef } from "react";

const COLORS = {
  navy: "#0B1D3A",
  navyLight: "#132B52",
  navyDark: "#060F1F",
  gold: "#C4A265",
  goldLight: "#D4B97A",
  goldDark: "#A8884E",
  black: "#0A0A0A",
  white: "#FAFAFA",
  offWhite: "#F2F0EB",
  gray: "#4A4A4A",
  grayLight: "#D1D1D1",
  grayDark: "#2A2A2A",
};

const PHONE = "239-205-8888";
const EMAIL = "info@tlpremierco.com";
const ADDRESS = "Naples, FL";
const DOMAIN = "tlpremierco.com";

const LICENSES = [
  { type: "Certified General Contractor", number: "CGC1531607" },
  { type: "Certified Plumbing Contractor", number: "CFC1431815" },
  { type: "Electrical Contractor", number: "EC13013153" },
];

// ─── LOGO COMPONENT ─────────────────────────────────────────
function Logo({ size = 48, light = false }) {
  const s = size;
  const textColor = light ? COLORS.white : COLORS.navy;
  return (
    <div style={{ display: "flex", alignItems: "stretch", gap: s * 0.25 }}>
      <svg width={s} height={s} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="94" height="94" stroke={COLORS.gold} strokeWidth="3" fill="none" />
        <rect x="10" y="10" width="80" height="80" stroke={COLORS.gold} strokeWidth="1" fill="none" />
        <rect x="15" y="40" width="70" height="45" fill={COLORS.gold} opacity="0.12" />
        <polygon points="50,18 82,46 82,82 18,82 18,46" fill={light ? COLORS.white : COLORS.navy} />
        <polygon points="50,18 82,46 50,33 18,46" fill={COLORS.gold} />
        <rect x="36" y="54" width="12" height="28" fill={COLORS.gold} opacity="0.85" />
        <rect x="52" y="54" width="12" height="28" fill={COLORS.gold} opacity="0.85" />
        <rect x="36" y="54" width="28" height="3" fill={COLORS.gold} />
        <line x1="50" y1="18" x2="50" y2="33" stroke={COLORS.gold} strokeWidth="2" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: 1, gap: s * 0.08 }}>
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: s * 0.38,
          fontWeight: 800,
          color: textColor,
          letterSpacing: s * 0.08,
          textTransform: "uppercase",
        }}>TL Premier</span>
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: s * 0.28,
          fontWeight: 800,
          color: COLORS.gold,
          letterSpacing: s * 0.03,
          textTransform: "uppercase",
        }}>Construction Services</span>
      </div>
    </div>
  );
}

// ─── NAVIGATION ─────────────────────────────────────────────
function Navigation({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "general-construction", label: "Construction" },
    { id: "plumbing", label: "Plumbing" },
    { id: "electrical", label: "Electrical" },
    { id: "property-maintenance", label: "Maintenance" },
    { id: "portfolio", label: "Portfolio" },
    { id: "request-service", label: "Request Service" },
    { id: "careers", label: "Careers" },
    { id: "payments", label: "Payments" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(11,29,58,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.gold}22` : "none",
        transition: "all 0.4s ease",
        padding: scrolled ? "16px 0" : "24px 0",
      }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
            <Logo size={scrolled ? 38 : 44} light />
          </div>
          {/* Desktop Nav */}
          <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }} className="desktop-nav">
            {navItems.filter(n => n.id !== "home").map(item => (
              <button key={item.id} onClick={() => setPage(item.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Lora', Georgia, serif", fontSize: 16, fontWeight: 700,
                color: currentPage === item.id ? COLORS.gold : COLORS.white,
                letterSpacing: 0.5,
                padding: "12px 0", borderBottom: currentPage === item.id ? `4px solid ${COLORS.gold}` : "4px solid transparent",
                transition: "all 0.3s",
                opacity: 1,
                whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { e.target.style.color = COLORS.gold; }}
                onMouseLeave={e => { if (currentPage !== item.id) { e.target.style.color = COLORS.white; } }}
              >{item.label}</button>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer", padding: 12,
          }}>
            <div style={{ width: 30, height: 3, background: COLORS.gold, marginBottom: 6, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(6px,6px)" : "none" }} />
            <div style={{ width: 30, height: 3, background: COLORS.gold, marginBottom: 6, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <div style={{ width: 30, height: 3, background: COLORS.gold, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(6px,-6px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "rgba(11,29,58,0.98)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 24,
          animation: "fadeIn 0.3s ease",
        }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setPage(item.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 28, fontWeight: 600,
              color: currentPage === item.id ? COLORS.gold : COLORS.white,
              letterSpacing: 2, textTransform: "uppercase",
              padding: "8px 0",
            }}>{item.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1400px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}

// ─── SHARED COMPONENTS ─────────────────────────────────────
function SectionTitle({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 48 }}>
      {eyebrow && <p style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700,
        letterSpacing: 4, textTransform: "uppercase", color: COLORS.gold, marginBottom: 12,
      }}>{eyebrow}</p>}
      <h2 style={{
        fontFamily: "'Lora', Georgia, serif",
        fontSize: "clamp(32px, 4.5vw, 50px)", fontWeight: 700,
        color: light ? COLORS.white : COLORS.navy, lineHeight: 1.2, margin: 0,
      }}>{title}</h2>
      {subtitle && <p style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
        color: light ? "rgba(255,255,255,0.85)" : COLORS.gray,
        maxWidth: 640, margin: center ? "16px auto 0" : "16px 0 0", lineHeight: 1.8,
      }}>{subtitle}</p>}
    </div>
  );
}

function GoldButton({ children, onClick, large = false, outline = false }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: large ? 15 : 13, fontWeight: 700,
      letterSpacing: 2.5, textTransform: "uppercase",
      background: outline ? "transparent" : `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
      color: outline ? COLORS.gold : COLORS.white,
      border: outline ? `2px solid ${COLORS.gold}` : "none",
      padding: large ? "20px 52px" : "16px 40px",
      cursor: "pointer", transition: "all 0.35s",
    }}
      onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(196,162,101,0.3)"; }}
      onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
    >{children}</button>
  );
}

function LicenseBadge({ license }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "8px 18px", border: `1.5px solid ${COLORS.gold}55`,
      background: "rgba(196,162,101,0.1)",
    }}>
      <div style={{ width: 8, height: 8, background: COLORS.gold, borderRadius: "50%" }} />
      <span style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700,
        letterSpacing: 1.5, color: COLORS.gold, textTransform: "uppercase",
      }}>FL License #{license.number}</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc, accent }) {
  const c = accent || COLORS.gold;
  return (
    <div style={{
      background: `linear-gradient(170deg, ${COLORS.white} 0%, ${c}10 100%)`,
      border: `1px solid ${c}33`,
      borderTop: `4px solid ${c}`,
      padding: "40px 32px", transition: "all 0.35s", cursor: "default",
      position: "relative", overflow: "hidden",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(170deg, ${c}08 0%, ${c}20 100%)`; e.currentTarget.style.borderColor = c; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 20px 60px ${c}22`; }}
      onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(170deg, ${COLORS.white} 0%, ${c}10 100%)`; e.currentTarget.style.borderColor = `${c}33`; e.currentTarget.style.borderTopColor = c; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{
        position: "absolute", top: 0, right: 0, width: 100, height: 100,
        background: `radial-gradient(circle at top right, ${c}18, transparent 70%)`,
      }} />
      <div style={{ fontSize: 40, marginBottom: 20, position: "relative" }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Lora', Georgia, serif", fontSize: 26, fontWeight: 700,
        color: COLORS.navy, marginBottom: 12, position: "relative",
      }}>{title}</h3>
      <p style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
        color: COLORS.gray, lineHeight: 1.8, margin: 0, position: "relative",
      }}>{desc}</p>
    </div>
  );
}

function PageHero({ title, subtitle, bg = COLORS.navy }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 50%, ${COLORS.navyLight} 100%)`,
      padding: "160px 40px 80px", textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.04,
        backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 40px)`,
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ width: 50, height: 2, background: COLORS.gold, margin: "0 auto 20px" }} />
        <h1 style={{
          fontFamily: "'Lora', Georgia, serif",
          fontSize: "clamp(36px, 5.5vw, 58px)", fontWeight: 700,
          color: COLORS.white, margin: 0, letterSpacing: 1,
        }}>{title}</h1>
        {subtitle && <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
          color: "rgba(255,255,255,0.8)", marginTop: 16, letterSpacing: 1,
        }}>{subtitle}</p>}
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.navyDark, padding: "80px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 48, marginBottom: 60 }}>
          <div>
            <Logo size={44} light />
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
              color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginTop: 20,
            }}>
              Premier construction, plumbing, electrical, and property maintenance services serving Naples' luxury communities and greater Collier County. Licensed, insured, and committed to excellence.
            </p>
          </div>
          <div>
            <h4 style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: 3, textTransform: "uppercase", color: COLORS.gold, marginBottom: 20, marginTop: 0,
            }}>Services</h4>
            {["general-construction", "plumbing", "electrical", "property-maintenance"].map(id => (
              <button key={id} onClick={() => setPage(id)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
                color: "rgba(255,255,255,0.75)", padding: "7px 0", textAlign: "left",
              }}>{id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</button>
            ))}
          </div>
          <div>
            <h4 style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: 3, textTransform: "uppercase", color: COLORS.gold, marginBottom: 20, marginTop: 0,
            }}>Company</h4>
            {["about", "portfolio", "request-service", "careers", "payments", "contact"].map(id => (
              <button key={id} onClick={() => setPage(id)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
                color: "rgba(255,255,255,0.75)", padding: "7px 0", textAlign: "left",
              }}>{id.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</button>
            ))}
          </div>
          <div>
            <h4 style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 700,
              letterSpacing: 3, textTransform: "uppercase", color: COLORS.gold, marginBottom: 20, marginTop: 0,
            }}>Contact</h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: 2, margin: 0 }}>
              {PHONE}<br />{EMAIL}<br />{ADDRESS}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 16 }}>
              {LICENSES.map(l => (
                <span key={l.number} style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
                  letterSpacing: 1, color: COLORS.gold,
                }}>FL {l.type} #{l.number}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: 24 }}>
          {/* Accessibility Disclaimer */}
          <div style={{
            padding: "20px 24px", background: "rgba(255,255,255,0.03)",
            marginBottom: 20, textAlign: "center",
          }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600,
              letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.gold,
              margin: "0 0 8px",
            }}>♿ Accessibility</p>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 400,
              color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0, maxWidth: 600, margin: "0 auto",
            }}>
              We are committed to making our website accessible to everyone. If you use a screen reader or assistive technology and have trouble using this site, please call us at {PHONE} or email {EMAIL} — we'll help you personally.
            </p>
          </div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)",
            margin: "0 0 8px", textAlign: "center",
          }}>
            <span style={{ cursor: "pointer" }}>Terms & Conditions</span> | <span style={{ cursor: "pointer" }}>Privacy Policy</span> | <span style={{ cursor: "pointer" }}>Accessibility Statement</span>
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)",
            margin: 0, textAlign: "center",
          }}>© {new Date().getFullYear()} TL Premier Construction Services. All Rights Reserved. | {DOMAIN}</p>
        </div>
      </div>
    </footer>
  );
}

// ─── FORM INPUT COMPONENT ────────────────────────────────
function FormInput({ label, type = "text", value, onChange, textarea = false, options = null, required = false }) {
  const base = {
    fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 300,
    color: COLORS.navy, background: COLORS.white,
    border: `1px solid ${COLORS.grayLight}`, padding: "14px 18px",
    width: "100%", boxSizing: "border-box", outline: "none",
    transition: "border-color 0.3s",
  };
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: 2, textTransform: "uppercase", color: COLORS.navy,
        display: "block", marginBottom: 8,
      }}>{label} {required && <span style={{ color: COLORS.gold }}>*</span>}</label>
      {options ? (
        <select value={value} onChange={e => onChange(e.target.value)} style={{ ...base, appearance: "none", cursor: "pointer" }}
          onFocus={e => e.target.style.borderColor = COLORS.gold}
          onBlur={e => e.target.style.borderColor = COLORS.grayLight}
        >
          <option value="">Select...</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={5} style={{ ...base, resize: "vertical" }}
          onFocus={e => e.target.style.borderColor = COLORS.gold}
          onBlur={e => e.target.style.borderColor = COLORS.grayLight}
        />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} style={base}
          onFocus={e => e.target.style.borderColor = COLORS.gold}
          onBlur={e => e.target.style.borderColor = COLORS.grayLight}
        />
      )}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: HOME
// ═══════════════════════════════════════════════════════════
function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <div style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: `linear-gradient(160deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 40%, ${COLORS.navyLight} 100%)`,
        position: "relative", overflow: "hidden", padding: "120px 40px 80px",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(0deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 60px)`,
        }} />
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 500, height: 500,
          border: `1px solid ${COLORS.gold}15`, borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "-8%", width: 600, height: 600,
          border: `1px solid ${COLORS.gold}10`, borderRadius: "50%",
        }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800 }}>
          <div style={{ width: 60, height: 2, background: COLORS.gold, margin: "0 auto 32px" }} />
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 700,
            letterSpacing: 5, textTransform: "uppercase", color: COLORS.gold, marginBottom: 24,
          }}>Naples, Florida</p>
          <h1 style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "clamp(40px, 6.5vw, 74px)", fontWeight: 700,
            color: COLORS.white, lineHeight: 1.1, margin: "0 0 24px",
          }}>Building Excellence.<br />Delivering Distinction.</h1>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 18, fontWeight: 400,
            color: "rgba(255,255,255,0.85)", lineHeight: 1.8, maxWidth: 580, margin: "0 auto 48px",
          }}>
            Licensed general contractor, plumber, and electrician serving Naples' most
            prestigious communities and the greater Collier County area.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <GoldButton large onClick={() => setPage("request-service")}>Request a Consultation</GoldButton>
            <GoldButton large outline onClick={() => setPage("about")}>Our Story</GoldButton>
          </div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 60, flexWrap: "wrap" }}>
            {LICENSES.map(l => (
              <LicenseBadge key={l.number} license={l} />
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div style={{ padding: "100px 40px", background: COLORS.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="What We Do"
            title="Full-Service Construction & Property Solutions"
            subtitle="Five licensed trades under one roof — streamlined project management, consistent quality, and a single point of accountability."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            <ServiceCard accent="#D48A2C" icon="🏗" title="General Construction" desc="Custom homes, luxury renovations, commercial build-outs, and water damage restoration. From concept to certificate of occupancy." />
            <ServiceCard accent="#4A8FC4" icon="🔧" title="Plumbing" desc="Full-service residential and commercial plumbing — new construction, whole-home re-pipes, remodel rough-ins, and water treatment systems." />
            <ServiceCard accent="#4CA66B" icon="⚡" title="Electrical" desc="Complete electrical services including panel upgrades, whole-home rewiring, smart home systems, and generator installations." />
            <ServiceCard icon="🏠" title="Property Maintenance" desc="Annual maintenance programs for luxury homes and commercial properties — inspections, storm prep, and year-round care through one trusted partner." />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{ padding: "100px 40px", background: `linear-gradient(160deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 50%, ${COLORS.navyLight} 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 50px)`,
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionTitle eyebrow="The TL Premier Difference" title="Why Naples Trusts Us" light />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginTop: 20 }}>
            {[
              { num: "01", title: "Multi-Licensed", desc: "GC, plumbing, electrical, HVAC, and concrete licenses across two states means fewer subcontractors, faster timelines, and tighter quality control." },
              { num: "02", title: "Naples Focused", desc: "We serve the luxury communities of Collier County — Port Royal, Pelican Bay, Grey Oaks, Mediterra, and beyond. We know the codes, the permitting, and the standards." },
              { num: "03", title: "Transparent Pricing", desc: "Detailed proposals with no hidden fees. We respect your investment and your intelligence." },
              { num: "04", title: "Premium Standards", desc: "We work with the finest materials and maintain exacting standards because your home deserves nothing less." },
            ].map(item => (
              <div key={item.num} style={{ padding: "32px 28px", background: "rgba(255,255,255,0.04)", borderLeft: `3px solid ${COLORS.gold}` }}>
                <span style={{
                  fontFamily: "'Lora', Georgia, serif", fontSize: 48, fontWeight: 300,
                  color: COLORS.gold, opacity: 0.6,
                }}>{item.num}</span>
                <h3 style={{
                  fontFamily: "'Lora', Georgia, serif", fontSize: 26, fontWeight: 700,
                  color: COLORS.gold, margin: "8px 0 12px",
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
                  color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{
        padding: "80px 40px",
        background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700, color: COLORS.white, margin: "0 0 12px",
        }}>Ready to Start Your Project?</h2>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
          color: "rgba(255,255,255,0.85)", marginBottom: 32,
        }}>Contact us for a complimentary consultation and detailed estimate.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <GoldButton onClick={() => setPage("request-service")}>Request Service</GoldButton>
          <GoldButton outline onClick={() => setPage("contact")}>Contact Us</GoldButton>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: ABOUT
// ═══════════════════════════════════════════════════════════
function AboutPage({ setPage }) {
  return (
    <div>
      <PageHero title="Meet Nathan Le" subtitle="Founder & CEO — 4th Generation Builder" />

      <div style={{ padding: "80px 40px", background: "#F7F4EE" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Photo + Card floated left, bio wraps around */}
          <div className="bio-photo" style={{ float: "left", width: "18%", marginRight: 28, marginBottom: 16, maxWidth: 160 }}>
            {/* Photo Placeholder - Square */}
            <div style={{
              width: "100%", aspectRatio: "1/1", background: `linear-gradient(160deg, ${COLORS.offWhite} 0%, #E8E4DC 100%)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `2px dashed ${COLORS.gold}44`, marginBottom: 2,
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, opacity: 0.3 }}>📷</div>
              </div>
            </div>

            {/* Simple Info Card */}
            <div style={{
              background: `linear-gradient(160deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
              padding: "14px 12px", textAlign: "center",
            }}>
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 20, fontWeight: 700, color: COLORS.gold, margin: "0 0 6px" }}>20+ Years</p>
              <div style={{ width: 24, height: 1, background: `${COLORS.gold}44`, margin: "0 auto 8px" }} />
              {LICENSES.map(l => (
                <p key={l.number} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 7, fontWeight: 600, color: "rgba(255,255,255,0.6)", margin: "3px 0", letterSpacing: 0.5 }}>{l.type}</p>
              ))}
            </div>
          </div>

          {/* Bio content flows around photo */}
          <div>
            <div style={{ width: 36, height: 1.5, background: COLORS.gold, marginBottom: 16 }} />
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", color: COLORS.gold, marginBottom: 12 }}>Our Story</p>
            <h2 style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600,
              color: COLORS.navy, lineHeight: 1.2, margin: "0 0 24px",
            }}>One Builder. Every Trade.</h2>

            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400, color: COLORS.grayDark, lineHeight: 2 }}>
                <p>Nathan Le is a 4th generation builder with over 20 years of hands-on construction experience and a reputation built on integrity, craftsmanship, and results. As the Founder and CEO of TL Premier Construction, he has led one of San Diego's most respected construction firms since 2005, personally overseeing every project from groundbreaking to final walkthrough.</p>

                <p>What sets Nathan apart is the breadth of his licensure. Holding five active California Contractors State License Board (CSLB) classifications — General Contractor (B), Plumbing (C-36), Concrete (C-8), Electrical (C-10), and Warm Air Heating & Air Conditioning (C-20) — Nathan brings a complete command of the trades that most contractors must subcontract out. This rare combination of licenses means his clients receive unified leadership, tighter quality control, and seamless project execution across every phase of construction.</p>

                <p>Throughout his career in Southern California, Nathan has delivered exceptional results across new home construction, ADUs, luxury residential remodels, commercial tenant improvements, multi-family renovations, and full-service electrical and plumbing projects.</p>

                <p>Nathan's approach is rooted in leadership and accountability. He oversees every project from start to finish — coordinating skilled crews, managing timelines, ensuring code compliance, and maintaining the quality standards that have defined TL Premier for two decades. His clients don't just get a contractor; they get a company led by someone who understands every trade from the ground up and demands excellence at every phase.</p>
              </div>
            </div>
          <div style={{ clear: "both" }} />
        </div>
      </div>

      {/* Now Serving Naples Section */}
      <div style={{
        padding: "80px 40px",
        background: `linear-gradient(160deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 50%, ${COLORS.navyLight} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 50px)`,
        }} />
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ width: 50, height: 2, background: COLORS.gold, margin: "0 auto 20px" }} />
          <h2 style={{
            fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700,
            color: COLORS.white, textAlign: "center", margin: "0 0 28px",
          }}>Now Serving Naples, Florida</h2>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.85)", lineHeight: 2, textAlign: "center" }}>
            <p>In 2026, Nathan and his family made the decision to relocate to Naples, Florida — a move rooted in both personal and professional purpose. With family in Southwest Florida, the move brought them closer to the people who matter most, while opening the door to one of the most dynamic and discerning luxury construction markets in the country. For Nathan, it was the perfect alignment: deepening family ties while bringing two decades of hard-earned expertise to a market that truly values exceptional craftsmanship.</p>
            <p>Now fully licensed in Florida through the Department of Business and Professional Regulation (DBPR) — holding active Certified General Contractor (CGC), Plumbing, and Electrical licenses, with additional license transfers currently in progress — Nathan is positioned to serve the high-end residential and commercial clients of Naples' most prestigious communities, including Port Royal, Pelican Bay, Grey Oaks, Mediterra, Park Shore, Talis Park, and the greater Collier County area with the same standards that built his California reputation.</p>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 20, fontWeight: 600, fontStyle: "italic", color: COLORS.gold, marginTop: 24 }}>For homeowners, developers, and property managers in Naples who demand a contractor who communicates clearly, leads with integrity, and delivers a finished product worth every dollar — Nathan Le is ready to build your vision.</p>
          </div>
        </div>
      </div>

      {/* Licenses & Credentials */}
      <div style={{ padding: "80px 40px", background: "#F7F4EE" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionTitle eyebrow="Credentials" title="Licenses & Credentials" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {/* Florida */}
            <div style={{ padding: "32px 28px", background: COLORS.white, borderTop: `4px solid ${COLORS.gold}` }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: COLORS.gold, margin: "0 0 20px" }}>Florida DBPR — Active</h3>
              {LICENSES.map(l => (
                <div key={l.number} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${COLORS.grayLight}22` }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 500, color: COLORS.navy }}>{l.type}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, color: COLORS.gold }}>#{l.number}</span>
                </div>
              ))}
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, fontStyle: "italic", color: COLORS.gold, margin: "16px 0 0" }}>Additional license transfers in progress</p>
            </div>

            {/* California */}
            <div style={{ padding: "32px 28px", background: COLORS.white, borderTop: `4px solid ${COLORS.navy}44` }}>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: COLORS.navy, margin: "0 0 20px", opacity: 0.7 }}>California CSLB — #863024</h3>
              {[
                "B — General Building Contractor",
                "C-36 — Plumbing Contractor",
                "C-8 — Concrete Contractor",
                "C-10 — Electrical Contractor",
                "C-20 — Warm Air Heating, Ventilating & Air Conditioning",
              ].map(l => (
                <div key={l} style={{ padding: "10px 0", borderBottom: `1px solid ${COLORS.grayLight}22` }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 500, color: COLORS.gray }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Row */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 40, marginTop: 40, flexWrap: "wrap",
            padding: "28px 32px", background: COLORS.white,
          }}>
            {[
              { label: "A+ BBB Rating", icon: "⭐" },
              { label: "Licensed in CA & FL", icon: "🛡" },
              { label: "5 Trade Licenses", icon: "✓" },
              { label: "20+ Years in Business", icon: "🏗" },
              { label: "Est. 2005", icon: "📅" },
            ].map(b => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>{b.icon}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: COLORS.navy }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "72px 40px", background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`, textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 700, color: COLORS.white, margin: "0 0 12px" }}>Let's Build Your Vision</h2>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.8)", margin: "0 auto 28px", maxWidth: 480 }}>Schedule a conversation with Nathan to discuss your next project.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <GoldButton onClick={() => setPage("request-service")}>Request a Consultation</GoldButton>
          <GoldButton outline onClick={() => setPage("contact")}>Contact Us</GoldButton>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SERVICE PAGE TEMPLATE
// ═══════════════════════════════════════════════════════════
function ServicePage({ title, subtitle, license, services, description, setPage, accent }) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} />
      <div style={{ padding: "80px 40px", background: "#F7F4EE", minHeight: 400 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 40 }}>
            <LicenseBadge license={license} />
          </div>
          <div style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
            color: COLORS.grayDark, lineHeight: 2, maxWidth: 800, marginBottom: 60,
          }}>{description}</div>

          <SectionTitle eyebrow="Our Services" title={`${title} Services`} center={false} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {services.map(s => <ServiceCard key={s.title} {...s} accent={accent} />)}
          </div>
        </div>
      </div>

      <div style={{
        padding: "80px 48px",
        background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
        textAlign: "center",
      }}>
        <h3 style={{
          fontFamily: "'Lora', Georgia, serif", fontSize: 32, fontWeight: 700,
          color: COLORS.white, margin: "0 0 16px",
        }}>Ready to Get Started?</h3>
          <p style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
            color: "rgba(255,255,255,0.85)", marginBottom: 28,
          }}>Request a free consultation and detailed estimate for your project.</p>
          <GoldButton onClick={() => setPage("request-service")}>Request a Consultation</GoldButton>
      </div>
    </div>
  );
}

function GeneralConstructionPage({ setPage }) {
  return <ServicePage setPage={setPage}
    accent="#D48A2C"
    title="General Construction" subtitle="CGC Licensed — Custom Builds & Renovations"
    license={LICENSES[0]}
    description={<p>As a Certified General Contractor, TL Premier Construction manages every phase of your project — from permitting and site preparation through final inspection. Whether you're building your dream home, renovating a waterfront estate, restoring a property after water or storm damage, or developing a commercial space, we bring the expertise, coordination, and craftsmanship your project demands.</p>}
    services={[
      { icon: "🏡", title: "Custom Home Construction", desc: "Ground-up luxury home building with full architectural coordination, permitting, and project management from start to finish." },
      { icon: "🔨", title: "Whole-Home Renovations", desc: "Complete interior and exterior renovations including structural modifications, additions, and full-scale remodels." },
      { icon: "🏢", title: "Commercial Build-Outs", desc: "Tenant improvements, office build-outs, retail spaces, and commercial facility construction and renovation." },
      { icon: "🏖", title: "Outdoor Living Spaces", desc: "Lanais, outdoor kitchens, pool decks, pergolas, and custom outdoor entertainment areas designed for Florida living." },
      { icon: "🛡", title: "Hurricane Hardening", desc: "Impact windows and doors, roof reinforcement, storm shutters, and structural upgrades for maximum wind resistance." },
      { icon: "🏚", title: "Water & Storm Damage Restoration", desc: "Drywall gut-outs, structural drying, mold remediation coordination, and full repair and remodel to restore your property to pre-damage — or better — condition." },
      { icon: "📋", title: "Permitting & Project Management", desc: "Full permitting services, timeline management, subcontractor coordination, and quality inspections throughout your project." },
    ]}
  />;
}

function PlumbingPage({ setPage }) {
  return <ServicePage setPage={setPage}
    accent="#4A8FC4"
    title="Plumbing Services" subtitle="CFC Licensed — Residential & Commercial Plumbing"
    license={LICENSES[1]}
    description={<p>Our Certified Plumbing Contractor license means we handle complex new-construction rough-ins, whole-home re-pipes, and precision fixture installations for luxury builds and renovations. We understand the unique plumbing challenges of Southwest Florida — from salt air corrosion to high-end filtration demands — and we engineer solutions that last.</p>}
    services={[
      { icon: "🚿", title: "New Construction Plumbing", desc: "Complete plumbing systems for new builds — design, rough-in, top-out, and trim with premium fixtures and materials." },
      { icon: "🔧", title: "Remodel & Renovation", desc: "Full kitchen and bathroom remodel plumbing, pipe rerouting, luxury fixture upgrades, and custom shower installations." },
      { icon: "💧", title: "Whole-Home Water Treatment", desc: "Complete water filtration systems, water softeners, and reverse osmosis — engineered for Florida's hard water and high-end appliances." },
      { icon: "🔥", title: "Water Heaters & Tankless", desc: "Traditional and tankless water heater installation, replacement, and upgrades — including high-efficiency and recirculating systems." },
      { icon: "🏊", title: "Pool & Spa Plumbing", desc: "Pool plumbing installation, heater connections, spa system integration, and outdoor kitchen gas and water lines." },
      { icon: "🔄", title: "Whole-Home Re-Piping", desc: "Complete copper or PEX re-piping for aging or corroded systems — protecting your home's value and water quality long-term." },
      { icon: "🏗", title: "Commercial Plumbing Systems", desc: "Multi-unit plumbing design and installation for commercial build-outs, office buildings, and tenant improvement projects." },
      { icon: "🚨", title: "Emergency Plumbing Repairs", desc: "Burst pipes, major leaks, sewer line failures, and urgent plumbing issues — rapid response when you need it most." },
    ]}
  />;
}

function ElectricalPage({ setPage }) {
  return <ServicePage setPage={setPage}
    accent="#4CA66B"
    title="Electrical Services" subtitle="EC Licensed — Full-Service Electrical Solutions"
    license={LICENSES[2]}
    description={<p>From panel upgrades to whole-home smart systems, our licensed electrical team delivers safe, code-compliant, and future-ready electrical solutions. We specialize in high-end residential electrical work including landscape lighting design, home automation, and generator systems that keep your home running when it matters most.</p>}
    services={[
      { icon: "⚡", title: "Electrical Panel Upgrades", desc: "200-amp and 400-amp service upgrades, main panel replacements, and sub-panel installations for growing power demands." },
      { icon: "💡", title: "Lighting Design & Installation", desc: "Recessed lighting, chandeliers, landscape lighting, LED conversions, and custom architectural lighting solutions." },
      { icon: "🏠", title: "Smart Home Systems", desc: "Home automation, smart switches, integrated lighting controls, and voice-activated systems for modern living." },
      { icon: "🔌", title: "Whole-Home Rewiring", desc: "Complete electrical rewiring for older homes, code compliance upgrades, and aluminum wiring remediation." },
      { icon: "🔋", title: "Generators & Backup Power", desc: "Whole-home standby generators, automatic transfer switches, and battery backup systems for hurricane preparedness." },
      { icon: "☀️", title: "Solar & Energy Systems", desc: "Complete solar panel electrical integration, battery backup systems, and whole-home energy management for sustainable luxury living." },
    ]}
  />;
}


// ═══════════════════════════════════════════════════════════
// PAGE: PROPERTY MAINTENANCE
// ═══════════════════════════════════════════════════════════
function PropertyMaintenancePage({ setPage }) {
  return (
    <div>
      <PageHero title="Property Maintenance" subtitle="Premium Ongoing Care for Luxury Properties" />
      <div style={{ padding: "80px 40px", background: "#F7F4EE" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400,
            color: COLORS.grayDark, lineHeight: 2, maxWidth: 800, marginBottom: 60,
          }}>
            <p>TL Premier offers annual maintenance programs designed for luxury homes, estates, and commercial properties. Our licensed team handles everything — structural, plumbing, electrical, and exterior — so your property stays in premier condition year-round through a single, trusted partner.</p>
          </div>

          <SectionTitle eyebrow="Programs" title="Maintenance Programs" center={false} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            <ServiceCard icon="🏡" title="Annual Home Maintenance Program" desc="Comprehensive yearly maintenance plan covering full-home inspections, plumbing and electrical system checks, HVAC coordination, and preventive care — tailored to your property." />
            <ServiceCard icon="🌀" title="Hurricane Prep & Recovery Program" desc="Seasonal storm readiness including shutter systems, structural inspections, drainage review, post-storm assessment, and priority emergency restoration." />
            <ServiceCard icon="🔑" title="Seasonal Estate Watch" desc="Full-service care for seasonal residents — home opening and closing, climate system management, vendor coordination, and detailed condition reporting." />
            <ServiceCard icon="🏢" title="Commercial Property Programs" desc="Ongoing maintenance contracts for office buildings, retail spaces, and multi-unit properties — scheduled inspections, code compliance, and system upkeep." />
          </div>

          <div style={{
            marginTop: 60, padding: "48px",
            background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
            borderLeft: `4px solid ${COLORS.gold}`,
          }}>
            <h3 style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: 28, fontWeight: 700,
              color: COLORS.gold, margin: "0 0 12px",
            }}>The TL Premier Advantage</h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 400,
              color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: 0,
            }}>
              Because we hold our own GC, plumbing, and electrical licenses, every aspect of your property's care is handled in-house — no subcontractor delays, no finger-pointing, and one standard of quality across every trade.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: 60 }}>
            <GoldButton large onClick={() => setPage("request-service")}>Request a Maintenance Consultation</GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: PORTFOLIO
// ═══════════════════════════════════════════════════════════
function PortfolioPage({ setPage }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Restoration", "Outdoor Living"];

  const projects = [
    { id: 1, category: "Residential", title: "Modern Kitchen Transformation", location: "San Diego, CA", scope: "Complete kitchen gut and remodel — custom cabinetry, quartz countertops, premium appliances, plumbing relocation, electrical upgrade, and recessed lighting.", color: "#D48A2C" },
    { id: 2, category: "Residential", title: "Luxury Master Suite Addition", location: "San Diego, CA", scope: "Second-story master suite addition with walk-in closet, spa-inspired bathroom, dual vanities, freestanding tub, and custom tile work.", color: "#D48A2C" },
    { id: 3, category: "Residential", title: "Whole-Home Renovation", location: "San Diego, CA", scope: "Full interior renovation of 3,200 sq ft home — new flooring, complete re-pipe, panel upgrade, kitchen and 3 bathroom remodels.", color: "#D48A2C" },
    { id: 4, category: "Commercial", title: "Downtown Salon Build-Out", location: "San Diego, CA", scope: "Full tenant improvement — new ADA restroom, plumbing rough-in, electrical systems, custom stations, break room, and storage.", color: "#4A8FC4" },
    { id: 5, category: "Commercial", title: "Office Building Renovation", location: "San Diego, CA", scope: "Multi-unit commercial renovation — plumbing, electrical, mechanical systems, ADA compliance, and modern finish-out.", color: "#4A8FC4" },
    { id: 6, category: "Residential", title: "ADU / Garage Conversion", location: "San Diego, CA", scope: "Full garage-to-ADU conversion with kitchen, bathroom, separate electrical panel, plumbing, and private entrance.", color: "#D48A2C" },
    { id: 7, category: "Restoration", title: "Water Damage Restoration & Remodel", location: "San Diego, CA", scope: "Complete drywall gut-out, structural drying, mold remediation, and full kitchen and living room rebuild with upgraded finishes.", color: "#4CA66B" },
    { id: 8, category: "Residential", title: "Luxury Bathroom Remodel", location: "San Diego, CA", scope: "High-end master bath — frameless glass shower, heated floors, custom vanity, re-plumbed fixtures, and new electrical for lighting and exhaust.", color: "#D48A2C" },
    { id: 9, category: "Outdoor Living", title: "Outdoor Kitchen & Lanai", location: "San Diego, CA", scope: "Custom outdoor kitchen with gas and water lines, electrical for lighting and appliances, pergola, and entertainment area.", color: COLORS.gold },
    { id: 10, category: "Residential", title: "Full Home Re-Pipe & Panel Upgrade", location: "San Diego, CA", scope: "Complete copper re-pipe, 200-amp panel upgrade, GFCI/AFCI installation, and water heater replacement for 1970s home.", color: "#D48A2C" },
    { id: 11, category: "Commercial", title: "Apartment Complex Renovation", location: "San Diego, CA", scope: "Multi-unit apartment renovation — plumbing upgrades, electrical modernization, new fixtures, flooring, and paint across 12 units.", color: "#4A8FC4" },
    { id: 12, category: "Restoration", title: "Storm Damage Repair", location: "San Diego, CA", scope: "Structural assessment, roof repair coordination, drywall replacement, window installation, exterior stucco repair, and full interior repaint.", color: "#4CA66B" },
  ];

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      <PageHero title="Our Work" subtitle="20+ years of craftsmanship — from San Diego to Naples" />
      <div style={{ padding: "80px 40px", background: "#F7F4EE" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionTitle
            eyebrow="Portfolio"
            title="Projects That Speak for Themselves"
            subtitle="A selection of residential, commercial, and restoration projects. Photos from our 20-year track record in San Diego — the same standards we bring to Naples."
          />

          {/* Filter Tabs */}
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 48, flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: filter === cat ? 800 : 600,
                letterSpacing: 1.5, textTransform: "uppercase",
                background: filter === cat ? COLORS.navy : "transparent",
                color: filter === cat ? COLORS.gold : COLORS.navy,
                border: `2px solid ${filter === cat ? COLORS.navy : COLORS.grayLight}`,
                padding: "12px 24px", cursor: "pointer", transition: "all 0.3s",
              }}>{cat}</button>
            ))}
          </div>

          {/* Project Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {filtered.map(project => (
              <div key={project.id} style={{
                background: COLORS.white, overflow: "hidden",
                border: `1px solid ${COLORS.grayLight}33`,
                transition: "all 0.35s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Photo Placeholder */}
                <div style={{
                  width: "100%", aspectRatio: "16/10",
                  background: `linear-gradient(135deg, ${project.color}18, ${project.color}30)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 40, marginBottom: 8, opacity: 0.3 }}>📷</div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: project.color, opacity: 0.5, margin: 0 }}>Photo Coming Soon</p>
                  </div>
                  {/* Category Badge */}
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    background: project.color, padding: "6px 14px",
                  }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: COLORS.white }}>{project.category}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div style={{ padding: "28px 24px" }}>
                  <h3 style={{
                    fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 700,
                    color: COLORS.navy, margin: "0 0 6px",
                  }}>{project.title}</h3>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 700,
                    letterSpacing: 2, textTransform: "uppercase", color: COLORS.gold, margin: "0 0 12px",
                  }}>{project.location}</p>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 400,
                    color: COLORS.gray, lineHeight: 1.7, margin: 0,
                  }}>{project.scope}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 60, padding: "48px",
            background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
            textAlign: "center",
          }}>
            <h3 style={{
              fontFamily: "'Lora', serif", fontSize: 28, fontWeight: 700,
              color: COLORS.white, margin: "0 0 12px",
            }}>Ready to Start Your Project?</h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 400,
              color: "rgba(255,255,255,0.8)", margin: "0 auto 28px", maxWidth: 500,
            }}>Let's discuss your vision. Schedule a free consultation with Nathan.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <GoldButton onClick={() => setPage("request-service")}>Request a Consultation</GoldButton>
              <GoldButton outline onClick={() => setPage("contact")}>Contact Us</GoldButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: REQUEST SERVICE
// ═══════════════════════════════════════════════════════════
function RequestServicePage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "",
    serviceType: "", projectType: "", budget: "",
    timeline: "", description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (val) => setForm(f => ({ ...f, [field]: val }));

  if (submitted) {
    return (
      <div>
        <PageHero title="Request Submitted" subtitle="We'll be in touch shortly" />
        <div style={{ padding: "80px 40px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 32, color: COLORS.navy, margin: "0 0 16px" }}>Thank You</h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: COLORS.gray, lineHeight: 1.8 }}>
            Your request has been received. A member of our team will contact you within one business day to discuss your project.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: COLORS.gold, marginTop: 24 }}>
            For urgent matters, please call us directly at {PHONE}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero title="Request Service" subtitle="Tell us about your project and we'll provide a complimentary consultation" />
      <div style={{ padding: "80px 40px", maxWidth: 720, margin: "0 auto" }}>
        <FormInput label="Full Name" value={form.name} onChange={update("name")} required />
        <div className="form-row">
          <FormInput label="Email" type="email" value={form.email} onChange={update("email")} required />
          <FormInput label="Phone" type="tel" value={form.phone} onChange={update("phone")} required />
        </div>
        <FormInput label="Property Address" value={form.address} onChange={update("address")} />
        <div className="form-row">
          <FormInput label="Service Category" value={form.serviceType} onChange={update("serviceType")}
            options={["General Construction", "Plumbing", "Electrical", "Property Maintenance", "Multiple Services"]} required />
          <FormInput label="Project Type" value={form.projectType} onChange={update("projectType")}
            options={["New Construction", "Renovation / Remodel", "Maintenance Program", "Consultation Only"]} />
        </div>
        <div className="form-row">
          <FormInput label="Estimated Budget" value={form.budget} onChange={update("budget")}
            options={["$5,000 – $25,000", "$25,000 – $100,000", "$100,000 – $500,000", "$500,000 – $1M+", "Not Sure — Need Consultation"]} />
          <FormInput label="Desired Timeline" value={form.timeline} onChange={update("timeline")}
            options={["Within 1 Month", "1 – 3 Months", "3 – 6 Months", "6+ Months", "Flexible"]} />
        </div>
        <FormInput label="Project Description" value={form.description} onChange={update("description")} textarea />

        <div style={{ marginTop: 20 }}>
          <GoldButton large onClick={() => setSubmitted(true)}>Submit Request</GoldButton>
        </div>
        <p style={{
          fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: COLORS.gray, marginTop: 16,
        }}>
          By submitting this form, you agree to be contacted regarding your project. We never share your information with third parties.
        </p>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: CAREERS
// ═══════════════════════════════════════════════════════════
function CareersPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", position: "",
    experience: "", availability: "", desiredWage: "", about: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const update = (f) => (v) => setForm(prev => ({ ...prev, [f]: v }));

  if (submitted) {
    return (
      <div>
        <PageHero title="Application Received" subtitle="Thank you for your interest in TL Premier" />
        <div style={{ padding: "80px 40px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
          <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 32, color: COLORS.navy, margin: "0 0 16px" }}>Thank You</h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400, color: COLORS.gray, lineHeight: 1.8 }}>
            We've received your application and will review it shortly. If your experience is a match, we'll be in touch within a few business days.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: COLORS.gold, marginTop: 24 }}>
            Questions? Call us at {PHONE}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero title="Join Our Team" subtitle="Build your career with one of Naples' premier construction companies" />
      <div style={{ padding: "80px 40px", background: "#F7F4EE" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>

          {/* Why Work With Us */}
          <div style={{ marginBottom: 48 }}>
            <SectionTitle eyebrow="Careers" title="Why Work at TL Premier?" center={false} />
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 17, fontWeight: 400, color: COLORS.grayDark, lineHeight: 2 }}>
              <p>TL Premier Construction is growing in Naples and we're looking for skilled, reliable tradespeople who take pride in their work. We offer competitive pay, a respectful work environment, and the opportunity to work on high-end residential and commercial projects across Southwest Florida.</p>
            </div>
            <div style={{ display: "flex", gap: 32, marginTop: 28, flexWrap: "wrap" }}>
              {[
                { icon: "💰", label: "Competitive Pay" },
                { icon: "📈", label: "Growth Opportunities" },
                { icon: "🏗", label: "High-End Projects" },
                { icon: "🤝", label: "Respectful Team Culture" },
              ].map(b => (
                <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{b.icon}</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.navy }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div style={{
            padding: "32px 36px", background: `${COLORS.navy}08`,
            borderLeft: `4px solid ${COLORS.gold}`, marginBottom: 32,
          }}>
            <h4 style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 800,
              letterSpacing: 2, textTransform: "uppercase", color: COLORS.navy, margin: "0 0 16px",
            }}>Requirements for All Positions</h4>
            {[
              "Must be able to pass a background check",
              "Must be able to pass a drug test",
              "Must have reliable transportation",
              "Must have a reliable phone for communication",
            ].map(req => (
              <div key={req} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "center" }}>
                <span style={{ color: COLORS.gold, fontWeight: 700, fontSize: 16 }}>•</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 500, color: COLORS.grayDark }}>{req}</span>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div style={{
            padding: "48px 40px", background: COLORS.white,
            border: `1px solid ${COLORS.gold}22`, borderTop: `4px solid ${COLORS.gold}`,
          }}>
            <h3 style={{
              fontFamily: "'Lora', Georgia, serif", fontSize: 30, fontWeight: 700,
              color: COLORS.navy, margin: "0 0 8px",
            }}>Apply Now</h3>
            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 400,
              color: COLORS.gray, marginBottom: 28,
            }}>Fill out the form below and we'll get back to you.</p>

            <div className="form-row">
              <FormInput label="Full Name" value={form.name} onChange={update("name")} required />
              <FormInput label="Email" type="email" value={form.email} onChange={update("email")} required />
            </div>
            <div className="form-row">
              <FormInput label="Phone" type="tel" value={form.phone} onChange={update("phone")} required />
              <FormInput label="Position Applying For" value={form.position} onChange={update("position")}
                options={["Journeyman Electrician", "Apprentice Electrician", "Helper", "Technician", "Other"]} required />
            </div>
            <div className="form-row">
              <FormInput label="Years of Experience" value={form.experience} onChange={update("experience")}
                options={["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"]} />
              <FormInput label="Desired Hourly Wage" value={form.desiredWage} onChange={update("desiredWage")} />
            </div>
            <FormInput label="Availability" value={form.availability} onChange={update("availability")}
              options={["Immediate", "Within 2 weeks", "Within 1 month", "Flexible"]} />
            <FormInput label="Tell Us About Yourself" value={form.about} onChange={update("about")} textarea />

            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 400,
              color: COLORS.gray, margin: "0 0 20px", lineHeight: 1.6,
            }}>
              To attach your resume, please email it to <strong style={{ color: COLORS.navy }}>{EMAIL}</strong> with the position title in the subject line.
            </p>

            <GoldButton large onClick={() => setSubmitted(true)}>Submit Application</GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: PAYMENTS
// ═══════════════════════════════════════════════════════════
function PaymentsPage() {
  const [invoiceId, setInvoiceId] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div>
      <PageHero title="Make a Payment" subtitle="Secure & convenient payment options" />
      <div style={{ padding: "80px 40px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 40 }}>
          {/* Online Payment */}
          <div style={{ padding: "40px 36px", background: COLORS.offWhite, border: `1px solid ${COLORS.grayLight}33` }}>
            <div style={{ fontSize: 36, marginBottom: 16 }}>💳</div>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 24, fontWeight: 600, color: COLORS.navy, margin: "0 0 16px" }}>
              Online Payment
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: COLORS.gray, lineHeight: 1.8, marginBottom: 24 }}>
              Pay your invoice securely online with a credit card, debit card, or ACH bank transfer.
            </p>
            <FormInput label="Invoice Number" value={invoiceId} onChange={setInvoiceId} />
            <FormInput label="Payment Amount" type="number" value={amount} onChange={setAmount} />
            <GoldButton onClick={() => alert("Payment portal integration coming soon. Please contact us for payment arrangements.")}>
              Pay Now
            </GoldButton>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: COLORS.gray, marginTop: 12 }}>
              Secured with 256-bit SSL encryption
            </p>
          </div>

          {/* Other Methods */}
          <div>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 24, fontWeight: 600, color: COLORS.navy, margin: "0 0 24px" }}>
              Other Payment Methods
            </h3>
            {[
              { icon: "🏦", title: "Bank Transfer / ACH", desc: "Contact us for our bank details for direct wire or ACH transfers." },
              { icon: "📧", title: "Zelle", desc: `Send payments via Zelle to ${EMAIL}` },
              { icon: "✉️", title: "Check by Mail", desc: "Mail checks payable to TL Premier Construction Services. Contact us for mailing address." },
              { icon: "🤝", title: "In-Person", desc: "We accept checks and cards at on-site meetings or our office." },
            ].map(m => (
              <div key={m.title} style={{
                display: "flex", gap: 16, padding: "20px 0",
                borderBottom: `1px solid ${COLORS.grayLight}33`,
              }}>
                <span style={{ fontSize: 24 }}>{m.icon}</span>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600, color: COLORS.navy, margin: "0 0 4px" }}>{m.title}</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: COLORS.gray, margin: 0, lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 32, padding: "24px", background: `${COLORS.gold}10`,
              borderLeft: `3px solid ${COLORS.gold}`,
            }}>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: COLORS.gold, margin: "0 0 8px" }}>
                Payment Terms
              </h4>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: COLORS.grayDark, lineHeight: 1.7, margin: 0 }}>
                Standard payment schedules are outlined in your contract. Typical terms include a deposit at signing, progress payments at milestones, and final payment upon completion and inspection approval.
              </p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 60 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: COLORS.gray }}>
            Questions about billing? Call us at <strong style={{ color: COLORS.navy }}>{PHONE}</strong> or email <strong style={{ color: COLORS.navy }}>{EMAIL}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// PAGE: CONTACT
// ═══════════════════════════════════════════════════════════
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (f) => (v) => setForm(prev => ({ ...prev, [f]: v }));

  return (
    <div>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you" />
      <div style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="two-col-layout">
          {/* Contact Info */}
          <div>
            <SectionTitle eyebrow="Get In Touch" title="Let's Talk About Your Project" center={false} />
            {[
              { icon: "📞", label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/-/g, "")}` },
              { icon: "📧", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: "📍", label: "Service Area", value: "Naples & Greater Collier County", href: null },
              { icon: "🕐", label: "Hours", value: "Mon–Fri 7:00 AM – 6:00 PM\nSat 8:00 AM – 2:00 PM", href: null },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, padding: "20px 0", borderBottom: `1px solid ${COLORS.grayLight}22` }}>
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: COLORS.gold, margin: "0 0 4px" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: COLORS.navy, textDecoration: "none" }}>{item.value}</a>
                  ) : (
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: COLORS.navy, margin: 0, whiteSpace: "pre-line" }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 32 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: COLORS.gold, marginBottom: 12 }}>Licenses</p>
              {LICENSES.map(l => (
                <p key={l.number} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: COLORS.grayDark, margin: "4px 0" }}>
                  {l.type}: <strong>#{l.number}</strong>
                </p>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ padding: "40px", background: COLORS.offWhite }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 28, color: COLORS.navy }}>Message Sent</h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: COLORS.gray }}>We'll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 24, fontWeight: 600, color: COLORS.navy, margin: "0 0 24px" }}>Send Us a Message</h3>
                <FormInput label="Name" value={form.name} onChange={update("name")} required />
                <div className="form-row">
                  <FormInput label="Email" type="email" value={form.email} onChange={update("email")} required />
                  <FormInput label="Phone" type="tel" value={form.phone} onChange={update("phone")} />
                </div>
                <FormInput label="Subject" value={form.subject} onChange={update("subject")}
                  options={["General Inquiry", "Project Estimate", "Service Request", "Billing Question", "Other"]} />
                <FormInput label="Message" value={form.message} onChange={update("message")} textarea required />
                <GoldButton onClick={() => setSent(true)}>Send Message</GoldButton>
              </>
            )}
          </div>
        </div>

        {/* Service Area */}
        <div style={{ marginTop: 60, maxWidth: 1100, margin: "60px auto 0", padding: "0 40px" }}>
          <SectionTitle eyebrow="Service Area" title="Communities We Serve" subtitle="Proudly serving the luxury communities and neighborhoods of Naples and greater Collier County." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 16 }} className="service-areas">
            {[
              { area: "Naples Luxury", color: COLORS.gold, communities: ["Port Royal", "Old Naples", "Aqualane Shores", "Royal Harbor", "Coquina Sands", "The Moorings", "Park Shore", "Crayton Road"] },
              { area: "North Naples & Golf", color: "#4A8FC4", communities: ["Pelican Bay", "Pelican Marsh", "Grey Oaks", "Pine Ridge", "Talis Park", "Mediterra", "The Quarry", "Tiburón"] },
              { area: "East Naples & Estates", color: "#4CA66B", communities: ["Golden Gate Estates", "Oakes Estates", "Livingston Woods", "Collier's Reserve", "Twin Eagles", "Olde Cypress"] },
              { area: "Surrounding Areas", color: "#D48A2C", communities: ["Marco Island", "Bonita Springs", "Estero", "Bonita Bay", "Ave Maria", "Fiddler's Creek", "Lely Resort", "Verona Walk"] },
            ].map(group => (
              <div key={group.area} style={{
                padding: "20px 16px", background: COLORS.white,
                borderTop: `4px solid ${group.color}`,
                border: `1px solid ${COLORS.grayLight}22`,
              }}>
                <h4 style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 800,
                  letterSpacing: 1.5, textTransform: "uppercase", color: group.color, margin: "0 0 12px",
                }}>{group.area}</h4>
                {group.communities.map(c => (
                  <p key={c} style={{
                    fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 400,
                    color: COLORS.gray, margin: "4px 0", lineHeight: 1.5,
                  }}>{c}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage setPage={navigate} />;
      case "about": return <AboutPage setPage={navigate} />;
      case "general-construction": return <GeneralConstructionPage setPage={navigate} />;
      case "plumbing": return <PlumbingPage setPage={navigate} />;
      case "electrical": return <ElectricalPage setPage={navigate} />;
      case "property-maintenance": return <PropertyMaintenancePage setPage={navigate} />;
      case "portfolio": return <PortfolioPage setPage={navigate} />;
      case "request-service": return <RequestServicePage />;
      case "careers": return <CareersPage />;
      case "payments": return <PaymentsPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setPage={navigate} />;
    }
  };

  return (
    <div style={{ background: COLORS.white, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        ::selection { background: ${COLORS.gold}44; color: ${COLORS.navy}; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        button:focus { outline: 2px solid ${COLORS.gold}; outline-offset: 2px; }
        input:focus, textarea:focus, select:focus { outline: none; }
        a { transition: color 0.3s; }
        a:hover { color: ${COLORS.gold} !important; }

        /* Form rows - two columns on desktop, stack on mobile */
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        
        /* Two column layouts */
        .two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        
        /* Stats grid */
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; }

        /* ===== MOBILE RESPONSIVE ===== */
        @media (max-width: 768px) {
          /* Stack form rows */
          .form-row { grid-template-columns: 1fr !important; gap: 0 !important; }
          
          /* Stack two-column layouts */
          .two-col-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
          
          /* Stats grid to 2x2 */
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          
          /* Bio photo full width on mobile */
          .bio-photo { float: none !important; width: 100% !important; max-width: 100% !important; margin-right: 0 !important; margin-bottom: 24px !important; }
          
          /* Service areas stack on mobile */
          .service-areas { grid-template-columns: 1fr 1fr !important; }
        }

        /* Padding and sizing on phones */
        @media (max-width: 600px) {
          footer { padding: 48px 20px 32px !important; }
          nav > div { padding: 0 16px !important; }
        }
      `}</style>
      <Navigation currentPage={page} setPage={navigate} />
      <main style={{ animation: "fadeIn 0.4s ease" }} key={page}>
        {renderPage()}
      </main>
      <Footer setPage={navigate} />
    </div>
  );
}
