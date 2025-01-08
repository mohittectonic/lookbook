import React from "react";
import "../styles/PulsatingCircle.css";

const PulsatingCircle = ({ x, y, link }) => {
  return (
    <div
      className="pulsating-circle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
      }}
      onClick={() => window.open(link, "_blank")}
    />
  );
};

export default PulsatingCircle;
