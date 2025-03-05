function Laps({ laps }) {
  const formatTime = (time) => {
    if (!time) return "00:00:00";

    const minutes = Math.floor(time / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = ((time % 1000) / 10).toString().padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div className="laps-container">
     {laps.length > 0 && ( <div className="lap header">
        <h3>Index</h3>
        <h3>Timestamp</h3>
        <h3>Prev Diff</h3>
      </div>)}
      {laps.map((lap, index) => (
        <div key={index} className={`lap ${index % 2 === 0 ? "even" : "odd"}`}>
          <h3>Lap {index + 1}</h3>
          <p>{formatTime(lap)}</p>
          <p>
            {index === 0 ? "--" : formatTime(laps[index] - laps[index - 1])}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Laps;
