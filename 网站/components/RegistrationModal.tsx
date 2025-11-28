import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Modal, Input, Button } from './UI';

export const RegistrationModal: React.FC = () => {
  const { isRegModalOpen, closeRegModal, addRegistration } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    role: '医学生',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    addRegistration(formData as any);
    
    alert('报名成功！我们的顾问会尽快联系您。');
    closeRegModal();
    setFormData({ name: '', department: '', role: '医学生', phone: '' });
  };

  return (
    <Modal 
      isOpen={isRegModalOpen} 
      onClose={closeRegModal} 
      title="立即报名"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm text-gray-500 mb-4">填写您的基本信息，我们将为您安排专属科研顾问进行一对一评估。</p>
        
        <Input 
          label="称呼" 
          name="name"
          placeholder="请输入您的姓名" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input 
          label="所在科室/专业" 
          name="department"
          placeholder="例如：心内科、基础医学" 
          value={formData.department}
          onChange={handleChange}
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">身份</label>
          <select 
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
          >
            <option value="医学生">医学生</option>
            <option value="医生">医生</option>
            <option value="其他">其他</option>
          </select>
        </div>

        <Input 
          label="联系电话" 
          name="phone"
          type="tel"
          placeholder="请输入手机号码" 
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <div className="pt-4">
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            提交报名
          </Button>
        </div>
      </form>
    </Modal>
  );
};