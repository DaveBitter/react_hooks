// Libs
import React, { useReducer } from "react";

// Styling
import "./counter.scss";

// Component
const Counter = () => {
  // Destructure state and update method from useState hook
  // passed param is default value
  const [count, setCount] = useReducer((state, action) => state + action, 0);

  return (
    <div className="counter">
      <span className="counter__count">{count}</span>
      <button className="counter__btn" onClick={() => setCount(1)}>
        Count Up To The Moon
      </button>
    </div>
  );
};

export default Counter;
