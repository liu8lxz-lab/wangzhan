import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, LogOut, ShieldCheck } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';
import { NAV_LINKS } from '../constants';
import { Button } from './UI';
import logoImg from './logo.png';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, openModal, openRegModal } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.hash = '/'}>
            <img 
              src= {logoImg}
              alt="英创科研猫" 
              className="h-12 w-auto object-contain" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive ? 'text-brand-600 font-bold' : 'text-gray-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
             <Button 
                onClick={openRegModal}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition-all"
              >
                我要报名
              </Button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                 {user.isAdmin && (
                   <button 
                    onClick={() => navigate('/admin')}
                    className="flex items-center gap-1 text-gray-600 hover:text-brand-600"
                    title="后台管理"
                   >
                     <ShieldCheck size={18} />
                     <span className="text-sm font-medium">后台</span>
                   </button>
                 )}
                 <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                        <UserIcon size={18} />
                    </div>
                    <span className="text-sm font-medium">{user.username}</span>
                 </div>
                 <button onClick={() => { logout(); navigate('/'); }} className="text-gray-400 hover:text-red-500" title="退出登录">
                    <LogOut size={18} />
                 </button>
              </div>
            ) : (
              <>
                <button onClick={() => openModal('login')} className="text-sm font-medium text-gray-600 hover:text-brand-600">登录</button>
                <Button onClick={() => openModal('register')} className="text-sm">注册</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-brand-50 text-brand-600' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
             <div className="px-3 py-2">
                <Button onClick={() => {openRegModal(); setIsMenuOpen(false);}} className="w-full justify-center bg-orange-500 hover:bg-orange-600">我要报名</Button>
             </div>
             <div className="border-t border-gray-100 pt-4 mt-4">
                {user ? (
                     <div className="flex items-center justify-between px-3">
                        <div className="flex items-center gap-2">
                             <UserIcon size={18} />
                             <span>{user.username}</span>
                             {user.isAdmin && <span className="bg-brand-100 text-brand-600 text-xs px-2 py-0.5 rounded">Admin</span>}
                        </div>
                        <div className="flex gap-4">
                            {user.isAdmin && <button onClick={() => {navigate('/admin'); setIsMenuOpen(false);}} className="text-brand-600 text-sm">后台</button>}
                            <button onClick={() => {logout(); navigate('/');}} className="text-red-500 text-sm">退出</button>
                        </div>
                     </div>
                ) : (
                    <div className="flex flex-col gap-2 px-3">
                         <Button onClick={() => {openModal('login'); setIsMenuOpen(false);}} variant="outline" className="w-full justify-center">登录</Button>
                         <Button onClick={() => {openModal('register'); setIsMenuOpen(false);}} className="w-full justify-center">注册</Button>
                    </div>
                )}
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};
