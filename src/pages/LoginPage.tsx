import NormalLogin from "../auth/NormalLogin";

const LoginPage = () => {
  return (
    <div className="p-4 h-screen">
      <div className="grid grid-cols-5 rounded-xl shadow-2xl shadow-gray-400  h-full">
        <section className="col-span-3 rounded-l-xl p-2 bg-emerald-950 border-none">
          <header className="flex justify-center items-center">
            <h1 className="justify-center align-middle text-emerald-100 text-8xl font-playwrite">
              Usrati Jannati
            </h1>
          </header>
        </section>

        <section className="col-span-2">
          <NormalLogin />
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
