function Progress({ total, remaining, start, setStart }) {
  const playAudio = () => {
    const audio = new Audio("/finish.mp3");
    audio.play();
  };

  console.log({ total, remaining, start, setStart });

  const val = (remaining / total) * 100 || 0;

  if (val === 0 && start) {
    playAudio();
    setStart(false);
  }

  return (
    <div className="title">
      <progress value={val} max={100} />
    </div>
  );
}

export default Progress;
