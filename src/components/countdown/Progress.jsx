import { useEffect } from "react";

function Progress({ total, remaining, start, setStart }) {
  const playAudio = () => {
    const audio = new Audio("/finish.mp3");
    audio.play();
  };

  const val = ((total - remaining) / total) * 100 || 0;

  useEffect(() => {
    if (val === 100 && start) {
      playAudio();
      setStart(false);
    }
  }, [val, start, setStart]);

  return (
    <div className="title">
      <progress value={val} max={100} />
    </div>
  );
}

export default Progress;
