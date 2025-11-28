import React from 'react';
import { SUCCESS_CASES } from '../constants';
import { Star } from 'lucide-react';

export const CasesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">成功案例展示</h1>
          <p className="text-gray-600">用实力说话，见证每一个科研梦想的实现。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SUCCESS_CASES.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        IF: {item.impactFactor}
                    </span>
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                <div className="text-sm font-semibold text-brand-600 mb-4">{item.journal}</div>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};