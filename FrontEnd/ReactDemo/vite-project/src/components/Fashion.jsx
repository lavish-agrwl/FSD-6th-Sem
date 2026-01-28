import React from "react";
import "./fashion.css";

function Fashion(props) {
  return (
    <div className="fashion">
      <div className="card">
        <img src={props.image} alt="" height={100} width={100} />
        <h3>{props.title}</h3>
        <h4>Price: {props.price}</h4>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}

export default Fashion;
