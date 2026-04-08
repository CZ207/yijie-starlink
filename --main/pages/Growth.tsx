import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { COURSES } from '../data';
import { Book, PlayCircle, FileText } from 'lucide-react';

// Mock data for the radar chart example
const radarData = [
  { subject: '语言能力', A: 120, fullMark: 150 },
  { subject: '技术工具', A: 98, fullMark: 150 },
  { subject: '红色文化', A: 86, fullMark: 150 },
  { subject: '项目效率', A: 99, fullMark: 150 },
  { subject: '校审质量', A: 85, fullMark: 150 },
  { subject: '协作沟通', A: 65, fullMark: 150 },
];

const Growth: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Career Path & Radar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
             <h2 className="text-xl font-bold text-stone-900 mb-4">译者成长路径</h2>
             <div className="space-y-6 relative pl-2">
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-stone-200"></div>
                
                <LevelNode 
                  level="初级译者" 
                  desc="具备基础双语能力，可参与短文本和初级字幕任务。"
                  color="bg-green-500"
                />
                <LevelNode 
                  level="中级译者" 
                  desc="完成5+项目，评分4.5+。可参与复杂长视频与专业文献翻译。"
                  color="bg-blue-500"
                />
                <LevelNode 
                  level="校审译者" 
                  desc="专家级译者，负责项目终审与团队指导。"
                  color="bg-primary-600"
                />
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
             <h2 className="text-xl font-bold text-stone-900 mb-2">能力雷达图 (示例)</h2>
             <p className="text-xs text-stone-500 mb-4">完成任务后系统将自动生成您的能力分析。</p>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
                    <Radar
                      name="能力值"
                      dataKey="A"
                      stroke="#b91c1c"
                      fill="#b91c1c"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Right Column: Training Courses */}
        <div className="lg:col-span-2">
          <div className="mb-6">
             <h1 className="text-3xl font-bold text-stone-900">培训课程（示例）</h1>
             <p className="mt-2 text-stone-600">体系化课程助力技能提升，解锁更高等级任务。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map(course => (
              <div key={course.id} className="bg-white border border-stone-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${
                    course.type === 'Online' ? 'bg-blue-50 text-blue-600' :
                    course.type === 'Offline' ? 'bg-orange-50 text-orange-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {course.type === 'Online' ? <PlayCircle size={20} /> : 
                     course.type === 'Offline' ? <Book size={20} /> : <FileText size={20} />}
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-stone-100 rounded text-stone-600">
                    {course.targetLevel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{course.title}</h3>
                <p className="text-sm text-stone-500 mb-4">讲师: {course.instructor}</p>
                <button className="w-full py-2 border border-primary-600 text-primary-600 rounded hover:bg-primary-50 font-medium text-sm transition-colors">
                  开始学习
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LevelNode: React.FC<{ level: string; desc: string; color: string }> = ({ level, desc, color }) => (
  <div className="relative pl-10">
    <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ${color} ring-2 ring-white z-10 shadow-sm`}></div>
    <h3 className="font-bold text-stone-900">{level}</h3>
    <p className="text-xs text-stone-500 mt-1">{desc}</p>
  </div>
);

export default Growth;
