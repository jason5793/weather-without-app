import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Weather />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;