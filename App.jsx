import { useState, useEffect } from "react";

const C = {
  navy: "#0B1D3A", navyL: "#132B52", navyD: "#060F1F",
  gold: "#C4A265", goldL: "#D4B97A", goldD: "#A8884E",
  white: "#FAFAFA", off: "#F2F0EB", gray: "#8A8A8A",
  dark: "#0A0A0A",
};

const PHONE = "239-205-8888";
const EMAIL = "info@tlpremierco.com";
const LICENSES = [
  { type: "Certified General Contractor", num: "CGC1531607", icon: "🏗️" },
  { type: "Certified Plumbing Contractor", num: "CFC1431815", icon: "🔧" },
  { type: "Electrical Contractor", num: "EC13013153", icon: "⚡" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'Montserrat',sans-serif;background:${C.off};color:${C.dark};}
  a{text-decoration:none;color:inherit;}
  button{cursor:pointer;font-family:'Montserrat',sans-serif;}
  input,textarea,select{font-family:'Montserrat',sans-serif;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
  @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
  .fade-up{animation:fadeUp .7s ease forwards;}
  .fade-in{animation:fadeIn .5s ease forwards;}
  .gold-line{width:60px;height:2px;background:${C.gold};margin:16px 0;}
  .section{padding:90px 0;}
  .container{max-width:1140px;margin:0 auto;padding:0 32px;}
  .serif{font-family:'Cormorant Garamond',serif;}
  @media(max-width:768px){
    .section{padding:60px 0;}
    .container{padding:0 20px;}
    .hide-mobile{display:none!important;}
    .nav-links{display:none;}
    .mobile-menu-btn{display:flex!important;}
  }
  @media(max-width:480px){
    .section{padding:40px 0;}
  }
`;

function Logo({ light = false, size = 44 }) {
  const c = light ? C.white : C.navy;
  const g = C.gold;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="4" y="4" width="92" height="92" stroke={g} strokeWidth="3" fill="none" />
        <polygon points="50,20 82,48 82,80 18,80 18,48" fill={light ? "rgba(196,162,101,0.15)" : "rgba(11,29,58,0.08)"} stroke={g} strokeWidth="2" />
        <line x1="50" y1="20" x2="50" y2="80" stroke={g} strokeWidth="1.2" />
        <text x="50" y="72" textAnchor="middle" fill={g} fontSize="11" fontFamily="Montserrat,sans-serif" fontWeight="700" letterSpacing="3">TL</text>
      </svg>
      <div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: size * 0.45, fontWeight: 700, color: c, letterSpacing: 2, lineHeight: 1 }}>TL PREMIER</div>
        <div style={{ fontSize: size * 0.2, fontWeight: 500, color: g, letterSpacing: 3, textTransform: "uppercase" }}>Construction Services</div>
      </div>
    </div>
  );
}

function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "licenses", label: "Licenses" },
    { id: "contact", label: "Contact" },
    { id: "request", label: "Request Service" },
  ];
  const bg = scrolled || mobileOpen ? C.navy : "transparent";
  return (
    <>
      <style>{css}</style>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: bg, transition: "background .3s", borderBottom: scrolled ? `1px solid rgba(196,162,101,0.2)` : "none" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
          <div style={{ cursor: "pointer" }} onClick={() => setPage("home")}><Logo light /></div>
          <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {links.map(l => (
              <button key={l.id} onClick={() => { setPage(l.id); setMobileOpen(false); }} style={{
                background: l.id === "request" ? C.gold : "none",
                border: l.id === "request" ? "none" : "none",
                color: l.id === "request" ? C.navy : C.white,
                padding: l.id === "request" ? "10px 22px" : "4px 0",
                fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase",
                borderBottom: page === l.id && l.id !== "request" ? `2px solid ${C.gold}` : "2px solid transparent",
                transition: "all .2s",
              }}>{l.label}</button>
            ))}
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", color: C.white, fontSize: 24, flexDirection: "column", gap: 5, padding: 4 }}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileOpen && (
          <div style={{ background: C.navy, padding: "20px 24px 30px", display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map(l => (
              <button key={l.id} onClick={() => { setPage(l.id); setMobileOpen(false); }} style={{
                background: "none", border: "none", color: page === l.id ? C.gold : C.white,
                textAlign: "left", padding: "12px 0", fontSize: 13, fontWeight: 600,
                letterSpacing: 2, textTransform: "uppercase", borderBottom: `1px solid rgba(255,255,255,0.07)`,
              }}>{l.label}</button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

function Hero({ setPage }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: `linear-gradient(160deg, ${C.navyD} 0%, ${C.navy} 60%, ${C.navyL} 100%)`, display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(196,162,101,0.03) 80px, rgba(196,162,101,0.03) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(196,162,101,0.03) 80px, rgba(196,162,101,0.03) 81px)" }} />
      <div style={{ position: "absolute", right: -100, top: "50%", transform: "translateY(-50%)", width: 700, height: 700, border: `1px solid rgba(196,162,101,0.08)`, borderRadius: "50%" }} />
      <div style={{ position: "absolute", right: -50, top: "50%", transform: "translateY(-50%)", width: 500, height: 500, border: `1px solid rgba(196,162,101,0.06)`, borderRadius: "50%" }} />
      <div className="container" style={{ position: "relative", paddingTop: 100 }}>
        <div className="fade-up" style={{ maxWidth: 680 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 24 }}>Naples, Florida · Licensed & Insured</div>
          <h1 className="serif" style={{ fontSize: "clamp(42px,6vw,80px)", fontWeight: 300, color: C.white, lineHeight: 1.1, marginBottom: 28 }}>
            Built to Last.<br /><span style={{ color: C.gold, fontWeight: 700 }}>Built to Impress.</span>
          </h1>
          <div className="gold-line" />
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.72)", marginBottom: 44, maxWidth: 520 }}>
            4th-generation craftsmanship meeting modern precision. TL Premier delivers luxury construction, plumbing, and electrical services for Southwest Florida's most discerning clients.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => setPage("request")} style={{ background: C.gold, border: "none", color: C.navy, padding: "16px 36px", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", transition: "all .2s" }}>
              Request Service
            </button>
            <button onClick={() => setPage("services")} style={{ background: "transparent", border: `1px solid rgba(196,162,101,0.5)`, color: C.white, padding: "16px 36px", fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", transition: "all .2s" }}>
              Our Services
            </button>
          </div>
          <div style={{ marginTop: 60, display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[["20+", "Years Experience"], ["3", "State Licenses"], ["100%", "Licensed & Insured"]].map(([num, label]) => (
              <div key={label}>
                <div className="serif" style={{ fontSize: 40, fontWeight: 700, color: C.gold, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.3)", fontSize: 20, animation: "fadeUp 2s ease infinite alternate" }}>↓</div>
    </div>
  );
}

function About({ setPage }) {
  return (
    <div>
      <div style={{ background: C.navy, padding: "100px 0 60px" }}>
        <div className="container">
          <div style={{ fontSize: 10, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>Our Story</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: C.white, lineHeight: 1.2 }}>
            Four Generations.<br /><span style={{ color: C.gold }}>One Standard of Excellence.</span>
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="gold-line" />
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#444", marginBottom: 24 }}>
                TL Premier Construction Services was founded with a singular mission: to bring four generations of building knowledge to every project we touch. Led by Nathan Le — a 4th-generation builder with over 20 years of hands-on experience — we hold a rare combination of Florida licenses that allows us to manage every aspect of your project under one roof.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "#444", marginBottom: 32 }}>
                Now rooted in Naples, Florida, we serve Southwest Florida's luxury residential and commercial market with the same integrity and precision that built our reputation. From groundbreaking to final inspection, we are your single point of accountability.
              </p>
              <button onClick={() => setPage("request")} style={{ background: C.navy, border: "none", color: C.white, padding: "14px 32px", fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase" }}>
                Work With Us
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Certified General Contractor", desc: "Complete project management from foundation to finish — residential and commercial.", num: "CGC1531607" },
                { title: "Certified Plumbing Contractor", desc: "Full plumbing systems — new construction, remodel, and service.", num: "CFC1431815" },
                { title: "Electrical Contractor", desc: "Licensed electrical work for residential and commercial properties.", num: "EC13013153" },
              ].map(item => (
                <div key={item.num} style={{ background: C.off, border: `1px solid rgba(196,162,101,0.2)`, padding: "24px 28px", borderLeft: `3px solid ${C.gold}` }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.navy, marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 10 }}>{item.desc}</div>
                  <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2, fontWeight: 600 }}>License #{item.num}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  { id: "general", icon: "🏗️", title: "General Construction", license: "CGC1531607", desc: "Full-service general contracting for custom homes, commercial builds, renovations, and additions. We manage every trade, every timeline, and every detail.", items: ["Custom Home Construction", "Commercial Build-Out", "Full Renovations & Additions", "Project Management", "Design-Build Services", "Permitting & Inspections"] },
  { id: "plumbing", icon: "🔧", title: "Plumbing", license: "CFC1431815", desc: "Complete plumbing systems for new construction and remodels. Service, repair, and installation performed by our licensed plumbing team.", items: ["New Construction Plumbing", "Remodel & Retrofit", "Water Heater Installation", "Pipe Repair & Replacement", "Fixture Installation", "Drain & Sewer Services"] },
  { id: "electrical", icon: "⚡", title: "Electrical", license: "EC13013153", desc: "Licensed electrical services for residential and commercial properties — from panel upgrades to full electrical systems.", items: ["New Construction Wiring", "Panel Upgrades & Replacement", "EV Charger Installation", "Lighting & Smart Systems", "Commercial Electrical", "Code Compliance & Inspection"] },
  { id: "remodel", icon: "🏠", title: "Remodeling", license: "CGC1531607", desc: "Kitchen, bath, and whole-home renovations that transform spaces without compromising structural integrity.", items: ["Kitchen Remodels", "Bathroom Renovations", "Whole-Home Remodels", "Flooring & Finishes", "Outdoor Living Spaces", "Historic Restoration"] },
  { id: "property", icon: "🔑", title: "Property Management", license: "CGC1531607", desc: "Comprehensive property maintenance and management services for residential and investment properties across Southwest Florida.", items: ["Preventive Maintenance", "Emergency Repairs", "Vendor Coordination", "Property Inspections", "Seasonal Preparation", "24/7 Response"] },
];

function Services({ setPage }) {
  return (
    <div>
      <div style={{ background: C.navy, padding: "100px 0 60px" }}>
        <div className="container">
          <div style={{ fontSize: 10, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>What We Do</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: C.white, lineHeight: 1.2 }}>
            Every Trade.<br /><span style={{ color: C.gold }}>One Team.</span>
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.id} style={{ background: C.white, border: "1px solid #e8e8e8", padding: "36px 32px", transition: "all .3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e8e8"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="serif" style={{ fontSize: 26, fontWeight: 600, color: C.navy, marginBottom: 8 }}>{s.title}</h3>
                <div style={{ fontSize: 10, color: C.gold, letterSpacing: 2, fontWeight: 600, marginBottom: 16 }}>License #{s.license}</div>
                <div className="gold-line" style={{ margin: "0 0 16px" }} />
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.items.map(item => (
                    <li key={item} style={{ fontSize: 13, color: "#444", display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ color: C.gold, fontWeight: 700 }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <button onClick={() => setPage("request")} style={{ background: C.navy, border: "none", color: C.white, padding: "18px 48px", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Licenses() {
  return (
    <div>
      <div style={{ background: C.navy, padding: "100px 0 60px" }}>
        <div className="container">
          <div style={{ fontSize: 10, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>Credentials</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: C.white, lineHeight: 1.2 }}>
            Licensed in Florida.<br /><span style={{ color: C.gold }}>Trusted Everywhere.</span>
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 32, marginBottom: 60 }}>
            {LICENSES.map(l => (
              <div key={l.num} style={{ background: C.white, padding: "48px 36px", textAlign: "center", border: "1px solid #e8e8e8" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{l.icon}</div>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 700, color: C.navy, marginBottom: 12 }}>{l.type}</h3>
                <div className="gold-line" style={{ margin: "0 auto 20px" }} />
                <div style={{ fontFamily: "monospace", fontSize: 14, color: "#666", letterSpacing: 2, background: C.off, padding: "10px 20px", display: "inline-block" }}>
                  #{l.num}
                </div>
                <p style={{ fontSize: 12, color: "#999", marginTop: 16 }}>Florida Department of Business & Professional Regulation</p>
              </div>
            ))}
          </div>
          <div style={{ background: C.navy, padding: "48px", textAlign: "center" }}>
            <div className="serif" style={{ fontSize: 28, color: C.white, marginBottom: 12 }}>Fully Licensed, Bonded & Insured</div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, maxWidth: 560, margin: "0 auto 28px" }}>All work performed under active Florida state licenses. We carry full general liability and workers' compensation insurance on every project.</p>
            <a href={`tel:${PHONE}`} style={{ color: C.gold, fontSize: 13, letterSpacing: 3, fontWeight: 600 }}>CALL {PHONE}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <div style={{ background: C.navy, padding: "100px 0 60px" }}>
        <div className="container">
          <div style={{ fontSize: 10, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: C.white, lineHeight: 1.2 }}>
            Let's Build<br /><span style={{ color: C.gold }}>Together.</span>
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            <div>
              <div className="gold-line" />
              {[
                { label: "Phone", value: PHONE, href: `tel:${PHONE}` },
                { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { label: "Location", value: "Naples, Florida", href: null },
                { label: "Hours", value: "Mon–Fri 7am–6pm · Sat 8am–2pm", href: null },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 18, color: C.navy, fontWeight: 600 }}>{item.value}</a>
                    : <div style={{ fontSize: 16, color: "#444" }}>{item.value}</div>}
                </div>
              ))}
              <div style={{ marginTop: 40, padding: "32px", background: C.off, borderLeft: `3px solid ${C.gold}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, marginBottom: 8 }}>Emergency Service Available</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>For urgent plumbing or electrical issues, call us directly. We prioritize emergency response for existing clients.</div>
              </div>
            </div>
            <div style={{ background: C.navy, padding: "48px 40px" }}>
              <div className="serif" style={{ fontSize: 24, color: C.white, marginBottom: 8 }}>Send a Message</div>
              <div className="gold-line" />
              {["Name", "Email", "Phone"].map(field => (
                <div key={field} style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>{field}</label>
                  <input style={{ width: "100%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(196,162,101,0.3)", color: C.white, padding: "12px 16px", fontSize: 14, outline: "none" }} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6 }}>Message</label>
                <textarea rows={5} style={{ width: "100%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(196,162,101,0.3)", color: C.white, padding: "12px 16px", fontSize: 14, outline: "none", resize: "vertical" }} />
              </div>
              <button style={{ width: "100%", background: C.gold, border: "none", color: C.navy, padding: "16px", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Request() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", address: "", description: "", timing: "", budget: "" });
  const u = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const submit = () => setSent(true);

  return (
    <div>
      <div style={{ background: C.navy, padding: "100px 0 60px" }}>
        <div className="container">
          <div style={{ fontSize: 10, letterSpacing: 5, color: C.gold, textTransform: "uppercase", marginBottom: 16 }}>Start Your Project</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 300, color: C.white, lineHeight: 1.2 }}>
            Request<br /><span style={{ color: C.gold }}>a Service.</span>
          </h2>
        </div>
      </div>
      <div className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "80px 40px", background: C.white, border: `2px solid ${C.gold}` }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
              <div className="serif" style={{ fontSize: 36, color: C.navy, marginBottom: 12 }}>Request Received</div>
              <div className="gold-line" style={{ margin: "0 auto 20px" }} />
              <p style={{ fontSize: 16, color: "#666", lineHeight: 1.8 }}>Thank you! We'll review your request and contact you within 1 business day to discuss your project and schedule a consultation.</p>
              <div style={{ marginTop: 32, fontSize: 14, color: C.gold, fontWeight: 600 }}>Questions? Call {PHONE}</div>
            </div>
          ) : (
            <div style={{ background: C.white, padding: "48px 40px", border: "1px solid #e8e8e8" }}>
              <div className="gold-line" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                {[["Full Name", "name", "text"], ["Phone Number", "phone", "tel"], ["Email Address", "email", "email"], ["Service Address", "address", "text"]].map(([label, key, type]) => (
                  <div key={key}>
                    <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 600 }}>{label}</label>
                    <input type={type} value={form[key]} onChange={e => u(key, e.target.value)}
                      style={{ width: "100%", border: "1px solid #ddd", padding: "12px 14px", fontSize: 14, outline: "none", background: C.off }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 600 }}>Type of Service Needed</label>
                <select value={form.service} onChange={e => u("service", e.target.value)}
                  style={{ width: "100%", border: "1px solid #ddd", padding: "12px 14px", fontSize: 14, outline: "none", background: C.off, color: form.service ? C.dark : "#999" }}>
                  <option value="">Select a service...</option>
                  {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                <div>
                  <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 600 }}>Timing</label>
                  <select value={form.timing} onChange={e => u("timing", e.target.value)}
                    style={{ width: "100%", border: "1px solid #ddd", padding: "12px 14px", fontSize: 14, outline: "none", background: C.off }}>
                    <option value="">Select timing...</option>
                    <option>Emergency / ASAP</option>
                    <option>Within 1 week</option>
                    <option>Within 1 month</option>
                    <option>Planning stage</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 600 }}>Estimated Budget</label>
                  <select value={form.budget} onChange={e => u("budget", e.target.value)}
                    style={{ width: "100%", border: "1px solid #ddd", padding: "12px 14px", fontSize: 14, outline: "none", background: C.off }}>
                    <option value="">Select range...</option>
                    <option>Under $5,000</option>
                    <option>$5,000 – $25,000</option>
                    <option>$25,000 – $100,000</option>
                    <option>$100,000 – $500,000</option>
                    <option>$500,000+</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 10, color: C.gold, letterSpacing: 2, textTransform: "uppercase", display: "block", marginBottom: 6, fontWeight: 600 }}>Project Description</label>
                <textarea rows={5} value={form.description} onChange={e => u("description", e.target.value)} placeholder="Describe your project, what needs to be done, any special requirements..."
                  style={{ width: "100%", border: "1px solid #ddd", padding: "12px 14px", fontSize: 14, outline: "none", background: C.off, resize: "vertical", lineHeight: 1.7 }} />
              </div>
              <button onClick={submit} style={{ width: "100%", background: C.navy, border: "none", color: C.white, padding: "18px", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                Submit Request
              </button>
              <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "#999" }}>
                Prefer to call? <a href={`tel:${PHONE}`} style={{ color: C.gold, fontWeight: 600 }}>{PHONE}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: C.navyD, color: "rgba(255,255,255,0.6)", padding: "60px 0 30px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <Logo light size={36} />
            <p style={{ fontSize: 13, lineHeight: 1.9, marginTop: 20, maxWidth: 300, color: "rgba(255,255,255,0.5)" }}>
              Licensed general contractor, plumber, and electrician serving Naples and Southwest Florida. Built on four generations of craftsmanship.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Services</div>
            {SERVICES.map(s => (
              <button key={s.id} onClick={() => setPage("services")} style={{ display: "block", background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 10, padding: 0, textAlign: "left", cursor: "pointer" }}>{s.title}</button>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Contact</div>
            <a href={`tel:${PHONE}`} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>{EMAIL}</a>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>Naples, FL</div>
            <div style={{ marginTop: 20 }}>
              {LICENSES.map(l => (
                <div key={l.num} style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1, marginBottom: 4 }}>{l.num}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>© 2026 TL Premier Construction Services. All rights reserved.</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Licensed · Bonded · Insured</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);
  const navigate = (p) => setPage(p);
  const pages = { home: <><Hero setPage={navigate} /></>, about: <About setPage={navigate} />, services: <Services setPage={navigate} />, licenses: <Licenses />, contact: <Contact />, request: <Request /> };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav page={page} setPage={navigate} />
      <main>{pages[page] || pages.home}</main>
      <Footer setPage={navigate} />
    </div>
  );
}
