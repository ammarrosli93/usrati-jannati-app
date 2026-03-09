import NormalLogin from "../auth/NormalLogin";
import { OAuthButton } from "../auth/OAuthButton";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <section className="col-span-3 p-2 bg-emerald-950 border-none h-screen justify-center items-center align-middle"></section>

      <section className="grid grid-row-4 col-span-2 h-screen items-center w-full">
        <div className=" row-span-2 h-full flex flex-col items-center">
          <div className="flex flex-col text-teal-900 font-playwrite items-center w-full text-5xl h-full justify-end  ">
            <p className="text-center">Usrati</p>
            <p>Jannati</p>
          </div>
          <p className="pt-4">A place where family meet</p>
        </div>
        <div className=" row-span-2 flex flex-col gap-3 justify-start items-center">
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
