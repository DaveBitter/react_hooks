// Libs
import React, { useState, useEffect } from "react";

// Styling
import "./counter.scss";

const updateDocumentTitle = count => {
  if (count > 0) document.title = `The count is: ${count}`;
};

// Component
const Counter = ({ updateTitleAfterAddition }) => {
  // Destructure state and update method from useState hook
  // passed param is default value
  const [count, setCount] = useState(0);

  if (updateTitleAfterAddition) {
    useEffect(() => updateDocumentTitle(count), [count]);
  }

  return (
    <div className="counter">
      <span className="counter__count">{count}</span>
      <button className="counter__btn" onClick={() => setCount(count + 1)}>
        Count Up To The Moon
      </button>
    </div>
  );
};

export default Counter;
