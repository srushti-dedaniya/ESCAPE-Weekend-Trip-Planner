import { motion } from 'framer-motion';

export default function DestinationCard({ destination, isFeatured = false }) {
  if (isFeatured) {
    return (
      <motion.div 
        className="group relative rounded-3xl overflow-hidden bg-surface-container min-h-[440px] lg:min-h-[520px] flex flex-col justify-end p-space-xl shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${destination.image})` }}
          data-alt={destination.description}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col gap-space-xs">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-space-sm py-space-2xs rounded-full bg-secondary text-on-secondary font-label-caps text-label-caps uppercase font-bold">
              {destination.subCategory} • {destination.travelTime}
            </span>
            <span className="font-label-numeric text-label-numeric text-secondary bg-surface-container-lowest/80 px-space-sm py-space-2xs rounded-full backdrop-blur-md">
              {destination.price}
            </span>
          </motion.div>
          <motion.h3 
            className="font-display-hero text-[40px] lg:text-[56px] leading-tight uppercase font-bold text-on-surface group-hover:text-primary transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {destination.name}
          </motion.h3>
          <motion.p 
            className="font-editorial-italic italic text-body-lg text-tertiary max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {destination.description}
          </motion.p>
          <motion.div 
            className="pt-space-sm flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">Coordinates: {destination.coordinates}</span>
            <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[20px]">north_east</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (destination.icon) {
    return (
      <motion.div 
        className="p-space-lg rounded-2xl bg-surface-container/60 hover:bg-surface-container-high/80 backdrop-blur-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
        whileHover={{ x: 8 }}
      >
        <motion.div 
          className="flex items-center gap-space-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={`w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center ${destination.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
            <span className="material-symbols-outlined text-[28px]">{destination.icon}</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-label-caps text-label-caps uppercase tracking-wider ${destination.color === 'primary' ? 'text-primary-container' : 'text-secondary'}`}>
              {destination.subCategory} • {destination.travelTime}
            </span>
            <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold group-hover:text-primary transition-colors">
              {destination.name}
            </h4>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {destination.description}
            </span>
          </div>
        </motion.div>
        <motion.span 
          className="material-symbols-outlined text-outline group-hover:text-on-surface group-hover:translate-x-1 transition-all"
          whileHover={{ x: 4 }}
        >
          chevron_right
        </motion.span>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="group relative rounded-3xl overflow-hidden bg-surface-container min-h-[250px] lg:min-h-[245px] flex flex-col justify-end p-space-lg shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url(${destination.image})` }}
        data-alt={destination.description}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
      <motion.div 
        className="relative z-10 flex flex-col gap-space-2xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`font-label-caps text-label-caps uppercase tracking-wider ${destination.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
          {destination.subCategory} • {destination.travelTime}
        </span>
        <h4 className="font-headline-md text-headline-md uppercase text-on-surface font-bold group-hover:text-primary transition-colors">
          {destination.name}
        </h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {destination.description}
        </p>
      </motion.div>
    </motion.div>
  );
}