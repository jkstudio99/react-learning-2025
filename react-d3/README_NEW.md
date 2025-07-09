# React D3 App

A modern React application with TypeScript, Ant Design, and NestJS backend integration.

## 🚀 Features

- **Modern Stack**: React 19 + TypeScript + Vite
- **UI Framework**: Ant Design components
- **State Management**: React hooks and context
- **API Integration**: Axios with interceptors
- **Authentication**: JWT token handling
- **Clean Architecture**: Organized folder structure
- **Type Safety**: Full TypeScript support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── constants/          # Application constants
```

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Update `.env.local` with your configuration

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Other available scripts:
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:3000)
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version

### Backend Requirements

This app is designed to work with a NestJS backend with the following endpoints:

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /auth/profile` - Get current user profile
- `POST /auth/logout` - User logout
- `GET /users` - Get users list
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## 📦 Dependencies

### Main Dependencies
- **React** - UI library
- **TypeScript** - Type safety
- **Ant Design** - UI components
- **Axios** - HTTP client
- **React Router** - Navigation

### Development Dependencies
- **Vite** - Build tool
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 🎨 Styling

The app uses Ant Design's theming system. You can customize the theme in `src/App.tsx`:

```typescript
const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 6,
  },
};
```

## 🔒 Authentication

The app includes JWT token handling with:
- Automatic token refresh
- Request/response interceptors
- Protected routes
- Logout functionality

## 📝 API Integration

All API calls go through the centralized service layer:
- `authService` - Authentication operations
- `userService` - User management
- `uploadService` - File uploads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
