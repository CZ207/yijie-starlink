import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-extrabold text-stone-900 sm:text-4xl">关于平台</h1>
        <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
          面向红色影视与多语种翻译的众包协作平台，通过高校译者联盟+校馆合作，解决字幕翻译需求增长与实践资源不足的矛盾。
        </p>
      </div>

      {/* Platform Functions */}
      <div className="mb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 border-l-4 border-primary-600 pl-4">平台功能</h2>
          <div className="hidden md:flex items-center gap-2 text-xs font-medium tracking-[0.24em] text-stone-400 uppercase">
            <span className="h-px w-10 bg-stone-300" />
            Function Matrix
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-white px-5 py-6 shadow-[0_22px_70px_-38px_rgba(28,25,23,0.32)] sm:px-7 sm:py-8">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-red-50 via-blue-50 to-amber-50 opacity-70" />
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ArchBox title="任务发布" items={['展示项目需求', '说明语种与内容类型', '支持基础信息查看']} color="bg-red-50 text-red-800" />
            <ArchBox title="术语与标准" items={['提供红色术语检索', '展示规范译法示例', '支持质量手册下载']} color="bg-blue-50 text-blue-800" />
            <ArchBox title="成长与学习" items={['展示成长路径示例', '提供课程内容入口', '帮助了解实践方向']} color="bg-amber-50 text-amber-800" />
            <ArchBox title="合作联络" items={['面向高校与机构对接', '说明当前合作方向', '提供联系与注册入口']} color="bg-green-50 text-green-800" />
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div className="rounded-[28px] border border-stone-200 bg-white p-7 shadow-[0_20px_60px_-38px_rgba(28,25,23,0.34)]">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-stone-900 border-l-4 border-primary-600 pl-4">服务对象</h2>
            <span className="hidden sm:inline-block text-xs uppercase tracking-[0.24em] text-stone-400">Target Groups</span>
          </div>
          <ul className="space-y-4">
            <AudienceItem index="1" title="高校学生" desc="寻找真实翻译项目，积累作品集，获得专业指导。" />
            <AudienceItem index="2" title="红色场馆" desc="拥有丰富史料但缺乏外语传播能力，需要高质量低成本的翻译服务。" />
            <AudienceItem index="3" title="教学团队" desc="翻译硕士(MTI)课程缺乏实战案例，通过平台实现产教融合。" />
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-stone-100 shadow-[0_22px_60px_-36px_rgba(28,25,23,0.34)] min-h-[360px]">
          <img src="https://edgeoneimg.cdn.sn/i/69da3a543acf5_1775909460.webp" alt="Team meeting" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/15 to-white/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">Platform Audience</p>
            <p className="mt-3 max-w-md text-lg font-semibold leading-8">
              平台围绕学习、实践与合作沟通三个维度，面向不同类型的使用者提供清晰入口。
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-stone-900 border-l-4 border-primary-600 pl-4">项目路线图 (2025-2027)</h2>
          <span className="hidden md:inline-block text-xs uppercase tracking-[0.24em] text-stone-400">Roadmap</span>
        </div>
        <div className="rounded-[32px] border border-stone-200 bg-[linear-gradient(180deg,#ffffff_0%,#fafaf9_100%)] p-6 shadow-[0_22px_70px_-40px_rgba(28,25,23,0.3)] sm:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <TimelineItem year="2025 Q1" title="平台筹备与原型开发" desc="确定技术架构，完成静态站上线，招募首批种子译者。" />
            <TimelineItem year="2025 Q3" title="试点运行" desc="接入延安革命纪念馆首批短片项目，跑通众包流程。" />
            <TimelineItem year="2026" title="全面推广" desc="扩展至全省高校联盟，建立完善的译者分级与激励体系。" />
            <TimelineItem year="2027" title="国际化传播" desc="建立海外发布渠道矩阵，实现红色文化内容的规模化出海。" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ArchBox: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => (
  <div className={`group relative overflow-hidden rounded-[24px] border border-white/70 p-5 text-left shadow-[0_18px_40px_-28px_rgba(28,25,23,0.38)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-26px_rgba(28,25,23,0.42)] ${color}`}>
    <div className="absolute right-4 top-4 text-[44px] font-serif leading-none text-white/45 transition duration-300 group-hover:scale-105">✦</div>
    <div className="relative">
      <h3 className="text-lg font-bold tracking-[0.08em] mb-4">{title}</h3>
      <ul className="space-y-3 text-sm leading-6 opacity-90">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-current opacity-70"></span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AudienceItem: React.FC<{ index: string; title: string; desc: string }> = ({ index, title, desc }) => (
  <li className="group rounded-[22px] border border-stone-200 bg-stone-50/80 px-4 py-4 transition duration-300 hover:border-primary-200 hover:bg-white hover:shadow-[0_18px_40px_-34px_rgba(185,28,28,0.45)] sm:px-5">
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-100 text-sm font-bold text-primary-700 shadow-inner shadow-white/80">
        {index}
      </span>
      <div>
        <h3 className="text-base font-bold text-stone-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-stone-600">{desc}</p>
      </div>
    </div>
  </li>
);

const TimelineItem: React.FC<{ year: string; title: string; desc: string }> = ({ year, title, desc }) => (
  <div className="group relative overflow-hidden rounded-[24px] border border-stone-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-34px_rgba(28,25,23,0.34)]">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-600 via-primary-400 to-amber-300" />
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-sm font-semibold text-primary-600 mb-2">{year}</div>
        <h3 className="text-lg font-bold text-stone-900">{title}</h3>
      </div>
      <div className="mt-1 h-3.5 w-3.5 rounded-full bg-primary-600 shadow-[0_0_0_6px_rgba(254,226,226,0.95)]" />
    </div>
    <p className="mt-4 text-sm leading-7 text-stone-600">{desc}</p>
  </div>
);

export default About;