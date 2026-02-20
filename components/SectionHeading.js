'use client';

import { useInView } from '@/lib/useInView';

export default function SectionHeading({ label, title, align = 'left' }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <span
        className={`inline-block font-mono text-sm tracking-[0.3em] uppercase text-sand-500 mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-midnight-50 leading-tight transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-6 h-px w-20 bg-gradient-to-r from-sand-500 to-transparent transition-all duration-700 delay-200 ${
          align === 'center' ? 'mx-auto' : ''
        } ${isVisible ? 'opacity-100 w-20' : 'opacity-0 w-0'}`}
      />
    </div>
  );
}
