import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
