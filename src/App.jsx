import { BrowserRouter, Link } from "react-router-dom";
import Layout from "./layout/Layout";
import Pages from "./pages/_pages";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Pages />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
