const CodeExample = () => {
  const themeContextCode = `import { createContext, useContext, useState } from 'react';
import { THEMES } from '../constants/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(prev => prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`;

  const appUsageCode = `import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import PatternExplanation from './components/PatternExplanation';
import DemoSection from './components/DemoSection';
import CodeExample from './components/CodeExample';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={\`app \${theme}\`}>
      <Header />
      <main className="app-main">
        <PatternExplanation />
        <DemoSection />
        <CodeExample />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}`;

  return (
    <section className="code-example">
      <h2>Kod Örneği</h2>
      <div className="code-blocks">
        <div className="code-block">
          <h3>ThemeContext.jsx</h3>
          <pre>{themeContextCode}</pre>
        </div>

        <div className="code-block">
          <h3>App.jsx (Kullanım)</h3>
          <pre>{appUsageCode}</pre>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
