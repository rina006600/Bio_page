'use client';

import { useEffect, useState } from 'react';
import { contactConfig } from '@/data/contact';
import { experiences } from '@/data/experience';
import { quickLinks } from '@/data/links';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { strengths } from '@/data/strengths';
import { ContactModal } from '@/components/ContactModal';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16">
        <section
          className="rounded-[28px] bg-white px-6 py-12 shadow-soft md:px-12 md:py-16"
          aria-labelledby="hero-title"
          data-reveal
        >
          <p className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {profile.title}
          </p>
          <h1 id="hero-title" className="mt-6 text-5xl font-bold leading-[1.05] text-text md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug text-text md:text-[2rem]">{profile.positioning}</p>
          <p className="mt-5 max-w-3xl text-lg text-muted">{profile.shortDescription}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#7B5031]"
            >
              {profile.heroCtaLabel}
            </button>
            <a
              href={`mailto:${contactConfig.email}`}
              className="rounded-2xl border border-accent-light bg-bg px-6 py-3 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent"
            >
              Email {contactConfig.email}
            </a>
            <span className="text-sm text-muted">{profile.heroCtaSubLabel}</span>
          </div>
        </section>

        <section className="mt-16 space-y-6" aria-labelledby="quick-links" data-reveal>
          <h2 id="quick-links" className="text-3xl font-semibold text-text md:text-4xl">
            Brand Channels
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <li key={link.platform}>
                <a
                  className="block rounded-2xl border border-[#E8DED3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-soft"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="font-semibold text-text">{link.platform}</p>
                  <p className="mt-1 text-sm text-muted">{link.handle}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 rounded-[28px] bg-bg-secondary px-6 py-12 md:px-12" aria-labelledby="about" data-reveal>
          <h2 id="about" className="text-3xl font-semibold text-text md:text-4xl">
            About
          </h2>
          <p className="mt-5 max-w-4xl text-lg text-muted">
            저는 브랜드를 보기 좋게 만드는 데서 멈추지 않습니다. 고객이 왜 공감하고, 왜 기억하고, 왜 행동하는지를 설계합니다.
            채널별 콘텐츠 전략과 시각 언어를 통합해 브랜드를 더 또렷하게 정의하고, 실제 성과까지 이어지는 마케팅 경험을 만듭니다.
          </p>
        </section>

        <section className="mt-16 space-y-6" aria-labelledby="strengths" data-reveal>
          <h2 id="strengths" className="text-3xl font-semibold text-text md:text-4xl">
            Signature Strengths
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E8DED3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-2xl font-semibold text-text">{item.title}</h3>
                <p className="mt-3 text-base font-medium text-text">{item.outcome}</p>
                <p className="mt-2 text-sm text-muted">{item.proof}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[28px] bg-white px-6 py-12 md:px-12" aria-labelledby="works" data-reveal>
          <h2 id="works" className="text-3xl font-semibold text-text md:text-4xl">
            Selected Works
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[#E8DED3] bg-bg p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-soft"
              >
                <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
                <p className="mt-3 text-muted">{project.summary}</p>
                <p className="mt-4 text-sm text-muted">Role: {project.role}</p>
                <p className="mt-1 text-sm font-semibold text-accent">Impact: {project.impact}</p>
                {project.link ? (
                  <a className="mt-4 inline-block text-sm font-semibold text-text underline underline-offset-4" href={project.link} target="_blank" rel="noreferrer">
                    케이스 보기
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="experience" data-reveal>
          <h2 id="experience" className="text-3xl font-semibold text-text md:text-4xl">
            Experience
          </h2>
          <ol className="mt-6 space-y-6 border-l border-accent-light pl-6">
            {experiences.map((item) => (
              <li key={`${item.organization}-${item.period}`} className="relative">
                <span className="absolute -left-[1.85rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-wider text-muted">{item.period}</p>
                <p className="mt-1 text-xl font-semibold text-text">{item.organization}</p>
                <p className="text-sm text-muted">{item.role}</p>
                <p className="mt-1 text-sm text-text">{item.highlight}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-20 rounded-[28px] bg-bg-secondary p-8 md:p-12" aria-labelledby="contact" data-reveal>
          <h2 id="contact" className="text-3xl font-semibold text-text md:text-4xl">
            {contactConfig.sectionTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{contactConfig.sectionDescription}</p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-8 rounded-2xl bg-accent px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#7B5031]"
          >
            {contactConfig.ctaLabel}
          </button>
        </section>
      </main>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} config={contactConfig} />
    </>
  );
}
