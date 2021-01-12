import React from "react";

const Score = (props) => {
  return (
    <div className="score-div" id="score-div">
      <div className="user-label" id="user-label">user</div>
      <div className="comp-label" id="comp-label">comp</div>
      <span className="score" id="score">{props.userScore} : {props.compScore}</span>
    </div>
  )
}

export default Score;
