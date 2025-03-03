// src/components/Menu.jsx
export default function Menu({ isOpen, onClose }) {
    return (
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="mt-16 p-4">
          <a href="/" className="block py-2">Home</a>
          <a href="/about" className="block py-2">About</a>
          <a href="/contact" className="block py-2">Contact</a>
        </nav>
        <div className="absolute bottom-4 p-4">
          <a href="https://facebook.com" className="block py-2">Facebook</a>
          <a href="https://twitter.com" className="block py-2">Twitter</a>
          <a href="https://linkedin.com" className="block py-2">LinkedIn</a>
        </div>
      </div>
    );
  }
  