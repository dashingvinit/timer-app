import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Countdown from "./Countdown";
import Stopwatch from "./Stopwatch";

function Pages() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Countdown />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
    </Routes>
  );
}

export default Pages;
