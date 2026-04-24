import { useEffect, useMemo, useState } from "react";
import Dashboard from "./pages/Dashboard";
import compose from "./utils/compose";
import withAuthentication from "./hocs/withAuthentication";
import withLoading from "./hocs/withLoading";
import withLogger from "./hocs/withLogger";
import "./App.css";

const EnhancedDashboard = compose(
  withLogger("Dashboard"),
  withAuthentication,
  withLoading,
)(Dashboard);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const user = useMemo(
    () => ({
      name: "Ece Yılmaz",
      email: "ece.yilmaz@example.com",
    }),
    [],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="app-shell">
      <div className="app-header">
        <div>
          <h1>Higher-Order Component (HOC) Örneği</h1>
          <p>
            Loading, auth ve logger sorumlulukları ayrı HOC'lar içinde tutuldu.
          </p>
        </div>
        <div className="app-actions">
          <button onClick={() => setIsAuthenticated((value) => !value)}>
            {isAuthenticated ? "Çıkış Yap" : "Giriş Yap"}
          </button>
          <button onClick={() => setIsLoading((value) => !value)}>
            {isLoading ? "Yüklemeyi Durdur" : "Yeniden Yükle"}
          </button>
        </div>
      </div>
      <section className="app-content">
        <EnhancedDashboard
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
          user={user}
        />
      </section>
    </main>
  );
}

export default App;
