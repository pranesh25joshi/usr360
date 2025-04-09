"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [username, setUsername] = useState("");
  const [availableSites, setAvailableSites] = useState([]);
  const [loading, setLoading] = useState(false);

  const checkUsername = async () => {
    setLoading(true);
    setAvailableSites([]);
    try {
      const response = await fetch("/api/check", {
        method: "POST",
        body: JSON.stringify({ username }),
      });

      const data = await response.json();
      setAvailableSites(data.available || []);
    } catch (error) {
      console.error("Error checking username:", error);
    }
    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Username Availability Checker
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-8"
        >
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 max-w-md px-6 py-3 border border-gray-300 rounded-xl shadow-sm text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkUsername}
            disabled={loading}
            className={`px-8 py-3 rounded-xl text-white font-medium shadow-md transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Checking...
              </span>
            ) : (
              "Check"
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {availableSites.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex justify-center">
                <div className="relative">
                  {/* Root node */}
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md mb-4 text-center">
                    <h2 className="text-xl font-semibold">{username}</h2>
                  </div>
                  
                  {/* Vertical line from root */}
                  <div className="w-1 h-8 bg-blue-300 mx-auto"></div>
                  
                  {/* Sites container */}
                  <div className="grid grid-cols-1 gap-6 relative">
                    {availableSites.map((site, index) => (
                      <motion.div
                        key={site.siteName}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        {/* Horizontal branch line */}
                        <div className="absolute -top-3 left-1/2 w-8 h-1 bg-blue-300"></div>
                        
                        {/* Site box */}
                        <div className="bg-white border-2 border-blue-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <h3 className="font-medium text-gray-800 mb-2">{site.siteName}</h3>
                          <motion.a
                            whileHover={{ x: 5 }}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm block"
                          >
                            {site.url}
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!loading && availableSites.length === 0 && username && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-50 border border-red-200 rounded-xl p-6 mt-4 shadow-md"
            >
              <p className="text-red-600 text-center text-lg">
                ❌ Username not found on any site.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}