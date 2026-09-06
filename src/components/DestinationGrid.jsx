import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';

export default function DestinationGrid({ activeCategory, activeBudget, activeDistance }) {
  const filteredDestinations = destinations.filter(dest => {
    const categoryMatch = activeCategory === 'All' || dest.category === activeCategory;
    // For simplicity, we'll just filter by category for now
    return categoryMatch;
  });

  const featuredDest = filteredDestinations.find(d => d.featured);
  const regularDests = filteredDestinations.filter(d => !d.featured && !d.icon);
  const stripDests = filteredDestinations.filter(d => d.icon);

  return (
    <section className="py-space-4xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full" id="destinations">
      <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm mb-space-2xl">
        <motion.div 
          className="flex flex-col gap-space-2xs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Spatial Compendium</span>
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Pick Your Next Story</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Curated atmospheric sanctuaries within driving and express ferry distance of Mumbai & Pune.</p>
        </motion.div>
        <motion.div 
          className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-on-surface-variant self-end md:self-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-secondary"></span> 05 Coordinates Unlocked
        </motion.div>
      </div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {featuredDest && (
          <DestinationCard key={featuredDest.id} destination={featuredDest} isFeatured={true} />
        )}

        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          {regularDests.slice(0, 2).map((dest, index) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="lg:col-span-6 flex flex-col gap-space-lg">
          {stripDests.map((dest, index) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}