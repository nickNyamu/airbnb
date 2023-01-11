import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import Katie from "./assets/images/katie.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={Katie}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
