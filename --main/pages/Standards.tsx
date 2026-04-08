import React, { useState } from 'react';
import { Search, BookOpen, CheckCircle, FileText } from 'lucide-react';
import { TERMS } from '../data';

const Standards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = TERMS.filter(t => 
    t.term.includes(searchTerm) || t.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-stone-900">质量标准与术语库</h1>
        <p className="mt-4 text-stone-600">规范红色文化译介标准，提供权威术语支持。</p>
      </div>

      {/* Tabs / Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Quality Standards Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-primary-600" /> 质量规范
            </h2>
            <ul className="space-y-4">
              <StandardItem title="字幕时间轴规范" desc="双语字幕每行不超过18个中文字符，停留时间最短1.5秒。" />
              <StandardItem title="红色术语准确性" desc="专有名词必须对照术语库，禁止直译，政治敏感词需三审。" />
              <StandardItem title="文件交付格式" desc="纯文本使用.srt/.ass格式，双语对照使用Word模板。" />
            </ul>
            <div className="mt-6 pt-6 border-t border-stone-100">
              <button className="flex items-center gap-2 text-primary-700 font-medium hover:underline text-sm">
                <FileText size={16} /> 下载完整《译界星链质量手册 PDF》
              </button>
            </div>
          </div>
        </div>

        {/* Terminology Database */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-6 bg-stone-50 border-b border-stone-200">
              <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-primary-600" /> 术语检索
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="输入中文或英文术语..."
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 text-stone-400" size={18} />
              </div>
            </div>

            <div className="divide-y divide-stone-100">
              {filteredTerms.length > 0 ? (
                filteredTerms.map(term => (
                  <div key={term.id} className="p-6 hover:bg-stone-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-stone-900">{term.term}</h3>
                      <span className="px-2 py-1 bg-stone-200 text-stone-600 text-xs rounded-full">
                        {term.category}
                      </span>
                    </div>
                    <p className="text-primary-700 font-medium font-serif italic mb-2">{term.translation}</p>
                    <p className="text-sm text-stone-500">
                      <span className="font-semibold">例句：</span> {term.example}
                    </p>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-stone-500">
                  未找到相关术语。
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const StandardItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <li className="pb-3 border-b border-stone-100 last:border-0 last:pb-0">
    <h4 className="font-semibold text-stone-800 text-sm mb-1">{title}</h4>
    <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
  </li>
);

export default Standards;