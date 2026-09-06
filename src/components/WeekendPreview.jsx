import { motion } from 'framer-motion';

const milestones = [
  {
    time: 'Saturday • 08:00 AM',
    code: 'DEP BOM',
    color: 'primary',
    title: 'Scenic Expressway Ascent',
    description: 'Depart before urban gridlock. Smooth transition from coastal highway into misty Western Ghat elevations with artisan coffee halt.'
  },
  {
    time: 'Saturday • 11:30 AM',
    code: 'CHECK-IN',
    color: 'secondary',
    title: 'Arrival at Cliffside Sanctuary',
    description: 'Private forest lodge check-in. Zero vehicle soundscape, local kokum welcome aperitif, and valley balcony settlement.'
  },
  {
    time: 'Saturday • 06:30 PM',
    code: 'TWILIGHT',
    color: 'primary',
    title: 'Golden Hour Ridge Trail',
    description: 'Private guided walk to Panorama Point. Watching shadows sweep over 12 surrounding mountain ranges as twilight drops.'
  },
  {
    time: 'Sunday • 09:30 AM',
    code: 'DETOX',
    color: 'tertiary',
    title: 'Slow Canopy Breakfast & Stream Trek',
    description: 'Artisanal fresh Konkani spread overlooking cloud banks followed by a barefoot stream walk before late-afternoon return glide.'
  }
];

const tripDetails = {
  name: 'Matheran Deep Canopy Package',
  tagline: 'Recommended for high-burnout professionals',
  budget: '₹6,500',
  budgetLabel: '/ pax',
  driveTime: '2.5 Hours',
  weather: '23°C Crisp',
  crowd: 'Ultra Low',
  inclusions: [
    'Handpicked Boutique Villa Hold',
    'Offline Turn-by-Turn GPS Scenic Route',
    'Direct Host WhatsApp Concierge'
  ]
};

export default function WeekendPreview() {
  return (
    <section className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full" id="itinerary">
      <motion.div 
        className="flex flex-col gap-space-2xs mb-space-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">Turnkey Choreography</span>
        <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Your Weekend, Sorted.</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          A zero-stress, turnkey timeline engineered from Friday twilight departure to Sunday sunset unwind.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="lg:col-span-7 flex flex-col gap-space-xl relative">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-container via-secondary to-primary pointer-events-none opacity-40" />
          
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-space-lg relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className={`w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-[0_0_12px_${milestone.color === 'primary' ? '#ff6b4a' : milestone.color === 'secondary' ? '#f2bd74' : '#bac7dc'}] z-10 flex-shrink-0`}>
                <span className={`w-2.5 h-2.5 rounded-full ${milestone.color === 'primary' ? 'bg-primary-container' : milestone.color === 'secondary' ? 'bg-secondary' : 'bg-tertiary'}`}></span>
              </div>
              <motion.div 
                className="p-space-md rounded-2xl bg-surface-container/70 backdrop-blur-md flex-1"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between text-secondary mb-1">
                  <span className="font-label-caps text-label-caps uppercase font-bold">{milestone.time}</span>
                  <span className="font-label-numeric text-label-numeric">{milestone.code}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{milestone.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="lg:col-span-5 p-space-xl rounded-3xl bg-surface-container-high/70 backdrop-blur-2xl shadow-[0_24px_48px_rgba(0,0,0,0.6)] flex flex-col gap-space-lg sticky top-28"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-label-caps uppercase text-secondary">Trip Manifest Index</span>
            <span className="px-space-xs py-1 rounded-full bg-secondary/15 text-secondary font-label-numeric text-[12px] font-semibold">Verified Safe</span>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{tripDetails.name}</h3>
            <span className="font-editorial-italic italic text-body-md text-on-surface-variant">{tripDetails.tagline}</span>
          </div>
          <div className="grid grid-cols-2 gap-space-md py-space-sm">
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] uppercase text-outline">Total Budget</span>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">{tripDetails.budget} <span className="font-body-sm text-[12px] text-on-surface-variant font-normal">{tripDetails.budgetLabel}</span></span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] uppercase text-outline">Drive Time</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{tripDetails.driveTime}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] uppercase text-outline">Weather State</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{tripDetails.weather}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-[10px] uppercase text-outline">Crowd Density</span>
              <span className="font-headline-sm text-headline-sm text-secondary font-bold">{tripDetails.crowd}</span>
            </div>
          </div>
          <motion.div 
            className="p-space-md rounded-xl bg-surface-container-lowest/80 flex flex-col gap-space-2xs text-body-sm text-on-surface-variant"
            whileHover={{ scale: 1.01 }}
          >
            <span className="font-label-caps text-label-caps uppercase text-on-surface font-bold">Curated Inclusions:</span>
            {tripDetails.inclusions.map((inclusion, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-space-2xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
              >
                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                <span>{inclusion}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.button 
            className="w-full py-space-md rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest font-bold shadow-[0_0_24px_rgba(255,107,74,0.4)] hover:bg-primary transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => alert('Your bespoke itinerary manifest is being generated and dispatched to your terminal.')}
            type="button"
          >
            PLAN THIS ESCAPE →
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}