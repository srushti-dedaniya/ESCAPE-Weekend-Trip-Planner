import { motion } from 'framer-motion';
import { moods } from '../data/moods';

export default function CuratedMoods() {
  return (
    <section id="curated-moods" className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full">
      <motion.div 
        className="flex flex-col items-center text-center gap-space-sm mb-space-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary">Emotional Frequency Index</span>
        <h2 className="font-headline-lg text-headline-lg lg:text-[48px] uppercase tracking-tight text-on-surface">Five Ways to Feel</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Each mood is a calibrated atmospheric profile. Not a destination — a sensory state. The coordinates follow the frequency.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
        {moods.map((mood, index) => (
          <motion.article
            key={mood.id}
            className="mood-pod text-left group p-space-lg rounded-2xl backdrop-blur-2xl shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[280px] relative overflow-hidden bg-surface-container/60 hover:bg-surface-container-high"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
              style={{ backgroundColor: mood.vibe + '15' }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl filter drop-shadow">{mood.emoji}</span>
              <span className="font-label-numeric text-label-numeric text-on-surface-variant/50">{mood.score}% Fit</span>
            </div>
            <div className="flex flex-col gap-space-2xs mt-4">
              <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{mood.label}</span>
              <span className="font-editorial-italic italic text-body-md text-secondary">"{mood.tagline}"</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{mood.description}</p>
            </div>
            <div className="flex flex-wrap gap-space-xs mt-space-md pt-space-md border-t border-white/10">
              <span className="px-space-sm py-1 rounded-full bg-primary-container/20 text-primary-container font-label-caps text-[10px] uppercase">{mood.archetype}</span>
              <span className="px-space-sm py-1 rounded-full bg-secondary/20 text-secondary font-label-numeric text-[10px]">{mood.distance}</span>
            </div>
            <motion.a
              className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-container-high/90 transition-all w-fit mt-space-sm"
              whileHover={{ x: 4 }}
              href="#mood-section"
            >
              Calibrate <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </motion.a>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-space-3xl p-space-2xl rounded-3xl bg-surface-container-low/90 backdrop-blur-3xl text-center flex flex-col items-center gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-secondary">
          <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          <span>Let intelligence choose</span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Skip the selection. Our mood engine analyzes your inputs and routes you to the precise atmospheric coordinates your nervous system needs.</p>
        <motion.a
          className="inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest font-bold shadow-[0_0_32px_rgba(255,107,74,0.45)] hover:bg-primary transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#mood-section"
        >
          Find My Escape <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </motion.a>
      </motion.div>
    </section>
  );
}