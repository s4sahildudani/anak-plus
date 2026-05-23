// import { useState, useEffect, useRef } from "react";
// import Aikart from "../../assests/images/aikart.jpg";
// import Minimalist from "../../assests/images/Minimalist.png";
// import Femme from "../../assests/images/Femme.png";
// const GOLD = "#775a19";
// const GOLD_LIGHT = "#fed488";
// const BLACK = "#000000";
// const WHITE = "#ffffff";
// const BG = "#fbf9f8";
// const SURFACE = "#efeded";
// const SURFACE_LOW = "#f5f3f3";
// const TEXT_MUTED = "#444748";
// const BORDER = "#e4e2e2";
// const OUTLINE = "#747878";

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400..900;1,400..900&family=Manrope:wght@200..800&display=swap');

//   * { box-sizing: border-box; margin: 0; padding: 0; }

//   body { background: ${BG}; color: #1b1c1c; font-family: 'Manrope', sans-serif; }

//   .ainak-root { background: ${BG}; min-height: 100vh; }

//   .display { font-family: 'Bodoni Moda', serif; }

//   .label-caps {
//     font-family: 'Manrope', sans-serif;
//     font-size: 12px;
//     font-weight: 600;
//     letter-spacing: 0.1em;
//     text-transform: uppercase;
//   }

//   /* NAV */
//   .nav {
//     position: sticky; top: 0; z-index: 50;
//     background: ${BG}; border-bottom: 1px solid ${BORDER};
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 24px 64px;
//     max-width: 1280px; margin: 0 auto;
//   }
//   .nav-logo { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 600; letter-spacing: -0.02em; color: ${BLACK}; }
//   .nav-links { display: flex; gap: 40px; align-items: center; }
//   .nav-link { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; color: ${TEXT_MUTED}; transition: color 0.2s; }
//   .nav-link:hover { color: ${BLACK}; }
//   .nav-link.active { color: ${BLACK}; border-bottom: 2px solid ${GOLD}; padding-bottom: 2px; }
//   .nav-icons { display: flex; gap: 24px; align-items: center; }
//   .icon-btn { background: none; border: none; cursor: pointer; font-size: 22px; color: ${BLACK}; transition: color 0.3s; line-height: 1; }
//   .icon-btn:hover { color: ${GOLD}; }

//   /* HERO */
//   .hero {
//     position: relative; min-height: 90vh;
//     display: flex; align-items: center;
//     overflow: hidden;
//   }
//   .hero-img {
//     position: absolute; inset: 0; z-index: 0;
//     width: 100%; height: 100%; object-fit: cover;
//     transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
//   }
//   .hero:hover .hero-img { transform: scale(1.03); }
//   .hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.1); z-index: 1; }
//   .hero-content {
//     position: relative; z-index: 2;
//     padding: 0 64px; max-width: 1280px; margin: 0 auto; width: 100%;
//   }
//   .hero-box {
//     max-width: 600px;
//     background: rgba(251,249,248,0.4);
//     backdrop-filter: blur(6px);
//     padding: 64px;
//     border-left: 4px solid ${GOLD};
//   }
//   .hero-title {
//     font-family: 'Bodoni Moda', serif;
//     font-size: clamp(40px, 6vw, 64px);
//     font-weight: 700;
//     line-height: 1.1;
//     letter-spacing: -0.02em;
//     color: ${BLACK};
//     margin-bottom: 24px;
//   }
//   .hero-sub {
//     font-size: 18px; line-height: 1.6; color: ${TEXT_MUTED};
//     max-width: 380px; margin-bottom: 40px;
//   }
//   .btn-primary {
//     background: ${BLACK}; color: ${WHITE};
//     font-family: 'Manrope', sans-serif;
//     font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
//     border: none; cursor: pointer;
//     padding: 20px 40px;
//     transition: background 0.3s;
//   }
//   .btn-primary:hover { background: ${GOLD}; }
//   .btn-primary:active { transform: scale(0.97); }

