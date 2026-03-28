'use client';

import { useState } from 'react';
import { contactConfig } from '@/data/contact';
import { experiences } from '@/data/experience';
import { quickLinks } from '@/data/links';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { strengths } from '@/data/strengths';
import { ContactModal } from '@/components/ContactModal';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <main className="mx-auto max-w-5xl space-y-20 px-4 py-12 md:px-8">
        <section className="space-y-6" aria-labelledby="hero-title">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            {profile.title}
          </p>
          <h1 id="hero-title" className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            {profile.name}
          </h1>
          <p className="max-w-3xl text-xl text-slate-800">{profile.positioning}</p>
          <p className="max-w-3xl text-slate-600">{profile.shortDescription}</p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              {contactConfig.ctaLabel}
            </button>
            <span className="text-sm text-slate-500">{profile.heroCtaSubLabel}</span>
          </div>
        </section>

        <section aria-labelledby="quick-links" className="space-y-5">
          <h2 id="quick-links" className="text-2xl font-semibold text-ink">
            Quick Links
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <li key={link.platform}>
                <a
                  className="block rounded-xl border border-slate-200 p-4 transition hover:border-accent hover:shadow-sm"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="font-semibold text-ink">{link.platform}</p>
                  <p className="text-sm text-slate-500">{link.handle}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="about" className="space-y-4">
          <h2 id="about" className="text-2xl font-semibold text-ink">
            About
          </h2>
          <p className="text-slate-700">
            저는 디자인을 단순한 시각 요소가 아니라, 브랜드의 신뢰를 구축하는 성장 인터페이스로 바라봅니다. 채널별 콘텐츠
            전략과 사용자 행동 데이터를 결합해 브랜드의 목소리를 더 선명하게 만들고, 실질적인 전환을 설계합니다.
          </p>
        </section>

        <section aria-labelledby="strengths" className="space-y-5">
          <h2 id="strengths" className="text-2xl font-semibold text-ink">
            Strengths
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-slate-800">{item.outcome}</p>
                <p className="mt-1 text-sm text-slate-500">{item.proof}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="works" className="space-y-5">
          <h2 id="works" className="text-2xl font-semibold text-ink">
            Selected Works
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 text-slate-700">{project.summary}</p>
                <p className="mt-2 text-sm text-slate-500">Role: {project.role}</p>
                <p className="text-sm font-medium text-sky-700">Impact: {project.impact}</p>
                {project.link ? (
                  <a className="mt-3 inline-block text-sm font-medium text-ink underline" href={project.link} target="_blank" rel="noreferrer">
                    케이스 보기
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience" className="space-y-5">
          <h2 id="experience" className="text-2xl font-semibold text-ink">
            Experience
          </h2>
          <ol className="space-y-4 border-l border-slate-300 pl-5">
            {experiences.map((item) => (
              <li key={`${item.organization}-${item.period}`} className="relative">
                <span className="absolute -left-[1.7rem] top-1 h-3 w-3 rounded-full bg-accent" />
                <p className="text-sm font-semibold text-slate-500">{item.period}</p>
                <p className="font-semibold text-ink">{item.organization}</p>
                <p className="text-sm text-slate-600">{item.role}</p>
                <p className="text-sm text-slate-700">{item.highlight}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="contact" className="rounded-2xl bg-slate-100 p-8">
          <h2 id="contact" className="text-2xl font-semibold text-ink">
            {contactConfig.sectionTitle}
          </h2>
          <p className="mt-2 text-slate-700">{contactConfig.sectionDescription}</p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-6 rounded-lg bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            {contactConfig.ctaLabel}
          </button>
        </section>
      </main>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} config={contactConfig} />
    </>
  );
}
