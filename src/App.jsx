import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import { PageWrapper } from "./components";
import { sign } from "./assets";
import { AnimatePresence } from "framer-motion";
import {
  About,
  Contact,
  Services,
  DesignDetails,
  DGraphics,
  GraphicDesign,
  Home,
  Illustrations,
  IllustrationsDetails,
  NotFound,
} from "./subpages";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate a loading screen with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 200ms
    }, 200);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Render the loading screen if the app is still loading
  if (isLoading) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-PWhite z-10">
        <div className="flex flex-col items-center">
          <img src={sign} alt="loading" className="w-[58px] h-[58px] mb-4" />
          <div className="w-24 h-1 bg-PGrey">
            <div className="h-full bg-PBlack animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // Render the main application with routes
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

// Component to handle animated page transitions and routing
function AnimatedRoutes() {
  const location = useLocation(); // Get the current location for routing

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home Route */}
        <Route
          path="/adam-kascak-portfolio"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        {/* About Route */}
        <Route
          path="/adam-kascak-portfolio/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />

        <Route
          path="/adam-kascak-portfolio/services"
          element={
            <PageWrapper>
              <Services />
            </PageWrapper>
          }
        />

        {/* Contact Route */}
        <Route
          path="/adam-kascak-portfolio/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />

        {/* Digital Graphics Route */}
        <Route
          path="/adam-kascak-portfolio/dgraphics"
          element={
            <PageWrapper>
              <DGraphics />
            </PageWrapper>
          }
        />

        {/* Graphic Design Route */}
        <Route
          path="/adam-kascak-portfolio/graphicdesign"
          element={
            <PageWrapper>
              <GraphicDesign />
            </PageWrapper>
          }
        />

        {/* Illustrations Route */}
        <Route
          path="/adam-kascak-portfolio/illustrations"
          element={
            <PageWrapper>
              <Illustrations />
            </PageWrapper>
          }
        />

        {/* Illustration Details Route */}
        <Route
          path="/adam-kascak-portfolio/illustrations/:id"
          element={
            <PageWrapper>
              <IllustrationsDetails />
            </PageWrapper>
          }
        />

        {/* Graphic Design Details Route */}
        <Route
          path="/adam-kascak-portfolio/graphicdesign/:id"
          element={
            <PageWrapper>
              <DesignDetails />
            </PageWrapper>
          }
        />

        {/* Fallback Route for 404 Not Found */}
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
