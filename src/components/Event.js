import React from "react";

const Event = (props) => {
  return (
    <div className="event-div" id="event-div">
      <span className="event" id="event">{props.outcome}</span>
    </div>
  );
}

export default Event;
