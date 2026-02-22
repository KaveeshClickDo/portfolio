import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Kaveesh Senevirathne — Software Engineer Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0d1017 0%, #151b28 50%, #0d1017 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #c88a3a, #e6b15e, #c88a3a)',
            display: 'flex',
          }}
        />

        {/* Status badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#34d399',
              display: 'flex',
            }}
          />
          <span style={{ color: '#c88a3a', fontSize: '18px', letterSpacing: '0.1em' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f5ead6',
            margin: '0 0 16px 0',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          Kaveesh Senevirathne
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: '28px',
            color: '#8b8fa3',
            margin: '0 0 40px 0',
            letterSpacing: '0.05em',
            display: 'flex',
          }}
        >
          Software Engineer | Full Stack Developer | Cloud & AI Enthusiast
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { value: '4+', label: 'Years Experience' },
            { value: '13+', label: 'Projects' },
            { value: '1M+', label: 'Users Served' },
            { value: '25+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '36px', fontWeight: 700, color: '#c88a3a', display: 'flex' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '14px', color: '#6b7080', display: 'flex' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '18px', color: '#4b5060', letterSpacing: '0.05em' }}>
            kaveesh.cv
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
