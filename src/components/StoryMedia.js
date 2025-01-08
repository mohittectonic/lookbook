import React from "react";
import PulsatingCircle from "./PulsatingCircle";
import MuteButton from "./MuteButton";

const StoryMedia = ({
  mediaType,
  mediaUrl,
  isVideo,
  isMuted,
  onToggleMute,
  annotations,
}) => {
  return (
    <>
      {isVideo ? (
        <>
          <video
            src={mediaUrl}
            className="story-media"
            controls
            autoPlay
            muted={isMuted}
            loop
          />
          <MuteButton isMuted={isMuted} onToggleMute={onToggleMute} />
        </>
      ) : (
        <>
          <img src={mediaUrl} className="story-media" alt="Story content" />
          {annotations.map((point, i) => (
            <PulsatingCircle
              key={i}
              x={point.x}
              y={point.y}
              link={point.link}
            />
          ))}
        </>
      )}
    </>
  );
};

export default StoryMedia;
