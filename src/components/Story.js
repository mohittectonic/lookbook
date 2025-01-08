import React from "react";
import StoryMedia from "./StoryMedia";
import SideButton from "./SideButton";
import ProductCarousel from "./ProductCarousel";

const Story = ({ storyData, annotations, isMuted, onToggleMute }) => {
  const { mediaUrl, products = [] } = storyData;
  const isVideo =
    mediaUrl.endsWith(".mp4") ||
    mediaUrl.endsWith(".webm") ||
    mediaUrl.endsWith(".ogg");

  return (
    <div className="story-media-container">
      <StoryMedia
        mediaType={storyData.mediaType}
        mediaUrl={mediaUrl}
        isVideo={isVideo}
        isMuted={isMuted}
        onToggleMute={onToggleMute}
        annotations={annotations}
      />
      <SideButton />
      <ProductCarousel products={products} />
    </div>
  );
};

export default Story;
