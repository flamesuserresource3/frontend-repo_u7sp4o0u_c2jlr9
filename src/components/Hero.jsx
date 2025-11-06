import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs font-medium shadow">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Open for internships & freelance
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hi, I’m Aria — a student designer crafting bold, playful poster experiences.
          </h1>
          <p className="mt-5 text-gray-600 text-base sm:text-lg">
            I blend type, color, and motion-inspired layouts to turn ideas into attention-grabbing visuals.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white font-medium shadow hover:bg-gray-800">
              View Poster Collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-gray-900 font-medium bg-white hover:border-gray-400">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