//   /* CATEGORIES */
//   .categories { padding: 128px 64px; max-width: 1280px; margin: 0 auto; }
//   .section-eyebrow { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${GOLD}; display: block; margin-bottom: 16px; }
//   .section-title { font-family: 'Bodoni Moda', serif; font-size: 32px; font-weight: 600; line-height: 1.3; color: ${BLACK}; }
//   .section-header { text-align: center; margin-bottom: 80px; }

//   .bento-grid {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-template-rows: 380px 380px;
//     gap: 32px;
//   }
//   .bento-large { grid-column: span 8; }
//   .bento-small { grid-column: span 4; }
//   .bento-small2 { grid-column: span 4; }
//   .bento-desc { grid-column: span 8; }

//   .bento-card {
//     position: relative; overflow: hidden;
//     background: ${SURFACE_LOW};
//     cursor: pointer;
//   }
//   .bento-card img {
//     width: 100%; height: 100%; object-fit: cover;
//     transition: transform 0.7s ease;
//   }
//   .bento-card:hover img { transform: scale(1.05); }
//   .bento-overlay {
//     position: absolute; inset: 0;
//     background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
//     display: flex; flex-direction: column; justify-content: flex-end;
//     padding: 40px;
//     opacity: 0; transition: opacity 0.5s;
//   }
//   .bento-card:hover .bento-overlay { opacity: 1; }
//   .bento-overlay-always {
//     position: absolute; inset: 0;
//     background: rgba(0,0,0,0.2);
//     display: flex; flex-direction: column; justify-content: flex-end;
//     padding: 32px;
//     transition: background 0.5s;
//   }
//   .bento-card:hover .bento-overlay-always { background: rgba(0,0,0,0.4); }
//   .bento-card-title { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 500; color: ${WHITE}; margin-bottom: 8px; }
//   .bento-card-sub { font-size: 14px; color: rgba(255,255,255,0.8); margin-bottom: 16px; }
//   .bento-card-link { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${GOLD_LIGHT}; text-decoration: none; position: relative; display: inline-block; }
//   .bento-card-link::after { content: ''; position: absolute; width: 0; height: 1px; bottom: -2px; left: 0; background: ${GOLD_LIGHT}; transition: width 0.3s; }
//   .bento-card-link:hover::after { width: 100%; }
//   .bento-card-link-white { color: ${WHITE}; }
//   .bento-card-link-white::after { background: ${WHITE}; }

//   .bento-desc-inner {
//     display: flex; align-items: center; justify-content: center;
//     height: 100%; padding: 48px;
//     background: ${SURFACE}; border: 1px solid ${BORDER};
//   }
//   .bento-desc-content { max-width: 380px; text-align: center; }
//   .bento-desc-title { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 500; color: ${BLACK}; margin-bottom: 16px; }
//   .bento-desc-text { font-size: 16px; line-height: 1.6; color: ${TEXT_MUTED}; margin-bottom: 32px; }
//   .divider-gold { height: 2px; background: ${GOLD}; width: 48px; margin: 0 auto 32px; }
//   .bento-established { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${GOLD}; }

//   /* BOUTIQUE */
//   .boutique { background: ${BG}; padding: 128px 64px; border-top: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
//   .boutique-inner { max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; }
//   .boutique-title { font-family: 'Bodoni Moda', serif; font-size: 32px; font-weight: 600; line-height: 1.3; color: ${BLACK}; margin-bottom: 32px; }
//   .boutique-text { font-size: 18px; line-height: 1.6; color: ${TEXT_MUTED}; margin-bottom: 48px; }
//   .feature-list { display: flex; flex-direction: column; gap: 40px; }
//   .feature-item { display: flex; gap: 24px; align-items: flex-start; }
//   .feature-icon { font-size: 28px; color: ${GOLD}; flex-shrink: 0; line-height: 1; }
//   .feature-heading { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${BLACK}; margin-bottom: 8px; }
//   .feature-text { font-size: 16px; line-height: 1.6; color: ${TEXT_MUTED}; }
//   .boutique-img { height: 600px; overflow: hidden; }
//   .boutique-img img { width: 100%; height: 100%; object-fit: cover; }

