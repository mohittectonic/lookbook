import ReactInstaStories from "react-insta-stories";
import "./App.css";

function App() {
  const storyGroups = [
    ["/images/photo.jpg", "/images/photo.jpg"],
    ["/images/photo.jpg", "/images/photo.jpg"]
  ];

  return (
    <div className="reel-container">
      {storyGroups.map((mediaItems, i) => (
        <div className="story-item" key={i}>
          <ReactInstaStories
            width={432}
            height={932}
            stories={mediaItems}
            defaultInterval={5000}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
