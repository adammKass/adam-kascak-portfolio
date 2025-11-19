import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { Footer, Navbar } from "../../components";
import { DesignLinks } from "../../constants";
import styles from "../../style";
import { arrowLeft } from "../../assets";

// Graphic Design Details Subpage Component

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
        <h1 className={`mb-6 ${styles.cursorText} text-5xl lg:text-6xl`}>
          {t(`designLinks.${link.id}.title`)}
        </h1>

        {/* Responsive Details Section */}
        <section className={`flex flex-col gap-5 ${styles.cursorText} `}>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">
              {t(`designLinks.type`)}
            </h2>
            <p>{t(`designLinks.${link.id}.type`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">
              {t(`designLinks.tools`)}
            </h2>
            <p>{t(`designLinks.${link.id}.tools`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">
              {t(`designLinks.year`)}
            </h2>
            <p>{t(`designLinks.${link.id}.year`)}</p>
          </div>
        </section>

        {/* Responsive Description */}
        <p className={`leading-relaxed ${styles.cursorText}`}>
          {t(`designLinks.${link.id}.text`)}
        </p>

        {/* Responsive Images Section */}
        {link.images.map((ilu, index) => (
          <figure
            key={index}
            className="w-full mb-10 rounded-sm flex flex-col items-center "
          >
            <img
              src={ilu.image}
              alt={t(`designLinks.${link.id}.images.${index}.alt`)}
              className="rounded-lg border-4 shadow-2xl border-PBlack"
              loading="lazy"
            />
            <figcaption
              className={`text-sm lg:text-lg py-3 text-center ${styles.cursorText}`}
            >
              {t(`designLinks.${link.id}.images.${index}.title`)}
            </figcaption>
          </figure>
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
