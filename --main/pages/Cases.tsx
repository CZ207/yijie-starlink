import React from 'react';
import { ArrowRight, Building2, ClipboardList, Globe2, Handshake, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const cooperationItems = [
  {
    title: '影视字幕与解说词翻译',
    desc: '面向纪录片、短视频、展陈影片等内容，支持中译英及多语种传播表达梳理。',
    icon: <Globe2 size={20} />,
  },
  {
    title: '高校译者实践组织',
    desc: '围绕真实传播需求设计任务拆解、分工协作与教师指导，形成教学与项目联动。',
    icon: <ClipboardList size={20} />,
  },
  {
    title: '馆校联合传播策划',
    desc: '结合红色文化内容特点，探索适合海外受众理解的叙事表达与传播呈现。',
    icon: <Sparkles size={20} />,
  },
];

const partnerTypes = [
  '纪念馆、博物馆、红色文化展馆',
  '影视制作机构、纪录片团队',
  '高校外语学院、翻译硕士培养团队',
  '关注国际传播的宣传与文化单位',
];

const process = [
  { step: '01', title: '需求沟通', desc: '明确内容类型、语种方向、时间安排与合作目标。' },
  { step: '02', title: '方案对接', desc: '根据实际情况讨论是否适合进入试点合作或教学实践。' },
  { step: '03', title: '小范围试运行', desc: '优先从样片、短内容、术语整理等轻量任务开始。' },
  { step: '04', title: '逐步推进', desc: '在双方确认机制可行后，再进入持续性合作。' },
];

const Cases: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm border border-primary-100">
          <Handshake size={16} />
          合作对接
        </div>
        <h1 className="mt-5 text-3xl sm:text-4xl font-bold text-stone-900">面向机构与高校的合作对接页面</h1>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 mb-10">
        <section className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">当前可对接的合作方向</h2>
          <div className="grid gap-4">
            {cooperationItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">{item.title}</h3>
                </div>
                <p className="text-stone-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="bg-stone-900 text-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary-300">
              <Building2 size={22} />
            </div>
            <h2 className="text-2xl font-bold">适合对接的合作方</h2>
          </div>
          <ul className="space-y-4 text-stone-200 leading-7">
            {partnerTypes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary-400 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-stone-300 leading-7">
              若您希望先进行试探性沟通，也欢迎从单条短视频字幕、术语审校、双语文案润色等小范围内容开始。
            </p>
          </div>
        </aside>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-6">建议合作流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((item) => (
            <div key={item.step} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
              <div className="text-sm font-semibold text-primary-600 mb-2">{item.step}</div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-stone-600 leading-7 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-stone-900 mb-3">如需合作沟通，欢迎联系</h2>
          <p className="text-stone-600 leading-7 mb-4">
            如您来自高校、场馆、内容机构或传播团队，想了解是否适合开展试点合作，可先通过页面入口提交信息或直接发送邮件。
          </p>
          <div className="flex items-center gap-2 text-primary-700 font-medium">
            <Mail size={18} />
            <span>nvgudp8642@163.com</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/join"
            className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-5 py-3 text-white font-semibold transition hover:bg-primary-700"
          >
            前往联系合作
          </Link>
          <a
            href="mailto:nvgudp8642@163.com"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 px-5 py-3 text-stone-800 font-semibold transition hover:bg-stone-50"
          >
            发送邮件 <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cases;
