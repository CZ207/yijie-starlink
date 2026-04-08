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

      {/* Architecture */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-stone-900 mb-6 border-l-4 border-primary-600 pl-4">平台架构</h2>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <ArchBox title="资源端" items={['延安革命纪念馆', '影视制作方', '红色档案馆']} color="bg-red-50 text-red-800" />
            <div className="hidden lg:flex items-center justify-center text-stone-300">→</div>
            <ArchBox title="众包平台" items={['任务调度看板', '质量控制流程', '术语辅助系统']} color="bg-blue-50 text-blue-800" />
            <div className="hidden lg:flex items-center justify-center text-stone-300">→</div>
            <ArchBox title="译者联盟" items={['高校外语人才', '指导教师团队', '行业专家顾问']} color="bg-amber-50 text-amber-800" />
            <div className="hidden lg:flex items-center justify-center text-stone-300">→</div>
            <ArchBox title="传播端" items={['海外社交媒体', '云端数字展览', '国际电影节']} color="bg-green-50 text-green-800" />
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
           <h2 className="text-2xl font-bold text-stone-900 mb-6 border-l-4 border-primary-600 pl-4">服务对象</h2>
           <ul className="space-y-4">
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs mt-0.5">1</span>
               <span className="ml-4 text-stone-600"><strong>高校学生：</strong> 寻找真实翻译项目，积累作品集，获得专业指导。</span>
             </li>
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs mt-0.5">2</span>
               <span className="ml-4 text-stone-600"><strong>红色场馆：</strong> 拥有丰富史料但缺乏外语传播能力，需要高质量低成本的翻译服务。</span>
             </li>
             <li className="flex items-start">
               <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xs mt-0.5">3</span>
               <span className="ml-4 text-stone-600"><strong>教学团队：</strong> 翻译硕士(MTI)课程缺乏实战案例，通过平台实现产教融合。</span>
             </li>
           </ul>
        </div>
        <div className="bg-stone-100 rounded-xl p-6 flex items-center justify-center">
             <img src="https://picsum.photos/600/400?grayscale" alt="Team meeting" className="rounded-lg shadow-md opacity-80" />
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-2xl font-bold text-stone-900 mb-8 border-l-4 border-primary-600 pl-4">项目路线图 (2025-2027)</h2>
        <div className="relative border-l-2 border-stone-200 ml-4 space-y-12">
          <TimelineItem year="2025 Q1" title="平台筹备与原型开发" desc="确定技术架构，完成静态站上线，招募首批种子译者。" />
          <TimelineItem year="2025 Q3" title="试点运行" desc="接入延安革命纪念馆首批短片项目，跑通众包流程。" />
          <TimelineItem year="2026" title="全面推广" desc="扩展至全省高校联盟，建立完善的译者分级与激励体系。" />
          <TimelineItem year="2027" title="国际化传播" desc="建立海外发布渠道矩阵，实现红色文化内容的规模化出海。" />
        </div>
      </div>
    </div>
  );
};

const ArchBox: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => (
  <div className={`p-4 rounded-lg ${color}`}>
    <h3 className="font-bold mb-2">{title}</h3>
    <ul className="text-sm space-y-1 opacity-80">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  </div>
);

const TimelineItem: React.FC<{ year: string; title: string; desc: string }> = ({ year, title, desc }) => (
  <div className="relative pl-8">
    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary-600 ring-4 ring-white"></div>
    <div className="text-sm font-semibold text-primary-600 mb-1">{year}</div>
    <h3 className="text-lg font-bold text-stone-900">{title}</h3>
    <p className="text-stone-600 mt-1">{desc}</p>
  </div>
);

export default About;