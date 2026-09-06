import { motion } from 'framer-motion';

const discoverCards = [
  {
    id: 1,
    title: 'Silent Forest',
    subtitle: 'Zero-decibel sanctuaries',
    description: 'Places where the loudest sound is your own breath. Ancient forests, misty ridges, cloud forests.',
    icon: 'volume_off',
    color: 'secondary',
    bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIGn3Nw9vs7RUwtQvMB7aX5RRDfd7cIFA4tdU401R2rugYUI3F1DogMC5rWKMqiENt5vtwIb9YoG1BYKWY55anqjV96hMNfxwm3tzVGdsqWlrEWfoZvBXe5FCm8nmq0vx-gSMKaRItdHcY8gz5ChaRDEINnOdjJ5YXNM4c2hmLZGvevtpCYyo466eADcsOl57yWAxOpU7NqcRbuYbsDiH1qLxmVD13-AdopcV5NCJ9IsXpd3p4zMLCw'
  },
  {
    id: 2,
    title: 'Coastal Drift',
    subtitle: 'Salt-air corridors',
    description: 'Cliffside paths, hidden coves, lighthouse vigils. Where the horizon does the thinking for you.',
    icon: 'waves',
    color: 'primary',
    bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYKGcueE7ElrjarpcWv3aN8SY0wlp2V8iqnq-gb-camvTh5ZZePVcQjUo1lSibtrqj_V2xirnLbc1mOtL7bW5kjYc2i3pxrRZoYh7SauN1gLxAiG2MZNYzomXiB_UwYEHzcb1aMD49sHrkv2w8VXMSR-oyRaPQkV4Y7-jhTznA7FZRK3558r_ZaHf-1fAWH5bimWjN_L2fsC34k6102EFwL-F-bCQnVJU4Y5ZGG9eJV_gQWOGjIdkXXw'
  },
  {
    id: 3,
    title: 'Heritage Pause',
    subtitle: 'Time-suspended estates',
    description: 'Restored colonial bungalows, palace gardens, tea estate verandas. History as atmosphere, not lesson.',
    icon: 'castle',
    color: 'tertiary',
    bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIGn3Nw9vs7RUwtQvMB7aX5RRDfd7cIFA4tdU401R2rugYUI3F1DogMC5rWKMqiENt5vtwIb9YoG1BYKWY55anqjV96hMNfxwm3tzVGdsqWlrEWfoZvBXe5FCm8nmq0vx-gSMKaRItdHcY8gz5ChaRDEINnOdjJ5YXNM4c2hmLZGvevtpCYyo466eADcsOl57yWAxOpU7NqcRbuYbsDiH1qLxmVD13-AdopcV5NCJ9IsXpd3p4zMLCw'
  }
];

export default function Discover() {
  return (
    <section id="discover" className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full">
      <motion.div 
        className="flex flex-col items-center text-center gap-space-sm mb-space-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-primary">Discovery Protocol</span>
        <h2 className="font-headline-lg text-headline-lg lg:text-[48px] uppercase tracking-tight text-on-surface">Three Ways to Vanish</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Each pathway is a sensory architecture. Choose the frequency your nervous system craves.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
        {discoverCards.map((card, index) => (
          <motion.article
            key={card.id}
            className="relative group rounded-3xl overflow-hidden h-[420px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('${card.bg}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/95 via-surface-container-lowest/20 to-transparent z-10"></div>
            
            <div className="absolute top-6 left-6 right-6 z-20 flex items-start justify-between">
              <span className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg text-on-surface bg-${card.color}-container/90`}>
                <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
              </span>
              <span className="px-space-sm py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-caps text-[10px] uppercase text-on-surface-variant">Curated</span>
            </div>

            <div className="relative z-20 flex-1 flex flex-col justify-end p-space-xl gap-space-md">
              <div>
                <span className={`font-label-caps text-[10px] uppercase tracking-widest text-${card.color} font-bold`}>{card.subtitle}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">{card.title}</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant/90">{card.description}</p>
              <motion.a
                className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-container-high/90 transition-all w-fit"
                whileHover={{ x: 4 }}
                href="#mood-section"
              >
                Explore {card.title} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </motion.a>
            </div>
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
          <span>Or let intelligence choose</span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Our mood engine matches your emotional frequency to the precise atmospheric coordinates you need. No browsing required.</p>
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