import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, Globe } from 'lucide-react';
import { TASKS } from '../data';
import { TaskStatus, TaskDifficulty } from '../types';

const Projects: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTasks = useMemo(() => {
    return TASKS.filter(task => {
      const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
      const matchesDifficulty = filterDifficulty === 'All' || task.difficulty === filterDifficulty;
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            task.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesDifficulty && matchesSearch;
    });
  }, [filterStatus, filterDifficulty, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-stone-50 min-h-[calc(100vh-64px)]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">众包任务看板（示例）</h1>
        <p className="mt-2 text-stone-600">浏览并认领适合你的翻译任务，开始实战。</p>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-stone-400" />
            <span className="text-sm font-medium text-stone-700">筛选:</span>
          </div>
          
          <select 
            className="form-select text-sm border-stone-300 rounded-md focus:border-primary-500 focus:ring-primary-500"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">所有状态</option>
            {Object.values(TaskStatus).map(s => <option key={s} value={s}>{s}</option>)}
          </select>

          <select 
            className="form-select text-sm border-stone-300 rounded-md focus:border-primary-500 focus:ring-primary-500"
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="All">所有难度</option>
            {Object.values(TaskDifficulty).map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="搜索任务..."
            className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-stone-400" size={16} />
        </div>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map(task => (
          <div key={task.id} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  task.status === TaskStatus.RECRUITING ? 'bg-green-100 text-green-800' :
                  task.status === TaskStatus.IN_PROGRESS ? 'bg-blue-100 text-blue-800' :
                  'bg-stone-100 text-stone-800'
                }`}>
                  {task.status}
                </span>
                <span className="text-xs text-stone-500 flex items-center gap-1">
                  <Clock size={12} /> {task.deadline} 预计开始时间
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2 line-clamp-2">{task.title}</h3>
              <p className="text-sm text-stone-600 mb-4 line-clamp-3">{task.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge text={task.category} />
                <Badge text={task.language} icon={<Globe size={10} />} />
                <Badge 
                  text={task.difficulty} 
                  color={
                    task.difficulty === TaskDifficulty.EASY ? 'bg-green-50 text-green-700' :
                    task.difficulty === TaskDifficulty.MEDIUM ? 'bg-yellow-50 text-yellow-700' :
                    'bg-red-50 text-red-700'
                  } 
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100">
               {task.status === TaskStatus.RECRUITING ? (
                 <a 
                   href="https://wjx.cn" 
                   target="_blank" 
                   rel="noreferrer"
                   className="block w-full text-center py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded transition-colors"
                 >
                   立即报名
                 </a>
               ) : (
                 <button disabled className="block w-full py-2 bg-stone-200 text-stone-500 text-sm font-medium rounded cursor-not-allowed">
                   {task.status === TaskStatus.COMPLETED ? '还未到时间' : '还未到时间'}
                 </button>
               )}
            </div>
          </div>
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-16">
          <p className="text-stone-500">没有找到符合条件的任务。</p>
        </div>
      )}
    </div>
  );
};

const Badge: React.FC<{ text: string; icon?: React.ReactNode; color?: string }> = ({ text, icon, color = 'bg-stone-100 text-stone-600' }) => (
  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium ${color}`}>
    {icon}
    {text}
  </span>
);

export default Projects;
