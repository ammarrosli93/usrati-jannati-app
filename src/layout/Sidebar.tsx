import { useNavigate } from "react-router-dom";
import { IoLogOut, IoPersonCircle } from "react-icons/io5";
import {
  MdAccountTree,
  MdDashboardCustomize,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };
  return (
    <div className="grid grid-row-5 h-screen justify-center w-full py-1">
      <div className="row-span-1 flex justify-center items-center text-lg gap-1 font-normal font-poppins antialiased h-auto">
        <p>usrati</p>
        <p className="font-bold"> jannati</p>
      </div>
      <nav className=" row-span-4 flex flex-col w-full gap-2 items-center h-auto text-sm font-medium font-inter tracking-wide subpixel-antialiased ">
        <div className="hover:border-b hover:border-gray-100/20 px-1 py-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 items-center align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-700 hover:text-yellow-300 hover:subpixel-antialiased "
          >
            <IoPersonCircle size={24} />
            <p>Profile</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 items-center align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-700 hover:text-yellow-300 hover:subpixel-antialiased"
          >
            <MdAccountTree size={20} />
            <p>Family Tree</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-700 hover:text-yellow-300 hover:subpixel-antialiased"
          >
            <MdDashboardCustomize size={20} />
            <p>Dashboard</p>
          </Link>
        </div>
        <div className="hover:border-b hover:border-gray-100/20 px-1 pb-3 w-full">
          <Link
            to={"/dashboard"}
            className="flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-700 hover:text-yellow-300 hover:subpixel-antialiased"
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
          className="text-sm font-medium font-inter tracking-wide subpixel-antialiased  flex flex-row gap-3 p-3 align-middle hover:w-full hover:h-5rem hover:rounded-xl hover:bg-teal-700 hover:text-yellow-300 hover:subpixel-antialiased"
        >
          <IoLogOut size={20} />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};
