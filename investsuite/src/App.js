import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Analytics from "./Components/Analytics";
import Competition from "./Components/Competition";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import TopMenu from "./Components/Topmenu";

function App() {
  return (
    <div className="app-container">
      <Router>
        <TopMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
