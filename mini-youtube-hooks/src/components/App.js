import React, { useState, useEffect } from "react";
import youTube from "../APIs/youTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState(
    JSON.parse(window.localStorage.getItem("videos")) || []
  );
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Emelia Hartford");
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youTube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    window.localStorage.setItem("videos", JSON.stringify(response.data.items));
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
