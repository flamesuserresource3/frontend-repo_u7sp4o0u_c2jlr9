import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PosterGrid from './components/PosterGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
        <PosterGrid />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Aria — Student Poster Designer</p>
          <a href="#home" className="hover:text-gray-700">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
