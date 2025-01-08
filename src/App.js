import ReactInstaStories from "react-insta-stories";
import { useState, useEffect } from "react";
import "./App.css";
import SideButton from "./components/SideButton";

function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const createCustomStory = (url) => {
    const isVideo = url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
    return {
      content: ({ action, isPaused }) => {
        return (
          <div className="story-media-container">
            {isVideo ? (
              <video 
                src={url}
                className="story-media"
                controls
                autoPlay
                muted
                loop
              />
            ) : (
              <img 
                src={url}
                className="story-media"
                alt="Story content"
              />
            )}
          </div>
        );
      },
      duration: 5000,
    };
  };

  const storyGroups = [
    ["/images/photo.jpg", "/images/photo.jpg"].map(createCustomStory),
    ["/images/photo.jpg", "/videos/video.mp4"].map(createCustomStory)
  ];

  return (
    <div className="reel-container">
      {storyGroups.map((stories, i) => (
        <div className="story-item" key={i}>
          <ReactInstaStories
            stories={stories}
            width={dimensions.width}
            height={dimensions.height}
            defaultInterval={5000}
          />
          {/* <ProductCarousel /> */}
        </div>
      ))}
      <SideButton />
    </div>
  );
}

export default App;
