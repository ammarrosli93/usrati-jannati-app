import { Header } from "../layout/Header";
import FamilyTreePage from "../family-tree/FamilyTreePage";

import { Sidebar } from "../layout/Sidebar";

const DashboardPage = () => {
  return (
    <main className="bg-linear-to-tr from-teal-500 to-yellow-200 ">
      <div className="grid grid-cols-10 h-screen backdrop-blur-3xl bg-white/10">
        <div className="col-span-1 border-r border-gray-100/20">
          <Sidebar />
        </div>

        <div className="col-span-9 grid grid-rows-6 p-3 gap-2">
          <div className="row-span-1 relative z-50">
            <Header />
          </div>
          <div className="row-span-5 mt-1 flex flex-wrap justify-center items-center backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30 ">
            <FamilyTreePage />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
