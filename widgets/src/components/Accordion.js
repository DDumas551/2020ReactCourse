import React, { useState } from "react";

const Accordion = ({ items }) => {
  const onTitleClick = (x) => {
    setTitle(x);
  };

  const [title, setTitle] = useState("");

    const renderedItems = items.map((item, i) => {
      const active = title === item.title ? "active" : ""
    return (
      <React.Fragment key={i}>
        <div className={`title ${active}`} onClick={() => onTitleClick(item.title)}>
          <div>
            <i className="dropdown icon" />
            {item.title}
          </div>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content} </p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
};

export default Accordion;
