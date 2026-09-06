import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Calibrate Mood',
    description: 'Select from five emotional frequencies — Reset, Drift, Awaken, Connect, or Deep Work. Each maps to a distinct atmospheric profile: silence index, light quality, terrain rhythm, and social density.',
    icon: 'tune',
    details: ['5 mood archetypes', 'Real-time confidence scoring', 'Sub-2-minute calibration']
  },
  {
    number: '02',
    title: 'Intelligence Match',
    description: 'Our engine cross-references your mood with 200+ sanctuaries within a 4-hour radius. Factors include: decibel ratings, AQI, crowd density, drive-time elasticity, weather coherence, and host responsiveness.',
    icon: 'psychology',
    details: ['200+ vetted coordinates', '14 matching parameters', 'Live availability sync']
  },
  {
    number: '03',
    title: 'Receive Manifest',
    description: 'Get a turnkey itinerary — scenic route GPS, boutique villa hold, host WhatsApp concierge, curated inclusions, and weather-adaptive timeline. Zero planning friction. Just depart.',
    icon: 'description',
    details: ['Offline GPS route', 'Direct host channel', 'Weather-adaptive timeline']
  },
  {
    number: '04',
    title: 'Execute Escape',
    description: 'Depart Friday twilight. Arrive before urban gridlock dissolves. 48 hours of calibrated stillness. Return Sunday sunset — restored, not exhausted. The Monday antidote delivered.',
    icon: 'rocket_launch',
    details: ['Friday 6PM departure', '48-hour window', 'Sunday 6PM return']
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full">
      <motion.div 
        className="flex flex-col items-center text-center gap-space-sm mb-space-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">Operating Protocol</span>
        <h2 className="font-headline-lg text-headline-lg lg:text-[48px] uppercase tracking-tight text-on-surface">Four Steps to Stillness</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Zero friction. Zero decision fatigue. A calibrated pathway from burnout to restoration in under 48 hours.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-container via-secondary to-primary-container opacity-30 hidden lg:block"></div>
        
        <div className="flex flex-col gap-space-2xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex gap-space-xl relative ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-space-xl text-right' : 'pl-space-xl'}`}>
                <div className="flex items-center justify-end lg:justify-end gap-space-sm mb-space-sm">
                  <span className="font-display-hero text-display-hero tracking-tighter text-surface-container-highest/20 w-20 text-right">{step.number}</span>
                  <div className="w-16 h-16 rounded-2xl bg-primary-container/15 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary-container text-[28px]">{step.icon}</span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm max-w-lg mx-auto lg:mx-0">{step.description}</p>
                <div className="flex flex-wrap justify-end lg:justify-end gap-space-xs mt-space-md">
                  {step.details.map((detail, i) => (
                    <span key={i} className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-[10px] uppercase">{detail}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-space-3xl p-space-2xl rounded-3xl bg-surface-container-low/90 backdrop-blur-3xl text-center flex flex-col items-center gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-primary">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span>Verified by 2,800+ escapees</span>
        </div>
        <p className="font-editorial-italic italic text-editorial-italic text-on-surface-variant max-w-xl">"The first time I didn't check email for 48 hours in three years. The protocol works."</p>
        <div className="flex items-center gap-space-lg text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider">
          <span className="flex items-center gap-1">4.9★ <span className="material-symbols-outlined text-[16px] text-primary">star</span></span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span>Zero planning required</span>
          <span className="w-1 h-1 rounded-full bg-outline"></span>
          <span>Money-back coherence</span>
        </div>
      </motion.div>
    </section>
  );
}