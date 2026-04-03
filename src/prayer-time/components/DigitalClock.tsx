type DigitalClockProps = {
  time: Date;
};

export const DigitalClock = ({ time }: DigitalClockProps) => {
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    return (
      <span className="tabular-nums font-mono">
        {h}:{m}:{s} {meridiem}
      </span>
    );
  };

  return (
    <div className="">
      <div>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};
