import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "./useAuth";
import type { AuthUser } from "../types/AuthUser";
import { useNavigate } from "react-router-dom";

export const OAuthButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const googleLogin = useGoogleLogin({
    scope: "openid email profile",

    onSuccess: async (tokenResponse) => {
      const url = "https://www.googleapis.com/oauth2/v3/userinfo";
      try {
        const response = await fetch(url, {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user info");
        }
        const profile = await response.json();
        const user: AuthUser = {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar: profile.picture,
          provider: "google",
        };
        login(user);
        navigate("/dashboard");
      } catch (error) {
        console.error("Failed to fetch user info");
      }
    },
    onError: () => {
      console.log("Google login failed. Please try again");
    },
  });

  const handleOAuthLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    googleLogin();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          className="flex flex-row gap-2 border-emerald-300 border w-sm max-h-10 p-3 text-sm rounded-full hover:shadow-md hover:shadow-gray-300 hover:border-none items-center justify-center"
          title="google button"
          onClick={handleOAuthLogin}
          value={"google"}
        >
          <FcGoogle size={30} />
          <p className="px-5">Sign In with Google</p>
        </button>
      </div>
    </>
  );
};
