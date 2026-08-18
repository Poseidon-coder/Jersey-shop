import React, { useState, useEffect } from 'react';

// Nation Data Configuration
const NATIONS_DATA = {
  FR: {
    code: 'FR',
    name: 'FRANCE',
    edition: 'FRANCE EDITION',
    player: 'MBAPPÉ',
    number: '10',
    jerseyCaption: 'FR FRANCE #10 – MBAPPÉ',
    btnText: 'Shop France',
    primaryColor: '#ff2e4d',
    jerseyBg: '#1230a2',
    jerseyBorder: '#1d4ed8',
    glowColor: 'rgba(29, 78, 216, 0.45)',
    textColor: '#ff2e4d',
  },
  EN: {
    code: 'EN',
    name: 'ENGLAND',
    edition: 'ENGLAND EDITION',
    player: 'KANE',
    number: '9',
    jerseyCaption: 'EN ENGLAND #9 – KANE',
    btnText: 'Shop England',
    primaryColor: '#ff2e4d',
    jerseyBg: '#132148',
    jerseyBorder: '#1e3a8a',
    glowColor: 'rgba(30, 58, 138, 0.5)',
    textColor: '#ff2e4d',
  },
  DE: {
    code: 'DE',
    name: 'GERMANY',
    edition: 'GERMANY EDITION',
    player: 'MUSIALA',
    number: '10',
    jerseyCaption: 'DE GERMANY #10 – MUSIALA',
    btnText: 'Shop Germany',
    primaryColor: '#eab308',
    jerseyBg: '#111315',
    jerseyBorder: '#374151',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    textColor: '#eab308',
  },
  BR: {
    code: 'BR',
    name: 'BRAZIL',
    edition: 'BRAZIL EDITION',
    player: 'NEYMAR',
    number: '10',
    jerseyCaption: 'BR BRAZIL #10 – NEYMAR',
    btnText: 'Shop Brazil',
    primaryColor: '#009c3b',
    jerseyBg: '#fbc02d',
    jerseyBorder: '#f57f17',
    glowColor: 'rgba(251, 192, 45, 0.45)',
    textColor: '#009c3b',
  },
  AR: {
    code: 'AR',
    name: 'ARGENTINA',
    edition: 'ARGENTINA EDITION',
    player: 'MESSI',
    number: '10',
    jerseyCaption: 'AR ARGENTINA #10 – MESSI',
    btnText: 'Shop Argentina',
    primaryColor: '#75aadb',
    jerseyBg: '#75aadb',
    jerseyBorder: '#4682b4',
    glowColor: 'rgba(117, 170, 219, 0.45)',
    textColor: '#ffffff',
  },
  PT: {
    code: 'PT',
    name: 'PORTUGAL',
    edition: 'PORTUGAL EDITION',
    player: 'RONALDO',
    number: '7',
    jerseyCaption: 'PT PORTUGAL #7 – RONALDO',
    btnText: 'Shop Portugal',
    primaryColor: '#046a38',
    jerseyBg: '#da291c',
    jerseyBorder: '#990000',
    glowColor: 'rgba(218, 41, 28, 0.45)',
    textColor: '#046a38',
  },
  ES: {
    code: 'ES',
    name: 'SPAIN',
    edition: 'SPAIN EDITION',
    player: 'PEDRI',
    number: '8',
    jerseyCaption: 'ES SPAIN #8 – PEDRI',
    btnText: 'Shop Spain',
    primaryColor: '#f1bf00',
    jerseyBg: '#aa151b',
    jerseyBorder: '#800000',
    glowColor: 'rgba(170, 21, 27, 0.45)',
    textColor: '#f1bf00',
  },
  BE: {
    code: 'BE',
    name: 'BELGIUM',
    edition: 'BELGIUM EDITION',
    player: 'DE BRUYNE',
    number: '7',
    jerseyCaption: 'BE BELGIUM #7 – DE BRUYNE',
    btnText: 'Shop Belgium',
    primaryColor: '#fda802',
    jerseyBg: '#e30613',
    jerseyBorder: '#a00000',
    glowColor: 'rgba(227, 6, 19, 0.45)',
    textColor: '#fda802',
  },
};

