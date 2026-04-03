import { useEffect, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { usePrayerData } from "../prayer-time/components/usePrayerData";
import { ZoneList } from "../prayer-time/components/ZoneList";
import { PrayerTime } from "../prayer-time/PrayerTime";
import { IoLocationSharp } from "react-icons/io5";
import { hijriMonths } from "../utils/Date";
import { gregorianMonths } from "../utils/Date";
import { GoKebabHorizontal } from "react-icons/go";
import { PrayerCountdown } from "../prayer-time/components/PrayerCountdown";
import { prayerNames } from "../utils/prayerConfig";
import type { PrayerConfig } from "../utils/prayerConfig";

export const Header = () => {
  const [zoneChange, setZoneChange] = useState<string>("KTN01");
  const [areaName, setAreaName] = useState<string>("Kota Bharu");
  const [zoneListOpen, isZoneListOpen] = useState<boolean>(false);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}&zone=${zoneChange}&period=today`;
  const { authUser } = useAuth();
  const { data } = usePrayerData(url);
  const dateParts = data?.date ? data.date.split("-") : [];
  const [day, month, year] = dateParts;
  const gregDayNum = month as keyof typeof gregorianMonths;
  const hijriDate = data?.hijri ? data.hijri.split("-") : [];
  const [hijriYear, hijriMonth, hijriDay] = hijriDate;
  const hijriDayNum = hijriMonth as keyof typeof hijriMonths;
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    isZoneListOpen(true);
  };

  const handleClose = () => {
    isZoneListOpen(false);
  };

  const handleZoneChange = (zone: string, area: string) => {
    setZoneChange(zone);
    setAreaName(area);
    isZoneListOpen(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentTime =
    time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();

  if (!data) return null;

  const targetTime = data
    ? prayerNames.find((prayer: PrayerConfig) => {
        const prayerTimeString = data[prayer.key];
        const parts = prayerTimeString.split(":");
        const prayerTimeInSeconds =
          Number(parts[0]) * 3600 + Number(parts[1]) * 60 + Number(parts[2]);
        return prayerTimeInSeconds > currentTime;
      })
    : undefined;

  return (
    <div className="grid grid-cols-4 gap-3 w-full h-full">
      <div className="col-span-2 pb-1 flex flex-col gap-1 border rounded-2xl justify-between border-white/30 bg-white/30 w-full h-full">
        <div className="grid grid-cols-2 w-full h-full items-center">
          <div className="col-span-1 font-plusjakartasans text-xs flex flex-row items-center gap-0.5 px-2">
            <div className="flex flex-row gap-1 items-center border border-white/20 shadow px-3 rounded-full backdrop-blur-2xl">
              <p className="font-light">{targetTime?.label}</p>
              {","}
              <div className="font-semibold text-teal-800">
                <PrayerCountdown
                  prayerData={data}
                  target={targetTime}
                  current={currentTime}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-end pr-3">
            <div className="font-plusjakartasans text-xs items-center flex flex-row gap-2">
              <div className=" flex flex-row items-center gap-1">
                <IoLocationSharp color="teal" />
                <p className="font-light tracking-wide italic text-teal-800">
                  {areaName}
                </p>
              </div>
              <div onClick={handleClick} className="hover:scale-110">
                <GoKebabHorizontal
                  color="teal"
                  style={{ transform: "rotate(90deg)" }}
                />
              </div>
              {zoneListOpen && (
                <ZoneList onClick={handleZoneChange} onClose={handleClose} />
              )}
            </div>
          </div>
        </div>
        <div className=" items-center w-full ">
          <PrayerTime prayerData={data} target={targetTime} />
        </div>
      </div>
      <div className="flex flex-row col-span-1 p-3 justify-center items-center gap-5 backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30">
        <p className="font-plusjakartasans font-bold text-5xl text-teal-900">
          {day}
        </p>

        <div className="flex flex-col justify-between ">
          <p className="text-base font-plusjakartasans">
            {gregorianMonths[gregDayNum]} {year},{"  "}
            <span className="font-bold text-teal-900">{data?.day}</span>
          </p>
          <p className="text-base font-plusjakartasans">
            {hijriDay}
            {"  "}
            <span className="font-bold text-teal-900">
              {hijriMonths[hijriDayNum]}{" "}
            </span>
            {hijriYear}H
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-row justify-center items-center gap-8 backdrop-blur-3xl border rounded-2xl border-white/30 bg-white/30">
        <div className="flex flex-col">
          <p>Welcome Back!</p>
          <p>{authUser?.name}!</p>
        </div>
        <img src={authUser?.avatar} alt="" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};
