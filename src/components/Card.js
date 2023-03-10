import React from "react";
import star from "../assets/images/Star 1.png";

export default function Card(props) {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT";
  } 
  else if(props.item.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
        {badgeText && <div className="card--badge">SOLD OUT</div>}
      <img src={`${props.img}`} alt="katie-img" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="airbnb logo" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) ● </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price} </span> / Person
      </p>
    </div>
  );
}







