import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type AuthShellProps = {
  title: string;
  subtitle: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerLinkTo: string;
  children: React.ReactNode;
};

const AuthShell: React.FC<AuthShellProps> = ({
  title,
  subtitle,
  footerPrompt,
  footerLinkLabel,
  footerLinkTo,
  children,
}) => {
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname;

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.22),_transparent_35%),linear-gradient(135deg,transparent,rgba(255,255,255,0.05))]" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div>
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs tracking-[0.3em] text-white/85">
                YIJIE XINGLIAN
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">译界星链账号中心</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-primary-50 sm:text-lg">
                使用邮箱即可完成注册与登录。验证通过后，你可以进入平台任务、成长路径和合作入口，统一管理自己的译者身份。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm text-white/70">回跳页面</div>
                <div className="mt-2 break-all text-lg font-semibold">{from ?? '/'}</div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm text-white/70">当前支持</div>
                <div className="mt-2 text-lg font-semibold">邮箱注册 / 登录 / 退出</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-stone-200 sm:p-8">
          <Link to="/" className="text-sm font-semibold text-primary-700 transition hover:text-primary-900">
            ← 返回首页
          </Link>
          <div className="mt-6">
            <h2 className="text-3xl font-black tracking-tight text-stone-900">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">{subtitle}</p>
          </div>

          <div className="mt-8">{children}</div>

          <div className="mt-8 border-t border-stone-200 pt-6 text-sm text-stone-500">
            {footerPrompt}
            <Link to={footerLinkTo} className="ml-2 font-semibold text-primary-700 hover:text-primary-900">
              {footerLinkLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
