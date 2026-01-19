import { useNavigate } from "react-router-dom";

import {
  RiHome2Line,
  RiLogoutCircleLine,
  RiGroupLine,
  RiEditLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export const Sidebar = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <div className="flex flex-col gap-10 justify-center">
      <img src={authUser?.avatar} alt="" className="w-10 h-10 rounded-full" />
      <nav className="flex flex-col justify-center gap-10 align-">
        <Link to={"/dashboard"} className="hover">
          <RiHome2Line size={25} />
        </Link>
        <Link to={"/dashboard"}>
          <RiGroupLine size={25} />
        </Link>
        <Link to={"/dashboard"}>
          <RiEditLine size={25} />
        </Link>
        <button type="button" onClick={handleLogOut} title="logout">
          <RiLogoutCircleLine size={25} />
        </button>
      </nav>
    </div>
  );
};
