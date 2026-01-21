import { useNavigate } from "react-router-dom";

import {
  MdDashboardCustomize,
  MdSettings,
  MdPersonPin,
  MdAccountTree,
  MdOutlineLogout,
} from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";

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
    <div className="grid grid-rows-7 border-r border-r-white/30 h-screen p-5">
      <div className="row-span-1 border-b border-b-white/40 flex flex-col gap-3 justify-evenly items-center align-middle">
        <p className="text-xl font-lexend tracking-wide font-medium">
          usrati <span className="font-bold">jannati</span>
        </p>
      </div>
      <div className="row-span-4 flex justify-center items-center border-b border-white/40">
        <nav className="font-lexend flex flex-col justify-evenly text-xs font-medium tracking-wide antialiased md:subpixel-antialiased h-full  w-full">
          <Link
            to={"/dashboard"}
            className="text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
          >
            <MdPersonPin size={20} />
            <p>Profile</p>
          </Link>

          <Link
            to={"/dashboard"}
            className="text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
          >
            <MdAccountTree size={20} />
            <p>Family Tree</p>
          </Link>

          <Link
            to={"/dashboard"}
            className="text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
          >
            <MdDashboardCustomize size={20} />
            <p>Home</p>
          </Link>

          <Link
            to={"/dashboard"}
            className="text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
          >
            <IoMdInformationCircle size={20} />
            <p>About Us</p>
          </Link>

          <Link
            to={"/dashboard"}
            className=" text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
          >
            <MdSettings size={20} />
            <p>Settings</p>
          </Link>
        </nav>
      </div>

      <div className="row-span-1 flex items-start font-lexend text-xs font-medium tracking-wide antialiased md:subpixel-antialiased">
        <button
          type="button"
          onClick={handleLogOut}
          title="logout"
          className="text-sm flex flex-row gap-3 p-3 rounded-xl hover:bg-teal-400 w-full hover:text-yellow-200"
        >
          <MdOutlineLogout size={20} />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};
