'use client';

import { personalInfo } from '@/lib/data';
import { useInView } from '@/lib/useInView';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [ref, isVisible] = useInView();

  return (
    <section id="contact" className="relative py-24 md:py-32 section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-900/30 to-midnight-950" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading label="06 / Contact" title="Let's Connect" align="center" />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Main CTA */}
          <div
            className={`text-center space-y-6 mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-midnight-300 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of something great. Feel free to reach out!
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-midnight-950 bg-sand-500 hover:bg-sand-400 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-sand-500/25 group"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Send Me an Email
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
          </div>

          {/* Contact Cards */}
          <div
            className={`grid sm:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card p-5 text-center hover-lift group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-midnight-800 border border-midnight-700/50 flex items-center justify-center group-hover:border-sand-500/30 transition-colors">
                <svg className="w-4 h-4 text-sand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-xs text-midnight-500 mb-1">Email</p>
              <p className="text-sm text-midnight-200 group-hover:text-sand-300 transition-colors break-all">
                {personalInfo.email}
              </p>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
              className="glass-card p-5 text-center hover-lift group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-midnight-800 border border-midnight-700/50 flex items-center justify-center group-hover:border-sand-500/30 transition-colors">
                <svg className="w-4 h-4 text-sand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-xs text-midnight-500 mb-1">Phone</p>
              <p className="text-sm text-midnight-200 group-hover:text-sand-300 transition-colors">
                {personalInfo.phone}
              </p>
            </a>

            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 text-center hover-lift group"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-midnight-800 border border-midnight-700/50 flex items-center justify-center group-hover:border-sand-500/30 transition-colors">
                <svg className="w-4 h-4 text-sand-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <p className="text-xs text-midnight-500 mb-1">LinkedIn</p>
              <p className="text-sm text-midnight-200 group-hover:text-sand-300 transition-colors">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
