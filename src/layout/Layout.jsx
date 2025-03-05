import Navbar from "./Navbar";
import { ThemeProvider } from "../context/useThemeContext";

function Layout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
