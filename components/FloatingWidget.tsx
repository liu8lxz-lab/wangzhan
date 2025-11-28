import React, { useState } from 'react';
import { MessageCircle, Phone, QrCode } from 'lucide-react';
import wechatImg from './wechat.jpg';

export const FloatingWidget: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = [
    { 
      id: 'wechat', 
      icon: <QrCode size={24} />, 
      label: '公众号', 
      content: (
        <div className="p-2 bg-white rounded-lg shadow-xl text-center">
          <img 
            src={wechatImg}
            alt="WeChat QR" 
            className="w-40 h-auto mb-2 mx-auto object-contain" 
          />
          <p className="text-xs text-gray-600">扫码关注英创科研猫</p>
        </div>
      )
    },
    { 
      id: 'service', 
      icon: <MessageCircle size={24} />, 
      label: '客服',
      content: (
        <div className="p-4 bg-white rounded-lg shadow-xl text-center w-56">
          <div className="font-bold text-brand-600 mb-2">专属客服</div>
          <p className="text-xs text-gray-500 mb-3">工作日 9:00-18:00</p>
          
          <div className="space-y-2">
            <a href="tel:15337170322" className="flex items-center justify-center gap-2 bg-brand-500 text-white text-sm py-2 rounded hover:bg-brand-600 transition-colors">
              <Phone size={14} />
              <span className="font-medium">15337170322</span>
            </a>
            <div className="flex flex-col gap-1 bg-gray-50 p-2 rounded border border-gray-100">
               <span className="text-xs text-gray-500">客服微信</span>
               <span className="text-sm font-bold text-gray-800 select-all">qwe95902</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed right-4 bottom-32 z-40 flex flex-col gap-3">
      {items.map((item) => (
        <div 
          key={item.id}
          className="relative group flex flex-row-reverse items-center"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Button */}
          <button className="w-12 h-12 bg-white text-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all duration-300 z-10">
            {item.icon}
          </button>

          {/* Popup Content */}
          <div 
            className={`absolute right-14 top-1/2 transform -translate-y-1/2 transition-all duration-300 origin-right
              ${hoveredItem === item.id ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4 pointer-events-none'}`}
          >
            {item.content}
            {/* Arrow */}
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
