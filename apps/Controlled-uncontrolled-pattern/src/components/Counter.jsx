import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>

        <div className="counter-display">
          <p className="counter-label">Current Count</p>
          <p className="counter-value">{count}</p>
        </div>

        <button className="counter-button" onClick={increment}>
          <span className="button-icon">+</span>
          <span className="button-text">Increment</span>
        </button>
        <button className="counter-button" onClick={decrement}>
          <span className="button-icon">-</span>
          <span className="button-text">Decrement</span>
        </button>
        <button
          className="counter-button reset-button"
          onClick={() => setCount(0)}
        >
          <span className="button-text">Reset</span>
        </button>
      </div>
    </div>
  );
}
