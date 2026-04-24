import { useTheme } from "../hooks";

const DemoSection = () => {
  const { theme } = useTheme();

  return (
    <section className="demo-section">
      <h2>Demo: Theme Değiştirme</h2>
      <p>
        Yukarıdaki butona tıklayarak light/dark mode arasında geçiş
        yapabilirsiniz. Bu, Provider Pattern'in nasıl çalıştığını gösterir.
      </p>
      <div className="theme-info">
        <p>
          Şu anki theme: <strong>{theme}</strong>
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
