import { createContext, useContext, useState, useEffect } from "react";

const CountdownContext = createContext();

export const CountdownProvider = ({ children }) => {
  const [start, setStart] = useState(false);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [remaining, setRemaining] = useState(0);

  const [hr, setHr] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [bgColor, setBgColor] = useState("var(--timer-default-bg)");

  const playAudio = () => {
    const audio = new Audio("/finish.mp3");
    audio.play();
  };

  useEffect(() => {
    const secondsLeft = Math.floor(remaining / 1000);
    if (secondsLeft <= 0 && start) {
      playAudio();
      setStart(false);
    }
    if (secondsLeft > 60 || secondsLeft <= 0) {
      setBgColor("var(--timer-default-bg)");
    } else if (secondsLeft < 10) {
      setBgColor("var(--timer-critical-bg)");
    } else if (secondsLeft < 60) {
      setBgColor("var(--timer-warning-bg)");
    }
  }, [remaining]);

  useEffect(() => {
    if (!running && !start) {
      setRemaining(hr * 3600000 + mins * 60000 + secs * 1000);
    }
  }, [hr, mins, secs, start, running]);

  useEffect(() => {
    const prevRemaining = localStorage.getItem("remaining");
    if (prevRemaining || prevRemaining > 0) {
      setRemaining(Number(prevRemaining));
    }
  }, []);

  const onStart = () => {
    if (remaining == 0) return;
    setRunning(true);
    setStart(true);
    setTime(Date.now() + remaining);
  };

  const onReset = () => {
    setRunning(false);
    setStart(false);
    setRemaining(0);
    setHr(0);
    setMins(0);
    setSecs(0);
    // setRemaining(hr * 3600000 + mins * 60000 + secs * 1000);
  };

  return (
    <CountdownContext.Provider
      value={{
        start,
        setStart,
        running,
        setRunning,
        time,
        setTime,
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
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdown = () => useContext(CountdownContext);
