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
    <div className="absolute top-0 left-0 w-full overflow-hidden bg-PWhite">
      <Navbar />
      <div
        className={`flex flex-col gap-8 md:gap-16 ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-52 mt-10 lg:mt-32 text-PBlack`}
      >
        {/* Responsive Title */}
        <h2 className="font-extralight text-5xl lg:text-6xl mb-6">
          {t(`designLinks.${link.id}.title`)}
        </h2>

        {/* Responsive Details Section */}
        <div className="flex flex-col gap-5">
          <div className="border-b border-PBlack pb-4">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              {t(`designLinks.type`)}
            </h4>
            <p className="text-base sm:text-lg lg:text-xl">
              {t(`designLinks.${link.id}.type`)}
            </p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              {t(`designLinks.tools`)}
            </h4>
            <p className="text-base sm:text-lg lg:text-xl">
              {t(`designLinks.${link.id}.tools`)}
            </p>
          </div>
          <div className="border-b border-PBlack pb-4">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-2">
              {t(`designLinks.year`)}
            </h4>
            <p className="text-base sm:text-lg lg:text-xl">
              {t(`designLinks.${link.id}.year`)}
            </p>
          </div>
        </div>

        {/* Responsive Description */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
          {t(`designLinks.${link.id}.text`)}
        </p>

        {/* Responsive Images Section */}
        {link.images.map((ilu, index) => (
          <div
            key={index}
            className="w-full mb-10 rounded-sm border-PBlack flex flex-col items-center"
          >
            <img
              src={ilu.image}
              alt={t(`designLinks.${link.id}.images.${index}.title`)}
              className="w-full rounded-lg"
            />
            <span className="text-sm sm:text-base lg:text-lg py-3 text-center">
              {t(`designLinks.${link.id}.images.${index}.title`)}
            </span>
          </div>
        ))}
        <div
          className="flex flex-col cursor-pointer self-center transition-all duration-300 ease-in-out hover:opacity-50 hover:-translate-y-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={arrowLeft}
            alt="to top"
            className="h-12 w-12 rotate-90 self-center  dark:brightness-[4] dark:saturate-0 "
          />
          <p className="text-PBlack">To Top</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DesignDetails;
