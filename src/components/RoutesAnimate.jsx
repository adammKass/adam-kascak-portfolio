import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import DGraphics from "./DGraphics";
import GraphicDesign from "./GraphicDesign";
import Illustrations from "./Illustrations";
import IllustrationsDetails from "./IllustrationsDetails";
import DesignDetails from "./DesignDetails";
import NotFound from "./NotFound";
import PageWrapper from "./PageWrapper";

const RoutesWithAnimation = () => {
  const location = useLocation(); // Get the current location

  return (
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
};

export default RoutesWithAnimation;
