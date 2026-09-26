/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Menu,
  X,
  CheckCircle2,
  Send
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'EN' | 'AR'>('EN');
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [showDivisionsModal, setShowDivisionsModal] = useState(false);
  const [showOpportunitiesModal, setShowOpportunitiesModal] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
    setTimeout(() => {
      setProposalSubmitted(false);
      setShowProposalModal(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 2000);
  };

  const navLinks = [
    { id: 'Home', en: 'Home', ar: 'الرئيسية' },
    { id: 'About', en: 'About', ar: 'عن المجموعة' },
    { id: 'Divisions', en: 'Divisions', ar: 'القطاعات' },
    { id: 'Investors', en: 'Investors', ar: 'المستثمرون' },
    { id: 'Why KSA', en: 'Why KSA', ar: 'لماذا السعودية' },
    { id: 'Contact', en: 'Contact', ar: 'اتصل بنا' }
  ];

  const isRtl = lang === 'AR';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen xl:h-screen w-full bg-[#070d18] text-slate-100 flex flex-col justify-between relative overflow-x-hidden select-none ${
        isRtl ? 'font-arabic' : 'font-sans-clean'
      }`}
    >
      {/* ============================================================ */}
      {/* 1. TOP HEADER                                                 */}
      {/* Exact reference positions:                                    */}
      {/* - Left (~4%): CNI Logo                                       */}
      {/* - Nav links start at ~22.5% (aligned with mid text!)         */}
      {/* - Right (~72%): Request Proposal button                      */}
      {/* - Far Right (~94%): EN | عربي                                */}
      {/* ============================================================ */}
      <header className="relative z-30 w-full px-5 sm:px-8 xl:px-14 pt-6 pb-2">
        <div className="w-full flex items-center justify-between">
          
          {/* LEFT: BRAND MONOGRAM LOGO (~4% - 18%) */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => setActiveNav('Home')}
          >
            {/* Elegant Gold Crescent hugging CNI Monogram */}
            <div className="relative flex items-center justify-center">
              <svg
                className="w-11 h-11 sm:w-12 sm:h-12 drop-shadow-[0_2px_8px_rgba(216,174,87,0.35)] transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="cniGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5dfa7" />
                    <stop offset="50%" stopColor="#d4a853" />
                    <stop offset="100%" stopColor="#b3822c" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 10 C27.9 10 10 27.9 10 50 C10 72.1 27.9 90 50 90 C62.5 90 73.6 84.3 80.9 75.3 C71.3 79.5 60.5 81.8 49.2 81.8 C31.7 81.8 17.5 67.6 17.5 50.1 C17.5 32.6 31.7 18.4 49.2 18.4 C60.5 18.4 71.3 20.7 80.9 24.9 C73.6 15.9 62.5 10 50 10 Z"
                  fill="url(#cniGoldGrad)"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline tracking-tight leading-none">
                <span className="font-serif-luxury text-[30px] font-bold text-white tracking-wide">
                  <span className="text-gold-gradient font-bold pr-0.5">C</span>NI
                </span>
              </div>
              <span className="font-serif-luxury text-[9px] uppercase tracking-[0.24em] text-[#d6ab58] font-semibold mt-0.5 leading-tight">
                CRESCENT NOVA
              </span>
              <span className="text-[7px] uppercase tracking-[0.38em] text-slate-400 font-medium leading-tight mt-0.5">
                INTERNATIONAL
              </span>
            </div>
          </div>

          {/* CENTER-LEFT: NAV LINKS (aligned precisely with the mid headline below) */}
          <div className="hidden lg:flex flex-1 pl-12 xl:pl-16">
            <nav className="flex items-center gap-7 xl:gap-9 text-[14px]">
              {navLinks.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      if (item.id === 'Divisions') setShowDivisionsModal(true);
                      if (item.id === 'Investors') setShowOpportunitiesModal(true);
                      if (item.id === 'Contact') setShowProposalModal(true);
                    }}
                    className={`relative py-1 cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? 'text-[#f0d08a] font-semibold'
                        : 'text-slate-300 hover:text-white font-normal'
                    }`}
                  >
                    {isRtl ? item.ar : item.en}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d8ae57] rounded-full shadow-[0_0_8px_rgba(216,174,87,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: CTA BUTTON + EN | AR */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Request a Proposal Pill Button */}
            <button
              onClick={() => setShowProposalModal(true)}
              className="bg-gold-btn text-[#120f09] font-semibold text-xs sm:text-[13px] px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-2 shadow-[0_4px_16px_rgba(214,171,88,0.25)] hover:shadow-[0_6px_22px_rgba(214,171,88,0.4)] transition-all duration-200 cursor-pointer active:scale-95 group"
            >
              <span>{isRtl ? 'طلب مقترح' : 'Request a Proposal'}</span>
              <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
            </button>

            {/* Language Switcher: EN | عربي */}
            <div className="flex items-center text-xs tracking-wider font-semibold text-slate-300">
              <button
                onClick={() => setLang('EN')}
                className={`transition-colors cursor-pointer px-1 py-0.5 ${
                  lang === 'EN' ? 'text-[#f0d08a] font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-slate-600 px-1 font-light">|</span>
              <button
                onClick={() => setLang('AR')}
                className={`transition-colors cursor-pointer px-1 py-0.5 ${
                  lang === 'AR' ? 'text-[#f0d08a] font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                عربي
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 py-4 px-6 bg-[#0c1424] border border-white/10 rounded-2xl flex flex-col gap-3 shadow-2xl">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setMobileMenuOpen(false);
                  if (item.id === 'Divisions') setShowDivisionsModal(true);
                  if (item.id === 'Investors') setShowOpportunitiesModal(true);
                  if (item.id === 'Contact') setShowProposalModal(true);
                }}
                className={`text-left py-1.5 text-sm ${
                  activeNav === item.id ? 'text-[#d8ae57] font-semibold' : 'text-slate-300'
                }`}
              >
                {isRtl ? item.ar : item.en}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ============================================================ */}
      {/* 2. MAIN HERO SECTION                                          */}
      {/* Exact Reference Image Alignment:                              */}
      {/* - Left column (0% to ~22%) is open / blank                   */}
      {/* - Mid Content starts at ~22.5%                               */}
      {/* - Right Motto sits at ~68% - 75%                             */}
      {/* ============================================================ */}
      <main className="relative z-20 flex-1 flex flex-col justify-center px-5 sm:px-8 xl:px-14 py-6 md:py-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 items-start">
          
          {/* COLUMN 1: LEFT OPEN SPACE (Matching the left side of reference image) */}
          <div className="hidden lg:block lg:col-span-2 xl:col-span-2" aria-hidden="true" />

          {/* COLUMN 2: MID TEXT (Starts at ~22.5% - exactly where it is in the reference image) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start max-w-xl xl:max-w-2xl">
            
            {/* Top Kicker with horizontal line */}
            <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
              <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] text-[#d6ab58] font-medium font-sans-clean">
                {isRtl ? 'من باكستان إلى المملكة العربية السعودية' : 'PAKISTAN TO SAUDI ARABIA'}
              </span>
              <div className="w-14 sm:w-18 h-[1.5px] bg-[#d6ab58]/70" />
            </div>

            {/* Main Display Headline (Exact 3-line layout from screenshot) */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-[54px] xl:text-[64px] font-normal text-[#fcfbfa] tracking-[-0.01em] leading-[1.12] mb-5 sm:mb-6">
              {isRtl ? (
                <>
                  بوابتكم نحو <br />
                  المملكة العربية السعودية <br />
                  <span className="text-[#dfb256] font-medium">رؤية 2030</span>
                </>
              ) : (
                <>
                  Your Gateway to <br />
                  Saudi Arabia’s <br />
                  <span className="text-[#dfb256] font-medium">Vision 2030</span>
                </>
              )}
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-300 text-sm sm:text-[15px] xl:text-[16px] leading-[1.65] max-w-lg mb-7 font-light">
              {isRtl
                ? 'تربط كريسنت نوفا إنترناشيونال المستثمرين والشركات الباكستانية بالفرص الاستثمارية عالية النمو وذات العوائد المجزية في جميع أنحاء المملكة العربية السعودية.'
                : 'Crescent Nova International connects Pakistani investors, businesses, and enterprises with high-growth opportunities across the Kingdom of Saudi Arabia.'}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Explore Opportunities Button */}
              <button
                onClick={() => setShowOpportunitiesModal(true)}
                className="bg-gold-btn text-[#15120b] font-semibold text-xs sm:text-[13.5px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2.5 shadow-[0_6px_20px_rgba(214,171,88,0.28)] hover:shadow-[0_8px_26px_rgba(214,171,88,0.45)] transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <span>{isRtl ? 'استكشف الفرص' : 'Explore Opportunities'}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </button>

              {/* View Our Divisions Button with Play Icon */}
              <button
                onClick={() => setShowDivisionsModal(true)}
                className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d6ab58]/60 text-slate-100 hover:text-[#f3d38c] font-medium text-xs sm:text-[13.5px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-full flex items-center gap-3 transition-all duration-200 cursor-pointer active:scale-95 group"
              >
                <span>{isRtl ? 'استعراض قطاعاتنا' : 'View Our Divisions'}</span>
                <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[9px] pl-0.5 transition-transform group-hover:scale-110">
                  <Play className="w-2 h-2 fill-current" />
                </div>
              </button>
            </div>
          </div>

          {/* COLUMN 3: UPPER-RIGHT MOTTO (Exact right location from reference screenshot) */}
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-3 flex-col items-start lg:pl-6 xl:pl-10 pt-4">
            <div className="flex flex-col items-start text-left">
              <div className="font-brand text-[13px] xl:text-[14px] text-[#caa866]/90 font-normal tracking-[0.24em] leading-[1.8] select-none text-left">
                <div>STRONGER</div>
                <div>PARTNERSHIPS</div>
                <div>BRIGHTER</div>
                <div>TOMORROWS</div>
              </div>
              <div className="w-14 h-[1.5px] bg-[#caa866]/70 mt-3" />
            </div>
          </div>

        </div>
      </main>

      {/* ============================================================ */}
      {/* 3. BOTTOM METRICS BAR & SCROLL INDICATOR                      */}
      {/* Exact reference image placement spanning the lower section    */}
      {/* ============================================================ */}
      <footer className="relative z-20 w-full px-5 sm:px-8 xl:px-14 pb-5 pt-2">
        <div className="w-full max-w-[1360px] mx-auto">
          
          {/* 4-Item Highlights Grid with Vertical Dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 py-3 items-center">
            
            {/* 1. Projected Annual ROI */}
            <div className="flex items-center gap-3.5 lg:pr-8">
              {/* Golden Trending Chart Icon */}
              <div className="shrink-0 text-[#d8ae57]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                  <polyline points="3 8 9 2 15 8 21 2" strokeWidth="2.2" />
                  <polyline points="17 2 21 2 21 6" strokeWidth="2.2" />
                </svg>
              </div>
              <div>
                <div className="text-xl md:text-[22px] font-bold text-white tracking-tight font-sans-clean tabular-nums leading-tight">
                  15 – 22%
                </div>
                <div className="text-xs text-slate-300 font-light mt-0.5 whitespace-nowrap">
                  {isRtl ? 'العائد السنوي المتوقع' : 'Projected Annual ROI'}
                </div>
              </div>
            </div>

            {/* 2. Sharia-aligned */}
            <div className="flex items-center gap-3.5 lg:px-8 lg:border-l lg:border-slate-600/40">
              {/* Golden Heraldic Shield Icon */}
              <div className="shrink-0 text-[#d8ae57]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 2v20" strokeWidth="1.2" />
                  <path d="M4 11h16" strokeWidth="1.2" />
                </svg>
              </div>
              <div>
                <div className="text-base md:text-lg font-bold text-white tracking-tight font-sans-clean leading-tight whitespace-nowrap">
                  {isRtl ? 'متوافق مع الشريعة' : 'Sharia-aligned'}
                </div>
                <div className="text-xs text-slate-300 font-light mt-0.5 whitespace-nowrap">
                  {isRtl ? 'ومحمي بحساب ضمان مخصص' : '& Escrow-Protected'}
                </div>
              </div>
            </div>

            {/* 3. Saudi Registered */}
            <div className="flex items-center gap-3.5 lg:px-8 lg:border-l lg:border-slate-600/40">
              {/* Golden Modern Skyscraper Icon */}
              <div className="shrink-0 text-[#d8ae57]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="8" y2="6.01" strokeWidth="2.5" />
                  <line x1="12" y1="6" x2="12" y2="6.01" strokeWidth="2.5" />
                  <line x1="16" y1="6" x2="16" y2="6.01" strokeWidth="2.5" />
                  <line x1="8" y1="10" x2="8" y2="10.01" strokeWidth="2.5" />
                  <line x1="12" y1="10" x2="12" y2="10.01" strokeWidth="2.5" />
                  <line x1="16" y1="10" x2="16" y2="10.01" strokeWidth="2.5" />
                  <line x1="8" y1="14" x2="8" y2="14.01" strokeWidth="2.5" />
                  <line x1="12" y1="14" x2="12" y2="14.01" strokeWidth="2.5" />
                  <line x1="16" y1="14" x2="16" y2="14.01" strokeWidth="2.5" />
                  <line x1="10" y1="22" x2="10" y2="18" />
                  <line x1="14" y1="22" x2="14" y2="18" />
                </svg>
              </div>
              <div>
                <div className="text-base md:text-lg font-bold text-white tracking-tight font-sans-clean leading-tight whitespace-nowrap">
                  {isRtl ? 'مرخص رسمياً في السعودية' : 'Saudi Registered'}
                </div>
                <div className="text-xs text-slate-300 font-light mt-0.5 whitespace-nowrap">
                  {isRtl ? 'المقر الرئيسي: الرياض' : 'Riyadh HQ'}
                </div>
              </div>
            </div>

            {/* 4. Backed by */}
            <div className="flex items-center gap-3.5 lg:pl-8 lg:border-l lg:border-slate-600/40">
              {/* Golden People / Partners Icon */}
              <div className="shrink-0 text-[#d8ae57]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-base md:text-lg font-bold text-white tracking-tight font-sans-clean leading-tight whitespace-nowrap">
                  {isRtl ? 'مدعوم من' : 'Backed by'}
                </div>
                <div className="text-xs text-slate-300 font-light mt-0.5 whitespace-nowrap">
                  {isRtl ? 'مجموعة عطاري بمسيرة 18 عاماً' : "Attari Group's 18-Year Legacy"}
                </div>
              </div>
            </div>

          </div>

          {/* Centered Scroll Indicator */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-16 sm:w-24 h-[1px] bg-slate-600/70" />
            
            {/* Mouse Icon matching reference image */}
            <div className="flex items-center gap-2.5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer group">
              <div className="w-4 h-6 rounded-full border border-slate-400/80 flex items-start justify-center p-1">
                <div className="w-0.5 h-1.5 rounded-full bg-[#d8ae57] animate-scroll-wheel" />
              </div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-medium text-slate-400 group-hover:text-slate-300">
                {isRtl ? 'مرر للاستكشاف' : 'SCROLL TO EXPLORE'}
              </span>
            </div>

            <div className="w-16 sm:w-24 h-[1px] bg-slate-600/70" />
          </div>

        </div>
      </footer>

      {/* ============================================================ */}
      {/* MODALS: PROPOSAL, DIVISIONS & OPPORTUNITIES                   */}
      {/* ============================================================ */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0c1424] border border-[#d8ae57]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowProposalModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {proposalSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif-luxury font-bold text-white mb-2">
                  {isRtl ? 'تم استلام طلبك بنجاح' : 'Proposal Request Received'}
                </h3>
                <p className="text-sm text-slate-300">
                  {isRtl
                    ? 'سيتواصل معك فريق الاستثمار في مكتب الرياض قريباً.'
                    : 'Our senior investment desk in Riyadh will reach out within 24 hours.'}
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#d8ae57] font-semibold">
                  {isRtl ? 'شراكات استثمارية' : 'EXCLUSIVE DESK'}
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-white mt-1 mb-4">
                  {isRtl ? 'طلب مقترح استثماري' : 'Request Investment Proposal'}
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2 text-xs bg-black/40 border border-white/15 rounded-lg text-white focus:outline-none focus:border-[#d8ae57]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 text-xs bg-black/40 border border-white/15 rounded-lg text-white focus:outline-none focus:border-[#d8ae57]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full px-3.5 py-2 text-xs bg-black/40 border border-white/15 rounded-lg text-white focus:outline-none focus:border-[#d8ae57]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-btn text-[#15120b] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {showDivisionsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0c1424] border border-[#d8ae57]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowDivisionsModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-serif-luxury font-bold text-white mb-4">
              CNI Divisions
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="font-bold text-[#d8ae57]">01. Capital & Equity Ventures</div>
                <div className="text-slate-400 mt-0.5">Sharia-compliant investment syndicates in KSA high-growth sectors.</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="font-bold text-[#d8ae57]">02. Market Entry & Licensing</div>
                <div className="text-slate-400 mt-0.5">MISA licensing, commercial registration and Saudi HQ setup.</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <div className="font-bold text-[#d8ae57]">03. Cross-Border Trade & Logistics</div>
                <div className="text-slate-400 mt-0.5">Industrial supply chain and bilateral commercial corridors.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showOpportunitiesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0c1424] border border-[#d8ae57]/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setShowOpportunitiesModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-serif-luxury font-bold text-white mb-4">
              Vision 2030 Opportunities
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3 bg-white/5 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">Riyadh Commercial Expansion</div>
                  <div className="text-slate-400 mt-0.5">Prime real estate & regional HQ allocations</div>
                </div>
                <div className="text-sm font-bold text-[#d8ae57]">18–22% ROI</div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">Clean Tech & Solar Infrastructure</div>
                  <div className="text-slate-400 mt-0.5">National renewable energy supplier network</div>
                </div>
                <div className="text-sm font-bold text-[#d8ae57]">16–20% ROI</div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
