import Navbar from "./Navbar";
import { ThemeProvider } from "./useThemeContext";

function Layout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
