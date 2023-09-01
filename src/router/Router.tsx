import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Contact from "../components/Contact";
import Chart from "../components/Chart";
import Map from "../components/Map";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Navigate to="/contact" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/maps" element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
