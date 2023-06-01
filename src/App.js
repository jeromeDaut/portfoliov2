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
        {errorOccurred && <Navigate to="*" />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
