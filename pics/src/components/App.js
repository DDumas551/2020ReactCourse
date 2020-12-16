import React from "react";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { results: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ results: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.results} 
        />
      </div>
    );
  }
}

export default App;
