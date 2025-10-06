import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchBar from './Pages/SearchBar';
import EMI from './Pages/EMI';
import EMICalculator from './Pages/EMICalculator';
import Customer from './Pages/Customer';
import CustomerDetails from './Pages/CustomerEntry';
import CoBorrowerEntry from './Pages/CoBorrowerEntry';
import GuarantorEntry from './Pages/GuarantorEntry';
import LoanEntry from './Pages/LoanEntry';
import Sidebar from './Pages/Sidebar';
import SearchCustomer from './Search/SearchCustomer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<SearchBar />} />
        <Route path="/Emi" element={<EMI />} />
        <Route path="/EmiCalculator" element={<EMICalculator />} />
        <Route path="/Customer" element={<Customer />} />
        <Route path="/CustomerDetails" element={<CustomerDetails />} />
        <Route path="/CoBorrowEntry" element={<CoBorrowerEntry />} />
        <Route path="/GuarantorEntry" element={<GuarantorEntry />} />
        <Route path="/LoanEntry" element={<LoanEntry />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/SearchCustomer" element={<SearchCustomer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode> 
);
