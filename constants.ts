import { ServiceCategory, ServiceItem, SuccessCase } from './types';

export const NAV_LINKS = [
  { label: '首页', path: '/' },
  { label: 'SCI辅导', path: '/sci' },
  { label: '国自然基金', path: '/nsfc' },
  { label: '品质服务', path: '/quality' },
  { label: '成功案例', path: '/cases' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Meta分析辅导',
    description: '从选题到发表，资深统计学家一对一指导Meta分析全流程。',
    category: ServiceCategory.SCI,
    iconName: 'PieChart',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['选题可行性评估', '统计数据分析', '论文撰写指导']
  },
  {
    id: '2',
    title: '生信分析辅导',
    description: '无需代码基础，掌握公共数据库挖掘与生信分析核心技能。',
    category: ServiceCategory.SCI,
    iconName: 'Dna',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['公共数据库挖掘', '生信图表制作', '结果分析解读']
  },
  {
    id: '3',
    title: '临床研究指导',
    description: '回顾性/前瞻性临床研究设计，伦理申请与数据统计支持。',
    category: ServiceCategory.SCI,
    iconName: 'Stethoscope',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['研究方案设计', '数据统计分析', '伦理申请支持']
  },
  {
    id: '4',
    title: '药学研究辅导',
    description: '药理毒理、药物制剂及药代动力学实验设计与论文撰写。',
    category: ServiceCategory.SCI,
    iconName: 'Pill',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['实验方案设计', '药理机制分析', 'SCI论文润色']
  },
  {
    id: '5',
    title: '国自然基金申请',
    description: '标书润色、创新点挖掘、专家预评审，提高中标率。',
    category: ServiceCategory.NSFC,
    iconName: 'Award',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['标书创新性评估', '多轮专家修改', '形式审查把关']
  },
  {
    id: '6',
    title: '语言润色服务',
    description: '母语专家润色，消除语言障碍，符合国际期刊发表标准。',
    category: ServiceCategory.QUALITY,
    iconName: 'Languages',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['翻译（中译英）服务', '润色服务', '返修指导']
  },
  {
    id: '7',
    title: '选刊指导',
    description: '根据文章质量与领域，精准推荐目标期刊，缩短投稿周期。',
    category: ServiceCategory.QUALITY,
    iconName: 'Compass',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['选刊推荐', '格式优化', '投稿指导']
  },
  {
    id: '8',
    title: '文章评审',
    description: '模拟审稿人视角，深度剖析文章不足，提出具体修改建议。',
    category: ServiceCategory.QUALITY,
    iconName: 'FileCheck',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    guaranteePoints: ['全文评审', '评审批注', '定稿评阅']
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 'c1',
    title: '肿瘤免疫微环境方向',
    journal: 'Molecular Cancer',
    impactFactor: 37.3,
    description: '协助客户挖掘TCGA数据，结合验证实验，历时8个月成功发表。',
    tags: ['生信分析', '肿瘤学', '高分SCI']
  },
  {
    id: 'c2',
    title: '心血管疾病临床预测模型',
    journal: 'European Heart Journal',
    impactFactor: 35.4,
    description: '指导多中心回顾性队列研究，构建新型风险预测评分。',
    tags: ['临床研究', '心血管', '预测模型']
  },
  {
    id: 'c3',
    title: '中药单体药理机制研究',
    journal: 'Phytomedicine',
    impactFactor: 7.9,
    description: '全程指导实验设计与数据分析，阐明中药抗炎机制。',
    tags: ['药学', '基础实验', '中医药']
  },
  {
    id: 'c4',
    title: '骨科生物材料应用',
    journal: 'Bioactive Materials',
    impactFactor: 18.9,
    description: '协助完成材料表征与体内外实验，从构思到接收仅10个月。',
    tags: ['生物材料', '骨科', '快速发表']
  }
];
