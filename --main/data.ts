import { ProjectTask, TaskStatus, TaskDifficulty, Term, Course, CaseStudy } from './types';

export const TASKS: ProjectTask[] = [
  {
    id: '1',
    title: '《延安颂》纪录片片段中英字幕',
    category: '纪录片',
    topic: '红色历史',
    language: '中英',
    difficulty: TaskDifficulty.MEDIUM,
    deadline: '2026-2-01',
    status: TaskStatus.RECRUITING,
    description: '延安革命纪念馆合作项目，需具备一定的历史名词翻译基础。'
  },
  {
    id: '2',
    title: '延安革命纪念馆“铸魂”展览解说词',
    category: '解说词',
    topic: '展览',
    language: '中日',
    difficulty: TaskDifficulty.HARD,
    deadline: '2026-2-01',
    status: TaskStatus.IN_PROGRESS,
    description: '展览核心板块解说词翻译，要求风格庄重准确。'
  },
  {
    id: '3',
    title: '红色旅游宣传短视频字幕',
    category: '宣传片',
    topic: '旅游',
    language: '中俄',
    difficulty: TaskDifficulty.EASY,
    deadline: '2026-2-01',
    status: TaskStatus.RECRUITING,
    description: '面向俄罗斯游客的短视频推广，语言需生动活泼。'
  },
  {
    id: '4',
    title: '《保卫黄河》历史背景资料整理',
    category: '文本整理',
    topic: '音乐史',
    language: '中文',
    difficulty: TaskDifficulty.EASY,
    deadline: '2026-2-01',
    status: TaskStatus.COMPLETED,
    description: '协助整理相关历史文献，为后续多语种翻译做准备。'
  }
];

export const TERMS: Term[] = [
  {
    id: '1',
    term: '长征',
    translation: 'The Long March',
    category: '历史事件',
    example: '长征是历史上的奇迹。 (The Long March is a miracle in history.)'
  },
  {
    id: '2',
    term: '抗日战争',
    translation: 'The War of Resistance Against Japanese Aggression',
    category: '历史事件',
    example: '全民族抗战。'
  },
  {
    id: '3',
    term: '解放思想',
    translation: 'Emancipate the mind',
    category: '政治理论',
    example: '解放思想，实事求是。'
  },
  {
    id: '4',
    term: '实事求是',
    translation: 'Seek truth from facts',
    category: '政治理论',
    example: '我们要坚持实事求是的原则。'
  },
  {
    id: '5',
    term: '根据地',
    translation: 'Revolutionary Base Area',
    category: '军事',
    example: '陕甘宁边区是重要的革命根据地。'
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: '影视字幕翻译基础',
    instructor: '祖赟',
    type: 'Online',
    targetLevel: '初级译者学习'
  },
  {
    id: '2',
    title: '红色文化核心术语解析',
    instructor: '王小燕',
    type: 'PDF',
    targetLevel: '中级译者学习'
  },
  {
    id: '3',
    title: 'Aegisub 字幕制作实战',
    instructor: '技术组',
    type: 'Offline',
    targetLevel: '初级译者学习'
  },
  {
    id: '4',
    title: '高级审校与质量控制',
    instructor: '李老师',
    type: 'Online',
    targetLevel: '校审译者学习'
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
