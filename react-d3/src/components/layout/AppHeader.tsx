import React from 'react';
import { Layout, Avatar, Dropdown, Space, Typography, Button } from 'antd';
import { 
  UserOutlined, 
  LogoutOutlined, 
  SettingOutlined,
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header } = Layout;
const { Text } = Typography;

interface AppHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
  user?: {
    name: string;
    avatar?: string;
  };
  onLogout: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ 
  collapsed, 
  onToggle, 
  user, 
  onLogout 
}) => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: onLogout,
    },
  ];

  return (
    <Header 
      style={{ 
        padding: '0 16px', 
        background: '#fff', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Text strong style={{ marginLeft: 16 }}>
          React D3 App
        </Text>
      </div>

      <Space>
        <Button type="text" icon={<BellOutlined />} />
        
        {user && (
          <Dropdown
            menu={{ items: userMenuItems }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Space style={{ cursor: 'pointer' }}>
              <Avatar 
                size="small" 
                src={user.avatar} 
                icon={<UserOutlined />} 
              />
              <Text>{user.name}</Text>
            </Space>
          </Dropdown>
        )}
      </Space>
    </Header>
  );
};
