import { useState, type FormEvent } from "react";

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

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value); // e is a function parameter. When an input change event occurs, React passes an event object to e.React.ChangeEvent<HTMLInputElement> tells TypeScript what type of event object e will be, so we can safely access e.target.value
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fakeLoginApi(userName, password);

    setLoading(false);

    if (!response.success) {
      setError(response.error || "Login Failed");
      return;
    }

    alert("Login is succesfull!");
  };

  return (
    <div className="flex flex-row gap-2">
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          type="text"
          value={userName}
          onChange={handleUsernameChange}
          placeholder="Username/Email"
          className="bg-emerald-300 border-none p-2 rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="bg-emerald-300 border-none p-2 rounded-lg"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NormalLogin;
