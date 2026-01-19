import { Navigate } from "react-router-dom";
import { type JSX } from "react";
import { useAuth } from "./useAuth";

type Props = {
  children: JSX.Element;
};

export const AuthGuard = ({ children }: Props) => {
  const user = useAuth();

  const currentUser = user.authUser;

  if (currentUser === null) {
    return <Navigate to="/login" />;
  } else return children;
};
