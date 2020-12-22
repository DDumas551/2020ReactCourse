import React, { Component } from "react";
import youTube from "../APIs/youTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: JSON.parse(window.localStorage.getItem("videos")) || [],
      selectedVideo: null,
    };
  }
  componentDidMount() {
    this.onTermSubmit("Emilia Harford");
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onTermSubmit = async (term) => {
    const response = await youTube.get("/search", { params: { q: term } });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    window.localStorage.setItem("videos", JSON.stringify(response.data.items));
  };
  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
