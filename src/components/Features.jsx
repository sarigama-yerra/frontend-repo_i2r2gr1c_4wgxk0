import { ShieldCheck, MessageCircle, Sparkles, Filter } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "IIT KGP verified",
    desc: "Sign in with your institute email to keep the community authentic and safe.",
  },
  {
    icon: Sparkles,
    title: "Smart matching",
    desc: "Compatibility scores based on lifestyle, department, and preferences.",
  },
  {
    icon: MessageCircle,
    title: "Built-in chat",
    desc: "Like, match, and chat securely before sharing contact details.",
  },
  {
    icon: Filter,
    title: "Powerful filters",
    desc: "Find people from your hall, department, or with similar routines.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow-sm shadow-black/20">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white">
              <f.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
