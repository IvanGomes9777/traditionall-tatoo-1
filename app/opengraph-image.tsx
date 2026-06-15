import { ImageResponse } from 'next/og';

export const alt = 'Anker & Dolch Tattoo — Traditional Tattoos, Münster';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1B2A4A',
          color: '#F4ECD8',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 28,
            border: '3px solid #C9A86A',
          }}
        />
        <div style={{ fontSize: 30, color: '#C9A86A', letterSpacing: 6 }}>
          ⚓ EST. 2012 · HAFEN MÜNSTER
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            textTransform: 'uppercase',
            lineHeight: 1,
            marginTop: 18,
            textAlign: 'center',
          }}
        >
          Anker &amp; Dolch
        </div>
        <div
          style={{
            marginTop: 24,
            backgroundColor: '#C1272D',
            color: '#F4ECD8',
            fontSize: 38,
            padding: '10px 34px',
          }}
        >
          Traditional Tattoos — Done Right
        </div>
      </div>
    ),
    { ...size },
  );
}
