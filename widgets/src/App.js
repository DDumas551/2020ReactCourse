import "./App.css";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import axios from "axios";

const items = [
  { title: "What is React?", content: "A front end framework" },
  { title: "Why use React?", content: "It's popular" },
  { title: "How is it used?", content: "You use React by creating components" },
];

const App = () => {
  return (
    <div>
      <div>{/* <Accordion items={items} /> */}</div>
      <Search />
    </div>
  );
};

export default App;
