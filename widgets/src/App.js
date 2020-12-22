import "./App.css";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  { title: "What is React?", content: "A front end framework" },
  { title: "Why use React?", content: "It's popular" },
  { title: "How is it used?", content: "You use React by creating components" },
];
const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <div>
        {/* <Accordion items={items} /> */}
        {/* <Search /> */}
        {/* <button onClick={() => setShowDropdown(!showDropdown)}>
          Toggle Dropdown
        </button>
        {showDropdown && (
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            label="Select A Colorrrr"
          />
        )} */}
      </div>
    </div>
  );
};

export default App;