//   /* LOCATION */
//   .location { padding: 128px 64px; max-width: 1280px; margin: 0 auto; }
//   .location-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; }
//   .map-placeholder {
//     height: 450px; background: ${SURFACE};
//     display: flex; align-items: center; justify-content: center;
//     flex-direction: column; gap: 12px;
//     overflow: hidden; position: relative;
//   }
//   .map-icon { font-size: 64px; color: ${OUTLINE}; }
//   .map-label { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${TEXT_MUTED}; }
//   .hours-card {
//     background: ${BLACK}; color: ${WHITE};
//     padding: 48px; display: flex; flex-direction: column; justify-content: center;
//   }
//   .hours-title { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 500; color: ${WHITE}; margin-bottom: 32px; }
//   .hours-list { list-style: none; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.2); }
//   .hours-item { display: flex; justify-content: space-between; font-size: 16px; line-height: 1.6; padding: 8px 0; }
//   .hours-addr-label { font-family: 'Manrope', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${GOLD_LIGHT}; margin-bottom: 8px; }
//   .hours-addr { font-size: 16px; line-height: 1.8; color: ${WHITE}; }
//   .btn-directions {
//     margin-top: 48px; border: 1px solid ${WHITE}; background: none;
//     color: ${WHITE}; cursor: pointer;
//     font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
//     padding: 16px;
//     transition: all 0.3s;
//   }
//   .btn-directions:hover { background: ${WHITE}; color: ${BLACK}; }

//   /* FOOTER */
//   .footer { background: ${BG}; border-top: 1px solid ${BORDER}; }
//   .footer-inner {
//     max-width: 1280px; margin: 0 auto;
//     display: flex; justify-content: space-between; align-items: center;
//     padding: 48px 64px; gap: 32px; flex-wrap: wrap;
//   }
//   .footer-logo { font-family: 'Bodoni Moda', serif; font-size: 24px; font-weight: 600; color: ${BLACK}; margin-bottom: 8px; }
//   .footer-copy { font-size: 16px; line-height: 1.6; color: ${TEXT_MUTED}; opacity: 0.8; }
//   .footer-links { display: flex; gap: 32px; flex-wrap: wrap; }
//   .footer-link { font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${TEXT_MUTED}; opacity: 0.8; text-decoration: none; transition: color 0.2s; }
//   .footer-link:hover { color: ${GOLD}; opacity: 1; }
//   .footer-socials { display: flex; gap: 24px; }
//   .social-btn { background: none; border: none; cursor: pointer; font-size: 22px; color: ${TEXT_MUTED}; opacity: 0.8; transition: color 0.2s; }
//   .social-btn:hover { color: ${GOLD}; opacity: 1; }

//   /* VIRTUAL TRAY */
//   .v-tray {
//     position: fixed; bottom: 0; left: 0; right: 0; z-index: 60;
//     height: 64px;
//     backdrop-filter: blur(12px);
//     background: rgba(251,249,248,0.85);
//     border-top: 1px solid ${BORDER};
//     display: flex; align-items: center; justify-content: space-between;
//     padding: 0 64px;
//     transition: transform 0.5s;
//   }
//   .v-tray.hidden { transform: translateY(100%); }
//   .tray-left { display: flex; align-items: center; gap: 16px; }
//   .tray-label { font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: ${TEXT_MUTED}; }
//   .tray-thumbs { display: flex; }
//   .tray-thumb { width: 32px; height: 32px; border-radius: 50%; border: 2px solid ${BG}; overflow: hidden; margin-left: -8px; }
//   .tray-thumb:first-child { margin-left: 0; }
//   .tray-thumb img { width: 100%; height: 100%; object-fit: cover; }
//   .tray-right { display: flex; align-items: center; gap: 24px; }
//   .btn-compare {
//     background: none; border: none; cursor: pointer;
//     font-family: 'Manrope', sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
//     color: ${GOLD}; display: flex; align-items: center; gap: 8px;
//     position: relative;
//   }
//   .btn-compare::after { content: ''; position: absolute; width: 0; height: 1px; bottom: -2px; left: 0; background: ${GOLD}; transition: width 0.3s; }
//   .btn-compare:hover::after { width: 100%; }
//   .btn-book {
//     background: ${BLACK}; color: ${WHITE}; border: none; cursor: pointer;
//     font-family: 'Manrope', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
//     padding: 0 24px; height: 64px;
//     transition: background 0.3s;
//   }
//   .btn-book:hover { background: ${GOLD}; }

