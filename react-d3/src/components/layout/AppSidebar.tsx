import React from 'react';
import { Layout, Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  SettingOutlined,
  TableOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

interface AppSidebarProps {
  collapsed: boolean;
  selectedKey: string;
  onMenuSelect: (key: string) => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ 
  collapsed, 
  selectedKey, 
  onMenuSelect 
}) => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'dashboard',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'users',
      icon: <UserOutlined />,
      label: 'Users',
    },
    {
      key: 'tables',
      icon: <TableOutlined />,
      label: 'Tables',
    },
    {
      key: 'charts',
      icon: <BarChartOutlined />,
      label: 'Charts',
    },
    {
      type: 'divider',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
  ];

  return (
    <Sider 
      trigger={null} 
      collapsible 
      collapsed={collapsed}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 1000,
      }}
    >
      <div className="logo" style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold'
      }}>
        {collapsed ? 'RD3' : 'React D3'}
      </div>
      
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        items={menuItems}
        onClick={({ key }) => onMenuSelect(key)}
      />
    </Sider>
  );
};
