import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Registration } from '../types';

interface AuthContextType {
  user: User | null;
  login: (username: string, password?: string) => Promise<boolean>;
  logout: () => void;
  isModalOpen: boolean;
  openModal: (mode: 'login' | 'register') => void;
  closeModal: () => void;
  modalMode: 'login' | 'register';
  // Registration Logic
  isRegModalOpen: boolean;
  openRegModal: () => void;
  closeRegModal: () => void;
  registrations: Registration[];
  addRegistration: (data: Omit<Registration, 'id' | 'createdAt'>) => void;
  // Admin Data
  allUsers: User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');
  
  // Registration State
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>([
    { id: '1', name: '张三', department: '心内科', role: '医生', phone: '13800138000', createdAt: new Date().toISOString() },
    { id: '2', name: '李四', department: '研究生院', role: '医学生', phone: '13900139000', createdAt: new Date(Date.now() - 86400000).toISOString() },
  ]);

  // Mock Users DB
  const [allUsers, setAllUsers] = useState<User[]>([
    { id: 'u1', username: 'student_zhang', email: 'zhang@example.com' },
    { id: 'u2', username: 'dr_wang', email: 'wang@hospital.com' },
  ]);

  const login = async (username: string, password?: string): Promise<boolean> => {
    // Admin check
    if (username === 'admin' && password === 'admin') {
      setUser({
        id: 'admin',
        username: 'admin',
        email: 'admin@researchcat.com',
        isAdmin: true
      });
      closeModal();
      return true;
    }

    // Normal mock login
    const newUser = {
      id: Date.now().toString(),
      username,
      email: `${username}@example.com`
    };
    
    setUser(newUser);
    // Add to mock users list if not exists
    if (!allUsers.find(u => u.username === username)) {
      setAllUsers(prev => [...prev, newUser]);
    }
    
    closeModal();
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const openModal = (mode: 'login' | 'register') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openRegModal = () => setIsRegModalOpen(true);
  const closeRegModal = () => setIsRegModalOpen(false);

  const addRegistration = (data: Omit<Registration, 'id' | 'createdAt'>) => {
    const newReg: Registration = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setRegistrations(prev => [newReg, ...prev]);
  };

  return (
    <AuthContext.Provider value={{ 
      user, login, logout, 
      isModalOpen, openModal, closeModal, modalMode,
      isRegModalOpen, openRegModal, closeRegModal,
      registrations, addRegistration,
      allUsers
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};