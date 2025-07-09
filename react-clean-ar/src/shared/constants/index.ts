export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api",
  TIMEOUT: 10000,
} as const;

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  SETTINGS: "/settings",
} as const;

export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
} as const;

export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export const THEME_COLORS = {
  PRIMARY: "#722ed1",
  PRIMARY_HOVER: "#9254de",
  PRIMARY_ACTIVE: "#531dab",
  SUCCESS: "#52c41a",
  WARNING: "#faad14",
  ERROR: "#ff4d4f",
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: "authToken",
  USER_DATA: "userData",
  THEME: "theme",
} as const;
