'use client';

import { skills } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

function SkillBar({ name, level, delay }) {
  const [ref, isVisible] = useInView();

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-midnight-200">{name}</span>
        <span className="font-mono text-xs text-midnight-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-midnight-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sand-600 to-sand-400 transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items, delay = 0 }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`glass-card p-6 space-y-4 hover-lift transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-sand-500">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 text-xs font-medium text-midnight-200 bg-midnight-800/80 border border-midnight-700/50 rounded-lg hover:border-sand-500/30 hover:text-sand-300 transition-all duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading label="04 / Skills" title="Tech Arsenal" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Language proficiency bars */}
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8 space-y-6">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-sand-500">
                Programming Languages
              </h3>
              <div className="space-y-5">
                {skills.languages.map((lang, i) => (
                  <SkillBar
                    key={lang.name}
                    name={lang.name}
                    level={lang.level}
                    delay={i * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Categorized skills */}
          <div className="space-y-6">
            <SkillCategory
              title="Frameworks & Libraries"
              items={skills.frameworks}
              delay={100}
            />
            <div className="grid grid-cols-2 gap-6">
              <SkillCategory
                title="Databases"
                items={skills.databases}
                delay={200}
              />
              <SkillCategory
                title="IDEs"
                items={skills.ides}
                delay={250}
              />
            </div>
            <SkillCategory
              title="Tools & Platforms"
              items={skills.tools}
              delay={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
