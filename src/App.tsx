import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh] border">
        <Sidebar />
      </div>
      <div className="basis-[88%] border">
        <Navbar />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
