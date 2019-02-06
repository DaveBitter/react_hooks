// Libs
import React, { useContext } from "react";

// Utils
import { AppContext } from "../../static/Context";

// Styling
import "./counter.scss";

// Code Example
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/dist/styles/prism';

const codeExample = `
// Libs
import React, { useContext } from "react";

// Utils
import { AppContext } from "../../static/Context";

// Styling
import "./counter.scss";

// Component
const CounterWithUseContext = () => {
  const app = useContext(AppContext);

  return (
    <div className="counter">
      <span className="counter__count">{app.count}</span>
      <button
        className="counter__btn"
        onClick={() => app.setCount(app.count + 1)}
      >
        Count Up To The Moon
      </button>
    </div>
  );
};

export default CounterWithUseContext;

`

// Component
const CounterWithUseContext = () => {
  const app = useContext(AppContext);

  return (
    <>
      <div className="counter">
        <span className="counter__count">{app.count}</span>
        <button
          className="counter__btn"
          onClick={() => app.setCount(app.count + 1)}
        >
          Count Up To The Moon
        </button>
      </div>
      <SyntaxHighlighter language='javascript' style={light}>{codeExample}</SyntaxHighlighter>
    </>
  );
};

export default CounterWithUseContext;
