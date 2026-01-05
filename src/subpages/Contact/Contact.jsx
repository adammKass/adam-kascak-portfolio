import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { artstation, behance, linkedin } from "../../assets";
import styles from "../../style";
import { t } from "i18next";
import Form from "./Form";

// Contact Subpage Component

const Contact = () => {
  return (
    <div
      className={`absolute top-0 left-0 flex flex-col w-full min-h-screen overflow-x-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <main
        id="main-content"
        className={`flex flex-col ${styles.boxWidth} ${styles.paddingXA} mx-auto ${styles.mainMarginY}`}
      >
        <Form></Form>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
