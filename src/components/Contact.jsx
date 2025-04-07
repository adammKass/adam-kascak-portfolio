import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { artstation, linkedin } from "../assets";
import styles from "../style";
const Contact = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-PWhite">
      <Navbar />
      <div
        className={`flex flex-col justify-center gap-2 h-full ${styles.boxWidth} ${styles.paddingXA} mx-auto mb-52 mt-10 lg:mt-48 border-b lg:border-y border-PBlack text-PBlack`}
      >
        <a
          href="mailto:adam.kascak@protonmail.com"
          className="text-center  hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          adam.kascak@protonmail.com
        </a>

        <div className="flex flex-row justify-center gap-12">
          <a href="https://www.artstation.com/adamkascak1">
            <img
              src={artstation}
              alt="artstation"
              className="w-10 h-10 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out"
            />
          </a>

          <a
            href="https://www.artstation.com/adamkascak1"
            className="flex items-center"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-7 h-6 saturate-0 hover:saturate-100 transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
