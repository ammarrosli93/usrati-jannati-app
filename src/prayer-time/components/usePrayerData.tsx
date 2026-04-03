import { useEffect, useState } from "react";

export interface prayer {
  hijri: string;
  date: string;
  day: string;
  imsak: string;
  fajr: string;
  syuruk: string;
  dhuha: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface ApiResponse {
  prayerTime: prayer[];
  status: string;
}

export const usePrayerData = (url: string) => {
  const [data, setData] = useState<prayer | null>(null);

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await fetch(url);
        const result: ApiResponse = await response.json();
        setData(result.prayerTime[0]);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    getTime();
  }, [url]);
  return { data };
};
