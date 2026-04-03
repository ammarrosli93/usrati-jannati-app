import {
  WiSunrise,
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiHorizon,
  WiStars,
} from "react-icons/wi";
import { LuSunMedium } from "react-icons/lu";
import type { PrayerTimes } from "../types/prayer.type";

export type PrayerConfig = {
  label: string;
  key: keyof PrayerTimes;
  icon: React.ElementType;
};

export const prayerNames: PrayerConfig[] = [
  { label: "Imsak", key: "imsak", icon: WiDayCloudy },
  { label: "Fajr", key: "fajr", icon: WiDayCloudy },
  { label: "Syuruk", key: "syuruk", icon: WiSunrise },
  { label: "Dhuha", key: "dhuha", icon: WiSunrise },
  { label: "Dhuhr", key: "dhuhr", icon: LuSunMedium },
  { label: "'Asr", key: "asr", icon: WiDaySunnyOvercast },
  { label: "Maghrib", key: "maghrib", icon: WiHorizon },
  { label: "Isha", key: "isha", icon: WiStars },
];

export const formatTime = (time: string) => {
  return time.slice(0, 5);
};
