import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#061B2B] border-t border-[#D4A574]/20 pt-16 pb-8 px-5 sm:px-8 xl:px-14 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start text-left">
          <a href="/" className="inline-block mb-4">
            <img src="/public/logo.png" alt="CNI Logo" className="h-20 w-auto object-contain rounded" />
          </a>
          <p className="text-white/80 font-light text-sm leading-relaxed mb-6 max-w-xs">
            Bridging Pakistani Ambition with Saudi Opportunity
          </p>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D4A574] hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D4A574] hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* WhatsApp */}
            <a href="/contact" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#D4A574] hover:border-[#D4A574]/50 hover:bg-[#D4A574]/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        {/* MIDDLE COLUMN 1: Quick Links */}
        <div className="flex flex-col text-left">
          <h3 className="text-[#D4A574] font-serif-luxury text-xl mb-6">Quick Links</h3>
          <nav className="flex flex-col gap-3">
            <a href="/" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Home</a>
            <a href="/about" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">About</a>
            <a href="/investors" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Investors</a>
            <a href="/why-ksa" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Why KSA</a>
            <a href="/contact" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Contact</a>
          </nav>
        </div>

        {/* MIDDLE COLUMN 2: Our Divisions */}
        <div className="flex flex-col text-left">
          <h3 className="text-[#D4A574] font-serif-luxury text-xl mb-6">Our Divisions</h3>
          <nav className="flex flex-col gap-3">
            <a href="/divisions/automotive" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Automotive Division</a>
            <a href="/divisions/business-facilitation" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Business Facilitation</a>
            <a href="/divisions/tour-travel" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Tour & Travel</a>
            <a href="/divisions/real-estate" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Real Estate & Advisory</a>
            <a href="/divisions/home-services" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Home Services — Mundus</a>
            <a href="/divisions/hospitality" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Hospitality Management</a>
            <a href="/divisions/logistics" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">Logistics — My Truck</a>
            <a href="/divisions/ai-digital" className="text-white/80 hover:text-[#D4A574] hover:translate-x-1 transition-all text-sm">CNI AI & Digital</a>
          </nav>
        </div>

        {/* RIGHT COLUMN: Regional Offices */}
        <div className="flex flex-col text-left">
          <h3 className="text-[#D4A574] font-serif-luxury text-xl mb-6">Regional Offices</h3>
          
          <div className="mb-5">
            <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wider opacity-90">Pakistan Head Office</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-1">
              Attari Group of Companies<br />
              Office # 004, Ground Floor<br />
              Green Trust Tower, Jinnah Avenue<br />
              Blue Area, Islamabad
            </p>
            <a href="tel:+923311110210" className="text-[#D4A574] hover:text-white transition-colors text-sm font-medium">+92 331 11 10 210</a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2 uppercase tracking-wider opacity-90">KSA Regional Offices</h4>
            <div className="text-white/70 text-sm leading-relaxed mb-1 flex items-center gap-2">
              <span className="font-medium text-white/90">Riyadh</span> 
              <span className="text-[#D4A574] opacity-50">&bull;</span>
              <a href="tel:+966593209505" className="text-[#D4A574] hover:text-white transition-colors text-sm">+966 59 320 9505</a>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Jeddah <span className="text-[#D4A574] opacity-50 mx-1">&bull;</span> Jazan
            </p>
          </div>
        </div>
        
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <p>© 2025 Crescent Nova International. All Rights Reserved.</p>
        <p>Registered in Saudi Arabia | Riyadh</p>
      </div>
    </footer>
  );
};

export default Footer;
