// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100"> {/* Adding background color */}
      <Header />
      <main className="flex-grow p-4 bg-white shadow-lg"> {/* Add padding, background, and shadow */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
