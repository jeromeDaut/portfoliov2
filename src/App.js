import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const errorOccurred = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {errorOccurred && <Navigate to="/error" />}{/* Navigates to a fallback route if an error occurred */}
        <Route path="*" element={<PageNotFound />} />{/* Renders the PageNotFound component for all other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