//   @media (max-width: 900px) {
//     .nav { padding: 18px 20px; }
//     .nav-links { display: none; }
//     .hero-content { padding: 0 20px; }
//     .hero-box { padding: 32px; }
//     .categories { padding: 64px 20px; }
//     .bento-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
//     .bento-large, .bento-small, .bento-small2, .bento-desc { grid-column: span 1; }
//     .bento-large { height: 300px; }
//     .bento-small { height: 240px; }
//     .bento-small2 { height: 240px; }
//     .boutique { padding: 64px 20px; }
//     .boutique-inner { grid-template-columns: 1fr; gap: 48px; }
//     .boutique-img { height: 360px; }
//     .location { padding: 64px 20px; }
//     .location-grid { grid-template-columns: 1fr; }
//     .footer-inner { padding: 40px 20px; flex-direction: column; align-items: flex-start; }
//     .v-tray { padding: 0 20px; }
//   }
// `;

// export default function AinakPlus() {
//   const [trayVisible, setTrayVisible] = useState(true);
//   const lastScroll = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.pageYOffset;
//       if (current <= 0) { setTrayVisible(true); return; }
//       setTrayVisible(current < lastScroll.current);
//       lastScroll.current = current;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="ainak-root">

//         {/* NAV */}
//         <header style={{ background: BG, borderBottom: `1px solid ${BORDER}`, position: "sticky", top: 0, zIndex: 50 }}>
//           <nav className="nav">
//             <div className="nav-logo display">AINAK PLUS</div>
//             <div className="nav-links">
//               {["Home","Collections","Eye Exam","About","Contact"].map((l,i) => (
//                 <a key={l} href="#" className={`nav-link ${i===0?"active":""}`}>{l}</a>
//               ))}
//             </div>
//             <div className="nav-icons">
//               <button className="icon-btn" title="Cart">🛍</button>
//               <button className="icon-btn" title="Account">👤</button>
//               <button className="icon-btn" title="Menu" style={{display:"none"}}>☰</button>
//             </div>
//           </nav>
//         </header>

//         <main>

//           {/* HERO */}
//           <section className="hero">
//             <img
//               className="hero-img"
//               src={Aikart}
//               alt="Hero Eyewear"
//             />
//             <div className="hero-overlay" />
//             <div className="hero-content">
//               <div className="hero-box">
//                 <h1 className="hero-title display">The Art of Vision.</h1>
//                 <p className="hero-sub">
//                   Discover the elite collection of designer eyewear at Jalgaon's premier optical boutique. Where precision optics meet high-fashion craftsmanship.
//                 </p>
//                 <button className="btn-primary">EXPLORE COLLECTIONS</button>
//               </div>
//             </div>
//           </section>

