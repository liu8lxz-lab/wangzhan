import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Search } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { user, registrations, allUsers } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'registrations' | 'users'>('registrations');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || !user.isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">后台管理系统</h1>
          <div className="text-sm text-gray-500">管理员: {user.username}</div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'registrations' 
                ? 'bg-brand-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText size={18} className="mr-2" />
            报名信息管理
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'users' 
                ? 'bg-brand-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Users size={18} className="mr-2" />
            注册用户管理
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h2 className="font-semibold text-gray-700">
              {activeTab === 'registrations' ? '报名列表' : '用户列表'}
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="搜索..." 
                className="pl-10 pr-4 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                {activeTab === 'registrations' ? (
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">姓名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">身份</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">科室</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">联系电话</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">提交时间</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用户名</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">邮箱</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  </tr>
                )}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeTab === 'registrations' ? (
                  registrations.length > 0 ? (
                    registrations
                      .filter(r => r.name.includes(searchTerm) || r.phone.includes(searchTerm))
                      .map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{reg.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            reg.role === '医生' ? 'bg-green-100 text-green-800' : 
                            reg.role === '医学生' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {reg.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.department}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reg.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(reg.createdAt).toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan={5} className="px-6 py-10 text-center text-gray-500">暂无报名数据</td></tr>
                  )
                ) : (
                  allUsers
                    .filter(u => u.username.includes(searchTerm))
                    .map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{u.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{u.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{u.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          活跃
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};