import { memo, useEffect } from "react";

function Buttons(props) {
  const { running, setRunning, onLap, onReset, onStart } = props;

  const handleKeyPress = (event) => {
    switch (event.key.toLowerCase()) {
      case " ":
        event.preventDefault();
        if (running) setRunning(!running);
        else onStart();
        break;

      case "r":
        onReset();
        break;

      case "l":
        if (running) onLap();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="btn-container">
      {running ? (
        <>
          {onLap ? (
            <button className="lap-btn" onClick={onLap}>
              Lap
            </button>
          ) : (
            <button className="reset-btn" onClick={onReset}>
              Reset
            </button>
          )}
          <button className="pause-btn" onClick={() => setRunning(false)}>
            Pause
          </button>
        </>
      ) : (
        <>
          <button className="start-btn" onClick={onStart}>
            Start
          </button>
          <button className="reset-btn" onClick={onReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default memo(Buttons);
