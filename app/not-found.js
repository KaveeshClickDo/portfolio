import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center space-y-6">
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <p className="text-xl text-midnight-300">
          This page doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-midnight-950 bg-sand-500 hover:bg-sand-400 rounded-xl transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
