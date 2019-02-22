// Libs
import React, { useState, useEffect } from "react";

// Styling
import "./counter.scss";

// Code Example
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { light } from 'react-syntax-highlighter/dist/styles/prism';

const codeExample = `
// Libs
import React, { useState, useEffect } from "react";

// Styling
import "./counter.scss";

// Helper functions
const updateDocumentTitle = count => {
    if (count > 0) document.title = \`The count is: \${count}\`;

    // Same as componentWillUnmount
    return () => {
        document.title = "";
    };
};

// Component
const Counter = () => {
    // Destructure state and update method from useState hook
    // passed param is default value
    const [count, setCount] = useState(0);

    // Replaces componentDidMount and componentDidUpdate
    useEffect(() => updateDocumentTitle(count), [count]);

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

`

// Helper functions
const updateDocumentTitle = count => {
    if (count > 0) document.title = `The count is: ${count}`;

    // Same as componentWillUnmount
    return () => {
        document.title = "";
    };
};

// Component
const Counter = () => {
    // Destructure state and update method from useState hook
    // passed param is default value
    const [count, setCount] = useState(0);

    // Replaces componentDidMount and componentDidUpdate
    useEffect(() => updateDocumentTitle(count), [count]);

    return (
        <>
            <div className="counter">
                <span className="counter__count">{count}</span>
                <button className="counter__btn" onClick={() => setCount(count + 1)}>
                    Count Up To The Moon
            </button>
            </div>
            <SyntaxHighlighter language='javascript' style={light}>{codeExample}</SyntaxHighlighter>
        </>
    );
};

export default Counter;
