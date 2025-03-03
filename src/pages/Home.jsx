import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Sidebar from "../components/Sidebar";

const backgroundImage = "/assets/istockphoto-1421485330-612x612.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Welcome to DEVNEX HiTech";
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative overflow-y-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* MENU ICON */}
      <motion.div
        className="absolute top-5 right-5 z-50 cursor-pointer"
        onClick={toggleMenu}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {menuOpen ? (
          <span className="text-white text-xl font-bold">MENU</span>
        ) : (
          <Menu size={30} color="white" />
        )}
      </motion.div>

      {/* SIDEBAR */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* NAVIGATION DOTS */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-40">
        {['Home', 'About', 'Services', 'Contact'].map((section, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2 cursor-pointer group"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => {
              document.getElementById(section.toLowerCase()).scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            <div className="w-3 h-3 rounded-full bg-red-600 group-hover:bg-white transition"></div>
            <span className="text-white text-sm hidden group-hover:block">{section}</span>
          </motion.div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <motion.h1
        className="text-5xl font-bold text-white text-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to DEVNEX HiTech
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-white"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We turn your ideas into reality.
      </motion.p>

      {/* SCROLL DOWN LINK */}
      <div className="absolute bottom-10 right-10">
        <Link
          to="#about"
          className="text-white text-lg animate-bounce"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          Scroll Down ↓
        </Link>
      </div>

      <SocialLinks />
    </div>
  );
}
