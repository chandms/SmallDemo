import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