//           {/* CATEGORIES */}
//           <section className="categories">
//             <div className="section-header">
//               <span className="section-eyebrow">CURATED SELECTIONS</span>
//               <h2 className="section-title display">The Seasonal Edit</h2>
//             </div>
//             <div className="bento-grid">
//               {/* Aviator */}
//               <div className="bento-card bento-large">
//                 <img src="https://lh3.googleusercontent.com/aida/ADBb0ugDyke2k8GXd55kYYe5inn6I7AOe6L-ctFb9aIXbzkN2jZSu58kJw4Yv4KA3_7vegxL_3riMyZ3OwN7Zk4Lo40OYnu6vdAGK8d1qv6MmfX8lrs_aTX9yuLQiR96AyAy0yAF7-jwWzFMWxrFZWt0pn_ZFGwTc1tb1ocxnBGiPBVa1Grpnv1gcwqNCK-zyNjSWK-OH2HjaGsMJv6TRGksjlziq1yWxb1W21ZRnm_6cP6CF8JLQ_9aJYAgIJEY" alt="Aviator Series" />
//                 <div className="bento-overlay">
//                   <h3 className="bento-card-title display">The Aviator Series</h3>
//                   <p className="bento-card-sub">Timeless silhouettes redefined.</p>
//                   <a href="#" className="bento-card-link">VIEW SERIES</a>
//                 </div>
//               </div>
//               {/* Modern Minimalist */}
//               <div className="bento-card bento-small">
//                 <img src={Minimalist} alt="Modern Minimalist" />
//                 <div className="bento-overlay-always">
//                   <h3 className="bento-card-title display">Modern Minimalist</h3>
//                   <a href="#" className={`bento-card-link bento-card-link-white`}>DISCOVER</a>
//                 </div>
//               </div>
//               {/* Femme Elegance */}
//               <div className="bento-card bento-small2">
//                 <img src={Femme} alt="Femme Elegance" />
//                 <div className="bento-overlay-always">
//                   <h3 className="bento-card-title display">Femme Elegance</h3>
//                   <a href="#" className={`bento-card-link bento-card-link-white`}>EXPLORE</a>
//                 </div>
//               </div>
//               {/* Desc Card */}
//               <div className="bento-desc">
//                 <div className="bento-desc-inner">
//                   <div className="bento-desc-content">
//                     <h4 className="bento-desc-title display">Precision Craftsmanship</h4>
//                     <p className="bento-desc-text">Every pair of glasses in our boutique is chosen for its structural integrity and aesthetic balance. We believe your frames should be as enduring as your style.</p>
//                     <div className="divider-gold"></div>
//                     <span className="bento-established label-caps" style={{color:GOLD}}>ESTABLISHED IN JALGAON</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* BOUTIQUE EXPERIENCE */}
//           <section className="boutique">
//             <div className="boutique-inner">
//               <div>
//                 <div style={{marginBottom:48}}>
//                   <span className="section-eyebrow">THE EXPERIENCE</span>
//                   <h2 className="boutique-title display">A Bespoke Approach to Vision</h2>
//                   <p className="boutique-text">At Ainak Plus, we transcend the traditional optical shop experience. Our Jalgaon boutique offers an environment of quiet luxury where our specialists dedicate their expertise to your individual needs.</p>
//                 </div>
//                 <div className="feature-list">
//                   {[
//                     { icon: "👁️", heading: "COMPREHENSIVE EYE EXAMS", text: "Using state-of-the-art diagnostic technology for precise prescriptions." },
//                     { icon: "✏️", heading: "PERSONAL STYLING", text: "Expert guidance to find frames that complement your face shape and persona." },
//                     { icon: "⚙️", heading: "PRECISION LENS CRAFTING", text: "Customized lens solutions including high-index and blue-light protection." },
//                   ].map(f => (
//                     <div className="feature-item" key={f.heading}>
//                       <span className="feature-icon">{f.icon}</span>
//                       <div>
//                         <p className="feature-heading label-caps">{f.heading}</p>
//                         <p className="feature-text">{f.text}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="boutique-img">
//                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcUqQYAqGN1eK6cl8vFCpilVCQy3tRokVjg5xXvv7ymKsl3Z0_-Zr9hIEWLsVgvspYHKcVREhJ5GiFPVwSmATWBvSkKg1mjrGYBR4m3HkGUh574WI6MCdFTnMUOiSw42Vus7SBcRdQL1gP5PR7VI_OgQ0LPfHPT_KKyq4AnCu_PSRhweDGl2YhtW1ZJ2LIcZJg8YVwI80wB81hBh0Xo8Z6qNdgChkzy-2mT7JZGBV2IuKR5NzataxkdahX4_sLPifXUN638J6sMNJf" alt="Boutique Interior" />
//               </div>
//             </div>
//           </section>

