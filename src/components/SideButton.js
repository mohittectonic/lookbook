import React from "react";
import { FaThumbsUp, FaShare } from "react-icons/fa";

function SideButton() {
  return (
    <div className="side-buttons">
      <button><FaThumbsUp color="" /></button>
      <button><FaShare color="" /></button>
    </div>
  );
}

export default SideButton;
