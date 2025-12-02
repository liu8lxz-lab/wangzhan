import React from 'react';
import { Button } from '../components/UI';
import { Target, FileText, Users, TrendingUp } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

export const NSFCPage: React.FC = () => {
  const { openRegModal } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <span className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">国自然基金专题</span>
             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">助您从激烈的竞争中<br/><span className="text-yellow-400">脱颖而出</span></h1>
             <p className="text-xl text-blue-100 mb-8">从标书选题到最终定稿，全程专家把脉，深度挖掘创新点，显著提升中标率。</p>
             <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3" onClick={openRegModal}>标书评估</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
             {/* Updated Image: Strategic planning / Meeting */}
             <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800" alt="Grant Strategy" className="rounded-lg shadow-2xl transform rotate-2 border-4 border-blue-800" />
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">我们的辅导流程</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

          {[
            { icon: <Target />, title: '选题策划', desc: '结合学科热点与个人基础，锁定高命中率方向' },
            { icon: <FileText />, title: '标书撰写', desc: '逻辑严密，语言精炼，展现完美的学术故事' },
            { icon: <Users />, title: '专家评审', desc: '函评专家模拟评审，提前预知并规避风险' },
            { icon: <TrendingUp />, title: '最终润色', desc: '排版精美，图表专业，细节决定成败' },
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gray-50 py-20">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们的基金辅导？</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-800 text-white p-4 font-bold text-center">
                    <div>对比项</div>
                    <div>普通机构</div>
                    <div className="text-yellow-400">英创科研猫</div>
                </div>
                <div className="divide-y divide-gray-100">
                    {[
                        { name: '专家资质', bad: '在读博士为主', good: '正副高职称、函评专家' },
                        { name: '服务深度', bad: '仅修改语言', good: '深度挖掘创新点、优化逻辑' },
                        { name: '保密机制', bad: '口头承诺', good: '签署法律效力保密协议' },
                        { name: '售后保障', bad: '交付即止', good: '全程跟踪至提交，甚至上会' },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-4 text-center hover:bg-gray-50">
                            <div className="font-medium text-gray-900">{row.name}</div>
                            <div className="text-gray-500">{row.bad}</div>
                            <div className="text-brand-600 font-bold">{row.good}</div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};
