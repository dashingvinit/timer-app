import { useState } from "react";
import { useStopwatch } from "../context/useStopwatchContext";

import { Timer, Laps, SaveLap, StoredData } from "../components/stopwatch";
import Buttons from "../components/Buttons";
import Modal from "../components/Modal";
import "../css/stopwatch.css";

function Stopwatch() {
  const { time, setTime, laps, setLaps, running, setRunning } = useStopwatch();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  const onReset = () => {
    if (laps.length > 0) {
      setModal(true);
    } else {
      setLaps([]);
      setRunning(false);
      setTime(0);
    }
  };

  const onClose = () => {
    setModal(false);
    setLaps([]);
    setRunning(false);
    setTime(0);
  };

  const onStart = () => {
    setRunning(true);
  };

  return (
    <>
      <div className="container">
        <div className="stopwatch-container">
          <h1 className="title">Stopwatch</h1>
          <Timer time={time} setTime={setTime} running={running} />
          <Buttons
            running={running}
            setRunning={setRunning}
            onLap={() => setLaps([...laps, time])}
            onReset={onReset}
            onStart={onStart}
          />
          <Laps laps={laps} />
        </div>
        <div>
          <StoredData data={data} />
        </div>
      </div>
      <Modal open={modal} onClose={onClose}>
        <SaveLap laps={laps} onClose={onClose} setData={setData} />
      </Modal>
    </>
  );
}

export default Stopwatch;
