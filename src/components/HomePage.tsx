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
      <main className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-12">
        <section
          className="rounded-[28px] bg-white px-5 py-7 shadow-soft md:px-12 md:py-12"
          aria-labelledby="hero-title"
          data-reveal
        >
          <p className="inline-block rounded-full bg-bg-secondary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted md:text-xs">
            {profile.title}
          </p>
          <h1 id="hero-title" className="mt-4 text-[2rem] font-bold leading-[1.08] text-text md:mt-6 md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl font-semibold leading-snug text-text md:mt-5 md:text-[2rem]">{profile.positioning}</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">{profile.shortDescription}</p>
          <div className="mt-6 flex flex-col gap-3 md:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#7B5031] md:w-auto"
            >
              {profile.heroCtaLabel}
            </button>
            <a
              href={`mailto:${contactConfig.email}`}
              className="w-full rounded-2xl border border-accent bg-bg px-6 py-4 text-center text-base font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent md:w-auto"
            >
              Email {contactConfig.email}
            </a>
            <span className="text-sm text-muted">{profile.heroCtaSubLabel}</span>
          </div>
        </section>

        <section className="mt-12 space-y-5" aria-labelledby="quick-links" data-reveal>
          <h2 id="quick-links" className="text-2xl font-semibold text-text md:text-4xl">
            Link Hub
          </h2>
          <ul className="grid gap-3 md:gap-4">
            {quickLinks.map((link) => (
              <li key={link.platform}>
                <a
                  className="block rounded-2xl border border-[#E8DED3] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-text">{link.platform}</p>
                    <span className="rounded-xl bg-bg-secondary px-3 py-1 text-xs font-semibold text-text">바로가기</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-text">{link.handle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{link.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-[28px] bg-bg-secondary px-5 py-8 md:px-12 md:py-12" aria-labelledby="about" data-reveal>
          <h2 id="about" className="text-2xl font-semibold text-text md:text-4xl">
            Who
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted md:mt-5 md:text-lg">
            저는 디자인 마케터로서 브랜드의 시각 언어를 사용자 행동 데이터와 연결합니다. 브랜드가 무엇을 말하는지보다,
            고객이 무엇을 이해하고 어떤 행동을 선택하는지에 집중합니다. 그래서 포지셔닝, 콘텐츠 구조, 전환 UX를 하나의 흐름으로
            설계해 “보이는 브랜드”가 아니라 “선택되는 브랜드”를 만듭니다.
          </p>
        </section>

        <section className="mt-12 space-y-5" aria-labelledby="strengths" data-reveal>
          <h2 id="strengths" className="text-2xl font-semibold text-text md:text-4xl">
            Good
          </h2>
          <div className="grid gap-4">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E8DED3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-6"
              >
                <h3 className="text-xl font-semibold text-text md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-base font-semibold leading-relaxed text-text">{item.outcome}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.proof}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[28px] bg-white px-5 py-8 md:px-12 md:py-12" aria-labelledby="works" data-reveal>
          <h2 id="works" className="text-2xl font-semibold text-text md:text-4xl">
            Done
          </h2>
          <div className="mt-5 grid gap-4 md:mt-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[#E8DED3] bg-bg p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-6"
              >
                <h3 className="text-xl font-semibold text-text md:text-2xl">{project.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted">Role: {project.role}</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-text md:text-base">
                  <p>
                    <span className="font-semibold text-accent">Problem</span>
                    <br />
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-accent">Approach</span>
                    <br />
                    {project.approach}
                  </p>
                  <p>
                    <span className="font-semibold text-accent">Result</span>
                    <br />
                    {project.result}
                  </p>
                </div>
                {project.link ? (
                  <a className="mt-4 inline-block text-sm font-semibold text-text underline underline-offset-4" href={project.link} target="_blank" rel="noreferrer">
                    케이스 보기
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="experience" data-reveal>
          <h2 id="experience" className="text-2xl font-semibold text-text md:text-4xl">
            Have Been
          </h2>
          <ol className="mt-5 space-y-5 border-l border-accent-light pl-5 md:mt-6 md:space-y-6 md:pl-6">
            {experiences.map((item) => (
              <li key={`${item.organization}-${item.period}`} className="relative rounded-2xl bg-white p-4 md:p-5">
                <span className="absolute -left-[1.45rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent md:-left-[1.83rem]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted md:text-sm">{item.period}</p>
                <p className="mt-1 text-lg font-semibold text-text md:text-xl">{item.organization}</p>
                <p className="text-sm text-muted">{item.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-text">{item.highlight}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.growth}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-[28px] bg-bg-secondary p-6 md:mt-16 md:p-12" aria-labelledby="contact" data-reveal>
          <h2 id="contact" className="text-2xl font-semibold text-text md:text-4xl">
            {contactConfig.sectionTitle}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted md:mt-4 md:text-lg">{contactConfig.sectionDescription}</p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-6 w-full rounded-2xl bg-accent px-6 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#7B5031] md:mt-8 md:w-auto"
          >
            {contactConfig.ctaLabel}
          </button>
        </section>
      </main>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} config={contactConfig} />
    </>
  );
}
