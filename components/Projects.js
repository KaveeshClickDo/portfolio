'use client';

import { projects } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

const categoryColors = {
  Enterprise: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Media: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  Streaming: 'text-red-400 bg-red-400/10 border-red-400/20',
  Application: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'AI/ML': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'E-Commerce': 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  Mobile: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  Freelance: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
};

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`glass-card overflow-hidden hover-lift group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-sand-500/50 to-transparent" />

      <div className="p-6 md:p-8 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span
              className={`inline-block px-2.5 py-1 text-xs font-medium border rounded-full ${
                categoryColors[project.category] || 'text-sand-400 bg-sand-400/10 border-sand-400/20'
              }`}
            >
              {project.category}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-midnight-50 group-hover:text-sand-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-sand-500 font-medium">{project.client}</p>
          </div>

          {/* Project icon */}
          <div className="shrink-0 w-12 h-12 rounded-xl bg-midnight-800 border border-midnight-700/50 flex items-center justify-center group-hover:border-sand-500/30 transition-colors">
            <svg
              className="w-5 h-5 text-midnight-400 group-hover:text-sand-400 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-midnight-300 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-midnight-400">
              <svg className="w-3.5 h-3.5 text-sand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {h}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-midnight-800/80" />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono text-midnight-300 bg-midnight-800/80 rounded-md border border-midnight-700/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading label="03 / Projects" title="Selected Work" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/KHSenevirathne"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-midnight-400 hover:text-sand-400 transition-colors group"
          >
            <span>View more projects on GitHub</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
