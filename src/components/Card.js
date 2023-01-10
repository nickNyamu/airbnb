import React from "react"; 
import star from "../Star 1.png";


export default function Card(props) {
    return(
       <div className="card">
            <img src={'./${props.img}'} alt="katie-img" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="airbnb logo" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) ● </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span> / Person</p>
       </div>
    );
}