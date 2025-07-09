import { ConfigProvider } from 'antd';
import { MainLayout } from './components/layout';
import { Dashboard } from './pages';
import 'antd/dist/reset.css';

// Ant Design theme configuration
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
