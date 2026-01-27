import { useAuth } from "../auth/useAuth";
import FamilyTreePage from "../family-tree/FamilyTreePage";

import { Sidebar } from "../layout/Sidebar";

const DashboardPage = () => {
  const { authUser } = useAuth();
  return (
    <main className="bg-linear-to-tr from-teal-500 to-yellow-200 ">
      <div className="grid grid-cols-7 h-screen backdrop-blur-3xl bg-white/10">
        <div className="col-span-1 border-r border-gray-100/20">
          <Sidebar />
        </div>

        <div className="col-span-6 grid grid-rows-7 p-3">
          <header className="row-span-1 flex flex-row justify-between py-2">
            <h1>Welcome back {authUser?.name}!</h1>
            <img
              src={authUser?.avatar}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </header>
          <div className="row-span-6 p-2 flex flex-wrap justify-center items-center backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30 ">
            <FamilyTreePage />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
