import { useState, useEffect } from "react";

export default function Header({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuText, setShowMenuText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMenuText(false);
      } else {
        setShowMenuText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${isHome ? "bg-transparent" : "bg-gray-900 shadow-lg"}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide animate-bounce">DEVNEX HiTech</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:scale-110 transition-transform duration-200">
          {showMenuText ? 'MENU' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <ul className="space-y-2 text-white text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}
