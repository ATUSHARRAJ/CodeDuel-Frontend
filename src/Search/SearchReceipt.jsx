import React, { useState } from 'react';
import { Search, Receipt } from 'lucide-react';

const SearchComponent = () => {
  const [activeSearch, setActiveSearch] = useState('receipt');
  const [searchBy, setSearchBy] = useState({
    customer: 'Customer Name',
    guarantor: 'Guarantor Name',
    receipt: 'Receipt No.'
  });
  const [searchText, setSearchText] = useState('');

  const customerOptions = [
    'Customer Name',
    'Regn No.',
    'Engine No',
    'Chasis No.',
    'Loan Ac No.',
    'Ledger No.',
    'Customer ID',
    'Phone No.',
    'Email'
  ];

  const guarantorOptions = ['Guarantor Name', 'Guarantor ID', 'Phone No.', 'Email'];
  const receiptOptions = ['Receipt No.', 'Chq / Txn No.'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-8" style={{ fontFamily: "'DIN Alternate', 'Arial Black', sans-serif" }}>
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 shadow-2xl rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border border-blue-200">
        {/* Customer Search */}
        {activeSearch === 'customer' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-purple-200">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg">
                <Search size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">Search Customer</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search By:</label>
                <select
                  value={searchBy.customer}
                  onChange={(e) => setSearchBy({...searchBy, customer: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-semibold shadow-sm transition-all hover:border-gray-400"
                >
                  {customerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search Text:</label>
                <input
                  type="text"
                  placeholder="Type And Press 'Enter'"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-medium shadow-sm transition-all hover:border-gray-400"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-center mt-8 flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105">
                Select
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Guarantor Search */}
        {activeSearch === 'guarantor' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-purple-200">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg">
                <Search size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">Search Guarantor</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search By:</label>
                <select
                  value={searchBy.guarantor}
                  onChange={(e) => setSearchBy({...searchBy, guarantor: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-semibold shadow-sm transition-all hover:border-gray-400"
                >
                  {guarantorOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search Text:</label>
                <input
                  type="text"
                  placeholder="Type And Press 'Enter'"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-medium shadow-sm transition-all hover:border-gray-400"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-center mt-8 flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105">
                Select
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Receipt Search */}
        {activeSearch === 'receipt' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-purple-200">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg">
                <Receipt size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">Search Receipts</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search By:</label>
                <select
                  value={searchBy.receipt}
                  onChange={(e) => setSearchBy({...searchBy, receipt: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-semibold shadow-sm transition-all hover:border-gray-400"
                >
                  {receiptOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 tracking-wide">Search Text:</label>
                <input
                  type="text"
                  placeholder="Type And Press 'Enter'"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-purple-500 font-medium shadow-sm transition-all hover:border-gray-400"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center mt-6 flex-wrap">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
                <input
                  type="checkbox"
                  id="searchLast4"
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <label htmlFor="searchLast4" className="text-sm font-bold text-gray-800 tracking-wide">
                  Search Last 4 Digits
                </label>
              </div>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-bold shadow-md tracking-wide transform hover:scale-105">
                New Search
              </button>
            </div>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex gap-2 justify-center mt-8 flex-wrap">
          <button
            onClick={() => {
              setActiveSearch('customer');
              setSearchText('');
            }}
            className={`px-6 py-2 rounded-xl font-bold transition-all ${
              activeSearch === 'customer'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => {
              setActiveSearch('guarantor');
              setSearchText('');
            }}
            className={`px-6 py-2 rounded-xl font-bold transition-all ${
              activeSearch === 'guarantor'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Guarantor
          </button>
          <button
            onClick={() => {
              setActiveSearch('receipt');
              setSearchText('');
            }}
            className={`px-6 py-2 rounded-xl font-bold transition-all ${
              activeSearch === 'receipt'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;