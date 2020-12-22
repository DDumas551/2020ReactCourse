import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [text, setText] = useState("");
  const handleSubmit = () => {
    onTermSubmit(text);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={() => handleSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends Component {
//   state = { text: "" };
//   handleChange = (e) => {
//     this.setState({ text: e.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onTermSubmit(this.state.text);
//   };
//   render() {
//     const { text } = this.state;
//     return (
//       <div className="search-bar ui segment">
//         <form className="ui form" onSubmit={this.handleSubmit}>
//           <div className="field">
//             <label>Video Search</label>
//             <input value={text} onChange={this.handleChange} />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
