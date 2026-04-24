import { ThemeProvider } from "./context";
import { useTheme } from "./hooks";
import {
  Header,
  PatternExplanation,
  DemoSection,
  CodeExample,
} from "./components";
import "./styles/App.css";

// Ana uygulama component'i
const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="app-main">
        <PatternExplanation />
        <DemoSection />
        <CodeExample />
      </main>
    </div>
  );
};

// Ana App component'i - Provider ile sarılmış
export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
