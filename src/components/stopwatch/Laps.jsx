import { memo } from "react";

function Laps({ laps, formatTime }) {
  console.log("Laps rendered");

  return (
    <div className="laps-container">
      <div className="lap">
        <h3>Index</h3>
        <h3>Timestamp</h3>
        <h3>Prev Diff</h3>
      </div>
      {laps.map((lap, index) => (
        <div key={index} className="lap">
          <h3>Lap {index + 1}</h3>
          <p>{formatTime(lap)}</p>
          <p>{formatTime(laps[index] - laps[index - 1])}</p>
        </div>
      ))}
    </div>
  );
}

export default memo(Laps);
