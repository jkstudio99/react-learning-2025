import React from 'react'
import { Card, Typography, Row, Col, Button, Space } from 'antd'
import { GithubOutlined, BookOutlined, RocketOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  return (
    <div>
      <Title level={2}>Welcome to React Clean Architecture</Title>
      
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Title level={3}>🎯 Project Overview</Title>
            <Paragraph>
              This project demonstrates a clean architecture implementation using React, TypeScript, 
              and Ant Design with a beautiful purple theme. The architecture is designed to be 
              scalable, maintainable, and ready for integration with NestJS backend services.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card 
            title="🏗️ Clean Architecture"
            extra={<BookOutlined />}
          >
            <Paragraph>
              Organized into distinct layers: Domain, Infrastructure, and Presentation.
              Each layer has clear responsibilities and dependencies flow inward.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card 
            title="🎨 Ant Design"
            extra={<RocketOutlined />}
          >
            <Paragraph>
              Beautiful UI components with custom purple theme. Professional design 
              system with consistent styling and user experience.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card 
            title="🔧 NestJS Ready"
            extra={<GithubOutlined />}
          >
            <Paragraph>
              Structured to work seamlessly with NestJS backend. API services, 
              repositories, and data models are ready for integration.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="🚀 Get Started">
            <Paragraph>
              Explore the different sections of the application:
            </Paragraph>
            <Space wrap>
              <Button type="primary" href="/dashboard">
                View Dashboard
              </Button>
              <Button href="/users">
                Manage Users
              </Button>
              <Button href="/settings">
                Settings
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card title="📁 Project Structure">
            <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 4 }}>
{`src/
├── domain/              # Business logic and entities
│   ├── entities/        # Business entities
│   ├── repositories/    # Repository interfaces
│   └── useCases/        # Business use cases
├── infrastructure/      # External services and data
│   ├── api/            # API clients
│   ├── repositories/   # Repository implementations
│   └── storage/        # Local storage utilities
├── presentation/       # UI components and pages
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── routes/         # Route configuration
└── shared/             # Shared utilities
    ├── types/          # TypeScript types
    ├── utils/          # Helper functions
    └── constants/      # Application constants`}
            </pre>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home 