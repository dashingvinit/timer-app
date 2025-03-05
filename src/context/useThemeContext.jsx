import React, { createContext, useContext, useState } from "react";

const themes = {
  light: {
    "--font-color": "#000",
    "--bg-color": "#fff",
    "--timer-default-bg": "#e0e0e0",
    "--timer-warning-bg": "#ffcC00",
    "--timer-critical-bg": "#ff4444",
    "--accent-color": "#d1e8ff",
  },
  dark: {
    "--font-color": "#fff",
    "--bg-color": "#121212",
    "--timer-default-bg": "#333",
    "--timer-warning-bg": "#ffcC00",
    "--timer-critical-bg": "#ff4444",
    "--accent-color": "#3c3c3c",
  },
  colorful: {
    "--font-color": "#212121",
    "--bg-color": "#f0e68c",
    "--timer-default-bg": "#add8e6",
    "--timer-warning-bg": "#ffa500",
    "--timer-critical-bg": "#dc143c",
    "--accent-color": "#ee4941",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("colorful");

  const applyTheme = (themeName) => {
    const selectedTheme = themes[themeName];
    setTheme(themeName);
    Object.keys(selectedTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, selectedTheme[key]);
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
