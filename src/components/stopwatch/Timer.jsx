import { useEffect } from "react";

function Timer(props) {
  const { time, setTime, running } = props;

  const formatTime = (time) => {
    if (!time) return "00:00:00";

    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = ((time % 1000) / 10).toString().padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="time-container">
        <h1 className="title">{formatTime(time)}</h1>
        <h2>mn : sc : ms</h2>
      </div>
      {/* <h1 className="title">{formatTime(time)}</h1> */}
    </>
  );
}

export default Timer;
