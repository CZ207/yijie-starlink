export enum TaskStatus {
  RECRUITING = '未开始',
  IN_PROGRESS = '未开始',
  COMPLETED = '未开始',
}

export enum TaskDifficulty {
  EASY = '初级',
  MEDIUM = '中级',
  HARD = '高级',
}

export interface ProjectTask {
  id: string;
  title: string;
  category: string;
  topic: string;
  language: string;
  difficulty: TaskDifficulty;
  deadline: string;
  status: TaskStatus;
  description: string;
}

export interface Term {
  id: string;
  term: string;
  translation: string;
  category: string;
  example: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  type: 'Online' | 'Offline' | 'PDF';
  targetLevel: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  partner: string;
  type: string;
  stats: string;
  imageUrl: string;
}
