import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Weather"element={<Weather />}/>
          <Route path="/Login"element={<Login />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;