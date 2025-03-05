import { useState } from "react";

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

function StoredData({data}) {

  return (
    <div className="saved-laps">
      <h1>Lap Sessions</h1>
      {data.map((session, index) => (
        <div key={index} className="session">
          {session.length > 0 && (
            <>
              <h2>Session {index + 1}</h2>
              <ul>
                {session.map((lap, lapIndex) => (
                  <li key={lapIndex}>
                    Lap {lapIndex + 1}: {formatTime(lap)}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default StoredData;
