import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import RoutesAnimate from "./components/RoutesAnimate";

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
import { sign } from "./assets";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";

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
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // Add a return statement here
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/adam-kascak-portfolio"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/dgraphics"
          element={
            <PageWrapper>
              <DGraphics />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/graphicdesign"
          element={
            <PageWrapper>
              <GraphicDesign />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/illustrations"
          element={
            <PageWrapper>
              <Illustrations />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/illustrations/:id"
          element={
            <PageWrapper>
              <IllustrationsDetails />
            </PageWrapper>
          }
        />
        <Route
          path="/adam-kascak-portfolio/graphicdesign/:id"
          element={
            <PageWrapper>
              <DesignDetails />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
