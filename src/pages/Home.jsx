import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const backgroundImage = "/assets/istockphoto-1421485330-612x612.jpg"; // Path to your background image

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header backgroundImage={backgroundImage} /> {/* Pass background image to Header */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-white">Welcome to DEVNEX HiTech</h1>
          <p className="mt-4 text-xl text-white">We create stunning digital experiences.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
