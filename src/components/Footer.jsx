import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest pt-space-4xl pb-space-2xl">
      <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop flex flex-col gap-space-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Weekend Dispatch</span>
            <h3 className="font-editorial-italic text-editorial-italic text-on-surface">Don't plan a trip. Escape your routine.</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Handcrafted sensory getaways within a 4-hour radius. Atmospheric stillness curated every Thursday at twilight.</p>
            <div className="flex items-center max-w-md w-full rounded-full bg-surface-container-high p-space-2xs mt-space-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <input className="flex-1 bg-transparent px-space-md py-space-xs font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" placeholder="Enter your personal terminal email..." type="email"/>
              <button className="px-space-lg py-space-xs rounded-full bg-primary-container text-on-primary font-label-caps text-label-caps uppercase shadow-[0_0_16px_rgba(255,107,74,0.35)] hover:bg-primary transition-all" type="button">Subscribe</button>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">Curated Departure Hubs</span>
            <ul className="flex flex-col gap-space-xs font-headline-sm text-headline-sm text-on-surface">
              <li><NavLink className="hover:text-primary transition-colors flex items-center justify-between py-space-2xs" to="#discover">Mumbai <span className="font-label-numeric text-label-numeric text-secondary">BOM • Active</span></NavLink></li>
              <li><NavLink className="hover:text-primary transition-colors flex items-center justify-between py-space-2xs text-on-surface-variant" to="#discover">Pune <span className="font-label-numeric text-label-numeric text-outline">PNQ • 14 Picks</span></NavLink></li>
              <li><NavLink className="hover:text-primary transition-colors flex items-center justify-between py-space-2xs text-on-surface-variant" to="#discover">Delhi <span className="font-label-numeric text-label-numeric text-outline">DEL • 26 Picks</span></NavLink></li>
              <li><NavLink className="hover:text-primary transition-colors flex items-center justify-between py-space-2xs text-on-surface-variant" to="#discover">Bengaluru <span className="font-label-numeric text-label-numeric text-outline">BLR • 31 Picks</span></NavLink></li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-wider">Navigation Architecture</span>
            <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <li><NavLink className="hover:text-on-surface transition-colors" to="#curated-moods">Curated Moods</NavLink></li>
              <li><NavLink className="hover:text-on-surface transition-colors" to="#weekend-picks">The Weekend Dispatch</NavLink></li>
              <li><NavLink className="hover:text-on-surface transition-colors" to="#how-it-works">Philosophy & Protocol</NavLink></li>
              <li><NavLink className="hover:text-on-surface transition-colors" to="#taste-intelligence">Taste Intelligence Index</NavLink></li>
              <li><NavLink className="hover:text-on-surface transition-colors" to="#private-aviation">Private Transfers</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="w-full flex items-center justify-center select-none overflow-hidden">
          <h2 className="font-display-hero text-display-hero tracking-tighter uppercase text-surface-container-highest/20 scale-y-110 translate-y-4">ESCAPE</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-lg text-on-surface-variant font-label-numeric text-label-numeric">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span>© 2025 ESCAPE Architectural Travel Ltd. All coordinates reserved.</span>
          </div>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps uppercase tracking-wider">
            <NavLink className="hover:text-on-surface transition-colors" to="#terms">Privacy Protocol</NavLink>
            <NavLink className="hover:text-on-surface transition-colors" to="#terms">Terms of Transit</NavLink>
            <NavLink className="hover:text-on-surface transition-colors" to="#editorial-board">Editorial Board</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}