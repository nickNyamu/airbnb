import React from "react";
import photo_grid from "../assets/images/Group 77.png";

export default function Hero() {
  return (
    <section>
      <img src={photo_grid} alt="airbnb logo" className="photo_grid" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
