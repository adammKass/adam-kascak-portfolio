"use client";

import { uk, sk } from "../assets";
import styles from "../style";
import { usePathname, useRouter } from "../i18n/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLanguage = () => {
    const newLocale = currentLocale === "sk" ? "en" : "sk";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`w-[32px] h-[20px] flex-shrink-0 saturate-0 hover:saturate-100 transition-all ease-in-out duration-300 ${styles.focus} ${styles.cursorPointer}`}
    >
      <img
        src={currentLocale === "en" ? sk.src : uk.src}
        alt={
          currentLocale === "en" ? "Change to Slovak" : "Zmeniť na angličtinu"
        }
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default LanguageSwitcher;
