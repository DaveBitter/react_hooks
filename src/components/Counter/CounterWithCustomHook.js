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

// Custom Hook
const useScrollerDistance = () => {
    const [scrolledDistance, setScrolledDistance] = useState(0);

    let prevPageYOffset;
    const handler = () => {
        prevPageYOffset = prevPageYOffset || window.pageYOffset;
        setScrolledDistance(
            scrolledDistance +
            Math.abs(window.pageYOffset - prevPageYOffset)
        );
        prevPageYOffset = window.pageYOffset;
    }

    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [scrolledDistance]);

    return scrolledDistance;
};


// Component
const Counter = () => {
    const scrolledDistance = useScrollerDistance();

    return (
        <>
            <div className="counter">
                <span className="counter__count">{scrolledDistance}</span>
                <button className="counter__btn">
                    Scroll Up To The Moon
            </button>
            </div>
        </>
    );
};

export default Counter;

`

// Custom Hook
const useScrollerDistance = () => {
    const [scrolledDistance, setScrolledDistance] = useState(0);

    let prevPageYOffset;
    const handler = () => {
        prevPageYOffset = prevPageYOffset || window.pageYOffset;
        setScrolledDistance(scrolledDistance +
            Math.abs(window.pageYOffset - prevPageYOffset)
        );
        prevPageYOffset = window.pageYOffset;
    }

    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [scrolledDistance]);

    return scrolledDistance;
};


// Component
const Counter = () => {
    const scrolledDistance = useScrollerDistance();

    return (
        <>
            <div className="counter">
                <span className="counter__count">{scrolledDistance}</span>
                <button className="counter__btn">
                    Scroll Up To The Moon
            </button>
            </div>
            <SyntaxHighlighter language='javascript' style={light}>{codeExample}</SyntaxHighlighter>
        </>
    );
};

export default Counter;
