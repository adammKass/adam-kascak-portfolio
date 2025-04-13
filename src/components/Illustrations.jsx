import React, { useRef } from "react";
import { IllustrationLinks } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import { Tab, TabGroup, TabList } from "@headlessui/react";

const Illustrations = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />

      <TabGroup
        as="main"
        id="main-content"
        className={`columns-xs ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-10 lg:mb-52 mt-10 lg:mt-32`}
      >
        <TabList>
          {IllustrationLinks.map((ilu) => {
            return (
              <Tab
                aria-label="Image fullscreen"
                key={ilu.id}
                className={`w-full opacity-60 mb-10 border-4 shadow-2xl rounded-sm border-PBlack cursor-pointer ${styles.illustHover} ${styles.focus} ${styles.cursorPointer}`}
                onClick={() =>
                  navigate(`/adam-kascak-portfolio/illustrations/${ilu.id}`)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/adam-kascak-portfolio/illustrations/${ilu.id}`);
                  }
                }}
              >
                <picture>
                  <img
                    src={ilu.image.jpg}
                    alt={ilu.title}
                    className="w-full "
                    loading="lazy"
                  />
                </picture>
              </Tab>
            );
          })}
        </TabList>
      </TabGroup>
      <Footer></Footer>
    </div>
  );
};

export default Illustrations;
