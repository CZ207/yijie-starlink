import React from 'react';
import { Link } from 'react-router-dom';

type AuthMessageCardProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
};

const AuthMessageCard: React.FC<AuthMessageCardProps> = ({ title, description, ctaLabel, ctaTo }) => {
  return (
    <div className="min-h-screen bg-stone-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] bg-white p-8 text-center shadow-xl ring-1 ring-stone-200 sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-3xl">✉️</div>
        <h1 className="mt-6 text-3xl font-black tracking-tight text-stone-900">{title}</h1>
        <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to={ctaTo}
            className="inline-flex items-center justify-center rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
          >
            {ctaLabel}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthMessageCard;
