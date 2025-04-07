import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  NotFound,
  Contact,
  About,
  Home,
  DGraphics,
  GraphicDesign,
  Illustrations,
  IllustrationsDetails,
  DesignDetails,
} from "./components";
import styles from "./style";
import { sign } from "./assets";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate loading (e.g., fetching data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 2 seconds
    }, 200);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-PWhite z-10">
        <div className="flex flex-col items-center">
          <img src={sign} alt="loading" className="w-[58px] h-[58px] mb-4" />
          <div className="w-24 h-1 bg-PGrey overflow-hidden">
            <div className="h-full bg-PBlack animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dgraphics" element={<DGraphics />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/illustrations/:id" element={<IllustrationsDetails />} />
        <Route path="/graphicdesign/:id" element={<DesignDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
