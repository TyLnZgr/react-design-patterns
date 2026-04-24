import { useTheme } from "../hooks";
import { THEMES, THEME_ICONS, THEME_LABELS } from "../constants/themes";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const currentIcon =
    theme === THEMES.LIGHT ? THEME_ICONS.DARK : THEME_ICONS.LIGHT;
  const currentLabel =
    theme === THEMES.LIGHT ? THEME_LABELS.DARK : THEME_LABELS.LIGHT;

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {currentIcon} {currentLabel}
    </button>
  );
};

export default ThemeToggle;
