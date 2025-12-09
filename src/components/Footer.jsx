import styles from "../style";
import useDarkMode from "./utils/useDarkMode";
import { artstation, behance, linkedin, moon, sun } from "../assets";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { socials } from "../constants";

const Footer = () => {
  const [isDark, setIsDark] = useDarkMode(); // Custom hook for dark mode
  const { t } = useTranslation(); // Translation hook

  return (
    <footer className="w-full border-t border-PBlack">
      <div
        className={`w-full py-4 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center ${styles.boxWidth} ${styles.paddingXA} mx-auto`}
      >
        <div className="flex flex-row justify-center gap-12">
          {socials.map(({ id, to, image }) => {
            return (
              <a
                key={id}
                href={to}
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt={id}
                  className={`w-10 h-10 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
                />
              </a>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          {/* Footer Text */}
          <small
            className={`text-center text-sm lg:text-base ${styles.cursorText}`}
          >
            {t(`footer.rights`)}
          </small>

          {/* Language Switcher and Dark Mode Toggle */}
          <div className="flex items-center justify-start gap-8">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark Mode Toggle */}
            <div className="flex items-center gap-2">
              {/* Light Mode Icon */}
              <img
                src={sun}
                alt="light mode"
                className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
              />

              {/* Toggle Button */}
              <button
                aria-label="Toggle dark mode"
                onClick={() => setIsDark(!isDark)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full bg-PGreyDark transition ${styles.focus} ${styles.cursorPointer} group`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-PGrey transition group-hover:bg-PBlack duration-300 ease-in-out ${
                    isDark ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>

              {/* Dark Mode Icon */}
              <img
                src={moon}
                alt="dark mode"
                className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
