import type { Metadata } from 'next';
import Script from 'next/script';
import { profile } from '@/data/profile';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const title = `${profile.name} | ${profile.title} Portfolio`;
  const description =
    'Design marketer personal branding page focused on portfolio, content strategy, and collaboration conversion.';

  return {
    metadataBase: new URL(profile.siteUrl),
    title,
    description,
    keywords: profile.keywords,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: profile.siteUrl,
      images: [
        {
          url: profile.ogImage,
          width: 1200,
          height: 630,
          alt: `${profile.name} personal branding portfolio`
        }
      ]
    },
    alternates: {
      canonical: '/'
    }
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: profile.siteUrl,
    description: profile.shortDescription,
    knowsAbout: profile.keywords
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: profile.name
    }
  };

  return (
    <html lang="ko">
      <body>
        {children}
        <Script id="person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Script
          id="profilepage-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      </body>
    </html>
  );
}
