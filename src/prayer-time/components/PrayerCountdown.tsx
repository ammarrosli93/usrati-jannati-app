import type { PrayerTimes } from "../../types/prayer.type";
import type { PrayerConfig } from "../../utils/prayerConfig";

type PrayerCountdownProps = {
  prayerData: PrayerTimes | null;
  target: PrayerConfig | undefined;
  current: number;
};

export const PrayerCountdown = ({
  prayerData,
  target,
  current,
}: PrayerCountdownProps) => {
  if (!prayerData) return null;

  if (!target) return null;

  const targetTimeString = prayerData[target.key as keyof PrayerTimes];

  const targetTimeParts = targetTimeString.split(":");

  const targetTimeInSeconds =
    Number(targetTimeParts[0]) * 3600 +
    Number(targetTimeParts[1]) * 60 +
    Number(targetTimeParts[2]);

  const prayerCountdown = targetTimeInSeconds - current;

  const countdownHour = String(Math.floor(prayerCountdown / 3600)).padStart(
    2,
    "0",
  );

  const countdownMinutes = String(
    Math.floor((prayerCountdown % 3600) / 60),
  ).padStart(2, "0");

  {
    /*const countdownSeconds = String(prayerCountdown % 60).padStart(2, "0");
     */
  }
  return (
    <div>
      <span className="tabular-nums">
        {countdownHour} hour {countdownMinutes} mins
      </span>
    </div>
  );
};
