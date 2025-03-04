import { useState, useEffect, useInterval } from "react";
import { Laps } from "../components/stopwatch";
import "../css/stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [running, setRunning] = useState(false);

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

  const onReset = () => {
    setTime(0);
    setLaps([]);
    setRunning(false);
  };

  const onLap = () => {
    setLaps((laps) => [...laps, time]);
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

  const handleKeyPress = (event) => {
    switch (event.key.toLowerCase()) {
      case " ":
        setRunning(!running);
        break;

      case "r":
        onReset();
        break;

      case "l":
        onLap();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <h1 className="title">Stopwatch</h1>
      <div className="stopwatch">
        <h1 className="time">{formatTime(time)}</h1>
        <div className="btn-container">
          {running ? (
            <>
              <button className="lap-btn" onClick={onLap}>
                Lap
              </button>
              <button className="pause-btn" onClick={() => setRunning(false)}>
                Pause
              </button>
            </>
          ) : (
            <>
              <button className="start-btn" onClick={() => setRunning(true)}>
                Start
              </button>
              <button className="reset-btn" onClick={onReset}>
                Reset
              </button>
            </>
          )}
        </div>
        <Laps laps={laps} formatTime={formatTime} />
      </div>
    </div>
  );
}

export default Stopwatch;
