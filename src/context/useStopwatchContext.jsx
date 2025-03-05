import { createContext, useContext, useState, useEffect } from "react";

const StopwatchContext = createContext();

export function StopwatchProvider({ children }) {
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [running, setRunning] = useState(false);
  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <StopwatchContext.Provider value={{ time, setTime, laps, setLaps, running, setRunning }}>
      {children}
    </StopwatchContext.Provider>
  );
}

export function useStopwatch() {
  return useContext(StopwatchContext);
}
