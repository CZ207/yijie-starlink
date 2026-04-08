import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import AuthShell from '../components/AuthShell';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (resetError) {
      setError('发送重置邮件失败，请稍后再试。');
      setLoading(false);
      return;
    }

    setSuccess('重置邮件已发送，请前往邮箱查看。');
    setLoading(false);
  };

  return (
    <AuthShell
      title="找回密码"
      subtitle="输入你的注册邮箱，我们会给你发送一封重置密码邮件。"
      footerPrompt="想起密码了？"
      footerLinkLabel="返回登录"
      footerLinkTo="/login"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-stone-700">邮箱</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
            placeholder="you@example.com"
            required
          />
        </label>

        {error ? <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
        {success ? <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</div> : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? '发送中...' : '发送重置邮件'}
        </button>
      </form>
    </AuthShell>
  );
};

export default ForgotPassword;
