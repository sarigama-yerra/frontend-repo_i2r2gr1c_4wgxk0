import { Rocket, Search, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white shadow-lg">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">RoomSync</span>
            <span className="ml-2 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-300">IIT KGP</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#posts" className="transition hover:text-white">Posts</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white transition hover:bg-white/10">
              <Search size={16} />
              <span className="hidden sm:inline">Browse</span>
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
              <Bell size={16} />
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20">
              <User size={16} />
              <span className="hidden sm:inline">Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
