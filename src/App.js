import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Theme from "./pages/Theme";
import Toolbox from "./pages/Toolbox";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/toolbox" element={<Toolbox />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
