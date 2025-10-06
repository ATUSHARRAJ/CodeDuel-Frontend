import React, { useState } from 'react';
import { Search, FileText, Receipt, RefreshCw, Edit, BarChart3, Settings, LogOut, Grid, Calculator, ChevronRight } from 'lucide-react';

const RajhansSearchBar = () => {
  const [activeSearch, setActiveSearch] = useState('customer');
  const [searchBy, setSearchBy] = useState({
    customer: 'Customer Name',
    guarantor: 'Guarantor Name',
    receipt: 'Receipt No.'
  });
  const [searchText, setSearchText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState('search');

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

  const handleSearchTypeChange = (type) => {
    setActiveSearch(type);
    setSearchText('');
  };

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? '' : menu);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200" style={{ fontFamily: "'DIN Alternate', 'Arial Black', sans-serif" }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-xl sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <text x="25" y="35" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#2563eb">B</text>
                </svg>
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Rajhans Motor Investment Co.</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold hidden md:block">Ranjeel Singh</span>
            <div className="bg-white rounded-full p-2 shadow-md">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-72 bg-white shadow-2xl z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}>
          <div className="p-4 space-y-2">
            {/* Dashboard */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all group border border-blue-200">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Grid size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide">Dashboard</span>
            </button>

            {/* EMI Calculator */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all group border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Calculator size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide">EMI Calculator</span>
            </button>

            {/* Search Section */}
            <div className="space-y-1">
              <button 
                onClick={() => toggleMenu('search')}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all group border border-purple-200"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                  <Search size={20} />
                </div>
                <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Search</span>
                <ChevronRight className={`transition-transform ${expandedMenu === 'search' ? 'rotate-90' : ''}`} size={18} />
              </button>
              
              {expandedMenu === 'search' && (
                <div className="ml-4 pl-6 border-l-2 border-purple-200 space-y-1">
                  <button
                    onClick={() => handleSearchTypeChange('customer')}
                    className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                      activeSearch === 'customer'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    Search Customers
                  </button>
                  <button
                    onClick={() => handleSearchTypeChange('guarantor')}
                    className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                      activeSearch === 'guarantor'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    Search Guarantors
                  </button>
                  <button
                    onClick={() => handleSearchTypeChange('receipt')}
                    className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                      activeSearch === 'receipt'
                        ? 'bg-purple-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    Search Receipts
                  </button>
                </div>
              )}
            </div>

            {/* Entries */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all group border border-green-200">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Entries</span>
              <ChevronRight size={18} />
            </button>

            {/* Transactions */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all group border border-orange-200">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Receipt size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Transactions</span>
              <ChevronRight size={18} />
            </button>

            {/* Updates */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 transition-all group border border-cyan-200">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <RefreshCw size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Updates</span>
              <ChevronRight size={18} />
            </button>

            {/* Edit */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-all group border border-amber-200">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Edit size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Edit</span>
              <ChevronRight size={18} />
            </button>

            {/* Reports */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-all group border border-indigo-200">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <BarChart3 size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Reports</span>
              <ChevronRight size={18} />
            </button>

            {/* Setup System */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all group border border-pink-200">
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Settings size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Setup System</span>
              <ChevronRight size={18} />
            </button>

            {/* Settings */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all group border border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <Settings size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Settings</span>
            </button>

            {/* Logout */}
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all group border border-red-200">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <LogOut size={20} />
              </div>
              <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8 min-h-screen">
          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border border-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RajhansSearchBar;
