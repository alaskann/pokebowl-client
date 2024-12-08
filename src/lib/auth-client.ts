import { createAuthClient } from "better-auth/react";

// const baseURL = import.meta.env.API_BASE_URL;

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  changePassword,
  deleteUser,
} = authClient;
