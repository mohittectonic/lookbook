import React, { useState } from "react";
import { SlShareAlt } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl"; // Assuming there's a dislike icon

function SideButton() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="side-buttons">
      <div onClick={handleLikeClick} style={{ cursor: "pointer" }}>
        {liked ? (
          <SlDislike
            size={50}
            color="white"
            fill="white"
            style={{
              marginBottom: "20px",
            }}
          />
        ) : (
          <SlLike
            size={50}
            color="white"
            fill="white"
            style={{
              marginBottom: "20px",
            }}
          />
        )}
      </div>
      <SlShareAlt size={50} color="white" />
    </div>
  );
}

export default SideButton;
