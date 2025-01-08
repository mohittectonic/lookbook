import ReactInstaStories from "react-insta-stories";
import { useState, useEffect } from "react";
import Story from "./components/Story";
import lookbackData from "./constants/lookbackData";
import { annotations } from "./constants/annotations";
import "./styles/App.css";

function App() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createCustomStory = (storyData, groupIndex) => ({
    content: () => (
      <Story
        storyData={storyData}
        annotations={annotations[groupIndex]?.points || []}
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
      />
    ),
  });

  const storyGroups = lookbackData.map((group, index) =>
    group.pages.map((pageData) => createCustomStory(pageData, index))
  );

  return (
    <div className="reel-container">
      {storyGroups.map((stories, i) => (
        <div className="story-item" key={i}>
          <ReactInstaStories
            loop={true}
            stories={stories}
            width={dimensions.width}
            height={dimensions.height}
            defaultInterval={5000}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
