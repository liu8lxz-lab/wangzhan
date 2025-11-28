import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWidget } from './components/FloatingWidget';
import { AuthModal } from './components/AuthModal';
import { RegistrationModal } from './components/RegistrationModal';
import { AIChatWidget } from './components/AIChatWidget';

// Pages
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { NSFCPage } from './pages/NSFC';
import { CasesPage } from './pages/Cases';
import { AdminDashboard } from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased bg-gray-50">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sci" element={<ServicesPage />} />
              <Route path="/quality" element={<ServicesPage />} />
              <Route path="/nsfc" element={<NSFCPage />} />
              <Route path="/cases" element={<CasesPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />
          <FloatingWidget />
          <AIChatWidget />
          <AuthModal />
          <RegistrationModal />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;