export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} RoomSync · Built for IIT Kharagpur students
          </p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#posts" className="hover:text-white">Posts</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
