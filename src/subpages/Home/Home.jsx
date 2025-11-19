import React from "react";
import styles from "../../style";
import { Footer, Navbar } from "../../components";
import Card from "./Card";

// Home Subpage Component

const Home = () => {
  return (
    <div
      className={`absolute top-0 left-0 flex flex-col w-full min-h-screen bg-PWhite ${styles.cursorAuto}`}
    >
      <Navbar />
      <Card />
      <Footer></Footer>
    </div>
  );
};

export default Home;
