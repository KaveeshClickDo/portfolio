'use client';

import { experience } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

function ExperienceCard({ item, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-sand-500/30 to-transparent hidden lg:block" />

      <div className="glass-card p-6 md:p-8 hover-lift group">
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          {/* Timeline dot */}
          <div className="hidden lg:flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-midnight-900 border border-sand-500/20 group-hover:border-sand-500/50 transition-colors">
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                item.current
                  ? 'bg-emerald-400 shadow-lg shadow-emerald-400/30'
                  : 'bg-sand-500/50'
              }`}
            />
          </div>

          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-midnight-50 group-hover:text-sand-300 transition-colors">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-sand-500 font-medium">{item.company}</span>
                  <span className="text-midnight-700">·</span>
                  <span className="text-midnight-400 text-sm">{item.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {item.current && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Current
                  </span>
                )}
                <span className="font-mono text-xs text-midnight-500">{item.period}</span>
              </div>
            </div>

            {/* Description */}
            <ul className="space-y-2">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-midnight-300">
                  <span className="mt-2 w-1 h-1 rounded-full bg-sand-500/50 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono text-midnight-300 bg-midnight-800/80 rounded-md border border-midnight-700/50"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 section-padding">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading label="02 / Experience" title="Where I've Worked" />
        <div className="space-y-6 lg:pl-0">
          {experience.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
