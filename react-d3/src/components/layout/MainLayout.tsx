import React, { useState } from 'react';
import { Layout } from 'antd';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { STORAGE_KEYS } from '../../constants';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');

  // Get user from localStorage
  const user = (() => {
    try {
      const userData = localStorage.getItem(STORAGE_KEYS.USER);
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  })();

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuSelect = (key: string) => {
    setSelectedKey(key);
    // Handle navigation logic here
    console.log('Navigate to:', key);
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    window.location.href = '/login';
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar 
        collapsed={collapsed} 
        selectedKey={selectedKey} 
        onMenuSelect={handleMenuSelect} 
      />
      
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all 0.2s' }}>
        <AppHeader 
          collapsed={collapsed} 
          onToggle={handleToggle} 
          user={user} 
          onLogout={handleLogout} 
        />
        
        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          minHeight: 280,
          background: '#fff',
          borderRadius: '8px'
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
