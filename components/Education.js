'use client';

import { education } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="05 / Education" title="Academic Background" />

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={`glass-card p-6 md:p-8 hover-lift group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                {/* Icon & Status */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-midnight-800 border border-midnight-700/50 flex items-center justify-center group-hover:border-sand-500/30 transition-colors">
                    <svg
                      className="w-5 h-5 text-sand-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </div>
                  {edu.current && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-sand-400 bg-sand-500/10 border border-sand-500/20 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>

                {/* Degree */}
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-midnight-50 group-hover:text-sand-300 transition-colors">
                    {edu.degree}
                  </h3>
                  {edu.type && (
                    <span className="text-sm text-sand-500">{edu.type}</span>
                  )}
                </div>

                {/* Institution */}
                <div className="space-y-1">
                  <p className="text-sm text-midnight-300 font-medium">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-xs text-midnight-500">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {edu.location}
                  </div>
                </div>

                {/* Period */}
                <div className="pt-2 border-t border-midnight-800/80">
                  <span className="font-mono text-xs text-midnight-500">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
