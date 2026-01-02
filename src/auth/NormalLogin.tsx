import { useState, type FormEvent } from "react";

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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!userName || !password) {
      setError("You enter wrong username or password");
      return;
    }

    setLoading(true);
    console.log("Submittin:", { userName, password });
    setLoading(false);
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
