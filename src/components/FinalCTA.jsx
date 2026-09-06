import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section 
      className="relative py-space-4xl px-gutter-mobile lg:px-gutter-desktop min-h-[550px] flex items-center justify-center overflow-hidden my-space-2xl" 
      aria-labelledby="cta-heading"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYKGcueE7ElrjarpcWv3aN8SY0wlp2V8iqnq-gb-camvTh5ZZePVcQjUo1lSibtrqj_V2xirnLbc1mOtL7bW5kjYc2i3pxrRZoYh7SauN1gLxAiG2MZNYzomXiB_UwYEHzcb1aMD49sHrkv2w8VXMSR-oyRaPQkV4Y7-jhTznA7FZRK3558r_ZaHf-1fAWH5bimWjN_L2fsC34k6102EFwL-F-bCQnVJU4Y5ZGG9eJV_gQWOGjIdkXXw')" }} 
        role="img"
        aria-label="Breathtaking wide sunset panorama over an infinite coastline with cliffside architecture bathed in golden amber rays and dusk shadows"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-dim/80 to-surface-container-lowest/90" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-surface/50 backdrop-blur-sm" aria-hidden="true"></div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-space-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-high/80 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#ff6b4a]"></span>
          <span className="font-label-caps text-label-caps uppercase text-secondary">The Monday Antidote</span>
        </motion.div>
        
        <motion.h2 
          id="cta-heading"
          className="font-display-hero text-[44px] sm:text-[64px] lg:text-[84px] uppercase font-bold tracking-tight text-on-surface leading-[0.95]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          YOUR WEEKEND<br/>
          DOESN'T HAVE TO<br/>
          <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">LOOK THE SAME.</span>
        </motion.h2>

        <motion.p 
          className="font-editorial-italic italic text-editorial-italic text-on-surface-variant max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your next timeless memory is only four driving hours or a single sunset ferry away.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a 
            className="px-space-xl py-space-md rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest font-bold shadow-[0_0_36px_rgba(255,107,74,0.5)] hover:bg-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#mood-section"
          >
            START YOUR ESCAPE
            <span className="material-symbols-outlined text-[18px] ml-1" aria-hidden="true">arrow_forward</span>
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex items-center gap-space-lg text-on-surface-variant font-label-caps text-label-caps uppercase tracking-wider pt-space-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a className="hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-container rounded" href="#guide">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">download</span> Download Offline Guide
          </a>
          <span className="w-1 h-1 rounded-full bg-outline" aria-hidden="true"></span>
          <a className="hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded" href="#gift">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">redeem</span> Gift an Escape
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}