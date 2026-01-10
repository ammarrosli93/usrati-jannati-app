import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

//handle response from login API call, differetiating between success and failed attemps
type LoginResponse = {
  success: boolean;
  error?: string;
};

const fakeLoginApi = (
  fakeUsername: string,
  fakePassword: string
): Promise<LoginResponse> => {
  //This function (fakeLoginApi) will return the data later and the type will match LoginResponse
  return new Promise((resolve) => {
    //resolve() is a funct by js, when it is called, promise is finished and value will be send
    setTimeout(() => {
      //setTimeout() is a function where to make you run code a desired time late since calling api is slow. if not use it is like frozen and not good for UX
      const trueUsername = "ammar";
      const truePassword = "abc123";

      if (fakeUsername === trueUsername && fakePassword === truePassword) {
        resolve({ success: true });
      } else {
        resolve({ success: false, error: "Credential is invalid!" });
      }
      return;
    }, 1000);
  });
};
const NormalLogin = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // e is a function parameter. When an input change event occurs, React passes an event object to e.React.ChangeEvent<HTMLInputElement> tells TypeScript what type of event object e will be, so we can safely access e.target.value
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true); //we use try finally here because if in real situation, when use API and when it error, it will jump straight to finally.
      const response = await fakeLoginApi(userName, password);
      if (!response.success) {
        //this part handle expected failures which are invalid credentials and it will exit early to prevemt success logic running
        setError(response.error || "Login Failed");
        return;
      }
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (error) {
      //handle if some error happens unexpected error
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); //this part is tell that setLoading(false) need to always run  to prevent button from staying disabled
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-3 items-center"
      >
        <input
          type="text"
          value={userName}
          onChange={handleUsernameChange}
          placeholder="Username/Email"
          className="border-emerald-300 border w-sm max-h-10 text-sm p-5 rounded-full text-left hover:shadow-md hover:shadow-gray-300 hover:border-none"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="border-emerald-300 border w-sm max-h-10 text-sm p-5 rounded-full text-left hover:shadow-md hover:shadow-gray-300 hover:border-none"
        />
        {error && <p className=" text-rose-800 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className=" text-white bg-emerald-900 border-none w-sm max-h-10 text-sm p-2 rounded-full text-center hover:shadow-md hover:shadow-gray-300"
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NormalLogin;
