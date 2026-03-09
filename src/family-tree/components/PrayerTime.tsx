import React, { useEffect, useState, type ChangeEvent } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { ZoneList } from "./ZoneList";

export const PrayerTime = () => {
  const [zoneChange, setZoneChange] = useState<string>("KTN01");
  const [areaName, setAreaName] = useState<string>("Kota Bharu");
  const [clicked, isClicked] = useState<boolean>(false);
  const [time, setTime] = useState<any>(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const prayerNames = [
    { label: "Imsak", key: "imsak" },
    { label: "Fajr", key: "fajr" },
    { label: "Syuruk", key: "syuruk" },
    { label: "Dhuhr", key: "dhuhr" },
    { label: "'Asr", key: "asr" },
    { label: "Maghrib", key: "maghrib" },
    { label: "Isha", key: "isha" },
  ];

  const handleClick = () => {
    isClicked(true);
  };

  const handleClose = () => {
    isClicked(false);
  };

  const handleZoneChange = (zone: string, area: string) => {
    setZoneChange(zone);
    setAreaName(area);
    isClicked(false);
  };

  useEffect(() => {
    const fullPrayer = `${baseUrl}&zone=${zoneChange}&period=today`;
    const getTime = async () => {
      try {
        const response = await fetch(fullPrayer);
        const prayerData = await response.json();
        setTime(prayerData.prayerTime[0]);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    getTime();
  }, [baseUrl, zoneChange]);

  return (
    <div className="flex flex-col justify-between w-full align-middle">
      <div className="font-mono text-xs flex flex-row justify-between px-2">
        {prayerNames.map((prayer) => (
          <div key={prayer.key}>
            <p className="font-bold">{prayer.label}</p>
            <p>{time ? time[prayer.key] : "--:--"}</p>
          </div>
        ))}
      </div>
      <div className="font-poppins text-xs px-2 flex flex-row gap-2">
        <p>
          Prayer time at{" "}
          <span className="font-semibold italic text-teal-900">
            {areaName}{" "}
          </span>
        </p>

        <div onClick={handleClick}>
          <CgArrowsExchange size={15} />
        </div>
        {clicked && (
          <ZoneList onClick={handleZoneChange} onClose={handleClose} />
        )}
      </div>
    </div>
  );
};
