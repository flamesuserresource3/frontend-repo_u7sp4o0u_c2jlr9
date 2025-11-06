export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a design student focused on poster design. My work balances playful composition with strong typographic systems.
            I love experimenting with textures, motion-inspired gradients, and bold type to communicate energy.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Tools I use: Adobe Illustrator, Photoshop, InDesign, and a touch of Figma for layout systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Typography","Color Theory","Grid Systems","Print Prep","Branding","Motion Influence"].map((s) => (
              <span key={s} className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-xs text-gray-700">{s}</span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-rose-100 ring-1 ring-gray-200 shadow-sm p-6">
            <div className="h-full w-full rounded-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-500 via-fuchsia-400 to-emerald-400 opacity-10" />
            <div className="absolute -inset-1 -z-10 blur-2xl opacity-30 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
