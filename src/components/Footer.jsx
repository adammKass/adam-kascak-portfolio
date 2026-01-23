import styles from "../style";
import { useTranslations } from "next-intl";
import { socials } from "../constants";
import DarkModeSwitcher from "./DarkModeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer
      className={`w-full border-t border-PBlack z-10 ${styles.cursorAuto}`}
    >
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
                  src={image.src}
                  alt={id}
                  className={`w-10  saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out ${styles.focus} ${styles.cursorPointer}`}
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
            {t(`rights`)}
          </small>
          <LanguageSwitcher />
          <DarkModeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
