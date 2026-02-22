'use client';

import { certifications } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  const [ref, isVisible] = useInView();

  return (
    <section id="certifications" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="06 / Certifications" title="Credentials" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`glass-card p-6 md:p-8 hover-lift group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                {/* Icon */}
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
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>

                {/* Name */}
                <h3 className="font-display text-lg md:text-xl font-bold text-midnight-50 group-hover:text-sand-300 transition-colors">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-midnight-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
