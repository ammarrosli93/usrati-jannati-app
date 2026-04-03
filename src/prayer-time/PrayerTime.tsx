import {
  prayerNames,
  formatTime,
  type PrayerConfig,
} from "../utils/prayerConfig";
import type { PrayerTimes } from "../types/prayer.type";

type PrayerTimeProps = {
  prayerData: PrayerTimes | null;
  target: PrayerConfig | undefined;
};

export const PrayerTime = ({ prayerData, target }: PrayerTimeProps) => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <div className="flex flex-row gap-3 px-1 w-full">
        {prayerNames.map((prayer) => {
          const Icon = prayer.icon;
          const isNextPrayerTime = prayer.key === target?.key;
          return (
            <div
              key={prayer.key}
              className={`relative flex flex-col py-2 gap-0.5 w-full h-full font-plusjakartasans subpixel-antialiased tracking-wide items-center ${isNextPrayerTime ? "bg-teal-700 rounded-xl shadow-xl " : ""}`}
            >
              <p
                className={`${isNextPrayerTime ? " bg-rose-600 text-xs px-2 py-0.5 text-[7.5px] text-white absolute -top-2 rounded-md subpixel-antialiased tracking-wider" : "hidden"}`}
              >
                Next
              </p>
              <Icon
                size={15}
                className={` ${isNextPrayerTime ? " text-yellow-300" : "text-black"}`}
              />
              <div className="flex items-center flex-col">
                <p
                  className={`text-xs ${isNextPrayerTime ? " text-teal-200 font-medium" : "text-teal-800 font-light"}`}
                >
                  {prayer.label}
                </p>
                <p
                  className={`text-xs ${isNextPrayerTime ? " text-white font-extrabold" : "text-gray-500 font-light"}`}
                >
                  {prayerData
                    ? formatTime(prayerData[prayer.key as keyof PrayerTimes])
                    : "--:--"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
