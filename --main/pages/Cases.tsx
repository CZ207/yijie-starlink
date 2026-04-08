import React from 'react';
import { CASES } from '../data';
import { ExternalLink } from 'lucide-react';

const Cases: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-stone-900">红色实践与合作案例</h1>
        <p className="mt-4 text-stone-600">见证高校译者如何助力红色文化走向世界。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASES.map(item => (
          <div key={item.id} className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {item.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
              <p className="text-sm text-primary-700 font-medium mb-4">合作单位: {item.partner}</p>
              
              <div className="flex items-center justify-between text-stone-500 text-sm pt-4 border-t border-stone-100">
                 <span>成果: {item.stats}</span>
                 <button className="flex items-center gap-1 hover:text-primary-700 transition-colors">
                    查看详情 <ExternalLink size={14} />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Partner */}
      <div className="mt-16 bg-white rounded-xl shadow-sm border border-stone-200 p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 text-center md:text-left">
           <div className="w-24 h-24 bg-stone-100 rounded-full mx-auto md:mx-0 flex items-center justify-center text-stone-400 font-bold mb-4">
             Logo
           </div>
           <h3 className="text-2xl font-bold text-stone-900">延安革命纪念馆</h3>
           <p className="text-primary-700 font-medium">深度合作伙伴</p>
        </div>
        <div className="md:w-2/3">
           <p className="text-stone-600 leading-relaxed mb-4">
             延安革命纪念馆与译界星链达成长期战略合作，共同建立了“红色文化国际传播研学基地”。
             至今已联合发布短视频20余条，翻译史料超过10万字。双方共同致力于通过数字化、年轻化的语言，
             向世界讲述延安故事。
           </p>
           <button className="text-primary-700 font-semibold hover:underline">了解更多合作模式 &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Cases;