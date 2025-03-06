import { createContext, useContext, useReducer, useEffect } from "react";

const CountdownContext = createContext();

const initialState = {
  start: false,
  running: false,
  time: Date.now(),
  remaining: 0,
  hr: 0,
  mins: 0,
  secs: 0,
  bgColor: "var(--timer-default-bg)",
  onStart: () => {},
  onReset: () => {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setStart":
      return { ...state, start: action.payload };
    case "setRunning":
      return { ...state, running: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    case "setRemaining":
      return { ...state, remaining: action.payload };
    case "setHr":
      return { ...state, hr: action.payload };
    case "setMins":
      return { ...state, mins: action.payload };
    case "setSecs":
      return { ...state, secs: action.payload };
    case "setBgColor":
      return { ...state, bgColor: action.payload };
    default:
      return state;
  }
};

export const CountdownProviderTest = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { start, running, time, remaining, hr, mins, secs, bgColor } = state;

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
      dispatch({ type: "setBgColor", playload: "var(--timer-default-bg)" });
    } else if (secondsLeft < 10) {
      dispatch({ type: "setBgColor", payload: "var(--timer-critical-bg)" });
    } else if (secondsLeft < 60) {
      dispatch({ type: "setBgColor", type: "var(--timer-warning-bg)" });
    }
  }, [remaining]);

  useEffect(() => {
    const total = hr * 3600000 + mins * 60000 + secs * 1000;
    if (!running && !start) {
      dispatch({ type: "setRemaining", payload: total });
    }
  }, [hr, mins, secs, start, running]);

  useEffect(() => {
    const prevRemaining = localStorage.getItem("remaining");
    if (prevRemaining !== null && Number(prevRemaining) > 0) {
      dispatch({ type: "setRemaining", payload: Number(prevRemaining) });
    }
  }, []);

  const onStart = () => {
    if (remaining == 0) return;
    dispatch({ type: "setRunning", payload: true });
    dispatch({ type: "setStart", payload: true });
    dispatch({ type: "setTime", payload: Date.now() + remaining });
  };

  const onReset = () => {
    dispatch({ type: "setRunning", payload: false });
    dispatch({ type: "setStart", payload: false });
    dispatch({ type: "setRemaining", payload: 0 });
    dispatch({ type: "setHr", payload: 0 });
    dispatch({ type: "setMins", payload: 0 });
    dispatch({ type: "setSecs", payload: 0 });
  };

  return (
    <CountdownContext.Provider value={{ ...state, onStart, onReset }}>
      {children}
    </CountdownContext.Provider>
  );
};

export const useCountdownReducerHook = () => useContext(CountdownContext);
