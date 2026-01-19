import { createContext } from "react";
import type { AuthUser } from "../types/AuthUser";

type AuthContextValue = {
  authUser: AuthUser | null;
  login: (authUser: AuthUser) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
