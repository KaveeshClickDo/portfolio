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

const skillDistribution = [
  { label: 'Frontend', percent: 30, color: '#60a5fa' },
  { label: 'Backend', percent: 30, color: '#c88a3a' },
  { label: 'AI & ML', percent: 15, color: '#f59e0b' },
  { label: 'DevOps & Cloud', percent: 15, color: '#34d399' },
  { label: 'Mobile', percent: 10, color: '#f472b6' },
];

function DonutChart() {
  const [ref, isVisible] = useInView();
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  return (
    <div
      ref={ref}
      className={`glass-card p-6 md:p-8 space-y-6 hover-lift transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '200ms' }}
    >
      <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-sand-500">
        Skill Distribution
      </h3>
      <div className="flex items-center gap-8">
        {/* Donut SVG */}
        <div className="relative shrink-0">
          <svg width="160" height="160" viewBox="0 0 180 180" className="-rotate-90">
            {skillDistribution.map((segment) => {
              const dashLength = (segment.percent / 100) * circumference;
              const dashGap = circumference - dashLength;
              const offset = (cumulativeOffset / 100) * circumference;
              cumulativeOffset += segment.percent;

              return (
                <circle
                  key={segment.label}
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="18"
                  strokeDasharray={isVisible ? `${dashLength} ${dashGap}` : `0 ${circumference}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                  style={{ transitionDelay: '400ms' }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-midnight-50">25+</div>
              <div className="text-[10px] text-midnight-500 uppercase tracking-wider">Skills</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 flex-1">
          {skillDistribution.map((segment) => (
            <div key={segment.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-sm text-midnight-300">{segment.label}</span>
              </div>
              <span className="font-mono text-xs text-midnight-500">{segment.percent}%</span>
            </div>
          ))}
        </div>
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
          {/* Left: Language proficiency bars + Donut chart */}
          <div className="space-y-6">
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
            <DonutChart />
          </div>

          {/* Right: Categorized skills */}
          <div className="space-y-6">
            <SkillCategory
              title="Frameworks & Libraries"
              items={skills.frameworks}
              delay={100}
            />
            <SkillCategory
              title="AI & Machine Learning"
              items={skills.ai}
              delay={125}
            />
            <SkillCategory
              title="DevOps & Cloud"
              items={skills.devops}
              delay={175}
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
