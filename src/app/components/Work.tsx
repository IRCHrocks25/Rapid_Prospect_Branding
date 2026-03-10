const projects = [
  {
    name: "Apex Studio",
    category: "Architecture Firm",
    img: "https://images.unsplash.com/photo-1626417359455-2377907b1141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGxvZ28lMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyNTYxMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Empire Package",
  },
  {
    name: "Velvet & Co.",
    category: "Luxury Fashion",
    img: "https://images.unsplash.com/photo-1718670013988-c6e3edb92345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmQlMjBtb2NrdXAlMjBlbGVnYW50JTIwbWluaW1hbHxlbnwxfHx8fDE3NzI1NjEzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Growth Package",
  },
  {
    name: "Luminary",
    category: "SaaS Platform",
    img: "https://images.unsplash.com/photo-1589829100333-e215933ccd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHN0eWxlJTIwZ3VpZGUlMjB0eXBvZ3JhcGh5JTIwY29sb3JzfGVufDF8fHx8MTc3MjU2MTM0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    tag: "Growth Package",
  },
];

export function Work() {
  return (
    <section id="work" className="bg-[#0c0c0c] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span
              className="text-[#E9B46C] text-xs uppercase tracking-widest mb-4 block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              ✦ Our Work
            </span>
            <h2
              className="text-white uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                lineHeight: 1.05,
              }}
            >
              Brands We've{" "}
              <span className="text-[#E9B46C]">Transformed</span>
            </h2>
          </div>
          <a
            href="#"
            className="text-[#E9B46C] text-sm underline underline-offset-4 hover:text-white transition-colors self-start lg:self-end pb-1"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
          >
            View Full Portfolio →
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span
                  className="inline-block border border-[#E9B46C]/40 text-[#E9B46C] px-2 py-0.5 rounded-full text-xs mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                >
                  {p.tag}
                </span>
                <h3
                  className="text-white uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "1.3rem" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {p.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
