import { useState, useEffect } from "react";
import { Timer, Progress } from "../components/countdown";
import Buttons from "../components/Buttons";
import "../css/timer.css";

function Countdown() {
  const [start, setStart] = useState(false);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [remaining, setRemaining] = useState(0);

  const [hr, setHr] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [bgColor, setBgColor] = useState("var(--timer-default-bg)");

  useEffect(() => {
    const secondsLeft = Math.floor(remaining / 1000);
    if (secondsLeft > 90 || secondsLeft <= 0) {
      setBgColor("var(--timer-default-bg)");
    } else if (secondsLeft < 60) {
      setBgColor("var(--timer-critical-bg)");
    } else if (secondsLeft < 90) {
      setBgColor("var(--timer-warning-bg)");
    }
  }, [remaining]);

  useEffect(() => {
    if (!running) {
      setRemaining(hr * 3600000 + mins * 60000 + secs * 1000);
    }
  }, [hr, mins, secs, start]);

  const onStart = () => {
    setRunning(true);
    setStart(true);
    setTime(Date.now() + remaining);
  };

  const onReset = () => {
    setRunning(false);
    setStart(false);
    setRemaining(hr * 3600000 + mins * 60000 + secs * 1000);
  };

  return (
    <div className="container">
      <div className="countdown-container" style={{ backgroundColor: bgColor }}>
        <h1 className="title">Timer</h1>
        <Timer
          time={time}
          running={running}
          setRunning={setRunning}
          remaining={remaining}
          setRemaining={setRemaining}
        />
        <Progress
          total={hr * 3600000 + mins * 60000 + secs * 1000}
          remaining={remaining}
          start={start}
          setStart={setStart}
        />
        <div className="title">
          <input
            type="number"
            value={hr}
            disabled={running}
            placeholder="hh"
            onChange={(e) => setHr(Math.max(0, parseInt(e.target.value)) || 0)}
          />
          <input
            type="number"
            value={mins}
            disabled={running}
            placeholder="min"
            onChange={(e) =>
              setMins(Math.max(0, parseInt(e.target.value)) || 0)
            }
          />
          <input
            type="number"
            value={secs}
            disabled={running}
            placeholder="sec"
            onChange={(e) =>
              setSecs(Math.max(0, parseInt(e.target.value)) || 0)
            }
          />
        </div>
        <Buttons
          running={running}
          setRunning={setRunning}
          onReset={onReset}
          onStart={onStart}
        />
      </div>
    </div>
  );
}

export default Countdown;
