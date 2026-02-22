'use client';

import { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';
import { generateCV } from '@/lib/generateCV';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-sand-500/[0.03] blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-midnight-600/[0.05] blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(245,234,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,234,214,0.3) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div className="relative max-w-7xl mx-auto section-padding w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sand-500/20 bg-sand-500/5 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-sand-300">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <div>
              <h1
                className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight transition-all duration-700 delay-100 ${
                  loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-midnight-50">Kaveesh</span>
                <br />
                <span className="text-gradient">Senevirathne</span>
              </h1>
            </div>

            {/* Title */}
            <p
              className={`font-mono text-sm md:text-base tracking-[0.15em] uppercase text-midnight-400 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Software Engineer | Full Stack Developer | Cloud &amp; AI Enthusiast
            </p>

            {/* Description */}
            <p
              className={`text-lg md:text-xl text-midnight-300 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Building scalable, AI-enhanced web applications that serve millions.
              <br className="hidden sm:block" />
              From real-time streaming platforms to intelligent cloud solutions.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-[400ms] ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-midnight-950 bg-sand-500 hover:bg-sand-400 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-sand-500/25"
              >
                View My Work
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <button
                onClick={generateCV}
                className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-semibold text-midnight-100 border border-midnight-700 hover:border-sand-500/50 rounded-xl transition-all duration-300 hover:bg-midnight-900/50"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-5 pt-4 transition-all duration-700 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-midnight-500 hover:text-sand-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-midnight-500 hover:text-sand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.links.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="text-midnight-500 hover:text-sand-400 transition-colors"
                aria-label="Stack Overflow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.72-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.65l-.905 1.94 9.702 4.517.905-1.94-9.702-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z" />
                </svg>
              </a>
              <span className="h-4 w-px bg-midnight-800" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-midnight-500 hover:text-sand-400 transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side decorative element */}
          <div
            className={`hidden lg:flex lg:col-span-5 justify-center transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-8 rounded-full border border-sand-500/10 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-16 rounded-full border border-sand-500/5 animate-[spin_45s_linear_infinite_reverse]" />
              <div className="absolute -inset-24 rounded-full border border-midnight-700/30" />

              {/* Stats Grid */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute top-0 left-0 glass-card p-5 hover-lift">
                  <div className="font-display text-3xl font-bold text-sand-400">4+</div>
                  <div className="text-sm text-midnight-400 mt-1">Years Experience</div>
                </div>
                <div className="absolute top-4 right-0 glass-card p-5 hover-lift">
                  <div className="font-display text-3xl font-bold text-sand-400">13+</div>
                  <div className="text-sm text-midnight-400 mt-1">Projects Completed</div>
                </div>
                <div className="absolute bottom-4 left-4 glass-card p-5 hover-lift">
                  <div className="font-display text-3xl font-bold text-sand-400">1M+</div>
                  <div className="text-sm text-midnight-400 mt-1">Users Served</div>
                </div>
                <div className="absolute bottom-0 right-2 glass-card p-5 hover-lift">
                  <div className="font-display text-3xl font-bold text-sand-400">25+</div>
                  <div className="text-sm text-midnight-400 mt-1">Technologies</div>
                </div>

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sand-500 to-sand-700 flex items-center justify-center shadow-xl shadow-sand-500/20 animate-glow">
                    <svg className="w-7 h-7 text-midnight-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs font-mono text-midnight-600 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-sand-500/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
