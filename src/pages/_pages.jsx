import { Routes, Route } from "react-router-dom";
import Countdown from "./Countdown";
import Stopwatch from "./Stopwatch";

import { StopwatchProvider } from "../context/useStopwatchContext";
import { CountdownProvider } from "../context/useCountdownContext";
function Pages() {
  return (
    <StopwatchProvider>
      <CountdownProvider>
        <Routes>
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/" element={<Countdown />} />
        </Routes>
      </CountdownProvider>
    </StopwatchProvider>
  );
}

export default Pages;
