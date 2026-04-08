import React from 'react';
import { ArrowRight, BookOpen, Users, Globe2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-400 bg-primary-800/50 backdrop-blur-sm mb-6">
            <span className="text-xs font-semibold uppercase tracking-wide">V1.0 平台上线</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">译界星链</span>
            <span className="block text-primary-200 text-2xl md:text-4xl mt-2 font-serif">
              影视众包翻译高校译者联盟
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-primary-100">
            依托高校人才资源，聚焦红色文化出海。打造“学-练-战”一体化众包实践平台。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-900 bg-white hover:bg-stone-50 md:text-lg transition-colors"
            >
              了解平台
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg flex items-center gap-2 transition-colors"
            >
              浏览任务 <ArrowRight size={18} />
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border border-primary-300 bg-primary-500/20 text-base font-medium rounded-md text-white hover:bg-primary-500/30 md:text-lg transition-colors"
            >
              邮箱注册
            </Link>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">核心功能</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              为什么选择译界星链？
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-8 w-8 text-white" />}
              title="众包任务协作"
              desc="连接高校译者与项目需求，透明的任务看板与流程管理，让实践更高效。"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-white" />}
              title="译者成长体系"
              desc="能力雷达图、晋升路径、专项培训课程，全方位支持译者职业发展。"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-white" />}
              title="标准与术语库"
              desc="建立红色文化翻译质量标准，提供权威术语库支持，确保内容准确传神。"
            />
          </div>
        </div>
      </div>

      {/* Quick Stats (Static) */}
      <div className="bg-stone-50 py-12 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatItem value="12" label="参与高校" />
            <StatItem value="350+" label="注册译者" />
            <StatItem value="8" label="服务语种" />
            <StatItem value="50+" label="完成项目" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="relative p-6 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
    <div className="absolute top-6 left-6 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-600/30">
      {icon}
    </div>
    <div className="pt-16">
      <h3 className="text-xl font-bold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div>
    <div className="text-3xl md:text-4xl font-extrabold text-primary-700">{value}</div>
    <div className="text-sm md:text-base font-medium text-stone-500 mt-1">{label}</div>
  </div>
);

export default Home;