import React from "react";

const Clock = ({ hour, min, sec, ms }) => {
  return (
    <div className="clock">
      <span>{hour}</span> : <span>{min}</span> : <span>{sec}</span> :{" "}
      <span>{ms}</span>
    </div>
  );
};

export default Clock;
