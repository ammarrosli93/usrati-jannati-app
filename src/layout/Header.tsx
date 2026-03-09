import { useAuth } from "../auth/useAuth";
import { PrayerTime } from "../family-tree/components/PrayerTime";

export const Header = () => {
  const { authUser } = useAuth();

  return (
    <div className="grid grid-cols-4 gap-3 w-full h-full">
      <div className="col-span-1 flex flex-row-reverse justify-between gap-5 p-3 items-center backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30">
        <div className="flex flex-col w-full">
          <p>Welcome Back!</p>
          <p>{authUser?.name}!</p>
        </div>
        <img src={authUser?.avatar} alt="" className="w-10 h-10 rounded-full" />
      </div>
      <div className="col-span-3 p-3 backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30">
        <PrayerTime />
      </div>
    </div>
  );
};
