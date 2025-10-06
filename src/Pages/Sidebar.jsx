import React, { useState } from 'react';
import { 
    Search, FileText, Receipt, RefreshCw, Edit, BarChart3, 
    Settings, LogOut, Grid, Calculator, ChevronRight 
} from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, isSidebarOpen, setIsSidebarOpen }) => {
    const [expandedMenu, setExpandedMenu] = useState('');
    const [activeSearch, setActiveSearch] = useState('customer');
    const [activeEntry, setActiveEntry] = useState('customer');

    const toggleMenu = (menu) => {
        setExpandedMenu(expandedMenu === menu ? '' : menu);
    };

    const handleSectionChange = (section, subsection = null) => {
        setActiveSection({ main: section, sub: subsection });
        setIsSidebarOpen(false);
    };

    return (
        <div className={`
            fixed lg:sticky top-0 left-0 h-screen
            w-72 bg-white shadow-2xl z-40
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            overflow-y-auto
        `}>
            <div className="p-4 space-y-2">
                {/* Dashboard */}
                <button 
                    onClick={() => handleSectionChange('dashboard')}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group border ${
                        activeSection.main === 'dashboard'
                            ? 'bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300'
                            : 'bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200'
                    }`}
                >
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <Grid size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm tracking-wide">Dashboard</span>
                </button>

                {/* EMI Calculator */}
                <button 
                    onClick={() => handleSectionChange('emi')}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group border ${
                        activeSection.main === 'emi'
                            ? 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300'
                            : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border-gray-200'
                    }`}
                >
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <Calculator size={20} />
                    </div>
                    <span className="font-bold text-gray-800 text-sm tracking-wide">EMI Calculator</span>
                </button>

                {/* Search Section */}
                <div className="space-y-1">
                    <button 
                        onClick={() => toggleMenu('search')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group border ${
                            activeSection.main === 'search' || expandedMenu === 'search'
                                ? 'bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300'
                                : 'bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200'
                        }`}
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
                                onClick={() => handleSectionChange('search', 'customer')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'search' && activeSection.sub === 'customer'
                                        ? 'bg-purple-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-purple-50'
                                }`}
                            >
                                Search Customers
                            </button>
                            <button
                                onClick={() => handleSectionChange('search', 'guarantor')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'search' && activeSection.sub === 'guarantor'
                                        ? 'bg-purple-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-purple-50'
                                }`}
                            >
                                Search Guarantors
                            </button>
                            <button
                                onClick={() => handleSectionChange('search', 'receipt')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'search' && activeSection.sub === 'receipt'
                                        ? 'bg-purple-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-purple-50'
                                }`}
                            >
                                Search Receipts
                            </button>
                        </div>
                    )}
                </div>

                {/* Entries Section */}
                <div className="space-y-1">
                    <button 
                        onClick={() => toggleMenu('entries')}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group border ${
                            activeSection.main === 'entries' || expandedMenu === 'entries'
                                ? 'bg-gradient-to-r from-green-100 to-green-200 border-green-300'
                                : 'bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-green-200'
                        }`}
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            <FileText size={20} />
                        </div>
                        <span className="font-bold text-gray-800 text-sm tracking-wide flex-1 text-left">Entries</span>
                        <ChevronRight className={`transition-transform ${expandedMenu === 'entries' ? 'rotate-90' : ''}`} size={18} />
                    </button>
                    
                    {expandedMenu === 'entries' && (
                        <div className="ml-4 pl-6 border-l-2 border-green-200 space-y-1">
                            <button
                                onClick={() => handleSectionChange('entries', 'customer')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'customer'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                Customer Entry
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'coborrower')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'coborrower'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                Co-Borrower Entry
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'guarantor')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'guarantor'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                Guarantor Entry
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'loan')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'loan'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                Loan Entry
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'vehicle')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'vehicle'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                Vehicle Entry
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'newcall')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'newcall'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                New Call Note
                            </button>
                            <button
                                onClick={() => handleSectionChange('entries', 'newtask')}
                                className={`w-full text-left p-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                                    activeSection.main === 'entries' && activeSection.sub === 'newtask'
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-700 hover:bg-green-50'
                                }`}
                            >
                                New Task
                            </button>
                        </div>
                    )}
                </div>

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
    );
};

export default Sidebar;