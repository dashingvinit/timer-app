import Laps from "./Laps";
function SaveLap({ laps, onClose, setData }) {
  const handleSave = () => {
    const savedLaps = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    savedLaps.push({ date: Date.now(), laps });
    setData(savedLaps);
    localStorage.setItem("data", JSON.stringify(savedLaps));
    onClose();
  };

  return (
    <div>
      <h4>Would you like to save?</h4>
      <Laps laps={laps} />
      <button
        style={{ backgroundColor: "teal", color: "white", marginTop: "15px", width: "100%", padding: '10px' }}
        onClick={handleSave}
      >
        Yes
      </button>
    </div>
  );
}

export default SaveLap;
