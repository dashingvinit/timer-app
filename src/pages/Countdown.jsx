import { useCountdown } from "../context/useCountdownContext";
import { useCountdownReducerHook } from "../context/useCountdownReducerContext";
import { Timer, Progress, Input } from "../components/countdown";
import Buttons from "../components/Buttons";
import "../css/timer.css";

function Countdown() {
  const {
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

  // const {onStart} = useCountdownReducerHook()

  return (
    <div className="container">
      <div
        className="countdown-container"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <h1 className="title">Timer</h1>
        <Timer
          time={time}
          running={running}
          setRunning={setRunning}
          remaining={remaining}
          setRemaining={setRemaining}
        />

        <Progress />

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
