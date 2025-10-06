import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SearchBar from "./Pages/SearchBar";
import { ChevronRight } from "lucide-react";    
import { Search } from "lucide-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<SearchBar />} />
      <Route path="/Emi" element={<EMI />} />
      <Route path="/EmiCalculator" element={<EMICalculator />} />

    </Routes>
  </BrowserRouter>
);
