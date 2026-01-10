import NormalLogin from "../auth/NormalLogin";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <section className="col-span-3 p-2 bg-emerald-950 border-none h-screen justify-center items-center align-middle">
        <h1 className=" text-emerald-100 text-8xl font-playwrite">
          Usrati Jannati
        </h1>
      </section>

      <section className="col-span-2 h-screen justify-center items-center align-middle flex flex-col flex-wrap gap-3">
        <p className=" justify-center items-center">or</p>
        <NormalLogin />
        <div className="flex flex-row gap-2 ">
          <a href="" className="text-xs border-b">
            Term of Use
          </a>
          <p className="text-xs"> | </p>
          <a href="" className="text-xs border-b">
            Privacy Policy
          </a>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
