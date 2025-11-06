import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
          <span className="text-indigo-600">Aria</span> Student Portfolio
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#work" className="hover:text-gray-900">Posters</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#work" className="ml-2 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">
            View Work
          </a>
        </div>
      </nav>
    </header>
  );
}
