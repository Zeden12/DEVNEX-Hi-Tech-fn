import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <motion.div
      className={`fixed top-16 right-0 h-auto max-h-[90vh] w-64 bg-gray-900 bg-opacity-80 text-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-lg shadow-lg `}
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? '0%' : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex flex-col items-center justify-center h-full overflow-y-auto">
        <button onClick={onClose} className="text-white text-xl font-bold mb-10 hover:text-gray-500 ">Close</button>
        <nav>
          <ul className="flex flex-col items-center">
            <li className="mb-4">
              <Link to="/" onClick={onClose} className="text-white text-lg hover:text-gray-400 transition">Home</Link>
            </li>
            <li className="mb-5">
              <Link to="/about" onClick={onClose} className="text-white text-lg hover:text-gray-400 transition">About</Link>
            </li>
            <li className="mb-5">
              <Link to="/services" onClick={onClose} className="text-white text-lg hover:text-gray-400 transition">Services</Link>
            </li>
            <li className="mb-5">
              <Link to="/contact" onClick={onClose} className="text-white text-lg hover:text-gray-400 transition">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}