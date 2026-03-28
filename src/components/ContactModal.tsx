'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { ContactConfig } from '@/types/content';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  config: ContactConfig;
};

const initialForm = {
  name: '',
  email: '',
  inquiryType: '',
  message: ''
};

export function ContactModal({ isOpen, onClose, config }: ContactModalProps) {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const defaultInquiry = useMemo(() => config.inquiryTypes[0] ?? '', [config.inquiryTypes]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      return;
    }

    const timeout = setTimeout(() => setIsVisible(false), 220);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  if (!isOpen && !isVisible) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(config.successMessage);
    setForm(initialForm);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition duration-200 ${
        isOpen ? 'bg-black/40 opacity-100' : 'pointer-events-none bg-black/0 opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`w-full max-w-lg rounded-[24px] border border-[#E8DED3] bg-[#FDFBF8] p-6 shadow-soft transition duration-300 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-3 scale-[0.98]'
        }`}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-text">{config.ctaLabel}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#DCCBB8] px-3 py-1.5 text-sm text-muted transition hover:bg-bg-secondary"
          >
            닫기
          </button>
        </div>
        <p className="mb-5 text-sm text-muted">필수 정보만 간단히 남겨주시면 24시간 내에 답변드릴게요.</p>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="이름"
            className="w-full rounded-xl border border-[#DCCBB8] bg-white px-4 py-2.5 text-text outline-none transition focus:border-accent"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="이메일"
            className="w-full rounded-xl border border-[#DCCBB8] bg-white px-4 py-2.5 text-text outline-none transition focus:border-accent"
          />
          <select
            required
            value={form.inquiryType || defaultInquiry}
            onChange={(event) => setForm((prev) => ({ ...prev, inquiryType: event.target.value }))}
            className="w-full rounded-xl border border-[#DCCBB8] bg-white px-4 py-2.5 text-text outline-none transition focus:border-accent"
          >
            {config.inquiryTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="문의 내용을 입력해주세요"
            className="w-full rounded-xl border border-[#DCCBB8] bg-white px-4 py-2.5 text-text outline-none transition focus:border-accent"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-3 font-semibold text-white transition duration-300 hover:bg-[#7B5031]"
          >
            미팅 문의 보내기
          </button>
        </form>
        {feedback ? <p className="mt-4 rounded-xl bg-[#F1E8DE] p-3 text-sm text-[#684B32]">{feedback}</p> : null}
      </div>
    </div>
  );
}
