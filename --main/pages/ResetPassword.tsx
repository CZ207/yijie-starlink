import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AuthShell from '../components/AuthShell';

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    const hashParams = new URLSearchParams(hash.replace(/^#/, ''));
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');

    if (!accessToken || !refreshToken) {
      return;
    }

    supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken }).catch(() => {
      setError('重置链接已失效，请重新申请。');
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('新密码至少需要 6 位。');
      return;
    }

    if (password !== confirmPassword) {
      setError('两次输入的新密码不一致。');
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError('密码重置失败，请重新从邮件链接进入。');
      setLoading(false);
      return;
    }

    setSuccess('密码已更新，2 秒后跳转到登录页。');
    setLoading(false);
    window.setTimeout(() => navigate('/login', { replace: true }), 2000);
  };

  return (
    <AuthShell
      title="设置新密码"
      subtitle="请在这里输入新的登录密码。修改成功后，你就可以用新密码重新登录。"
      footerPrompt="不需要重置了？"
      footerLinkLabel="返回登录"
      footerLinkTo="/login"
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-stone-700">新密码</span>
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
          <span className="mb-2 block text-sm font-semibold text-stone-700">确认新密码</span>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 outline-none transition focus:border-primary-600 focus:ring-4 focus:ring-primary-100"
            placeholder="再次输入新密码"
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
          {loading ? '提交中...' : '更新密码'}
        </button>
      </form>
    </AuthShell>
  );
};

export default ResetPassword;
