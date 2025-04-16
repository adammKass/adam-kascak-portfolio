import { moon, sun } from "../assets";
import useDarkMode from "./utils/useDarkMode";

const darkModeSwitcher = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="flex items-center gap-2">
      <img
        src={sun}
        alt="light mode"
        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
      />
      <button
        aria-label="Toggle dark mode"
        onClick={() => setIsDark(!isDark)}
        className={`relative inline-flex h-6 w-12 items-center rounded-full bg-PGreyDark transition`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-PGrey transition ${
            isDark ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
      <img
        src={moon}
        alt="dark mode"
        className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
      />
    </div>
  );
};
export default darkModeSwitcher;
