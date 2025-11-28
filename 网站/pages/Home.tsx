import React from 'react';
import { ArrowRight, BookOpen, Users, Trophy, Award } from 'lucide-react';
import { Button } from '../components/UI';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 to-brand-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/bg/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              让科研更简单 <br/>
              <span className="text-brand-300">让发表更轻松</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
              英创科研猫 —— 您的终身科研合作伙伴。提供从选题到发表的一站式学术服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => navigate('/sci')}
              >
                探索 SCI 辅导
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-900 px-8 py-4 text-lg rounded-full"
                onClick={() => navigate('/cases')}
              >
                查看成功案例
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-sm relative -mt-8 z-20 mx-4 md:mx-auto md:max-w-6xl rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-600">5000+</div>
            <div className="text-gray-600">服务客户</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-600">100+</div>
            <div className="text-gray-600">专家团队</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-brand-600">10+</div>
            <div className="text-gray-600">行业经验</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的核心服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">覆盖科研全生命周期，为您提供专业、精准、高效的学术支持</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 group cursor-pointer" onClick={() => navigate('/sci')}>
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-brand-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  了解详情 <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://picsum.photos/seed/team/600/400" alt="Team" className="rounded-2xl shadow-2xl" />
            </div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">为什么选择英创科研猫？</h2>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">顶尖专家团队</h3>
                  <p className="text-gray-600">汇聚海内外名校博士、博后及期刊审稿人，提供最权威的学术指导。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                  <Trophy size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">全流程质量把控</h3>
                  <p className="text-gray-600">从初稿到接收，每一个环节都有专人把关，确保文章质量达到发表标准。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">科研诚信保障</h3>
                  <p className="text-gray-600">严格遵守学术伦理道德，签署保密协议，保障您的数据与知识产权安全。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">准备好开启您的科研晋升之路了吗？</h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto">立即注册，获取免费的科研评估报告，更有资深顾问一对一答疑。</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600 px-8 py-3 text-lg" onClick={() => navigate('/sci')}>
            免费咨询
          </Button>
        </div>
      </section>
    </div>
  );
};