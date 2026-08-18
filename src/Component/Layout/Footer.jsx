import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 text-sm ">
      {/* Top Section: Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-xl font-bold tracking-wide text-white hover:text-emerald-400 transition-colors inline-block">
              Legacy Jersey Co<span className="text-emerald-400">.</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Your premier destination for authentic national team jerseys, performance gear, and exclusive athletic apparel.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 flex items-center justify-center text-xs text-slate-300 font-medium transition-all duration-200"
                  aria-label={platform}
                >
                  {platform.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#jerseys" className="hover:text-emerald-400 transition-colors">National Jerseys</a></li>
              <li><a href="#clubs" className="hover:text-emerald-400 transition-colors">Club Kits</a></li>
              <li><a href="#flashsale" className="hover:text-emerald-400 transition-colors">Flash Sales</a></li>
              <li><a href="#bestsellers" className="hover:text-emerald-400 transition-colors">Bestsellers</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#support" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#shipping" className="hover:text-emerald-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#size-guide" className="hover:text-emerald-400 transition-colors">Size Guide</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base">Stay Updated</h3>
            <p className="text-xs text-slate-400">
              Subscribe to get special discounts and new kit drop alerts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Brand Inc. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#cookies" className="hover:text-emerald-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}