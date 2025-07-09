import React from 'react'
import AppRoutes from './presentation/routes/AppRoutes'
import AppLayout from './presentation/components/common/Layout/Layout'
import './App.css'

const App: React.FC = () => {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export default App
