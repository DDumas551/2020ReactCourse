import React from "react";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { results: JSON.parse(window.localStorage.getItem("pics")) || [] };
  onSearchSubmit = async (term) => {
    const myStorage = window.localStorage;
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ results: response.data.results });
    myStorage.setItem("pics", JSON.stringify(this.state.results));
  };
  removeItem = (id) => {
    const newList = this.state.results.filter((item) => item.id !== id);
    console.log("EOL");
    this.setState({ results: newList });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.results} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
