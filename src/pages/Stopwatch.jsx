import { useState, useCallback } from "react";
import { Timer, Laps, SaveLap } from "../components/stopwatch";
import Buttons from "../components/Buttons";
import Modal from "../components/Modal";
import "../css/stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [running, setRunning] = useState(false);
  const [modal, setModal] = useState(false);

  console.log("Stopwatch page re-rendered"); //caused times state

  const onReset = useCallback(() => {
    setTime(0);
    // setModal(true);
    setLaps([]);
    setRunning(false);
  }, []);

  const onStart = () => {
    setRunning(true);
  };

  const onLap = useCallback(() => {
    setLaps((laps) => [...laps, time]);
  }, [time]); // causing button rerenders

  return (
    <>
      <div className="container">
        <div className="stopwatch-container ">
          <h1 className="title">Stopwatch</h1>
          <Timer time={time} setTime={setTime} running={running} />
          <Buttons
            running={running}
            setRunning={setRunning}
            onLap={onLap}
            onReset={onReset}
            onStart={onStart}
          />
          <Laps laps={laps} />
        </div>
      </div>
      <Modal open={modal}>
        <SaveLap laps={laps} setLaps={setLaps} />
      </Modal>
    </>
  );
}

export default Stopwatch;
