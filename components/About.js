'use client';

import { personalInfo } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="01 / About" title="Who I Am" />

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Main Bio */}
          <div
            className={`lg:col-span-3 space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg md:text-xl leading-relaxed text-midnight-200">
              {personalInfo.bio}
            </p>
            <p className="text-base leading-relaxed text-midnight-400">
              My journey spans from freelance web design, through a software engineering role at Capital
              Maharaja Group where I worked on Sri Lanka&apos;s leading news platforms and live-streaming
              services, to my current roles building cloud microservices at SeekaHost™ and SEO-optimized
              Next.js applications at ClickDo. I thrive at the intersection of performance engineering
              and user experience.
            </p>
            <p className="text-base leading-relaxed text-midnight-400">
              When I&apos;m not coding, I&apos;m exploring cloud computing, DevOps practices,
              and mobile development — always expanding my toolkit to deliver better solutions.
            </p>
          </div>

          {/* Quick Facts */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="glass-card p-6 space-y-5">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-sand-500">
                Quick Facts
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Based in', value: 'Galle, Sri Lanka' },
                  { label: 'Working at', value: 'SeekaHost™ & ClickDo (UK)' },
                  { label: 'Education', value: 'London Metropolitan Uni.' },
                  { label: 'Languages', value: 'Sinhala, English' },
                  { label: 'Specialty', value: 'Fullstack Development' },
                ].map((fact, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-sm text-midnight-500 shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-sm text-midnight-200 text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-6 space-y-4">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-sand-500">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full Stack',
                  'AI & ML',
                  'Cloud',
                  'DevOps',
                  'Mobile Dev',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-medium text-sand-300 border border-sand-500/20 rounded-full bg-sand-500/5"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
