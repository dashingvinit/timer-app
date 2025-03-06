import { Routes, Route } from "react-router-dom";
import Countdown from "./Countdown";
import Stopwatch from "./Stopwatch";

import { StopwatchProvider } from "../context/useStopwatchContext";
import { CountdownProvider } from "../context/useCountdownContext";
import { CountdownProviderTest } from "../context/useCountdownReducerContext";

function Pages() {
  return (
    <CountdownProviderTest>
      <StopwatchProvider>
        <CountdownProvider>
          <Routes>
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/" element={<Countdown />} />
          </Routes>
        </CountdownProvider>
      </StopwatchProvider>
    </CountdownProviderTest>
  );
}

export default Pages;
