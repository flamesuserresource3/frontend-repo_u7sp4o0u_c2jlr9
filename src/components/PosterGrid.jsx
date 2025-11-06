const posters = [
  { id: 1, title: 'Neon Noise', tags: ['typography', 'neon'], color: 'from-fuchsia-500 to-rose-500' },
  { id: 2, title: 'Mono Motion', tags: ['grid', 'minimal'], color: 'from-gray-900 to-gray-700' },
  { id: 3, title: 'Citrus Pop', tags: ['bold', 'retro'], color: 'from-yellow-400 to-orange-500' },
  { id: 4, title: 'Oceanic', tags: ['wave', 'gradient'], color: 'from-sky-500 to-cyan-400' },
  { id: 5, title: 'Midnight Type', tags: ['type', 'contrast'], color: 'from-indigo-600 to-violet-600' },
  { id: 6, title: 'Fresh Cut', tags: ['modern', 'print'], color: 'from-emerald-500 to-lime-400' }
];

export default function PosterGrid() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Posters</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">A snapshot of explorations in type, color, and composition. Hover to peek at details.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Request a Poster</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posters.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
              <div className={`aspect-[3/4] w-full bg-gradient-to-br ${p.color} relative`}> 
                <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white_0,transparent_50%)]" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform">
                <div className="rounded-lg bg-white/90 backdrop-blur p-3">
                  <h3 className="font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{p.tags.join(' • ')}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
