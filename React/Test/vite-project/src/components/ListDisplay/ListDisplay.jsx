import "./ListDisplay.style.css";
import React, { useState } from "react";

const ListDisplay = ({ title, data, field }) => {
  const [activeListType, setActiveListType] = useState(false);
  return (
    <div className="list-display">
      <h2
        onClick={() => setActiveListType(!activeListType)}
        style={{ cursor: "pointer" }}>
        {title}
      </h2>
      {activeListType && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.name}: {item[field]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListDisplay;
