import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AuthShell from '../components/AuthShell';
import { useAuth } from '../auth/AuthContext';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const redirectTo = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo, user]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message.includes('Email not confirmed') ? '请先前往邮箱完成验证，再回来登录。' : '登录失败，请检查邮箱和密码。');
      setLoading(false);
      return;
    }

    setSuccess('登录成功，正在跳转...');
    setLoading(false);
    navigate(redirectTo, { replace: true });
  };

  return (
    <AuthShell
      title="欢迎回来"
      subtitle="输入你注册时使用的邮箱和密码即可登录。若你刚刚注册，请先点击验证邮件中的链接。"
      footerPrompt="还没有账号？"
      footerLinkLabel="立即注册"
      footerLinkTo="/register"
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
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-700">密码</span>
            <Link to="/forgot-password" className="text-xs font-semibold text-primary-700 hover:text-primary-900">
              忘记密码？
            </Link>
          </div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
            placeholder="请输入密码"
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
          {loading ? '登录中...' : '登录账号'}
        </button>
      </form>
    </AuthShell>
  );
};

export default Login;
