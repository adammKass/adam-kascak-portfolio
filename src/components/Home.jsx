import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import styles from "../style";
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
