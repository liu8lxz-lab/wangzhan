export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin?: boolean;
}

export interface Registration {
  id: string;
  name: string;
  department: string;
  role: '医学生' | '医生' | '其他';
  phone: string;
  createdAt: string;
}

export enum ServiceCategory {
  SCI = 'SCI论文辅导',
  NSFC = '国自然基金',
  QUALITY = '品质服务',
  CASES = '成功案例'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  iconName: string;
  imageUrl: string;
  guaranteePoints: string[];
}

export interface SuccessCase {
  id: string;
  title: string;
  journal: string;
  impactFactor: number;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}