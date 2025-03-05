import React from "react";
import { useTheme } from "./useThemeContext";

const ToggleTheme = () => {
  const { theme, applyTheme } = useTheme();

  const handleChange = (event) => {
    applyTheme(event.target.value);
  };

  return (
    <div>
      <select value={theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
    </div>
  );
};

export default ToggleTheme;
