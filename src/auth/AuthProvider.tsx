import React, { useState } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "../types/AuthUser";
import { AuthContext } from "./AuthContext";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const login = (user: AuthUser) => {
    setAuthUser(user);
  };

  const logout = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
