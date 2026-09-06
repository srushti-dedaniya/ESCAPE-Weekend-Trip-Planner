import { motion } from 'framer-motion';

const picks = [
  {
    id: 1,
    name: 'Matheran Deep Canopy',
    location: 'Maharashtra • 800m ASL',
    driveTime: '2.5 hrs from Mumbai',
    mood: 'Reset',
    budget: '₹6,500',
    crowd: 'Ultra Low',
    weather: '23°C Mist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrP9DarRCB2x9o-qN_naf2nSiFR3p4sT7xJAhuOmypYIuNYSTHHBjNqOLPk3zCZAJadPOG9d2HP9p8erN6hI2pqPGSl06KX0WwhN0faKmNRnpk79v0ArNZGKjqb9HRrhhjAfMv9SR4HvcfArpDGMJrIfLQopyTFFAPxKQZwbK10OvNT971Cqlw_qrWcaiyqv19UZmRhi00BaiB8YvSVTnLFD0Mqa7DMgp1U4amgX2-uveh5EDlHb5Nqw',
    featured: true,
    highlights: ['Zero Auto-Zone', 'Toy Train Ascent', '12 Peak Panoramas', 'Red Soil Trails']
  },
  {
    id: 2,
    name: 'Alibaug Coastal Cliffs',
    location: 'Konkan Coast • Sea Level',
    driveTime: '3 hrs + 20min ferry',
    mood: 'Drift',
    budget: '₹8,200',
    crowd: 'Low',
    weather: '28°C Breeze',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYKGcueE7ElrjarpcWv3aN8SY0wlp2V8iqnq-gb-camvTh5ZZePVcQjUo1lSibtrqj_V2xirnLbc1mOtL7bW5kjYc2i3pxrRZoYh7SauN1gLxAiG2MZNYzomXiB_UwYEHzcb1aMD49sHrkv2w8VXMSR-oyRaPQkV4Y7-jhTznA7FZRK3558r_ZaHf-1fAWH5bimWjN_L2fsC34k6102EFwL-F-bCQnVJU4Y5ZGG9eJV_gQWOGjIdkXXw',
    featured: false,
    highlights: ['Private Beach Access', 'Sunset Cliff Walks', 'Konkani Seafood', 'Ferry Arrival']
  },
  {
    id: 3,
    name: 'Lonavala Lake District',
    location: 'Sahyadris • 625m ASL',
    driveTime: '1.5 hrs from Mumbai',
    mood: 'Awaken',
    budget: '₹5,800',
    crowd: 'Medium',
    weather: '22°C Crisp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaIGn3Nw9vs7RUwtQvMB7aX5RRDfd7cIFA4tdU401R2rugYUI3F1DogMC5rWKMqiENt5vtwIb9YoG1BYKWY55anqjV96hMNfxwm3tzVGdsqWlrEWfoZvBXe5FCm8nmq0vx-gSMKaRItdHcY8gz5ChaRDEINnOdjJ5YXNM4c2hmLZGvevtpCYyo466eADcsOl57yWAxOpU7NqcRbuYbsDiH1qLxmVD13-AdopcV5NCJ9IsXpd3p4zMLCw',
    featured: false,
    highlights: ['Twin Lake Views', 'Ancient Caves', 'Waterfall Trails', 'Strawberry Farms']
  },
  {
    id: 4,
    name: 'Mahabaleshwar Ridge',
    location: 'Western Ghats • 1,353m ASL',
    driveTime: '3 hrs from Pune',
    mood: 'Connect',
    budget: '₹7,500',
    crowd: 'Low',
    weather: '19°C Fog',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrP9DarRCB2x9o-qN_naf2nSiFR3p4sT7xJAhuOmypYIuNYSTHHBjNqOLPk3zCZAJadPOG9d2HP9p8erN6hI2pqPGSl06KX0WwhN0faKmNRnpk79v0ArNZGKjqb9HRrhhjAfMv9SR4HvcfArpDGMJrIfLQopyTFFAPxKQZwbK10OvNT971Cqlw_qrWcaiyqv19UZmRhi00BaiB8YvSVTnLFD0Mqa7DMgp1U4amgX2-uveh5EDlHb5Nqw',
    featured: false,
    highlights: ['Strawberry Plateaus', '360° Valley Views', 'Colonial Bungalows', 'Mapro Garden']
  },
  {
    id: 5,
    name: 'Kamshet Paragliding Basin',
    location: 'Pune District • 600m ASL',
    driveTime: '2 hrs from Mumbai',
    mood: 'Awaken',
    budget: '₹9,500',
    crowd: 'Low',
    weather: '25°C Thermal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYKGcueE7ElrjarpcWv3aN8SY0wlp2V8iqnq-gb-camvTh5ZZePVcQjUo1lSibtrqj_V2xirnLbc1mOtL7bW5kjYc2i3pxrRZoYh7SauN1gLxAiG2MZNYzomXiB_UwYEHzcb1aMD49sHrkv2w8VXMSR-oyRaPQkV4Y7-jhTznA7FZRK3558r_ZaHf-1fAWH5bimWjN_L2fsC34k6102EFwL-F-bCQnVJU4Y5ZGG9eJV_gQWOGjIdkXXw',
    featured: false,
    highlights: ['Tandem Flights', 'Thermal Currents', 'Lake Landing', 'Sunrise Sessions']
  }
];

export default function WeekendPicks() {
  return (
    <section id="weekend-picks" className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full">
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm mb-space-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-space-2xs">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">This Week's Dispatch</span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Curated Weekend Picks</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Hand-selected atmospheric sanctuaries dropping this Thursday. Each vetted for silence, access, and sensory coherence.</p>
        </div>
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-secondary"></span> 05 Coordinates Unlocked
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {picks.map((pick, index) => (
          <motion.article
            key={pick.id}
            className={`relative group rounded-3xl overflow-hidden flex flex-col ${pick.featured ? 'lg:col-span-7' : 'lg:col-span-6'}`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('${pick.image}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/95 via-surface-container-lowest/10 to-transparent z-10"></div>
            
            <div className="relative z-20 flex flex-col justify-end p-space-lg lg:p-space-xl gap-space-md min-h-[380px] lg:min-h-[460px]">
              <div className="flex flex-wrap items-center gap-space-sm">
                <span className="px-space-sm py-1.5 rounded-full bg-primary-container/90 text-on-primary-container font-label-caps text-[10px] uppercase font-bold">{pick.mood}</span>
                <span className="px-space-sm py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-numeric text-[10px] text-on-surface-variant">{pick.driveTime}</span>
                <span className="px-space-sm py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-numeric text-[10px] text-on-surface-variant">{pick.crowd} Crowd</span>
              </div>
              
              <div className="flex flex-col gap-space-2xs">
                <h3 className="font-headline-lg text-headline-lg lg:text-[36px] text-on-surface font-bold">{pick.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant/90">{pick.location}</p>
              </div>
              
              <div className="flex flex-wrap gap-space-sm">
                {pick.highlights.map((highlight, i) => (
                  <span key={i} className="px-space-sm py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-caps text-[10px] uppercase text-on-surface-variant/90 border border-outline/30">{highlight}</span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-space-lg pt-space-sm border-t border-white/10">
                <div className="flex items-center gap-space-xs">
                  <span className="font-label-caps text-[10px] uppercase text-outline">Budget</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">{pick.budget}</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">wb_sunny</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{pick.weather}</span>
                </div>
              </div>
              
              <motion.a
                className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(255,107,74,0.35)] hover:bg-primary transition-all w-fit"
                whileHover={{ x: 4 }}
                href="#mood-section"
              >
                View Manifest <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}