export default function Herosection() {
  const [selectedCode, setSelectedCode] = useState('FR');
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 365, hours: 14, mins: 32, secs: 45 });

  const currentNation = NATIONS_DATA[selectedCode] || NATIONS_DATA.FR;

  // Trigger list slide-in entrance on initial load
  useEffect(() => {
    setMounted(true);
  }, []);

  // Real-time Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, mins: prev.mins > 0 ? prev.mins - 1 : 59, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectNation = (code) => {
    if (code === selectedCode) return;
    setIsAnimating(true);
    setSelectedCode(code);
    setTimeout(() => setIsAnimating(false), 350);
  };

  const nationList = [
    { code: 'BR', name: 'BRAZIL', player: 'NEYMAR' },
    { code: 'FR', name: 'FRANCE', player: 'MBAPPÉ' },
    { code: 'AR', name: 'ARGENTINA', player: 'MESSI' },
    { code: 'EN', name: 'ENGLAND', player: 'KANE' },
    { code: 'DE', name: 'GERMANY', player: 'MUSIALA' },
    { code: 'PT', name: 'PORTUGAL', player: 'RONALDO' },
    { code: 'ES', name: 'SPAIN', player: 'PEDRI' },
    { code: 'BE', name: 'BELGIUM', player: 'DE BRUYNE' },
  ];

  const topBarNations = [
    { name: 'GERMANY', code: 'DE' },
    { name: 'PORTUGAL', code: 'PT' },
    { name: 'SPAIN', code: 'ES' },
    { name: 'BELGIUM', code: 'BE' },
    { name: 'JAPAN', code: 'JP' },
    { name: 'MOROCCO', code: 'MA' },
    { name: 'SENEGAL', code: 'SN' },
    { name: 'NETHERLANDS', code: 'NL' },
    { name: 'CROATIA', code: 'HR' },
    { name: 'USA', code: 'US' },
  ];

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#070a14] text-white font-sans relative overflow-hidden flex flex-col justify-between selection:bg-rose-600 selection:text-white">
      {/* Keyframe Styles */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: floatSlow 5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 20s linear infinite; }
      `}</style>

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1f293d 1px, transparent 1px),
            linear-gradient(to bottom, #1f293d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Bar Nations Quick Bar */}
      <div className="w-full border-b border-slate-800/40 bg-[#070a14]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[11px] font-bold tracking-widest text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
          {topBarNations.map((item) => {
            const isActive = selectedCode === item.code;
            return (
              <button
                key={item.code}
                onClick={() => handleSelectNation(item.code)}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'text-white border-b-2 border-rose-500 bg-slate-800/40 shadow-sm'
                    : 'hover:text-white'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[9px] text-slate-500 font-normal">{item.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-7xl w-full mx-auto px-6 py-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center grow">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-2 text-[11px] font-bold tracking-[0.2em] text-slate-300 uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            <span>2026 FIFA WORLD CUP · OFFICIAL KITS</span>
          </div>

          <div className="space-y-2">
            <span
              className={`block text-xs font-bold tracking-widest text-slate-400 uppercase transition-all duration-300 transform ${
                isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {currentNation.edition}
            </span>

            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[0.88] uppercase text-white">
              WEAR <br />
              YOUR <br />
              <span className="text-[#ff2e4d] inline-block transition-transform duration-300 hover:scale-105">
                NATION.
              </span>
            </h1>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Authentic replica kits from every competing nation. 32 countries. Iconic numbers. Delivered to your door before the whistle blows.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#ff2e4d] hover:bg-rose-600 active:scale-95 text-white text-xs font-bold px-7 py-3.5 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-lg shadow-rose-900/30 group">
              <span className="transition-all duration-300 group-hover:translate-x-0.5">
                {currentNation.btnText}
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="bg-[#0f1526] hover:bg-[#161f38] active:scale-95 border border-slate-700/60 text-white text-xs font-bold px-6 py-3.5 rounded-full flex items-center space-x-1.5 transition-all group">
              <span>All Nations</span>
              <svg
                className="w-3.5 h-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-800/40 w-full">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Official Replicas</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Free Shipping $75+</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Ships in 24h</span>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0">
          <div
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[90px] pointer-events-none transition-all duration-700 animate-pulse-glow"
            style={{ backgroundColor: currentNation.glowColor }}
          />

          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-slate-700/50 absolute flex items-center justify-center pointer-events-none animate-spin-slow" />

          <div className="relative z-10 animate-float">
            <div
              className={`w-64 h-72 sm:w-72 sm:h-80 flex items-center justify-center transition-all duration-300 transform ${
                isAnimating ? 'scale-75 opacity-20 rotate-6 blur-sm' : 'scale-100 opacity-100 rotate-0 blur-0'
              }`}
            >
              <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-2xl">
                <path
                  d="M 50 35 L 75 25 Q 100 38 125 25 L 150 35 L 180 75 L 155 95 L 145 80 L 145 190 L 55 190 L 55 80 L 45 95 L 20 75 Z"
                  fill={currentNation.jerseyBg}
                  stroke={currentNation.jerseyBorder}
                  strokeWidth="2"
                  className="transition-colors duration-500"
                />
                <path d="M 20 75 L 45 95 L 38 100 L 15 80 Z" fill={currentNation.primaryColor} className="transition-colors duration-500" />
                <path d="M 180 75 L 155 95 L 162 100 L 185 80 Z" fill={currentNation.primaryColor} className="transition-colors duration-500" />
                <path
                  d="M 75 25 Q 100 40 125 25 L 120 22 Q 100 33 80 22 Z"
                  fill={currentNation.primaryColor}
                  className="transition-colors duration-500"
                />
                <text
                  x="100"
                  y="95"
                  textAnchor="middle"
                  fill={currentNation.textColor}
                  fontSize="10"
                  fontWeight="bold"
                  letterSpacing="2"
                  className="transition-all duration-300"
                >
                  {currentNation.player}
                </text>
                <text
                  x="100"
                  y="155"
                  textAnchor="middle"
                  fill={currentNation.textColor}
                  fontSize="58"
                  fontWeight="900"
                  fontFamily="sans-serif"
                  className="transition-all duration-300"
                >
                  {currentNation.number}
                </text>
              </svg>
            </div>
          </div>

          <div
            className={`mt-2 bg-[#0d1428]/90 border border-slate-700/60 rounded-full px-5 py-1.5 text-[11px] font-bold tracking-wider text-slate-200 backdrop-blur-md shadow-lg z-10 transition-all duration-300 transform ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            {currentNation.jerseyCaption}
          </div>

          <div className="mt-4 flex items-center space-x-3 z-10">
            <span className="text-2xl font-black text-white">$89.99</span>
            <span className="text-sm font-semibold text-slate-500 line-through">$115.00</span>
            <span className="bg-rose-500/20 text-rose-500 border border-rose-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce">
              -22%
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col space-y-8 items-end">
          
          {/* Countdown Timer */}
          <div className="w-full max-w-xs flex flex-col items-center lg:items-end">
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mb-3 uppercase">
              WORLD CUP KICKS OFF IN
            </span>
            <div className="grid grid-cols-4 gap-2 text-center w-full">
              {[
                { label: 'DAYS', val: formatNumber(timeLeft.days) },
                { label: 'HOURS', val: formatNumber(timeLeft.hours) },
                { label: 'MINS', val: formatNumber(timeLeft.mins) },
                { label: 'SECS', val: formatNumber(timeLeft.secs) },
              ].map((time, idx) => (
                <div key={idx} className="bg-[#0b1021] border border-slate-800/80 rounded-xl p-2.5 shadow-inner hover:border-slate-700 transition-colors">
                  <div className="text-xl font-black text-white transition-all">{time.val}</div>
                  <div className="text-[8px] font-bold tracking-widest text-slate-500 mt-0.5">{time.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ANIMATED NATION LIST BUTTONS */}
          <div className="w-full max-w-xs">
            <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-400 mb-3 text-center lg:text-right uppercase">
              CHOOSE YOUR NATION
            </span>
            <div className="grid grid-cols-2 gap-2">
              {nationList.map((item, index) => {
                const isSelected = selectedCode === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => handleSelectNation(item.code)}
                    style={{
                      transitionDelay: `${index * 40}ms`,
                    }}
                    className={`relative flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-300 transform active:scale-95 border ${
                      mounted
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-4 opacity-0 scale-95'
                    } ${
                      isSelected
                        ? 'bg-[#151c33] border-rose-500/80 text-white shadow-lg shadow-rose-950/20 ring-2 ring-rose-500/40 translate-x-1'
                        : 'bg-[#0a0f1d]/60 border-slate-800/60 text-slate-400 hover:border-slate-600 hover:text-slate-100 hover:bg-[#0f172a] hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Active Pulsing Indicator Dot */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                      </span>
                    )}

                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-xs font-black transition-colors duration-300 ${
                          isSelected ? 'text-rose-400' : 'text-slate-400'
                        }`}
                      >
                        {item.code}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold leading-none">{item.name}</span>
                        <span className="text-[8px] font-medium text-slate-500 leading-tight">
                          {item.player}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="w-full max-w-xs flex items-center justify-between pt-2 border-t border-slate-800/40">
            <div className="text-center lg:text-right group cursor-pointer">
              <div className="text-xl font-black text-[#ff2e4d] transition-transform duration-300 group-hover:scale-110">32</div>
              <div className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">NATIONS</div>
            </div>
            <div className="text-center lg:text-right group cursor-pointer">
              <div className="text-xl font-black text-[#ff2e4d] transition-transform duration-300 group-hover:scale-110">120+</div>
              <div className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">JERSEYS</div>
            </div>
            <div className="text-center lg:text-right group cursor-pointer">
              <div className="text-xl font-black text-[#ff2e4d] transition-transform duration-300 group-hover:scale-110">50K+</div>
              <div className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">FANS</div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}