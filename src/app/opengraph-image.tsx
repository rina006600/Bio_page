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
          background: 'linear-gradient(135deg, #F7F3EE 0%, #EFE7DD 55%, #E7D9C8 100%)',
          color: '#1A1A1A',
          padding: '72px'
        }}
      >
        <div style={{ fontSize: 34, color: '#6B625A' }}>{profile.title}</div>
        <div style={{ marginTop: 20, fontSize: 72, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ marginTop: 24, fontSize: 32, maxWidth: 980, lineHeight: 1.3 }}>{profile.positioning}</div>
      </div>
    ),
    {
      ...size
    }
  );
}
