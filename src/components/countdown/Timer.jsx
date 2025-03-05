import { useEffect } from "react";

const formatTime = (time) => {
  if (!time) return "00:00:00";
  const hrs = Math.floor(time / 3600000)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((time % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  return `${hrs}:${mins}:${secs}`;
};

function Timer(props) {
  const { time, running, setRunning, remaining, setRemaining } = props;

  useEffect(() => {
    setRemaining(Math.max(0, time - Date.now()));

    let interval;
    if (running)
      interval = setInterval(() => {
        const newValue = Math.max(0, time - Date.now());
        setRemaining(newValue);
        if (newValue <= 0) setRunning(false);
      }, 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  return (
    <div className="time-container">
      <h1 className={`title ${!running && remaining > 0 ? "blink" : ""}`}>
        {formatTime(remaining)}
      </h1>
      <h2>hr : min : sec</h2>
    </div>
  );
}

export default Timer;
