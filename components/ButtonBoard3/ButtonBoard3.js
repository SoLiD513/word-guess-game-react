import React from "react";
import "./ButtonBoard3.css";

const ButtonBoard3 = props => {
  return (
    <div onClick={() => props.setClicked(props.id)} className="card col-md-1">
      <div className="img-container">
        <img alt={""} src={props.image} />
      </div>
    </div>
  );
};

export default ButtonBoard3;
