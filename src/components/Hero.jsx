import { motion } from 'framer-motion';

export default function Hero({ onFindEscapeClick }) {
  return (
    <section 
      className="relative min-h-[94vh] lg:min-h-screen w-full flex flex-col justify-between -mt-20 pt-24 pb-12 lg:pb-16 px-gutter-mobile lg:px-gutter-desktop overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaIGn3Nw9vs7RUwtQvMB7aX5RRDfd7cIFA4tdU401R2rugYUI3F1DogMC5rWKMqiENt5vtwIb9YoG1BYKWY55anqjV96hMNfxwm3tzVGdsqWlrEWfoZvBXe5FCm8nmq0vx-gSMKaRItdHcY8gz5ChaRDEINnOdjJ5YXNM4c2hmLZGvevtpCYyo466eADcsOl57yWAxOpU7NqcRbuYbsDiH1qLxmVD13-AdopcV5NCJ9IsXpd3p4zMLCw')"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/90 via-surface-dim/55 to-surface z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0a1422_95%)] z-10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/15 rounded-full blur-[140px] pointer-events-none z-10" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[120px] pointer-events-none z-10" aria-hidden="true"></div>

      <div className="relative z-20 pt-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-high/70 backdrop-blur-xl shadow-lg" aria-label="Weekend mode active">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">WEEKEND MODE: ACTIVE</span>
          <span className="font-label-numeric text-label-numeric text-on-surface-variant/80 hidden sm:inline">• 48H WINDOW</span>
        </div>
        <div className="hidden md:flex items-center gap-space-sm px-space-md py-space-2xs rounded-full bg-surface-container-lowest/60 backdrop-blur-md" aria-label="Current location and weather">
          <span className="font-label-numeric text-label-numeric text-primary">18° 58' N, 73° 19' E</span>
          <span className="w-1 h-1 rounded-full bg-outline" aria-hidden="true"></span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Western Ghats • 23°C Mist</span>
        </div>
      </div>

      <div className="relative z-20 my-auto py-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary" aria-label="Departure terminal info">
            <span>Curated Departure Terminal</span>
            <span className="w-8 h-px bg-secondary/40" aria-hidden="true"></span>
            <span>BOM • PNQ HUB</span>
          </div>
          <motion.h1 
            id="hero-heading"
            className="font-display-hero text-[54px] sm:text-[76px] lg:text-[104px] leading-[0.92] tracking-tighter uppercase font-bold text-on-surface drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ESCAPE<br/>
            <span className="font-editorial-italic italic font-normal text-on-surface-variant lowercase">the</span><br/>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">ORDINARY.</span>
          </motion.h1>
          <motion.p 
            className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mt-space-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your next sensory reset is closer than you think. Tell us how your soul wants to breathe — we chart the coordinates within a 4-hour radius.
          </motion.p>
          <motion.div 
            className="flex flex-wrap items-center gap-space-md pt-space-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              className="group relative inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest shadow-[0_0_32px_rgba(255,107,74,0.45)] hover:bg-primary transition-all duration-300 active:scale-95 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface" 
              href="#mood-section"
              onClick={onFindEscapeClick}
            >
              <span className="relative z-10 flex items-center gap-space-xs font-bold">FIND MY ESCAPE <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span></span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true"></div>
            </a>
            <a className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-full bg-surface-container/60 hover:bg-surface-container-high/80 backdrop-blur-xl text-on-surface font-label-caps text-label-caps uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface" href="#destinations">
              <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">explore</span> Explore Coordinates
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex justify-start lg:justify-end">
          <motion.div 
            className="p-space-lg rounded-2xl bg-surface-container/60 backdrop-blur-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)] flex flex-col gap-space-md w-full max-w-xs group hover:bg-surface-container/80 transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            role="region"
            aria-label="Telemetry data"
          >
            <div className="flex items-center justify-between text-on-surface-variant">
              <span className="font-label-caps text-label-caps uppercase tracking-wider">Telemetry Index</span>
              <span className="font-label-numeric text-label-numeric text-secondary font-bold">LIVE SYNC</span>
            </div>
            <div className="flex items-center gap-space-md py-space-xs">
              <div className="relative w-16 h-16 rounded-full bg-surface-container-lowest/80 flex items-center justify-center shadow-inner" aria-hidden="true">
                <motion.svg 
                  className="w-12 h-12 text-primary-container transform group-hover:rotate-45 transition-transform duration-700 ease-out" 
                  fill="none" 
                  viewBox="0 0 48 48"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeDasharray="2 3" strokeOpacity="0.25" strokeWidth="1.5"></circle>
                  <polygon fill="#ff6b4a" points="24,6 28,24 24,21 20,24"></polygon>
                  <polygon fill="#bac7dc" opacity="0.6" points="24,42 20,24 24,27 28,24"></polygon>
                  <circle cx="24" cy="24" fill="#ffdad2" r="3"></circle>
                </motion.svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">800m ASL</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Cloud Density 84%</span>
              </div>
            </div>
            <div className="pt-space-xs flex items-center justify-between text-on-surface-variant">
              <span className="font-label-caps text-label-caps uppercase">Friday Rush</span>
              <span className="font-label-numeric text-label-numeric text-primary">T - 04h 12m</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 flex justify-between items-center text-on-surface-variant pt-4">
        <span className="font-label-numeric text-label-numeric text-outline hidden sm:inline" aria-hidden="true">01 // THE EXPEDITION PORTAL</span>
        <a className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase hover:text-secondary transition-colors mx-auto lg:mx-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-full px-space-xs py-space-2xs" href="#mood-section">
          <span>Scroll to calibrate mood</span>
          <span className="material-symbols-outlined text-[16px] animate-bounce" aria-hidden="true">south</span>
        </a>
        <span className="font-label-numeric text-label-numeric text-outline hidden sm:inline" aria-hidden="true">RADIUS: ≤ 240 KM</span>
      </div>
    </section>
  );
}