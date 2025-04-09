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
      className="min-h-screen bg-black text-green-500 py-8 px-3 sm:px-4 lg:px-6 flex items-center justify-center font-mono relative overflow-hidden" 
    >
      {/* Background Matrix Flicker */}
      <div className="absolute inset-0 z-0 opacity-5 select-none pointer-events-none animate-pulse bg-[radial-gradient(#00ff00_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative z-10 max-w-3xl w-full">
        
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-2xl font-bold text-center text-green-500 mb-8 tracking-widest uppercase" 
          style={{ textShadow: "0 0 10px #00ff00" }}
        >
          ▓▓ USERNAME_CHECKER.exe ▓▓
        </motion.h1>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center mb-6"
        >
          <input
            type="text"
            placeholder="ENTER_USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 max-w-md px-4 py-2 border-2 border-green-500 rounded-none bg-black text-green-500 focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase tracking-widest placeholder-green-600 text-sm" 
          />
          <motion.button
            whileHover={{ scale: 1.05, textShadow: "0 0 8px #00ff00" }}
            whileTap={{ scale: 0.95 }}
            onClick={checkUsername}
            disabled={loading}
            className={`px-6 py-2 border-2 text-green-500 font-medium uppercase tracking-wide transition-all duration-300 text-sm ${
              loading
                ? "border-gray-600 text-gray-600 cursor-not-allowed"
                : "border-green-500 hover:bg-green-500 hover:text-black"
            }`} 
          >
            {loading ? "EXECUTING..." : "EXECUTE"}
          </motion.button>
        </motion.div>

        {loading && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border-2 border-green-500 p-4 bg-black mb-6 font-mono tracking-tight" 
            >
              <div className="space-y-2 text-xs">
                 
                <p>▶ Booting up sequence...</p>
                <p className="ml-2">↳ Accessing nodes...</p>
                <p className="ml-3">↳ Deploying scanners...</p>
                <p className="ml-4">↳ Tracing footprints...</p>
                <p className="ml-5">↳ Compiling matches...</p>
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
              className="border-2 border-green-500 p-4 bg-black" 
            >
              <div className="border border-green-500 p-3 text-center uppercase tracking-widest text-xs"> 
                
                Results for <span className="font-bold">{username}</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"> 
                {availableSites.map((site, index) => (
                  <motion.div
                    key={site.siteName}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-2 border-green-500 hover:bg-green-500 hover:text-black transition duration-300 p-3"
                  >
                    <h3 className="text-base font-semibold">{site.siteName}</h3>
                     
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:text-black text-xs break-words"
                    >
                      {site.url}
                    </a>
                  </motion.div>
                ))}
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
              className="border-2 border-red-500 p-4 mt-4 bg-black" 
            >
              <p className="text-red-500 text-center text-base font-mono">
                 
                ✖ USERNAME_NOT_FOUND
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
