import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
const Home = () => {
  return (
    <div className="">
      <div className="absolute top-0 left-0 w-full min-h-screen overflow-hidden bg-PWhite">
        <Navbar />
        <Card />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
