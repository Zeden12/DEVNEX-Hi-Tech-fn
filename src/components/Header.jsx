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
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 ${isHome ? "bg-transparent" : "bg-gray-900"}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">DEVNEX HiTech</div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {showMenuText ? 'MENU' : '☰'}
        </button>
      </div>
    </header>
  );
}
