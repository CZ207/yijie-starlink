import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AuthShell from '../components/AuthShell';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('密码至少需要 6 位。');
      return;
    }

    if (password !== confirmPassword) {
      setError('两次输入的密码不一致。');
      return;
    }

    setLoading(true);

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });

    if (signUpError) {
      setError(signUpError.message.includes('already registered') ? '这个邮箱已经注册过了，请直接登录。' : '注册失败，请稍后再试。');
      setLoading(false);
      return;
    }

    setSuccess('注册成功！请前往邮箱点击验证链接，验证后再回来登录。');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setLoading(false);
  };

  return (
    <AuthShell
      title="创建账号"
      subtitle="只需要邮箱和密码即可开通你的译界星链账号。注册后请记得去邮箱完成验证。"
      footerPrompt="已经有账号了？"
      footerLinkLabel="去登录"
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

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-stone-700">设置密码</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
            placeholder="至少 6 位"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-stone-700">确认密码</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
            placeholder="再次输入密码"
            required
          />
        </label>

        <div className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-600">
          注册后系统会向你的邮箱发送验证邮件。验证完成前，账号无法正常登录。
        </div>

        {error ? <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div> : null}
        {success ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {success}
            <Link to="/login" className="ml-2 font-semibold underline underline-offset-2">
              去登录
            </Link>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-900 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? '注册中...' : '创建账号'}
        </button>
      </form>
    </AuthShell>
  );
};

export default Register;
