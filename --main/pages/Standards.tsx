import React, { useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, FileText, Layers3, Search, Sparkles } from 'lucide-react';
import { TERMS } from '../terms';

const PAGE_SIZE = 12;

const Standards: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => ['全部', ...Array.from(new Set(TERMS.map((term) => term.category)))], []);

  const filteredTerms = useMemo(() => {
    const trimmed = searchTerm.trim();
    const keyword = trimmed.toLowerCase();

    return TERMS.filter((term) => {
      const matchesCategory = activeCategory === '全部' || term.category === activeCategory;
      const matchesKeyword =
        keyword.length === 0 ||
        term.term.includes(trimmed) ||
        term.translation.toLowerCase().includes(keyword) ||
        term.example.toLowerCase().includes(keyword);

      return matchesCategory && matchesKeyword;
    });
  }, [activeCategory, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredTerms.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginatedTerms = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredTerms.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredTerms]);

  const highlightedTerm = filteredTerms[0] ?? TERMS[0];
  const pageStart = filteredTerms.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const pageEnd = filteredTerms.length === 0 ? 0 : Math.min(currentPage * PAGE_SIZE, filteredTerms.length);

  return (
    <div className="bg-stone-950 text-stone-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,_#111827_0%,_#09090b_100%)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
                <Sparkles size={16} /> 红色译介标准库已升级
              </div>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">红色术语库与质量标准中心</h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">页面优先服务术语检索与项目实操。你现在可以直接在顶部搜索 200 条规范化红色术语，并按分类快速定位需要的标准表达。</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <MetricCard label="术语总量" value={`${TERMS.length}`} hint="覆盖历史、理论、战略与精神文化" />
              <MetricCard label="当前分类" value={`${categories.length - 1}`} hint="支持多类别快速切换" />
              <MetricCard label="检索结果" value={`${filteredTerms.length}`} hint="分页浏览，定位更高效" />
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/10 bg-white p-5 text-stone-900 shadow-2xl shadow-black/20 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900"><Search size={22} className="text-primary-700" /> 术语检索</h2>
                <p className="mt-2 text-sm leading-6 text-stone-500">支持中文术语、英文译法与例句全文搜索。功能优先，不必下翻即可开始检索。</p>
              </div>
              <div className="text-sm font-medium text-stone-500">当前第 <span className="font-bold text-stone-900">{currentPage}</span> / {totalPages} 页</div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="text"
                  placeholder="输入中文、英文或例句关键词..."
                  className="w-full rounded-2xl border border-stone-300 bg-stone-50 py-4 pl-11 pr-4 text-base outline-none transition focus:border-primary-600 focus:bg-white focus:ring-4 focus:ring-primary-100"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>
              <div className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-4 text-sm leading-6 text-stone-600">检索范围：术语 / 译法 / 例句<br />每页显示：{PAGE_SIZE} 条</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? 'rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-stone-900/20' : 'rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-600 transition hover:border-stone-500 hover:text-stone-900'}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:px-8 lg:py-12">
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-white"><CheckCircle size={18} className="text-amber-300" /> 译介质量规范</h2>
            <ul className="mt-5 space-y-4">
              <StandardItem title="术语优先原则" desc="涉及党史、革命历史、国家战略与政治理论时，优先使用术语库固定译法，不随意替换近义表达。" />
              <StandardItem title="例句对照原则" desc="涉及难词难句时，先参考术语卡片中的双语例句，再决定在字幕、解说词或图文中的落地表达。" />
              <StandardItem title="审校留痕原则" desc="政治敏感词、重大历史事件与专有名词应进行复核，必要时补充来源说明和审校备注。" />
            </ul>
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100"><FileText size={16} /> 下载完整《译界星链质量手册》</button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-300/15 to-transparent p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white"><Layers3 size={18} className="text-amber-300" /> 当前推荐术语</h3>
            <p className="mt-4 text-sm text-stone-300">优先显示当前检索结果中的首条术语，便于迅速确认标准译法。</p>
            <div className="mt-5 rounded-2xl border border-amber-300/20 bg-stone-900/80 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xl font-bold text-white">{highlightedTerm.term}</p>
                  <p className="mt-2 text-sm italic text-amber-200">{highlightedTerm.translation}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-200">{highlightedTerm.category}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-300">{highlightedTerm.example}</p>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">检索结果</h2>
              <p className="mt-1 text-sm text-stone-400">当前显示第 {pageStart} - {pageEnd} 条，共 {filteredTerms.length} 条匹配术语。</p>
            </div>
            <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>

          <div className="grid gap-4">
            {paginatedTerms.length > 0 ? paginatedTerms.map((term) => (
              <article key={term.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-200 hover:border-amber-300/30 hover:bg-white/10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">{term.term}</h3>
                      <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">#{term.id}</span>
                    </div>
                    <p className="mt-3 text-lg italic text-amber-200">{term.translation}</p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-stone-200">{term.category}</span>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-stone-950/45 px-4 py-4 text-sm leading-7 text-stone-300"><span className="font-semibold text-white">例句：</span> {term.example}</div>
              </article>
            )) : (
              <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 px-6 py-14 text-center">
                <p className="text-lg font-semibold text-white">未找到匹配术语</p>
                <p className="mt-2 text-sm text-stone-400">可以尝试切换分类，或改用中文关键词、英文译法中的核心词进行搜索。</p>
              </div>
            )}
          </div>

          {paginatedTerms.length > 0 ? <div className="flex justify-end"><PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} /></div> : null}
        </div>
      </section>
    </div>
  );
};

const MetricCard: React.FC<{ label: string; value: string; hint: string }> = ({ label, value, hint }) => (
  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
    <p className="text-sm font-medium text-stone-300">{label}</p>
    <p className="mt-3 text-3xl font-bold text-white">{value}</p>
    <p className="mt-2 text-xs leading-5 text-stone-400">{hint}</p>
  </div>
);

const StandardItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <li className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
    <h4 className="text-sm font-semibold text-white">{title}</h4>
    <p className="mt-2 text-sm leading-6 text-stone-300">{desc}</p>
  </li>
);

const PaginationControls: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, index) => index + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, 5];
    if (currentPage >= totalPages - 2) return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }, [currentPage, totalPages]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft size={16} /> 上一页</button>
      {pages.map((page) => (
        <button key={page} type="button" onClick={() => onPageChange(page)} className={page === currentPage ? 'rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-stone-950' : 'rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200 transition hover:bg-white/10'}>{page}</button>
      ))}
      <button type="button" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40">下一页 <ChevronRight size={16} /></button>
    </div>
  );
};

export default Standards;
