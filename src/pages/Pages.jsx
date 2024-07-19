import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";
function Pages() {
  // useLocation hook gives the current location object, which is useful for animations.
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* Routes defines the different routes in the application. */}
      {/* The key prop ensures that AnimatePresence animates when the location changes. */}

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* the :type,:search,:name can be use in different component to useParam like this
          in other components
            let params = useParams();
            params.type = :type
            params.search = :search
            params.name = :name
        */}
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
