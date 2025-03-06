import { useEffect, useState } from "react";
import { useCountdown } from "../../context/useCountdownContext";

function Progress() {
  const { remaining, hr, mins, secs } = useCountdown();
  const [val, setVal] = useState(0);

  const total = hr * 3600000 + mins * 60000 + secs * 1000;

  useEffect(() => {
    if (total > 0) {
      const elapsed = total - remaining;
      const percentage = Math.max(0, Math.min(100, (elapsed / total) * 100));
      setVal(percentage);
      console.log(percentage);
    } else {
      setVal(0);
    }
  }, [total, remaining]);

  return (
    <div className="title">
      <progress value={val} max={100} className="progress-bar" />
    </div>
  );
}

export default Progress;
