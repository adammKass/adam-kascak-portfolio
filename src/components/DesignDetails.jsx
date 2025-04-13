import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DesignLinks } from "../constants";
import styles from "../style";
import { useTranslation } from "react-i18next";
import { arrowLeft } from "../assets";

const DesignDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const link = DesignLinks.find((item) => item.id === id);

  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col gap-8 md:gap-16 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-52 mt-10 lg:mt-32 text-PBlack`}
      >
        {/* Responsive Title */}
        <h3 className={`mb-6 ${styles.cursorText}`}>
          {t(`designLinks.${link.id}.title`)}
        </h3>

        {/* Responsive Details Section */}
        <section className={`flex flex-col gap-5 ${styles.cursorText} `}>
          <div className="border-b border-PBlack pb-4">
            <h4 className="mb-2">{t(`designLinks.type`)}</h4>
            <p>{t(`designLinks.${link.id}.type`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h4 className="mb-2">{t(`designLinks.tools`)}</h4>
            <p>{t(`designLinks.${link.id}.tools`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h4 className="mb-2">{t(`designLinks.year`)}</h4>
            <p>{t(`designLinks.${link.id}.year`)}</p>
          </div>
        </section>

        {/* Responsive Description */}
        <p className={`leading-relaxed ${styles.cursorText}`}>
          {t(`designLinks.${link.id}.text`)}
        </p>

        {/* Responsive Images Section */}
        {link.images.map((ilu, index) => (
          <section
            key={index}
            className="w-full mb-10 rounded-sm border-PBlack flex flex-col items-center"
          >
            <img
              src={ilu.image}
              alt={t(`designLinks.${link.id}.images.${index}.alt`)}
              className="w-full rounded-lg"
              loading="lazy"
            />
            <span
              className={`text-sm lg:text-lg py-3 text-center ${styles.cursorText}`}
            >
              {t(`designLinks.${link.id}.images.${index}.title`)}
            </span>
          </section>
        ))}
        <button
          className="flex flex-col cursor-pointer self-center transition-all duration-300 ease-in-out hover:opacity-50 hover:-translate-y-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={arrowLeft}
            alt="To top"
            className={`rotate-90 self-center ${styles.iconSize} ${styles.iconHover}`}
          />
          <p>To Top</p>
        </button>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default DesignDetails;
