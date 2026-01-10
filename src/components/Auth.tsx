import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Auth;
