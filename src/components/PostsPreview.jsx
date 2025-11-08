import { Home, MapPin, IndianRupee } from "lucide-react";

const mockPosts = [
  {
    id: 1,
    title: "1BHK near Tech Market",
    location: "Tech Market Road",
    rent: "₹9,500/mo",
    date: "Move-in: 15 Aug",
    tags: ["2nd-year", "Non-AC", "WiFi"],
  },
  {
    id: 2,
    title: "Double sharing in Patel Hall",
    location: "Patel Hall",
    rent: "₹3,200/mo",
    date: "From: 1 Aug",
    tags: ["Hostel", "Double", "Quiet"],
  },
  {
    id: 3,
    title: "Room near Gate 1 for interns",
    location: "Outside Gate 1",
    rent: "₹7,800/mo",
    date: "From: ASAP",
    tags: ["Interns", "Furnished"],
  },
];

export default function PostsPreview() {
  return (
    <section id="posts" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Latest roommate posts</h2>
          <p className="mt-1 max-w-2xl text-slate-300">See who’s looking right now. Create your own post after signing in.</p>
        </div>
        <a href="#get-started" className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 md:inline-block">Create a post</a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockPosts.map((p) => (
          <article key={p.id} className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white transition hover:bg-white/10">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Home size={16} />
              <span>{p.title}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-slate-300">
              <MapPin size={16} />
              <span className="text-sm">{p.location}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-emerald-300">
              <IndianRupee size={16} />
              <span className="text-sm font-medium">{p.rent}</span>
              <span className="ml-2 text-xs text-slate-400">{p.date}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">{t}</span>
              ))}
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">View details</button>
          </article>
        ))}
      </div>
    </section>
  );
}
