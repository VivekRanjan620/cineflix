import { Film, Users, TrendingUp, Heart } from "lucide-react";

const stats = [
  { label: "Movies Covered", value: "10,000+" },
  { label: "Active Users", value: "50,000+" },
  { label: "OTT Partners", value: "25+" },
  { label: "Paid Out (₹)", value: "2Cr+" },
];

const values = [
  {
    icon: Film,
    title: "Cinema First",
    description:
      "We believe every movie deserves its spotlight. From blockbusters to indie gems, CineFlix curates the best trailers and OTT deals for real cinema lovers.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Our affiliate program empowers creators and fans alike. Share, earn, and grow together with a community that loves movies as much as you do.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Earnings",
    description:
      "Real-time income tracking, no hidden fees. Every rupee you earn is visible in your dashboard — affiliate, YouTube, trailer, and referral income.",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    description:
      "Built by movie buffs, for movie buffs. Every feature on CineFlix is designed with love for cinema and respect for your time.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_95%_58%/0.08),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Film size={14} />
            About CineFlix
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              cinematic universe
            </span>{" "}
            awaits
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CineFlix is India&apos;s premier movie affiliate platform — combining the
            thrill of cinema with real earning opportunities. Stream the hottest
            trailers, discover OTT deals, and get rewarded for every share.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            What we stand for
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={18} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-10">
          <h2 className="font-display text-xl font-bold text-foreground mb-3">
            Ready to start earning?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Join thousands of CineFlix affiliates and turn your movie passion into income.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/register"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[var(--glow-soft)] transition-all"
            >
              Get started
            </a>
            <a
              href="/"
              className="px-6 py-2.5 rounded-full border border-border text-muted-foreground font-medium text-sm hover:border-primary/40 hover:text-foreground transition-all"
            >
              Explore CineFlix
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}