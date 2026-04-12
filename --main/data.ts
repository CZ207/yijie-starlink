import { ProjectTask, TaskStatus, TaskDifficulty, Course, CaseStudy } from './types';

export const TASKS: ProjectTask[] = [
  {
    id: '1',
    title: '《烽火青春》 | 第二集：弦歌不绝',
    category: '纪录片',
    topic: '红色历史',
    language: '中英',
    difficulty: TaskDifficulty.MEDIUM,
    deadline: '2026-6-01',
    status: TaskStatus.COMPLETED,
    description: '示例参考：提供已完成的中英双语 SRT 字幕文件，供学习纪录片字幕翻译表达与格式处理。',
    isReference: true,
    fileUrl: '/files/fenghuo-qingchun-ep02-bilingual.srt'
  },
  {
    id: '2',
    title: '《山海情》',
    category: '电视剧',
    topic: '脱贫攻坚',
    language: '中英',
    difficulty: TaskDifficulty.HARD,
    deadline: '2026-6-21',
    status: TaskStatus.IN_PROGRESS,
    description: '要求风格庄重准确，提前查证相关资料'
  },
  {
    id: '3',
    title: '红色旅游宣传短视频字幕',
    category: '宣传片',
    topic: '旅游',
    language: '中英',
    difficulty: TaskDifficulty.EASY,
    deadline: '2026-7-01',
    status: TaskStatus.RECRUITING,
    description: '面向国外游客的短视频推广，语言需生动活泼。'
  },
  {
    id: '4',
    title: '《建档伟业》电影英文字幕',
    category: '电影',
    topic: '红色历史',
    language: '中英',
    difficulty: TaskDifficulty.HARD,
    deadline: '2026-8-04',
    status: TaskStatus.COMPLETED,
    description: '要求风格庄重准确，提前查证相关历史文献'
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: '影视字幕翻译基础',
    instructor: '翻译组',
    type: 'PDF',
    targetLevel: '初级译者学习',
    url: '/files/subtitle-translation-basics.pdf'
  },
  {
    id: '2',
    title: '红色文化核心术语解析',
    instructor: '翻译组',
    type: 'PDF',
    targetLevel: '中级译者学习',
    url: '/files/red-culture-core-terms.pdf'
  },
  {
    id: '3',
    title: '字幕制作实战',
    instructor: '技术组',
    type: 'Online',
    targetLevel: '初级译者学习',
    url: 'https://www.youtube.com/watch?v=W6EhGwHBfoc'
  },
  {
    id: '4',
    title: '审校与质量控制',
    instructor: '审校组',
    type: 'PDF',
    targetLevel: '校审译者学习',
    url: '/files/translation-review-quality-control-guide.pdf'
  }
];

export const CASES: CaseStudy[] = [
  {
    id: '1',
    title: '《鲁艺自制的小提琴》双语微视频',
    partner: '鲁迅艺术学院旧址',
    type: '短视频',
    stats: '全网浏览 30w+',
    imageUrl: 'https://picsum.photos/400/250?random=1'
  },
  {
    id: '2',
    title: '“延安精神”云端数字展',
    partner: '延安革命纪念馆',
    type: '数字展览',
    stats: '访客 4800+',
    imageUrl: 'https://picsum.photos/400/250?random=2'
  },
  {
    id: '3',
    title: '《东方红》故事多语种绘本',
    partner: '少年儿童出版社',
    type: '出版物',
    stats: '发行 5000 册',
    imageUrl: 'https://picsum.photos/400/250?random=3'
  }
];
