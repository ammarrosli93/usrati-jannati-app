import NormalLogin from "../auth/NormalLogin";
import { OAuthButton } from "../auth/OAuthButton";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <section className="col-span-3 p-2 bg-emerald-950 border-none h-screen justify-center items-center align-middle"></section>

      <section className="grid grid-row-4 col-span-2 h-screen">
        <div className=" col-span-1 flex flex-col justify-center items-center align-middle text-emerald-900 text-5xl font-playwrite ">
          <p className="text-center">Usrati</p>
          <p>Jannati</p>
        </div>
        <div className=" col-span-3 flex flex-col gap-3 justify-center align-top items-center">
          <div>
            <NormalLogin />
          </div>
          <p>or</p>
          <div>
            <OAuthButton />
          </div>

          <div className="flex flex-row gap-2 ">
            <a href="" className="text-xs border-b">
              Term of Use
            </a>
            <p className="text-xs"> | </p>
            <a href="" className="text-xs border-b">
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
