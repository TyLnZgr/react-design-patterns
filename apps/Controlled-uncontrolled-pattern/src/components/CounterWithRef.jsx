/* eslint-disable react-hooks/refs */
import React, { useRef, useState } from "react";
import "./CounterWithRef.css";

export default function CounterWithRef() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
  };

  const decrement = () => {
    countRef.current -= 1;
  };

  const handleRender = () => {
    setRenderCount(renderCount + 1);
  };

  return (
    <div className="ref-container">
      <div className="ref-card">
        <h1 className="ref-title">Counter with useRef</h1>

        <div className="content-wrapper">
          <div className="counter-section">
            <p className="section-label">
              Ref Counter (No Re-render Unless Updated)
            </p>
            <div className="counter-value-ref">{countRef.current}</div>
            <p className="counter-hint">ref + state güncellemesi için</p>
          </div>

          <div className="divider"></div>

          <div className="render-section">
            <p className="section-label">Render Count</p>
            <div className="render-value">{renderCount}</div>
            <p className="render-hint">Kaç kez render oldu</p>
          </div>
        </div>

        <div className="button-group">
          <button className="ref-button inc-btn" onClick={increment}>
            <span className="btn-icon">➕</span>
            Increment
          </button>

          <button className="ref-button dec-btn" onClick={decrement}>
            <span className="btn-icon">➖</span>
            Decrement
          </button>

          <button className="ref-button render-btn" onClick={handleRender}>
            <span className="btn-icon">🔄</span>
            Force Render
          </button>
        </div>

        <div className="info-section">
          <div className="info-item">
            <span className="info-label">📌 useRef + State Kombinasyonu:</span>
            <ul className="info-list">
              <li>✓ countRef: Persistent veri tutuluyor</li>
              <li>✓ displayValue state: Render için gerekli</li>
              <li>✓ Ref erişimi render dışında güvenli</li>
              <li>✓ State güncelleme re-render tetikler</li>
              <li>✓ renderCount: Component kaç kez render olduğunu gösterir</li>
            </ul>
          </div>

          <div className="comparison">
            <div className="comp-item state">
              <h4>State ✔️</h4>
              <p>Render sırasında</p>
              <p>UI için kullanılır</p>
            </div>
            <div className="comp-item ref">
              <h4>Ref ✔️</h4>
              <p>Handler'larda</p>
              <p>veri tutuluyor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
