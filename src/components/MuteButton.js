import React from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const MuteButton = ({ isMuted, onToggleMute }) => {
  return (
    <button
      onClick={onToggleMute}
      style={{
        position: "absolute",
        top: "30px",
        right: "20px",
        background: "rgba(0, 0, 0, 0.5)",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {isMuted ? (
        <FaVolumeMute color="white" size={20} />
      ) : (
        <FaVolumeUp color="white" size={20} />
      )}
    </button>
  );
};

export default MuteButton;
