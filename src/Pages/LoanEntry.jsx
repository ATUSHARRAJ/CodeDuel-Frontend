import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const LoanEntry = () => {
  const [formData, setFormData] = useState({
    loanType: 'New Vehicle',
    customerName: '',
    customerId: '',
    loanAcNo: 'RMC/2024/2AC 005589',
    extLoanAcNo: '',
    collAgent: 'Select',
    disbursalDate: '08-10-2025',
    salesAgent: 'DIRECT',
    branchName: 'Showroom Delhi',
    vehicleUse: 'Commercial',
    loanFinNo: '',
    yourChqNo: '',
    saleChqNo: 'GOHAR-YYYY',
    engineNo: '',
    saleChqNo2: 'GOHAR-YYYY',
    hpTax: 'Hinduja Leyland Finance Ltd.',
    keyDept: '',
    codeDept: 'Fixed Date',
    loanAmount: 0,
    outAmount: 0,
    emiAmount: 0,
    iosPassNo: 0,
    hpAmt: 0,
    offAmt: 0,
    emiAm: 0,
    offEmi: 0,
    ciFee: 0,
    intRate: '13.5',
    finure: '11',
    intDept: 'CF AC RATE',
    finCharge: 0,
    finChrAmt: 0,
    finChargeAmt: 0,
    bankName: '',
    bankAcNo: '',
    finChrOwn: false
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 border border-blue-200">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl mb-6 shadow-lg">
        <h2 className="text-2xl font-bold">Loan Entry - New Vehicle</h2>
      </div>

      <div className="space-y-6">
        {/* Top Row */}
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Loan Type:</label>
            <select
              value={formData.loanType}
              onChange={(e) => setFormData({...formData, loanType: e.target.value})}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>New Vehicle</option>
              <option>Used Vehicle</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Existing Customer</label>
            <button className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-bold text-sm">
              Existing Customer
            </button>
          </div>
          <div className="md:col-span-2 flex items-end">
            <div className="w-32 h-32 border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
              {selectedImage ? (
                <img src={selectedImage} alt="Vehicle" className="w-full h-full object-cover" />
              ) : (
                <Upload className="text-gray-400" size={32} />
              )}
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Customer Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Guarantor Name:</label>
            <select className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Customer ID:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Disbursal Date:</label>
            <input
              type="text"
              value={formData.disbursalDate}
              onChange={(e) => setFormData({...formData, disbursalDate: e.target.value})}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Loan Details */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Loan Ac No.:</label>
            <input
              type="text"
              value={formData.loanAcNo}
              readOnly
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 text-sm font-medium"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Ext. Loan Ac No.:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Coll Agent:</label>
            <select className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Sales Agent:</label>
            <select
              value={formData.salesAgent}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>DIRECT</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Branch Name:</label>
            <select
              value={formData.branchName}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>Showroom Delhi</option>
            </select>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Vehicle Use:</label>
            <select
              value={formData.vehicleUse}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>Commercial</option>
              <option>Personal</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Your Chq No.:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Sale Chq No.:</label>
            <input
              type="text"
              value={formData.saleChqNo}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Ledger Folio:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Engine No.:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Sale Chq No.:</label>
            <input
              type="text"
              value={formData.saleChqNo2}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Financial Details */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">HP Tax:</label>
            <select
              value={formData.hpTax}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>Hinduja Leyland Finance Ltd.</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">KeyDept:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Code Dept:</label>
            <select
              value={formData.codeDept}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>Fixed Date</option>
            </select>
          </div>
        </div>

        {/* Amount Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Loan Amount:</label>
            <input
              type="number"
              value={formData.loanAmount}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-yellow-50 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Out Amount:</label>
            <input
              type="number"
              value={formData.outAmount}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">EMI Amount:</label>
            <input
              type="number"
              value={formData.emiAmount}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <button className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all font-bold text-sm">
              IOS Payable
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">HP Amt. Pvd:</label>
            <input
              type="number"
              value={formData.hpAmt}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Off Amt. Pvd.:</label>
            <input
              type="number"
              value={formData.offAmt}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Emi. Am (Army):</label>
            <input
              type="number"
              value={formData.emiAm}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Off. Emi.:</label>
            <input
              type="number"
              value={formData.offEmi}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Interest Details */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Interest Rate:</label>
            <div className="relative">
              <input
                type="text"
                value={formData.intRate}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-yellow-50 text-sm pr-10"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 font-bold text-sm">%</span>
            </div>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Tenure In Mth:</label>
            <select
              value={formData.finure}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>11</option>
              <option>12</option>
              <option>24</option>
              <option>36</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Int Dept:</label>
            <select
              value={formData.intDept}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold text-sm"
            >
              <option>CF AC RATE</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Fin. Charge:</label>
            <input
              type="number"
              value={formData.finCharge}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Fin. Chr. Amt.:</label>
            <input
              type="number"
              value={formData.finChrAmt}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Fin. Charge Amt.:</label>
            <input
              type="number"
              value={formData.finChargeAmt}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div className="flex items-center pt-6">
            <input
              type="checkbox"
              id="finChrOwn"
              checked={formData.finChrOwn}
              onChange={(e) => setFormData({...formData, finChrOwn: e.target.checked})}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <label htmlFor="finChrOwn" className="ml-2 text-sm font-bold text-gray-700">
              Fin. Chr. Own?
            </label>
          </div>
        </div>

        {/* Bank Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-gray-700">Bank Name:</label>
            <input
              type="text"
              value={formData.bankName}
              onChange={(e) => setFormData({...formData, bankName: e.target.value})}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-bold text-gray-700">Bank Ac No.:</label>
            <input
              type="text"
              value={formData.bankAcNo}
              onChange={(e) => setFormData({...formData, bankAcNo: e.target.value})}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-6">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg">
            Calculate EMIs
          </button>
          <button className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all font-bold shadow-lg">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanEntry;