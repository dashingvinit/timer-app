import { useCountdown } from "../context/useCountdownContext";
import { Timer, Progress, Input } from "../components/countdown";
import Buttons from "../components/Buttons";
import "../css/timer.css";

function Countdown() {
  const {
    start,
    setStart,
    running,
    setRunning,
    time,
    remaining,
    setRemaining,
    hr,
    setHr,
    mins,
    setMins,
    secs,
    setSecs,
    bgColor,
    onStart,
    onReset,
  } = useCountdown();

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

        <Input
          hr={hr}
          setHr={setHr}
          mins={mins}
          setMins={setMins}
          secs={secs}
          setSecs={setSecs}
          running={running}
        />

        <Buttons
          running={running}
          onReset={onReset}
          onStart={onStart}
          setRunning={setRunning}
        />
      </div>
    </div>
  );
}

export default Countdown;
