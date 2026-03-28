'use client';

import { FormEvent, useMemo, useState } from 'react';
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

  const defaultInquiry = useMemo(() => config.inquiryTypes[0] ?? '', [config.inquiryTypes]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(config.successMessage);
    setForm(initialForm);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-ink">{config.ctaLabel}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
          >
            닫기
          </button>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="이름"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="이메일"
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
          <select
            required
            value={form.inquiryType || defaultInquiry}
            onChange={(event) => setForm((prev) => ({ ...prev, inquiryType: event.target.value }))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
          <button type="submit" className="w-full rounded-lg bg-ink px-4 py-2 font-medium text-white hover:bg-slate-800">
            보내기
          </button>
        </form>
        {feedback ? <p className="mt-4 rounded-lg bg-emerald-50 p-2 text-sm text-emerald-700">{feedback}</p> : null}
      </div>
    </div>
  );
}
