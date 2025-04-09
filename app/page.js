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
      className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-mono"
    >
      <div className="max-w-4xl w-full">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center text-green-500 mb-12 pixel-text"
          style={{ textShadow: '0 0 10px #4ade80' }}
        >
          USERNAME_CHECKER.exe
        </motion.h1>
        
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mb-8"
        >
          <input
            type="text"
            placeholder="ENTER_USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 max-w-md px-6 py-3 border-2 border-green-500 rounded-none bg-black text-green-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 uppercase"
          />
          <motion.button
            whileHover={{ scale: 1.05, textShadow: '0 0 8px #4ade80' }}
            whileTap={{ scale: 0.95 }}
            onClick={checkUsername}
            disabled={loading}
            className={`px-8 py-3 border-2 text-green-500 font-medium transition-all duration-300 ${
              loading
                ? "border-gray-600 text-gray-600 cursor-not-allowed"
                : "border-green-500 hover:bg-green-500 hover:text-black"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                EXECUTING...
              </span>
            ) : (
              "EXECUTE"
            )}
          </motion.button>
        </motion.div>

          {loading && (
        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border-2 border-green-500 p-6 bg-black mb-8"
              >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-green-500"
                  >
                  <span className="mr-2">▶</span>
                  <span>Initializing scan sequence...</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center text-green-500"
                  >
                  <span className="mr-2">▶</span>
                  <span>Scanning databases...</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-center text-green-500"
                  >
                  <span className="mr-2">▶</span>
                  <span>Cross-referencing platforms...</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                  className="flex items-center text-green-500"
                  >
                  <span className="mr-2">▶</span>
                  <span>Analyzing results...</span>
                </motion.div>
              </div>
            </motion.div>
        </AnimatePresence>

)}
        <AnimatePresence>
          {availableSites.length > 0 && (
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-2 border-green-500 p-8 bg-black"
            >
              {/* Rest of the availableSites display code remains the same */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="border-2 border-green-500 text-green-500 p-4 mb-4 text-center">
                    <h2 className="text-xl font-semibold">{username}</h2>
                  </div>
                  
                  <div className="w-1 h-8 bg-green-500 mx-auto"></div>
                  
                  <div className="grid grid-cols-1 gap-6 relative">
                    {availableSites.map((site, index) => (
                      <motion.div
                        key={site.siteName}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute -top-3 left-1/2 w-8 h-1 bg-green-500"></div>
                        
                        <div className="border-2 border-green-500 p-4 hover:bg-green-500 hover:text-black transition-all duration-300">
                          <h3 className="font-medium text-green-500 mb-2 hover:text-black">{site.siteName}</h3>
                          <motion.a
                            whileHover={{ x: 5 }}
                            href={site.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-black text-sm block"
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
              className="border-2 border-red-500 p-6 mt-4 bg-black"
            >
              <p className="text-red-500 text-center text-lg">
                ERROR: USERNAME_NOT_FOUND
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
