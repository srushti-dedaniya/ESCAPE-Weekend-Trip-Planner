import { motion } from 'framer-motion';
import { moods } from '../data/moods';

export default function MoodSelector({ selectedMood, onMoodSelect }) {
  return (
    <section className="relative py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full" id="mood-section" aria-labelledby="mood-heading">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 rounded-full blur-[140px] pointer-events-none transition-colors duration-700"
        id="mood-ambient-glow"
        style={{ backgroundColor: selectedMood?.glow || moods[0].glow }}
        animate={{ backgroundColor: selectedMood?.glow || moods[0].glow }}
        aria-hidden="true"
      />
      <motion.div 
        className="flex flex-col items-center text-center gap-space-sm mb-space-3xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">Intentional Wanderlust</span>
        <h2 id="mood-heading" className="font-headline-lg text-headline-lg lg:text-[48px] uppercase tracking-tight text-on-surface">How do you want to feel?</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
          Choose an emotional frequency. Our intelligence routes your weekend according to sensory demand, silence index, and road rhythm.
        </p>
      </motion.div>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md relative z-10" 
        id="mood-pods-container"
        role="radiogroup"
        aria-label="Travel mood selection"
      >
        {moods.map((mood, index) => (
          <motion.button
            key={mood.id}
            role="radio"
            aria-checked={selectedMood?.id === mood.id}
            className={`mood-pod text-left group p-space-lg rounded-2xl backdrop-blur-2xl shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[220px] relative overflow-hidden ${
              selectedMood?.id === mood.id
                ? 'bg-surface-container-high/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)] ring-2 ring-primary-container'
                : 'bg-surface-container/60 hover:bg-surface-container-high'
            } focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface`}
            onClick={() => onMoodSelect(mood)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
              style={{ backgroundColor: mood.vibe + '15' }}
              whileHover={{ scale: 1.25 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-3xl filter drop-shadow" aria-hidden="true">{mood.emoji}</span>
              {selectedMood?.id === mood.id && (
                <motion.span 
                  className="active-badge font-label-caps text-[10px] uppercase px-space-xs py-space-2xs rounded-full bg-primary-container text-on-primary-container font-bold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  Selected
                </motion.span>
              )}
            </div>
            <div className="flex flex-col gap-space-2xs mt-4">
              <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{mood.label}</span>
              <span className="font-editorial-italic italic text-body-md text-secondary">"{mood.tagline}"</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{mood.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}