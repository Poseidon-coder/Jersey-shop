import React from 'react'
import { use } from 'react'
import { useNavigate } from 'react-router-dom'

function Herosection() {

  const navigate = useNavigate();
  return (
    
    <section className="relative w-full min-h-[60vh] flex items-center justify-center bg-slate-950 px-4 sm:px-6 lg:px-8 py-7 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-90 h-90 bg-fuchsia-500/15 blur-[110px] rounded-full pointer-events-none z-0" />

      {/* Main Container Card constrained for 60vh */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-5 sm:p-7 lg:p-9 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-11 items-center">
          
          {/* Column 1: Content */}
          <div className="flex flex-col space-y-3.5 sm:space-y-4 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-semibold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500" />
              </span>
              Next Gen Platform
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-white tracking-tight leading-tight">
              Unleash the{' '}
              <span className="bg-linear-to-r from-fuchsia-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Power of Next-Gen
              </span>{' '}
              Tools.
            </h1>

            {/* Paragraph */}
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
              Accelerate your workflow with modern components built for peak performance, extreme flexibility, and seamless developer experience.
            </p>

            {/* CTA Group */}
            <div className="flex flex-row items-center gap-3 pt-1">
              <a 
                onClick={()=>navigate("/shop")}
                href="#get-started"
                className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-lg bg-linear-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center px-5.5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>

            {/* Metrics */}
            <div className="pt-3.5 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">99.9%</p>
                <p className="text-xs text-slate-400 font-medium">Uptime SLA</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">10x</p>
                <p className="text-xs text-slate-400 font-medium">Faster Deployments</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white">50k+</p>
                <p className="text-xs text-slate-400 font-medium">Active Developers</p>
              </div>
            </div>

          </div>

          {/* Column 2: Visual Media */}
          <div className="relative group/image flex justify-center items-center">
            {/* Gray ambient glow border */}
            <div className="absolute -inset-0.5 bg-linear-to-tr from-slate-600 via-slate-500 to-slate-400 rounded-2xl blur-md opacity-40 group-hover/image:opacity-75 transition duration-500" />

            {/* Main image container with gray box-shadow */}
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 shadow-2xl shadow-slate-900/80">
              <img
                src="https://i.pinimg.com/1200x/59/61/38/596138beb239ada8aab67dbb4e288be7.jpg"
                alt="Modern Tech Illustration"
                className="w-full h-52 sm:h-64 lg:h-80 object-cover object-center transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Herosection