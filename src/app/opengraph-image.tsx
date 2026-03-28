import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const runtime = 'edge';
export const alt = `${profile.name} personal branding portfolio`;
export const size = {
  width: 1200,
  height: 630
};
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
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a, #0ea5e9)',
          color: 'white',
          padding: '72px'
        }}
      >
        <div style={{ fontSize: 34, opacity: 0.9 }}>{profile.title}</div>
        <div style={{ marginTop: 20, fontSize: 72, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ marginTop: 24, fontSize: 32, maxWidth: 980, lineHeight: 1.3 }}>{profile.positioning}</div>
      </div>
    ),
    {
      ...size
    }
  );
}
