import { motion } from 'framer-motion';

export default function EscapeMatch({ selectedMood }) {
  const circumference = 264;
  const offset = circumference - (circumference * ((selectedMood?.score || 94) / 100));

  return (
    <section className="py-space-2xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm mb-space-lg">
        <div className="flex flex-col gap-space-2xs">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#ff6b4a]"></span>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">AI Confidence Rating • Calibrated Real-time</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Your Curated Match</h2>
        </div>
        <span className="font-label-numeric text-label-numeric text-on-surface-variant">MATCH CRITERIA: SILENCE // ACCESSIBILITY // LUXE</span>
      </div>

      <motion.div 
        className="relative rounded-3xl bg-surface-container/70 backdrop-blur-2xl shadow-[0_32px_64px_rgba(0,0,0,0.6)] overflow-hidden p-space-lg lg:p-space-2xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-lg">
            <motion.div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="42" stroke="#212a39" strokeWidth="8"></circle>
                <motion.circle
                  className="transition-all duration-1000 ease-out"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  id="match-dial-stroke"
                  r="42"
                  stroke="#ff6b4a"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  strokeWidth="8"
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                ></motion.circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <motion.span 
                  className="font-headline-lg text-[32px] leading-none font-bold text-on-surface"
                  id="match-score-value"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedMood?.score || 94}%
                </motion.span>
                <span className="font-label-caps text-[9px] uppercase tracking-widest text-secondary">Vibe Fit</span>
              </div>
            </motion.div>
            <div className="flex flex-col gap-space-2xs">
              <motion.span 
                className="font-label-caps text-label-caps uppercase text-primary tracking-widest"
                id="match-archetype"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {selectedMood?.archetype || 'OPTIMAL PROTOCOL'}
              </motion.span>
              <motion.h3 
                className="font-headline-md text-headline-md text-on-surface font-bold"
                id="match-headline"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {selectedMood?.matchHeadline || 'Matheran Forest Ridge'}
              </motion.h3>
              <motion.span 
                className="font-label-numeric text-label-numeric text-on-surface-variant flex items-center gap-1"
                id="match-distance"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="material-symbols-outlined text-[16px] text-secondary">near_me</span> {selectedMood?.matchDistance || '2.5 hours from Mumbai'}
              </motion.span>
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">park</span>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface block">Zero Auto-Zone</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Asia's only automobile-free forest hill station.</span>
              </div>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">timer</span>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface block">Transit Velocity</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Quick toy train ascent or horseback trail.</span>
              </div>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">payments</span>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface block">Estimated Spend</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">₹6,500 / avg weekend pass</span>
              </div>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-high/60 flex items-start gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">volume_off</span>
              <div>
                <span className="font-label-caps text-label-caps uppercase text-on-surface block">Decibel Rating</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">18 dB • Pure red-soil stillness</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="pt-space-xs flex flex-wrap items-center gap-space-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(255,107,74,0.35)] hover:bg-primary transition-all" href="#itinerary">
              Unlock Itinerary <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
            <span className="font-label-numeric text-label-numeric text-on-surface-variant">3 weekend villas holding slots</span>
          </motion.div>
        </div>

        <motion.div 
          className="lg:col-span-7 relative group overflow-hidden rounded-2xl shadow-2xl h-[380px] lg:h-[460px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
            data-alt="Dense emerald green mist-laden rainforest trail in Matheran with dramatic sunlight filtering through ancient branches onto red clay ground"
            id="match-showcase-img"
            src={selectedMood?.id === 'reset' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrP9DarRCB2x9o-qN_naf2nSiFR3p4sT7xJAhuOmypYIuNYSTHHBjNqOLPk3zCZAJadPOG9d2HP9p8erN6hI2pqPGSl06KX0WwhN0faKmNRnpk79v0ArNZGKjqb9HRrhhjAfMv9SR4HvcfArpDGMJrIfLQopyTFFAPxKQZwbK10OvNT971Cqlw_qrWcaiyqv19UZmRhi00BaiB8YvSVTnLFD0Mqa7DMgp1U4amgX2-uveh5EDlHb5Nqw' : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYKGcueE7ElrjarpcWv3aN8SY0wlp2V8iqnq-gb-camvTh5ZZePVcQjUo1lSibtrqj_V2xirnLbc1mOtL7bW5kjYc2i3pxrRZoYh7SauN1gLxAiG2MZNYzomXiB_UwYEHzcb1aMD49sHrkv2w8VXMSR-oyRaPQkV4Y7-jhTznA7FZRK3558r_ZaHf-1fAWH5bimWjN_L2fsC34k6102EFwL-F-bCQnVJU4Y5ZGG9eJV_gQWOGjIdkXXw'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent"></div>
          <div className="absolute top-4 left-4 flex gap-space-2xs">
            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-caps text-label-caps uppercase text-secondary">
              {selectedMood?.id === 'reset' ? 'MATHERAN • 800M ELEVATION' : 'GOA CLIFFS • COASTAL EDGE'}
            </span>
            <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-numeric text-label-numeric text-on-surface">
              AQI: 14 (Pure)
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-space-2xs">
            <blockquote className="font-editorial-italic text-editorial-italic text-on-surface text-2xl lg:text-3xl font-light">
              "Where the city noise physically cannot follow you."
            </blockquote>
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Conde Nast Traveler Field Dispatch</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}