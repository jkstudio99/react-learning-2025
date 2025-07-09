import React from 'react'
import { Card, Row, Col, Statistic, Typography } from 'antd'
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, BarChartOutlined } from '@ant-design/icons'

const { Title } = Typography

const Dashboard: React.FC = () => {
  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Users"
              value={1128}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Orders"
              value={93}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Revenue"
              value={112893}
              prefix={<DollarOutlined />}
              precision={2}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Growth"
              value={11.28}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<BarChartOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Welcome to Clean Architecture with React + Ant Design">
            <p>This is a demo dashboard showcasing the clean architecture pattern with:</p>
            <ul>
              <li><strong>Domain Layer:</strong> Business entities and use cases</li>
              <li><strong>Infrastructure Layer:</strong> API calls, data storage, and external services</li>
              <li><strong>Presentation Layer:</strong> UI components, pages, and routing</li>
              <li><strong>Ant Design:</strong> Beautiful UI components with purple theme</li>
              <li><strong>NestJS Ready:</strong> Structured to work seamlessly with NestJS backend</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard 