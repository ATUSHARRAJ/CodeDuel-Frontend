import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const GuarantorEntry = () => {
  const [formData, setFormData] = useState({
    guarantorId: 'RMT-GUS-006303',
    customerName: '',
    guarantorType: 'New',
    guarantorName: '',
    guarantorNameType: 'S/O',
    fatherName: '',
    motherName: '',
    dob: '05-10-2007',
    present: {
      address1: '',
      address2: '',
      state: 'Select',
      city: '',
      pin: ''
    },
    permanent: {
      address1: '',
      address2: '',
      state: 'Select',
      city: '',
      pin: ''
    },
    office: {
      address1: '',
      address2: '',
      state: 'Select',
      city: '',
      pin: ''
    },
    guarantorMobile1: '',
    guarantorMobile2: '',
    guarantorVilRegion: '',
    guarantorEmail: ''
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
        <h2 className="text-2xl font-bold">New Guarantor Entry</h2>
      </div>

      <div className="space-y-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Photo Upload */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-48 border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
              {selectedImage ? (
                <img src={selectedImage} alt="Guarantor" className="w-full h-full object-cover" />
              ) : (
                <Upload className="text-gray-400" size={40} />
              )}
            </div>
            <label className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-all font-semibold">
              Choose File
              <input type="file" onChange={handleImageChange} className="hidden" accept="image/*" />
            </label>
          </div>

          {/* Guarantor Details */}
          <div className="md:col-span-2 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700">Guarantor ID:</label>
                <input
                  type="text"
                  value={formData.guarantorId}
                  readOnly
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-gray-100 font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700">Search Customer</label>
                <input
                  type="text"
                  placeholder="Search Customer"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-yellow-50"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700">Customer Name:</label>
              <input
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700">Guarantor Type:</label>
              <select
                value={formData.guarantorType}
                onChange={(e) => setFormData({...formData, guarantorType: e.target.value})}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold"
              >
                <option value="New">New</option>
                <option value="Existing">Existing</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="text-sm font-bold text-gray-700">Guarantor Name:</label>
                <input
                  type="text"
                  value={formData.guarantorName}
                  onChange={(e) => setFormData({...formData, guarantorName: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select 
                  value={formData.guarantorNameType}
                  onChange={(e) => setFormData({...formData, guarantorNameType: e.target.value})}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold"
                >
                  <option>S/O</option>
                  <option>D/O</option>
                  <option>W/O</option>
                </select>
                <input
                  type="text"
                  placeholder="Father's Name"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({...formData, fatherName: e.target.value})}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-gray-700">Mother's Name:</label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => setFormData({...formData, motherName: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-700">DoB:</label>
                <input
                  type="text"
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Present Address */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 text-lg border-b-2 border-gray-300 pb-2">Present Address</h3>
            <input
              type="text"
              placeholder="Address 1"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold">
              <option>Select</option>
            </select>
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white">
              <option>City</option>
            </select>
            <input
              type="text"
              placeholder="PIN"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* Permanent Address */}
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2">
              <h3 className="font-bold text-gray-800 text-lg">Permanent Address</h3>
              <button className="text-xs bg-blue-100 px-2 py-1 rounded font-bold text-blue-700 hover:bg-blue-200">
                &gt;&gt;
              </button>
            </div>
            <input
              type="text"
              placeholder="Address 1"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold">
              <option>Select</option>
            </select>
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white">
              <option>City</option>
            </select>
            <input
              type="text"
              placeholder="PIN"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* Office Address */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 text-lg border-b-2 border-gray-300 pb-2">Office Address</h3>
            <input
              type="text"
              placeholder="Address 1"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Address 2"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white font-semibold">
              <option>Select</option>
            </select>
            <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg bg-white">
              <option>City</option>
            </select>
            <input
              type="text"
              placeholder="PIN"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700">Guarantor Mobile1:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">Guarantor Vil Region:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-700">Guarantor Mobile2:</label>
              <input
                type="text"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700">Guarantor Email:</label>
              <input
                type="email"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-6">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg">
            Save
          </button>
          <button className="px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all font-bold shadow-lg">
            Clear All
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t-2 border-gray-300">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-bold text-sm">
            Save and Go To Document Entry
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-bold text-sm">
            Save and Go To Loan Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuarantorEntry;