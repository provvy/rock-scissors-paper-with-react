import React from "react";

const Button = (props) => {
  return (
      <button onClick={props.onclick} className="button" value={props.id} id={props.id}><img className="image" src={props.src} alt={props.alt} /></button>
  );
}

export default Button;
