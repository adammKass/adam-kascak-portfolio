import styles from "../../style";

import {
  AboutMeOff,
  AboutMeOn,
  service,
  serviceOff,
  serviceIllustration,
  serviceIllustrationOff,
  serviceWeb,
  serviceWebOff,
} from "../../assets";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";
import * as motion from "motion/react-client";
import {
  containerFadeStagger,
  fadeUp,
  fadeUpSmall,
  staggerContainer,
  viewportOnce,
} from "../../constants/variants";

// Main Cards Container
const Home = () => {
  const t = useTranslations("");
  return (
    <div
      className={`flex flex-col flex-grow items-center justify-center ${styles.cursorAuto}`}
    >
      {/* Main Content - Tabs seperate for illustration handling*/}
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp(0.3)}
        id="main-content"
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 h-full mb-10 lg:mb-0 ${styles.boxWidth} ${styles.paddingXA} mx-auto mt-10 mb-10 lg:mb-0 lg:mt-0`}
      >
        <ServiceCard
          titleKey="graphicDesign"
          path="/graphicDesign"
          offImg={serviceWebOff}
          onImg={serviceWeb}
          ariaLabel="Graphic Design Card"
        />
        <ServiceCard
          titleKey="3dGraphics"
          path="/dGraphics"
          ariaLabel="3D Graphics Card"
          isCube={true} // No images needed for cube
        />
        <ServiceCard
          titleKey="illustrations"
          path="/illustrations"
          offImg={serviceIllustrationOff}
          onImg={serviceIllustration}
          ariaLabel="Illustrations Card"
        />
        <ServiceCard
          titleKey="services"
          path="/services"
          offImg={serviceOff}
          onImg={service}
          ariaLabel="Services Card"
        />
        <ServiceCard
          titleKey="aboutMe"
          path="/about"
          offImg={AboutMeOff}
          onImg={AboutMeOn}
          ariaLabel="About Me Card"
        />
      </motion.main>
    </div>
  );
};

export default Home;
