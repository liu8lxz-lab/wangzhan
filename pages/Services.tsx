import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import { Button } from '../components/UI';
import { CheckCircle2 } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

export const ServicesPage: React.FC = () => {
  const { openRegModal } = useAuth();
  const categories = [ServiceCategory.SCI, ServiceCategory.QUALITY];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">全方位科研服务体系</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">针对不同阶段、不同需求的科研人员，提供定制化的解决方案。</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {categories.map((cat) => {
          const catServices = SERVICES.filter(s => s.category === cat);
          
          return (
            <div key={cat}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-brand-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">{cat}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {catServices.map(service => (
                  <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
                    <div className="md:w-2/5 h-48 md:h-auto relative">
                      <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                            {service.guaranteePoints.map((point, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-500">
                                    <CheckCircle2 size={14} className="text-brand-500 mr-2 flex-shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                      </div>
                      <Button className="w-fit self-start" onClick={openRegModal}>立即咨询</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};