export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s make something bold</h2>
        <p className="mt-3 text-gray-600">Have a brief, an idea, or want an internship candidate? I’d love to chat.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="mailto:aria.design@student.edu" className="rounded-xl border border-gray-200 bg-white p-5 text-gray-800 shadow-sm hover:shadow transition">
            <div className="text-sm font-medium">Email</div>
            <div className="text-xs text-gray-500">aria.design@student.edu</div>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 bg-white p-5 text-gray-800 shadow-sm hover:shadow transition">
            <div className="text-sm font-medium">LinkedIn</div>
            <div className="text-xs text-gray-500">/in/aria-design</div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-xl border border-gray-200 bg-white p-5 text-gray-800 shadow-sm hover:shadow transition">
            <div className="text-sm font-medium">Instagram</div>
            <div className="text-xs text-gray-500">@aria.posters</div>
          </a>
        </div>
      </div>
    </section>
  );
}
