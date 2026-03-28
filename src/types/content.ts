export type Profile = {
  name: string;
  title: string;
  positioning: string;
  shortDescription: string;
  location: string;
  heroCtaLabel: string;
  heroCtaSubLabel: string;
  keywords: string[];
  siteUrl: string;
  ogImage: string;
};

export type QuickLink = {
  platform: string;
  url: string;
  handle: string;
};

export type Strength = {
  title: string;
  outcome: string;
  proof: string;
};

export type Project = {
  title: string;
  summary: string;
  role: string;
  impact: string;
  link?: string;
};

export type ExperienceItem = {
  period: string;
  organization: string;
  role: string;
  highlight: string;
};

export type ContactConfig = {
  sectionTitle: string;
  sectionDescription: string;
  ctaLabel: string;
  inquiryTypes: string[];
  successMessage: string;
  email: string;
};
