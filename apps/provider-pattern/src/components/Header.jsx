import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="app-header">
      <h1>React Provider Pattern Örneği</h1>
      <p>Bu uygulama Provider Pattern kullanarak theme yönetimini gösterir.</p>
      <ThemeToggle />
    </header>
  );
};

export default Header;
