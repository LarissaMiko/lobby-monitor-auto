import React from "react";

const OfficeFinder: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Office Finder</h1>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <label htmlFor="search" className="block text-gray-700 mb-2">
          Search for a tenant:
        </label>
        <input
          id="search"
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          placeholder="Enter company name"
        />
        {/* Placeholder for tenant list */}
        <ul className="space-y-2">
          <li className="p-2 bg-gray-200 rounded-lg">Example Tenant 1</li>
          <li className="p-2 bg-gray-200 rounded-lg">Example Tenant 2</li>
        </ul>
      </div>
      <button
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        onClick={() => window.history.back()}
      >
        Back to Home
      </button>
    </div>
  );
};

export default OfficeFinder;
