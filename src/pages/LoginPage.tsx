import NormalLogin from "../auth/NormalLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-row">
      <header>
        <p>USRATI JANNATI</p>
      </header>
      <div>
        <NormalLogin />
      </div>
    </div>
  );
};

export default LoginPage;
