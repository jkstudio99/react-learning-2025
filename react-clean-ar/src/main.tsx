import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Purple theme configuration for Ant Design
const purpleTheme = {
  token: {
    colorPrimary: '#722ed1',
    colorPrimaryHover: '#9254de',
    colorPrimaryActive: '#531dab',
    colorLink: '#722ed1',
    colorLinkHover: '#9254de',
    colorLinkActive: '#531dab',
    borderRadius: 6,
  },
  components: {
    Layout: {
      headerBg: '#722ed1',
      siderBg: '#f0f0f0',
    },
    Menu: {
      itemSelectedBg: '#f9f0ff',
      itemSelectedColor: '#722ed1',
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={purpleTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
