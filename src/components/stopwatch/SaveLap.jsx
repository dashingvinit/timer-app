import Laps from "./Laps";
function SaveLap({ laps, onClose, setData }) {
  const handleSave = () => {
    const savedLaps = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    savedLaps.push(laps);
    setData(savedLaps);
    localStorage.setItem("data", JSON.stringify(savedLaps));
    onClose();
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2>Would you like to save?</h2>
      <Laps laps={laps} />

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        <h3>Yes</h3>
      </button>
    </div>
  );
}

export default SaveLap;
