import { useNavigate } from "react-router-dom";

import { RiHome2Line } from "react-icons/ri";
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <nav className="flex flex-col justify-end gap-10 align-">
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
  );
};
export default Sidebar;
