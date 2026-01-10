import FamilyTree from "../components/FamilyTree";
import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <main className="flex flex-col gap-2 p-2 bg-gray-50">
      <header className="bg-amber-200">
        <h1>Welcome to Usrati Jannati</h1>
      </header>
      <div className="grid grid-cols-20 gap-2">
        <aside className="col-span-1 flex justify-center items-center p-2 shadow-xl shadow-gray-200 border-none rounded-xl bg-white">
          <Sidebar />
        </aside>
        <section className="col-span-19 justify-center items-center p-2 shadow-xl shadow-gray-200 border-none rounded-xl bg-white">
          <FamilyTree />
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
