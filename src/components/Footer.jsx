import { Button } from "@headlessui/react";
import styles from "../style";
import useDarkMode from "./useDarkMode";
import { moon, sun, uk } from "../assets";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [isDark, setIsDark] = useDarkMode(); // Use the custom hook for dark mode
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-PBlack">
      <div
        className={`w-full py-4 flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 justify-between items-center ${styles.boxWidth} ${styles.paddingXA} mx-auto`}
      >
        <p className="text-center text-PBlack text-extralight">
          {t(`footer.rights`)}
        </p>
        <div className="flex items-center justify-start gap-8">
          <LanguageSwitcher></LanguageSwitcher>
          <div className="flex items-center gap-2">
            <img
              src={sun}
              alt="light mode"
              className="h-6 w-6 dark:brightness-[4] dark:saturate-0"
            />
            <button
              onClick={() => setIsDark(!isDark)} // Toggle dark mode
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
