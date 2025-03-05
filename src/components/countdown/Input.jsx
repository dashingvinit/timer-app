function Input({ hr, setHr, mins, setMins, secs, setSecs, running }) {
  return (
    <div className="title">
      <input
        type="number"
        value={hr}
        disabled={running}
        placeholder="hh"
        onChange={(e) => setHr(Math.max(0, parseInt(e.target.value)) || 0)}
      />
      <input
        type="number"
        value={mins}
        disabled={running}
        placeholder="min"
        onChange={(e) => setMins(Math.max(0, parseInt(e.target.value)) || 0)}
      />
      <input
        type="number"
        value={secs}
        disabled={running}
        placeholder="sec"
        onChange={(e) => setSecs(Math.max(0, parseInt(e.target.value)) || 0)}
      />
    </div>
  );
}

export default Input;
