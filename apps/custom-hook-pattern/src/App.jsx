import FormExample from "./components/FormExample";
import ToggleExample from "./components/ToggleExample";
import "./App.css";

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero-panel">
        <div>
          <p className="eyebrow">Custom Hook Pattern</p>
          <h1>React'ta reusable hook'lar öğrenme alanı</h1>
          <p className="hero-copy">
            Bu örnek, custom hook'ların nasıl yazıldığını, nasıl
            ayrıştırıldığını ve projenizde nasıl tekrar kullanılabilir hale
            getirildiğini gösterir.
          </p>
        </div>
      </header>

      <main className="content-grid">
        <ToggleExample />
        <FormExample />
      </main>
    </div>
  );
}
