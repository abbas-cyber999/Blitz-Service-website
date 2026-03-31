export function ThemeScript() {
  const script = `
    try {
      const storedTheme = window.localStorage.getItem("lingoria-theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = storedTheme || (systemPrefersDark ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
