import { useTranslations } from "next-intl";
import { DesignLinks } from "../../constants";
import styles from "../../style";
import { ScrollToTopButton } from "../../components";

// Graphic Design Details Subpage Component

const DesignDetails = ({ id }) => {
  const t = useTranslations("designLinks");
  const link = DesignLinks.find((item) => item.id === id);

  return (
    <div
      className={`flex flex-grow w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <main
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        {/* Responsive Title */}
        <h1 className={`${styles.headingMain} ${styles.paddingB}`}>
          {t(`${link.id}.title`)}
        </h1>

        {/* Responsive Details Section */}
        <section
          className={`flex flex-col gap-4 md:gap-8 self-center max-w-[780px] w-full ${styles.mainMarginY} `}
        >
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">{t(`type`)}</h2>
            <p>{t(`${link.id}.type`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">{t(`tools`)}</h2>
            <p>{t(`${link.id}.tools`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl">{t(`year`)}</h2>
            <p>{t(`${link.id}.year`)}</p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h2 className="mb-2 text-2xl lg:text-4xl uppercase font-medium">
              {t(`deployed`)}
            </h2>
            <a
              href={link.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:opacity-50"
            >
              {link.live}
            </a>
          </div>
        </section>

        {/* Responsive Description */}
        <p
          className={`leading-relaxed  self-center items-center max-w-[780px] mb-8`}
        >
          {t(`${link.id}.text`)}
        </p>

        {/* Responsive Images Section */}
        {link.images.map((ilu, index) => (
          <figure
            key={index}
            className="w-full mb-10 rounded-sm flex flex-col items-center "
          >
            <img
              src={ilu.image.src}
              alt={t(`${link.id}.images.${index}.alt`)}
              className="rounded-lg border-4 shadow-2xl border-PBlack"
              loading="lazy"
            />
            <figcaption className={`text-sm lg:text-lg py-3 text-center`}>
              {t(`${link.id}.images.${index}.title`)}
            </figcaption>
          </figure>
        ))}
        <ScrollToTopButton label={t("toTop")} />
      </main>
    </div>
  );
};

export default DesignDetails;
