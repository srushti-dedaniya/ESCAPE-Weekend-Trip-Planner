import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../LOGO.png';

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

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

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/75 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt="ESCAPE Logo" className="h-8 w-auto object-contain" src={logo} style={{ verticalAlign: 'middle', imageRendering: 'auto', flexShrink: 0 }} />
            <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface">ESCAPE</span>
          </div>
          <nav className="hidden lg:flex items-center gap-space-xs bg-surface-container/60 backdrop-blur-md px-space-xs py-space-2xs rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <a 
              href="#discover"
              className="flex items-center gap-space-2xs px-space-md py-space-xs uppercase transition-colors rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface"
            >
              Discover
            </a>
            <a 
              href="#how-it-works"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface"
            >
              How It Works
            </a>
            <a 
              href="#weekend-picks"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface"
            >
              Weekend Picks
            </a>
            <a 
              href="#curated-moods"
              className="px-space-md py-space-xs rounded-full font-label-caps text-label-caps uppercase transition-colors text-on-surface-variant hover:text-on-surface"
            >
              Curated Moods
            </a>
          </nav>
          <div className="flex items-center gap-space-sm">
            <div className="hidden sm:flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#f2bd74]"></span>
              Mumbai
            </div>
            <a 
              className="inline-flex items-center justify-center px-space-lg py-space-xs rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase tracking-wider shadow-[0_0_24px_rgba(255,107,74,0.45)] hover:bg-primary transition-all duration-300" 
              href="#mood-section"
            >
              Start Exploring →
            </a>
            <button
              onClick={handleAuthClick}
              className="inline-flex items-center justify-center px-space-lg py-space-xs rounded-full bg-surface-container-high text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-container transition-all duration-300"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </div>
        </div>
      </header>

      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-space-md" onClick={() => setShowAuthModal(false)}>
          <motion.div
            className="w-full max-w-md bg-surface-container p-space-2xl rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.8)] relative"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant">close</span>
            </button>
            <form onSubmit={handleAuthSubmit} className="flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-2xs text-center">
                <h3 className="font-headline-md text-headline-md text-on-surface">{isLogin ? 'Welcome Back' : 'Create Account'}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {isLogin ? 'Sign in to continue your escape journey' : 'Join ESCAPE to unlock curated getaways'}
                </p>
              </div>
              
              {!isLogin && (
                <div className="flex gap-space-sm">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
                    required
                  />
                </div>
              )}
              
              <div className="flex flex-col gap-space-sm">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
                  required
                  minLength={8}
                />
              </div>
              
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline focus:border-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline"
                  required
                  minLength={8}
                />
              )}
              
              <button
                type="submit"
                className="px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-caps text-label-caps uppercase tracking-widest font-bold shadow-[0_0_24px_rgba(255,107,74,0.4)] hover:bg-primary transition-all duration-300 mt-space-xs"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </button>
              
              <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={handleSwitchMode}
                  className="text-primary hover:underline font-bold"
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