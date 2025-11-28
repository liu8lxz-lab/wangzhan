import React from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">英创科研猫</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              医学研究者做科研如同一次蜕变之旅，旨在提升自我，但过程往往充满挑战。我们致力于解析科研规律、归纳成功范式，旨在金针度人，助力您成长为精通科研的医学创新人才。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-400">快速导航</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#/" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#/sci" className="hover:text-white transition-colors">SCI 辅导</a></li>
              <li><a href="#/nsfc" className="hover:text-white transition-colors">国自然基金</a></li>
              <li><a href="#/cases" className="hover:text-white transition-colors">成功案例</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-400">核心服务</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Meta分析与生信挖掘</li>
              <li>临床与药学研究指导</li>
              <li>文章润色与发表支持</li>
              <li>课题设计与评审</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-400">联系我们</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>15337170322</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>494201012@qq.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>武汉市江汉区中央商务区泛海国际SOHO城4幢19层1906</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Yingchuang Research Cat. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};