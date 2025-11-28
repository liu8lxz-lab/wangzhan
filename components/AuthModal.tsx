import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Modal, Input, Button } from './UI';
import { useNavigate } from 'react-router-dom';

export const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal, modalMode, login, openModal } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    
    setError('');
    // Simulate API call delay
    setTimeout(async () => {
      const success = await login(username, password);
      if (success) {
        setUsername('');
        setPassword('');
        if (username === 'admin') {
          navigate('/admin');
        }
      } else {
        setError('登录失败');
      }
    }, 500);
  };

  const isLogin = modalMode === 'login';

  return (
    <Modal 
      isOpen={isModalOpen} 
      onClose={closeModal} 
      title={isLogin ? '欢迎回来' : '注册账号'}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="用户名" 
          placeholder="请输入用户名" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isLogin && (
          <Input 
            label="邮箱" 
            type="email"
            placeholder="example@email.com" 
          />
        )}
        <Input 
          label="密码" 
          type="password" 
          placeholder="请输入密码" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
           <Input 
           label="确认密码" 
           type="password" 
           placeholder="请再次输入密码" 
         />
        )}
        
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="pt-2">
          <Button type="submit" className="w-full">
            {isLogin ? '立即登录' : '立即注册'}
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? '还没有账号？' : '已有账号？'}
          <button 
            type="button"
            className="text-brand-600 hover:underline ml-1 font-medium"
            onClick={() => openModal(isLogin ? 'register' : 'login')}
          >
            {isLogin ? '去注册' : '去登录'}
          </button>
        </div>
      </form>
    </Modal>
  );
};