//           {/* LOCATION */}
//           <section className="location">
//             <div className="location-grid">
//               <div className="map-placeholder">
//                 <span className="map-icon">📍</span>
//                 <span className="map-label">Visit Our Jalgaon Boutique</span>
//               </div>
//               <div className="hours-card">
//                 <h3 className="hours-title display">Store Hours</h3>
//                 <ul className="hours-list">
//                   <li className="hours-item"><span>Mon – Sat</span><span>10:00 – 20:00</span></li>
//                   <li className="hours-item"><span>Sunday</span><span>Closed</span></li>
//                 </ul>
//                 <div>
//                   <p className="hours-addr-label">Address</p>
//                   <p className="hours-addr">Main Street, Opp. Gold Market,<br/>Jalgaon, Maharashtra 425001</p>
//                 </div>
//                 <button className="btn-directions">GET DIRECTIONS</button>
//               </div>
//             </div>
//           </section>

//         </main>

//         {/* FOOTER */}
//         <footer className="footer">
//           <div className="footer-inner">
//             <div>
//               <div className="footer-logo display">AINAK PLUS</div>
//               <p className="footer-copy">© 2024 Ainak Plus Jalgaon. Optical Artistry Defined.</p>
//             </div>
//             <div className="footer-links">
//               {["Privacy Policy","Terms of Service","Store Locator","Shipping & Returns"].map(l => (
//                 <a key={l} href="#" className="footer-link">{l}</a>
//               ))}
//             </div>
//             <div className="footer-socials">
//               {["🌐","📷","💬"].map((ic,i) => (
//                 <button key={i} className="social-btn">{ic}</button>
//               ))}
//             </div>
//           </div>
//         </footer>

//         {/* VIRTUAL TRAY */}
//         <div className={`v-tray${trayVisible ? "" : " hidden"}`}>
//           <div className="tray-left">
//             <span className="tray-label">VIRTUAL TRAY (2)</span>
//             <div className="tray-thumbs">
//               {[
//                 "https://lh3.googleusercontent.com/aida/ADBb0uhw4iDb4JvU_SRaYXcOFiX-TTnO2jlDGQDJ62hjmAV6Ot4mHpjXVxxBsm8VX29r6OO1KqE2KfFzFfixPzxI6vbXiRNHnIPn9Ucb_vZmU9L6jvW3TPmLha7C864_pIHRU-cH0W4iuYN3kxWqmXNvAF_3dp-fC-SsFqh2WoEA9S0dJb6BNc54eUt1HCDqdZ2wT3Bz29V5eiVsOU7OP73LkTOI9mh_z0DjPUWZVC_cFkXwpmy3ObkLcSkTB84",
//                 "https://lh3.googleusercontent.com/aida/ADBb0ugDyke2k8GXd55kYYe5inn6I7AOe6L-ctFb9aIXbzkN2jZSu58kJw4Yv4KA3_7vegxL_3riMyZ3OwN7Zk4Lo40OYnu6vdAGK8d1qv6MmfX8lrs_aTX9yuLQiR96AyAy0yAF7-jwWzFMWxrFZWt0pn_ZFGwTc1tb1ocxnBGiPBVa1Grpnv1gcwqNCK-zyNjSWK-OH2HjaGsMJv6TRGksjlziq1yWxb1W21ZRnm_6cP6CF8JLQ_9aJYAgIJEY"
//               ].map((src,i) => (
//                 <div key={i} className="tray-thumb"><img src={src} alt="Thumb" /></div>
//               ))}
//             </div>
//           </div>
//           <div className="tray-right">
//             <button className="btn-compare">
//               <span style={{fontSize:16}}>⇄</span> COMPARE
//             </button>
//             <button className="btn-book">BOOK CONSULTATION</button>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }