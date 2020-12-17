import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onTermSubmit = (term) => {
    console.log(term);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
