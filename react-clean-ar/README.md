# React Clean Architecture with Ant Design

🎯 **A modern React application built with Clean Architecture principles, TypeScript, and Ant Design with a beautiful purple theme.**

## 🏗️ Architecture Overview

This project implements Clean Architecture with the following layers:

### 📁 Project Structure

```
src/
├── domain/              # Business logic and entities
│   ├── entities/        # Business entities (User, etc.)
│   ├── repositories/    # Repository interfaces
│   └── useCases/        # Business use cases
├── infrastructure/      # External services and data
│   ├── api/            # API clients (NestJS integration ready)
│   ├── repositories/   # Repository implementations
│   └── storage/        # Local storage utilities
├── presentation/       # UI components and pages
│   ├── components/     # Reusable UI components
│   │   ├── common/     # Common components (Layout, Loading)
│   │   └── features/   # Feature-specific components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   └── routes/         # Route configuration
└── shared/             # Shared utilities
    ├── types/          # TypeScript types
    ├── utils/          # Helper functions
    └── constants/      # Application constants
```

## 🚀 Features

- ✅ **Clean Architecture** - Organized, maintainable, and scalable code structure
- ✅ **TypeScript** - Full type safety and better developer experience
- ✅ **Ant Design** - Beautiful UI components with custom purple theme
- ✅ **React Router** - Client-side routing with protected routes
- ✅ **NestJS Ready** - API layer structured for NestJS backend integration
- ✅ **Responsive Design** - Mobile-first responsive layout
- ✅ **Mock Data** - Development-ready with mock data for testing
- ✅ **Error Handling** - Comprehensive error handling and validation
- ✅ **Local Storage** - Utility functions for browser storage
- ✅ **Axios Integration** - HTTP client with interceptors and error handling

## 🎨 UI Features

- **Purple Theme** - Custom Ant Design theme with purple color scheme
- **Dashboard** - Statistics cards and overview information
- **User Management** - CRUD operations for user management
- **Responsive Layout** - Sidebar navigation with mobile support
- **Loading States** - Proper loading and error states throughout the app

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Create environment file (optional):**

   ```bash
   # Create .env file for custom API URL
   echo "VITE_API_BASE_URL=http://localhost:3001/api" > .env
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```

## 🔌 NestJS Integration

This frontend is structured to work seamlessly with a NestJS backend. The API layer includes:

- **ApiClient** - Axios-based HTTP client with interceptors
- **Repository Pattern** - Clean separation between data access and business logic
- **Mock Data** - Fallback data when backend is not available
- **Error Handling** - Proper error propagation from API to UI

### Expected NestJS API Endpoints:

```typescript
GET    /api/users           # Get all users
GET    /api/users/:id       # Get user by ID
GET    /api/users/email/:email # Get user by email
POST   /api/users           # Create new user
PUT    /api/users/:id       # Update user
DELETE /api/users/:id       # Delete user
```

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Clean Architecture Benefits

1. **Independence** - Business rules don't depend on UI, database, or external services
2. **Testability** - Easy to test business logic in isolation
3. **Flexibility** - Easy to change UI frameworks or databases
4. **Maintainability** - Clear separation of concerns makes code easier to maintain
5. **Scalability** - Structure supports large team development

## 🔧 Customization

### Theme Customization

The purple theme can be customized in `src/main.tsx`:

```typescript
const purpleTheme = {
  token: {
    colorPrimary: "#722ed1", // Change primary color
    colorPrimaryHover: "#9254de",
    colorPrimaryActive: "#531dab",
    // ... other theme tokens
  },
};
```

### Adding New Features

1. **Create Entity** in `src/domain/entities/`
2. **Define Repository Interface** in `src/domain/repositories/`
3. **Implement Use Cases** in `src/domain/useCases/`
4. **Create Repository Implementation** in `src/infrastructure/repositories/`
5. **Build UI Components** in `src/presentation/components/`
6. **Add Pages** in `src/presentation/pages/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the clean architecture principles
4. Ensure TypeScript types are properly defined
5. Test your changes
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using React, TypeScript, Ant Design, and Clean Architecture principles.**
