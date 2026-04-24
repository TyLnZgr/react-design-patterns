import useToggle from "../hooks/useToggle";

function ToggleExample() {
  const { value: isOpen, toggle, setTrue, setFalse } = useToggle(false);

  return (
    <article className="example-card">
      <header>
        <h2>useToggle</h2>
        <p>
          boolean durum yönetimi için kullanılan basit bir custom hook. Tekrar
          kullanılabilir, bağımsız bir mantık sağlar.
        </p>
      </header>
      <div className="example-actions">
        <strong>Durum:</strong>
        <span className={`badge ${isOpen ? "badge--success" : "badge--muted"}`}>
          {isOpen ? "Açık" : "Kapalı"}
        </span>
      </div>
      <div className="button-group">
        <button type="button" onClick={toggle}>
          Değiştir
        </button>
        <button type="button" onClick={setTrue}>
          Aç
        </button>
        <button type="button" onClick={setFalse}>
          Kapat
        </button>
      </div>
    </article>
  );
}

export default ToggleExample;
