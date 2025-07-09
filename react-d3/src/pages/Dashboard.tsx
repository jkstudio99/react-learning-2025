import React from 'react';
import { Card, Row, Col, Statistic, Table, Typography } from 'antd';
import { 
  UserOutlined, 
  ShoppingCartOutlined, 
  DollarOutlined,
  RiseOutlined 
} from '@ant-design/icons';

const { Title } = Typography;

export const Dashboard: React.FC = () => {
  // Sample data
  const stats = [
    {
      title: 'Total Users',
      value: 1234,
      icon: <UserOutlined />,
      color: '#1890ff',
    },
    {
      title: 'Total Orders',
      value: 567,
      icon: <ShoppingCartOutlined />,
      color: '#52c41a',
    },
    {
      title: 'Revenue',
      value: 89012,
      prefix: '$',
      icon: <DollarOutlined />,
      color: '#faad14',
    },
    {
      title: 'Growth',
      value: 12.5,
      suffix: '%',
      icon: <RiseOutlined />,
      color: '#f5222d',
    },
  ];

  const recentActivities = [
    {
      key: '1',
      action: 'User Registration',
      user: 'John Doe',
      time: '2 minutes ago',
      status: 'success',
    },
    {
      key: '2',
      action: 'New Order',
      user: 'Jane Smith',
      time: '5 minutes ago',
      status: 'processing',
    },
    {
      key: '3',
      action: 'Payment Completed',
      user: 'Bob Johnson',
      time: '10 minutes ago',
      status: 'success',
    },
  ];

  const columns = [
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span style={{ 
          color: status === 'success' ? '#52c41a' : '#faad14',
          textTransform: 'capitalize'
        }}>
          {status}
        </span>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Recent Activities">
            <Table
              dataSource={recentActivities}
              columns={columns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="Quick Actions">
            <p>Chart or other widgets can go here</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
