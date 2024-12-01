import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MVVMonitor from "./components/MVVMonitor";
import OfficeFinder from "./components/OfficeFinder";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mvv-monitor" element={<MVVMonitor />} />
            <Route path="/office-finder" element={<OfficeFinder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
