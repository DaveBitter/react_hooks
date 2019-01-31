// Libs
import React, { useState, useEffect } from "react";

// Utils
import { withAppProvider } from "../../static/Consumer";

// Styling
import "../Counter/counter.scss";

const updateDocumentTitle = count => {
  if (count > 0) document.title = `The count is: ${count}`;

  // Same as componentWillUnmount
  return () => {
    document.title = "";
  };
};

// Component
const Counter = ({ app, updateTitleAfterAddition }) => {
  console.log(app);
  // Destructure state and update method from useState hook
  // passed param is default value
  const [count, setCount] = useState(0);

  if (updateTitleAfterAddition) {
    // Replaces componentDidMount and componentDidUpdate
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

export default withAppProvider(Counter);
