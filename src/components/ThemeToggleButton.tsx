import { useTheme } from '../hooks/useTheme';
import { GLOBAL_NAMES } from '../constants/globalNames';

type ThemeToggleButtonProps = {
  containerClassName?: string;
  withBorder?: boolean;
};

const defaultContainerClassName =
  'fixed top-3/4 right-4 z-50 transform -translate-y-1/2';

function ThemeToggleButton({
  containerClassName = defaultContainerClassName,
  withBorder = true,
}: ThemeToggleButtonProps) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={containerClassName}>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--text-h)',
          border: withBorder ? '2px solid var(--icon-border)' : 'none',
          padding: '7px 7px',
          borderRadius: '40px',
        }}
      >
        {theme === GLOBAL_NAMES.THEME.LIGHT ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeToggleButton;
