import React, { useMemo, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LogOut, Menu, Star, UserRound, X } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signOutError, setSignOutError] = useState('');
  const { user, signOut, loading } = useAuth();

  const navItems = useMemo(
    () => [
      { name: '首页', path: '/' },
      { name: '平台介绍', path: '/about' },
      { name: '任务看板', path: '/projects' },
      { name: '成长与培训', path: '/growth' },
      { name: '标准与术语', path: '/standards' },
      { name: '合作对接', path: '/cases' },
      { name: '加入我们', path: '/join' },
      ...(user ? [{ name: '我的中心', path: '/dashboard' }] : []),
    ],
    [user]
  );

  const handleSignOut = async () => {
    setSignOutError('');

    try {
      await signOut();
      setIsMenuOpen(false);
    } catch {
      setSignOutError('退出失败，请稍后再试。');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-700 rounded flex items-center justify-center text-white">
                <Star size={20} fill="white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-primary-900">译界星链</span>
            </div>

            <div className="hidden md:flex md:items-center md:gap-3 lg:gap-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-primary-700 bg-primary-50' : 'text-stone-600 hover:text-primary-700 hover:bg-stone-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:gap-3">
              {loading ? (
                <span className="text-sm text-stone-500">读取中...</span>
              ) : user ? (
                <>
                  <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">
                    <UserRound size={16} className="text-primary-700" />
                    <span className="max-w-40 truncate">{user.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
                  >
                    <LogOut size={16} />
                    退出
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-primary-700 hover:text-primary-700"
                  >
                    登录
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="rounded-full bg-primary-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-900"
                  >
                    注册
                  </NavLink>
                </>
              )}
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-stone-100 hover:text-primary-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="space-y-1 px-3 pb-4 pt-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive ? 'bg-primary-50 text-primary-700' : 'text-stone-600 hover:bg-stone-50 hover:text-primary-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="mt-3 border-t border-stone-200 pt-3">
                {loading ? (
                  <div className="px-3 py-2 text-sm text-stone-500">读取中...</div>
                ) : user ? (
                  <>
                    <div className="px-3 py-2 text-sm text-stone-600">当前登录：{user.email}</div>
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="mt-2 block w-full rounded-md bg-stone-900 px-3 py-2 text-left text-sm font-semibold text-white"
                    >
                      退出登录
                    </button>
                  </>
                ) : (
                  <div className="grid grid-cols-2 gap-2 px-3">
                    <NavLink
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-md border border-stone-300 px-3 py-2 text-center text-sm font-semibold text-stone-700"
                    >
                      登录
                    </NavLink>
                    <NavLink
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-md bg-primary-700 px-3 py-2 text-center text-sm font-semibold text-white"
                    >
                      注册
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {signOutError ? (
        <div className="border-b border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">{signOutError}</div>
      ) : null}

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-primary-700 text-white">
                  <Star size={14} fill="white" />
                </div>
                <span className="text-lg font-bold text-white">译界星链</span>
              </div>
              <p className="text-sm text-stone-400">
                红色文化 + 多语种 + 高校译者实践平台。<br />
                连接高校与世界，讲好中国故事。
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/projects" className="hover:text-white">任务看板</NavLink></li>
                <li><NavLink to="/standards" className="hover:text-white">术语库</NavLink></li>
                <li><NavLink to="/join" className="hover:text-white">加入联盟</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">联系我们</h3>
              <p className="mb-2 text-sm text-stone-400">Email: nvgudp8642@163.com（项目负责人邮箱）</p>
              <p className="text-sm text-stone-400">西安外国语大学高级翻译学院</p>
            </div>
          </div>
          <div className="mt-8 border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
            &copy; 2025 YiJieXingLian Translator Alliance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
