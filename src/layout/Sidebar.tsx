import { useNavigate } from "react-router-dom";
import { IoLogOut, IoPersonCircle } from "react-icons/io5";
import {
  MdAccountTree,
  MdDashboardCustomize,
  MdSettings,
} from "react-icons/md";
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
    <div className="grid grid-row-5 p-3 h-screen ">
      <p className="row-span-1 py-2 px-5 flex justify-start text-lg gap-2 text-center font-normal font-poppins antialiased">
        usrati <span className="font-extrabold"> jannati</span>
      </p>
      <nav className=" row-span-4 flex flex-col w-full justify-start align-middle gap-2 text-base font-normal tracking-wide subpixel-antialiased  ">
        <div className="hover:border-b hover:border-gray-100/20 px-1 py-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 items-center align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-600 hover:text-yellow-200 hover:subpixel-antialiased "
          >
            <IoPersonCircle size={24} />
            <p>Profile</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 items-center align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-600 hover:text-yellow-200 hover:subpixel-antialiased"
          >
            <MdAccountTree size={20} />
            <p>Family Tree</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-600 hover:text-yellow-200 hover:subpixel-antialiased"
          >
            <MdDashboardCustomize size={20} />
            <p>Dashboard</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-600 hover:text-yellow-200 hover:subpixel-antialiased"
          >
            <MdSettings size={20} />
            <p>Settings</p>
          </Link>
        </div>
      </nav>
      <div className="row-span-1 hover:border-b hover:border-gray-100/20 px-1 py-3 w-full">
        <button
          type="button"
          onClick={handleLogOut}
          title="logout"
          className="text-sm font-medium tracking-wide subpixel-antialiased font-roboto flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-600 hover:text-yellow-200 hover:subpixel-antialiased"
        >
          <IoLogOut size={20} />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};
