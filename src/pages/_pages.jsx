import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
    </Routes>
  );
}

export default Pages;
