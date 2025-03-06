import Laps from "./Laps";

function StoredData({ data }) {
  console.log(data);
  return (
    <div className="saved-laps">
      <h2 className="title">Lap Sessions</h2>
      {data
        ?.slice()
        .reverse()
        .map((session, index) => (
          <div key={index} className="session">
            {session.laps.length > 0 && (
              <>
                <h3>Session: {new Date(session.date).toLocaleString()}</h3>
                <Laps laps={session.laps} />
              </>
            )}
          </div>
        ))}
    </div>
  );
}

export default StoredData;
