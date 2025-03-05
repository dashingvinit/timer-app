import Laps from "./Laps";

function StoredData({ data }) {
  return (
    <div className="saved-laps">
      <h2>Lap Sessions</h2>
      {data
        .slice()
        .reverse()
        .map((session, index) => (
          <div key={index} className="session">
            {session.length > 0 && <Laps laps={session} />}
          </div>
        ))}
    </div>
  );
}

export default StoredData;
