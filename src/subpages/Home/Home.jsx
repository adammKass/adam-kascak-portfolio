import React from "react";
import styles from "../../style";
import { Footer, Navbar } from "../../components";
import Card from "./Card";

const Home = () => {
  return (
    <div
      className={`absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <Card />
      <Footer></Footer>
    </div>
  );
};

export default Home;
