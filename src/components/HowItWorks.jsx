import { MailCheck, IdCard, HeartHandshake, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: MailCheck,
    title: "Verify with IIT KGP email",
    desc: "Sign up using your @kgpian.iitkgp.ac.in account to join the community.",
  },
  {
    icon: IdCard,
    title: "Create your profile",
    desc: "Add lifestyle preferences, hall choices, and budget for accurate matches.",
  },
  {
    icon: HeartHandshake,
    title: "Discover matches",
    desc: "Browse suggested profiles with compatibility scores and apply filters.",
  },
  {
    icon: MessageSquare,
    title: "Chat and decide",
    desc: "Like to match, chat securely, and share contact details when ready.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-white">How it works</h2>
      <p className="mt-1 max-w-2xl text-slate-300">A simple flow from sign-up to finding your ideal roommate.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 text-white">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white">
              <s.icon size={18} />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
