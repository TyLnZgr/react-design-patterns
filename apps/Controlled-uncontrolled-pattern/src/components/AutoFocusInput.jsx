import React, { useRef } from "react";
import "./AutoFocusInput.css";
import { useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const handleGetValue = () => {
    if (inputRef.current) {
      alert(`Input Value: ${inputRef.current.value}`);
    }
  };

  const handleSelect = () => {
    inputRef.current?.select();
  };

  return (
    <div className="autofocus-container">
      <div className="autofocus-card">
        <h1 className="autofocus-title">useRef - Focus Management</h1>

        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="autofocus-input"
            placeholder="Type something here..."
            defaultValue=""
          />
        </div>

        <div className="button-group">
          <button className="action-button focus-btn" onClick={handleFocus}>
            <span className="btn-icon">🎯</span>
            Focus Input
          </button>

          <button className="action-button clear-btn" onClick={handleClear}>
            <span className="btn-icon">🗑️</span>
            Clear
          </button>

          <button className="action-button select-btn" onClick={handleSelect}>
            <span className="btn-icon">✂️</span>
            Select All
          </button>

          <button className="action-button get-btn" onClick={handleGetValue}>
            <span className="btn-icon">📋</span>
            Get Value
          </button>
        </div>

        <div className="info-box">
          <p className="info-title">useRef Hook:</p>
          <ul className="info-list">
            <li>✓ Direktly DOM'a erişim sağlar</li>
            <li>
              ✓ <code>inputRef.current</code> DOM elementi tutar
            </li>
            <li>✓ Re-render tetiklemez</li>
            <li>✓ input.current.focus(), select(), value vs. kullanılabilir</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
