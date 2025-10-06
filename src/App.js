import React, { useState } from 'react';
import Sidebar from './Pages/Sidebar';
import SearchCustomer from './Search/SearchCustomer';
import SearchGuarantor from './Search/SearchGurantor';
import SearchReceipt from './Search/SearchReceipt';
import EMICalculator from './Pages/EMICalculator';
import CustomerEntry from './Pages/CustomerEntry';
import CoBorrowerEntry from './Pages/CoBorrowerEntry';
import GuarantorEntry from './Pages/GuarantorEntry';
import LoanEntry from './Pages/LoanEntry';

const App = () => {
  const [activeSection, setActiveSection] = useState({ main: 'dashboard', sub: null });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection.main) {
      case 'dashboard':
        return (
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 shadow-2xl rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border border-blue-200">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-200">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">Dashboard</h2>
            </div>
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 font-semibold">Welcome to Rajhans Motor Investment Co.</p>
              <p className="text-gray-500 mt-2">Select an option from the sidebar to get started</p>
            </div>
          </div>
        );
      
      case 'emi':
        return <EMICalculator />;
      
      case 'search':
       switch (activeSection.sub) {
       case 'customer':
       return <SearchCustomer />;
       case 'guarantor':
       return <SearchGuarantor />;
       case 'receipt':
       return <SearchReceipt />;
       default:
       return (
        <div className="bg-white shadow-lg rounded-xl p-6 text-gray-600 text-center">
          Select a search type from the sidebar
        </div>
          );
      }


      case 'entries':
        switch (activeSection.sub) {
          case 'customer':
            return <CustomerEntry />;
          case 'coborrower':
            return <CoBorrowerEntry />;
          case 'guarantor':
            return <GuarantorEntry />;
          case 'loan':
            return <LoanEntry />;
          default:
            return (
              <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-blue-200">
                <p className="text-center text-gray-600">Select an entry type from the sidebar</p>
              </div>
            );
        }
      
      default:
        return (
          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-blue-200">
            <p className="text-center text-gray-600">This section is under development</p>
          </div>
        );
    }
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
                  <text x="25" y="35" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#2563eb">R</text>
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

        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8 min-h-screen" style={{ 
          background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #e0e7ff 100%)'
        }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;