import React from 'react'
import { Layout } from 'antd'
import AppRoutes from './presentation/routes/AppRoutes'
import AppLayout from './presentation/components/common/Layout/Layout'
import './App.css'

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Layout>
  )
}

export default App
