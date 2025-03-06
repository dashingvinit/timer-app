function Input({ hr, setHr, mins, setMins, secs, setSecs, running }) {
  function normalizeTime(hr, mins, secs) {
    let totalSecs = Math.max(0, secs);
    let totalMins = Math.max(0, mins);
    let totalHrs = Math.max(0, hr);

    totalMins += Math.floor(totalSecs / 60);
    totalSecs = totalSecs % 60;

    totalHrs += Math.floor(totalMins / 60);
    totalMins = totalMins % 60;

    totalHrs = Math.min(99, totalHrs);
    totalMins = Math.min(59, totalMins);
    totalSecs = Math.min(59, totalSecs);

    setHr(totalHrs);
    setMins(totalMins);
    setSecs(totalSecs);
  }

  const handleInput = (e, type) => {
    let value = e.target.value;

    let newHr = hr;
    let newMins = mins;
    let newSecs = secs;

    if (type === "hr") newHr = value;
    if (type === "mins") newMins = value;
    if (type === "secs") newSecs = value;

    normalizeTime(newHr, newMins, newSecs);
  };

  return (
    <div className="title">
      <input
        type="number"
        value={hr || ""}
        disabled={running}
        placeholder="hh"
        onChange={(e) => handleInput(e, "hr")}
      />
      <input
        type="number"
        value={mins || ""}
        disabled={running}
        placeholder="min"
        onChange={(e) => handleInput(e, "mins")}
      />
      <input
        type="number"
        value={secs || ""}
        disabled={running}
        placeholder="sec"
        onChange={(e) => handleInput(e, "secs")}
      />
    </div>
  );
}

export default Input;
