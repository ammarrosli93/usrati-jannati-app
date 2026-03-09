export type AuthUser = {
  name: string;
  id: string;
  email: string;
  avatar: string;
  provider: "google" | "github";
};
