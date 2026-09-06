import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../LOGO.png';

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthClick = (e) => {
    e.preventDefault();
    setShowAuthModal(true);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setShowAuthModal(false);
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
  };

  // Trap focus in modal when open
  useEffect(() => {
    if (showAuthModal) {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        const handleTab = (e) => {
          if (e.key !== 'Tab') return;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        };
        
        modal.addEventListener('keydown', handleTab);
        firstElement?.focus();
        
        return () => modal.removeEventListener('keydown', handleTab);
      }
    }
  }, [showAuthModal]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/75 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]" role="banner">
        <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt="" className="h-8 w-auto object-contain" src={logo} style={{ verticalAlign: 'middle', imageRendering: 'auto', flexShrink: 0 }} aria-hidden="true" />
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">ESCAPE</span>
          </div>
          <nav className="hidden lg:flex items-center gap-space-xs bg-surface-container/60 backdrop-blur-md px-space-xs py-space-2xs rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]" aria-label="Main navigation">
            <a 
              href="#discover"
              className="flex items-center gap-space-2xs px-space-md py-space-xs uppercase transition-colors rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-full"
            >
              Discover
            </a>
            <a 
              href="#how-it-works"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              How It Works
            </a>
            <a 
              href="#weekend-picks"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Weekend Picks
            </a>
            <a 
              href="#curated-moods"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Curated Moods
            </a>
          </nav>
          <div className="flex items-center gap-space-sm">
            <div className="hidden sm:flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase" aria-label="Current location">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#f2bd74]" aria-hidden="true"></span>
              Mumbai
            </div>
            <a 
              className="inline-flex items-center justify-center px-space-lg py-space-xs rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider shadow-[0_0_24px_rgba(255,107,74,0.45)] hover:bg-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface" 
              href="#mood-section"
            >
              Start Exploring
              <span className="material-symbols-outlined text-[16px] ml-1" aria-hidden="true">arrow_forward</span>
            </a>
            <button
              onClick={handleAuthClick}
              className="inline-flex items-center justify-center px-space-lg py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-container transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </div>
      </header>

      {showAuthModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-space-md" 
          onClick={() => setShowAuthModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
          <motion.div
            className="w-full max-w-md bg-surface-container p-space-2xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              aria-label="Close authentication modal"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-2xs text-center">
                <h3 id="auth-modal-title" className="font-headline-md text-headline-md text-on-surface">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {isLogin ? 'Sign in to continue your escape journey' : 'Join ESCAPE to unlock curated getaways'}
                </p>
              </div>
              
              {!isLogin && (
                <div className="flex gap-space-sm">
                  <label htmlFor="full-name" className="sr-only">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline focus-visible:ring-2 focus-visible:ring-primary-container"
                    required
                  />
                </div>
              )}
              
              <div className="flex flex-col gap-space-sm">
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline focus-visible:ring-2 focus-visible:ring-primary-container"
                  required
                />
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline focus-visible:ring-2 focus-visible:ring-primary-container"
                  required
                  minLength={8}
                />
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                  <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline focus-visible:ring-2 focus-visible:ring-primary-container"
                    required
                    minLength={8}
                  />
                </div>
              )}
              
              <button
                type="submit"
                className="px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest font-bold shadow-[0_0_24px_rgba(255,107,74,0.4)] hover:bg-primary transition-all duration-300 mt-space-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
              
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={handleSwitchMode}
                  className="text-primary hover:underline font-bold focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-container"
                >
                  {isLogin ? 'Register' : 'Login'}
                </button>
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}