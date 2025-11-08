import Spline from "@splinetool/react-spline";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6d9FQ2j1gIfszr7B/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find your perfect roommate at IIT KGP
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            RoomSync matches you with compatible students based on lifestyle, department, budget, and hostel preferences so you can move in with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-cyan-400">
              Get started
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Learn how it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-slate-300">
            <Star className="text-amber-400" size={16} />
            <span className="text-sm">Verified with @kgpian.iitkgp.ac.in emails</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
