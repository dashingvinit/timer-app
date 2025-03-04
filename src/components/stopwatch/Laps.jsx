import { memo } from "react";

function Laps({ laps, formatTime }) {
  return (
    <div className="laps-container">
      {laps.map((lap, index) => (
        <div key={index} className="lap">
          <h3>Lap {index + 1}</h3>
          <p>{formatTime(lap)}</p>
          <p>{formatTime(laps[index] - laps[index -1])}</p>
        </div>
      ))}
    </div>
  );
}

export default memo(Laps);
