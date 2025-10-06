import React, { useState } from 'react';

const EMICalculator = () => {
  const [emiData, setEmiData] = useState({
    interestType: 'Flat',
    loanAmount: '',
    interestRate: '',
    tenureMonths: '',
    intPeriod: '',
    type: 'Normal',
    emiPattern: 'Even'
  });
  
  const [emiResults, setEmiResults] = useState({
    emi: 0,
    irr: 0,
    advEmiAmt: 0,
    emisToPay: 0
  });

  const calculateEMI = () => {
    const P = parseFloat(emiData.loanAmount) || 0;
    const r = (parseFloat(emiData.interestRate) || 0) / 100;
    const n = parseFloat(emiData.tenureMonths) || 0;

    if (P && r && n) {
      let emi = 0;
      if (emiData.interestType === 'Flat') {
        const totalInterest = P * r * (n / 12);
        emi = (P + totalInterest) / n;
      } else {
        const monthlyRate = r / 12;
        emi = P * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
      }

      setEmiResults({
        emi: emi.toFixed(2),
        irr: (r * 100).toFixed(2),
        advEmiAmt: emi.toFixed(2),
        emisToPay: n
      });
    }
  };

  const clearEMI = () => {
    setEmiData({
      interestType: 'Flat',
      loanAmount: '',
      interestRate: '',
      tenureMonths: '',
      intPeriod: '',
      type: 'Normal',
      emiPattern: 'Even'
    });
    setEmiResults({
      emi: 0,
      irr: 0,
      advEmiAmt: 0,
      emisToPay: 0
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 shadow-2xl rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-blue-200">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl mb-6 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center tracking-wide">EMI Calculator</h2>
      </div>

      <div className="space-y-6">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Interest Type:</label>
            <select
              value={emiData.interestType}
              onChange={(e) => setEmiData({...emiData, interestType: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-semibold shadow-sm transition-all hover:border-gray-400"
            >
              <option value="Flat">Flat</option>
              <option value="Reducing">Reducing</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Loan Date:</label>
            <input
              type="date"
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-medium shadow-sm transition-all hover:border-gray-400"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Loan Amount:</label>
            <input
              type="number"
              value={emiData.loanAmount}
              onChange={(e) => setEmiData({...emiData, loanAmount: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-yellow-50 rounded-xl focus:outline-none focus:border-blue-500 font-medium shadow-sm transition-all hover:border-gray-400"
              placeholder="Enter amount"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Interest Rate:</label>
            <div className="relative">
              <input
                type="number"
                value={emiData.interestRate}
                onChange={(e) => setEmiData({...emiData, interestRate: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 bg-yellow-50 rounded-xl focus:outline-none focus:border-blue-500 font-medium shadow-sm transition-all hover:border-gray-400 pr-12"
                placeholder="13.5"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-bold">%</span>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Tenure In Mths:</label>
            <input
              type="number"
              value={emiData.tenureMonths}
              onChange={(e) => setEmiData({...emiData, tenureMonths: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-medium shadow-sm transition-all hover:border-gray-400"
              placeholder="11"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Int. Period:</label>
            <input
              type="number"
              value={emiData.intPeriod}
              onChange={(e) => setEmiData({...emiData, intPeriod: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-medium shadow-sm transition-all hover:border-gray-400"
              placeholder="12"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">Type:</label>
            <select
              value={emiData.type}
              onChange={(e) => setEmiData({...emiData, type: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-semibold shadow-sm transition-all hover:border-gray-400"
            >
              <option value="Normal">Normal</option>
              <option value="Advance">Advance</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-800 tracking-wide">EMI Pattern:</label>
            <select
              value={emiData.emiPattern}
              onChange={(e) => setEmiData({...emiData, emiPattern: e.target.value})}
              className="w-full px-4 py-3 border-2 border-gray-300 bg-white rounded-xl focus:outline-none focus:border-blue-500 font-semibold shadow-sm transition-all hover:border-gray-400"
            >
              <option value="Even">Even</option>
              <option value="Odd">Odd</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <button 
            onClick={calculateEMI}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105"
          >
            Calculate EMI
          </button>
          <button 
            onClick={clearEMI}
            className="w-full py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all font-bold shadow-lg tracking-wide transform hover:scale-105"
          >
            Clear All
          </button>
        </div>

        {/* Results */}
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700 tracking-wide">EMI:</span>
              <span className="font-bold text-gray-900 text-lg">₹ {emiResults.emi}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700 tracking-wide">IRR %:</span>
              <span className="font-bold text-gray-900 text-lg">{emiResults.irr} %</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700 tracking-wide">Adv. EMI Amt.:</span>
              <span className="font-bold text-gray-900 text-lg">₹ {emiResults.advEmiAmt}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-700 tracking-wide">EMIs To Pay:</span>
              <span className="font-bold text-gray-900 text-lg">{emiResults.emisToPay}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;