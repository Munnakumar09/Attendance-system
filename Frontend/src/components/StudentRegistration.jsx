import React, { useState } from "react";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rnumber: "",
    phone: "",
    gender: "",
    dob: "",
    program: "",
    acceptTerms: false,
  });

  const [showTerms, setShowTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Remove non-numeric characters except the initial +91
    value = value.replace(/[^\d]/g, '');
    setFormData(prevState => ({
      ...prevState,
      phone: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Registration Data:", formData);
    alert("Registration Submitted Successfully!");
  };

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Terms & Conditions</h3>
            <button
              onClick={() => setShowTerms(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <section>
              <h4 className="font-semibold mb-2">1. Attendance Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Minimum 85% attendance required per semester</li>
                <li>Medical certificates must be submitted within 3 days</li>
                <li>Less than 75% attendance may result in exam restriction</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold mb-2">2. Privacy Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal information will be kept confidential</li>
                <li>Data will be used only for academic purposes</li>
                <li>Student records are maintained securely</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold mb-2">3. Registration Requirements</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Valid ID proof submission required</li>
                <li>Previous academic certificates needed</li>
                <li>Transfer certificate from previous institution</li>
              </ul>
            </section>

            <section>
              <h4 className="font-semibold mb-2">4. Terms Modification</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Institution reserves right to modify terms</li>
                <li>Changes will be communicated via email</li>
                <li>Continued enrollment implies acceptance</li>
              </ul>
            </section>
          </div>

          <button
            onClick={() => setShowTerms(false)}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      {showTerms && <TermsModal />}
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          New Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="rnumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Register Number (Optional)
            </label>
            <input
              type="text"
              id="rnumber"
              name="rnumber"
              value={formData.rnumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your register number (optional)"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">+91</span>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                className="w-full pl-12 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
                maxLength="10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="program"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Program of Study <span className="text-red-500">*</span>
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a program</option>
              <option value="computer-science">
                Computer Science Engineering (CSE)
              </option>
              <option value="AE">Aeronautical Engineering (AE)</option>
              <option value="EEE">
                Electrical and Electronics Engineering (EEE)
              </option>
              <option value="ECE">
                Electronics and Communication Engineering (ECE)
              </option>
              <option value="civil">Civil Engineering</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  acceptTerms: e.target.checked,
                }))
              }
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="acceptTerms"
              className="ml-2 block text-sm text-gray-900"
            >
              I accept the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                terms and conditions
              </button>
              <span className="text-red-500 ml-1">*</span>
            </label>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            <span className="text-red-500">*</span> Indicates required field
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;