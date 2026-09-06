import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { filterCategories, filterBudgets, filterDistances } from '../data/destinations';

export default function EscapeFilter({ 
  activeCategory, 
  onCategoryChange, 
  activeBudget, 
  onBudgetChange, 
  activeDistance, 
  onDistanceChange 
}) {
  const filterCounter = 'Showing <strong class="text-on-surface font-bold">8 curated sanctuaries</strong> matching parameters';

  const handleCategoryClick = useCallback((category) => {
    onCategoryChange(category);
  }, [onCategoryChange]);

  const handleBudgetClick = useCallback((budget) => {
    onBudgetChange(budget);
  }, [onBudgetChange]);

  const handleDistanceClick = useCallback((distance) => {
    onDistanceChange(distance);
  }, [onDistanceChange]);

  const renderFilterGroup = (id, label, options, activeValue, onClick, activeClasses, inactiveClasses) => (
    <motion.div 
      className="flex flex-col gap-space-2xs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <span className="font-label-caps text-[10px] uppercase text-outline tracking-wider">{label}</span>
      <div className="flex flex-wrap gap-space-2xs" id={id} role="group" aria-label={label}>
        {options.map(option => (
          <motion.button
            key={option}
            role="button"
            aria-pressed={activeValue === option}
            className={`filter-btn px-space-sm py-1.5 rounded-full font-label-caps text-label-caps uppercase transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
              activeValue === option ? activeClasses : inactiveClasses
            }`}
            onClick={() => onClick(option)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-space-xl px-gutter-mobile lg:px-gutter-desktop max-w-7xl mx-auto w-full" aria-labelledby="filter-heading">
      <motion.div 
        className="p-space-lg rounded-3xl bg-surface-container-low/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <h2 id="filter-heading" className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase text-secondary">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">tune</span>
            <span>Dynamic Trajectory Filters</span>
          </h2>
          <span className="font-label-numeric text-label-numeric text-on-surface-variant" id="filter-feedback-counter" dangerouslySetInnerHTML={{ __html: filterCounter }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-center">
          {renderFilterGroup(
            'category-filter-group',
            'Environment Profile',
            filterCategories,
            activeCategory,
            handleCategoryClick,
            'bg-primary-container text-on-primary-container font-bold',
            'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
          )}
          {renderFilterGroup(
            'budget-filter-group',
            'Economic Tier',
            filterBudgets,
            activeBudget,
            handleBudgetClick,
            'bg-secondary text-on-secondary font-bold',
            'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
          )}
          {renderFilterGroup(
            'distance-filter-group',
            'Drive Duration',
            filterDistances,
            activeDistance,
            handleDistanceClick,
            'bg-primary-container text-on-primary-container font-bold',
            'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
          )}
        </div>
      </motion.div>
    </section>
  );
}