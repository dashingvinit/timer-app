import { BrowserRouter, Link } from "react-router-dom";
import Pages from "./pages/_pages";

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/stopwatch">Stopwatch</Link>
      </nav>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
