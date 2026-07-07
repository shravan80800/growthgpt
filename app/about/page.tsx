import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Target,
  Eye,
  ShieldCheck,
  Users,
  Zap,
  BarChart3,
  BrainCircuit,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "12+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Zap,
      title: "Speed",
      desc: "Fast execution, lightning-fast websites, and rapid campaign optimization.",
    },
    {
      icon: BrainCircuit,
      title: "Innovation",
      desc: "Leveraging AI and modern technology to create scalable growth systems.",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      desc: "Clear communication, measurable KPIs, and complete reporting.",
    },
  ];

  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 text-sm font-semibold">
            About Celeris
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight max-w-5xl">
            Engineering Growth.
            <br />
            <span className="text-cyan-400">
              Not Just Marketing.
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300 max-w-3xl leading-relaxed">
            Celeris is a modern growth agency helping ambitious businesses scale
            through performance marketing, web development, AI automation,
            conversion optimization, and data-driven strategies.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-900 hover:scale-105 transition"
            >
              Start Your Growth
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-700 px-8 py-4 hover:bg-white/5 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              Built for businesses that refuse average.
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Most agencies focus on impressions, clicks, and vanity metrics.
              We focus on what truly matters—qualified leads, revenue growth,
              customer retention, and long-term business success.
            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              By combining strategy, development, automation, analytics, and
              performance marketing into one seamless ecosystem, Celeris becomes
              your dedicated growth partner instead of just another service
              provider.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl bg-white p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition"
              >
                <h3 className="text-4xl font-black text-blue-600">
                  {item.number}
                </h3>

                <p className="mt-3 text-slate-600 font-medium">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MISSION */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 uppercase font-semibold tracking-widest">
              Our Foundation
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Mission. Vision. Values.
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Everything we do is built around helping businesses grow faster,
              smarter, and more sustainably using technology and marketing.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-3xl p-8 bg-slate-50 border">
              <Target className="h-12 w-12 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Mission
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Build digital growth systems that generate measurable business
                results instead of vanity metrics.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-slate-50 border">
              <Eye className="h-12 w-12 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Vision
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Become India's most trusted growth engineering company by
                combining marketing, software, AI, and analytics.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-slate-50 border">
              <Users className="h-12 w-12 text-blue-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Culture
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                We value curiosity, innovation, accountability, continuous
                learning, and delivering exceptional client experiences.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl transition"
              >
                <value.icon className="h-10 w-10 text-cyan-500" />

                <h3 className="mt-6 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {value.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
            {/* WHY CHOOSE US */}

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <span className="text-cyan-400 uppercase tracking-widest font-semibold">
              Why Choose Celeris
            </span>

            <h2 className="mt-4 text-5xl font-black">
              Everything You Need to Scale
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg">
              We combine technology, creativity, and data into one unified
              growth ecosystem so your business can grow faster with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: Rocket,
                title: "Performance Marketing",
                desc: "ROI-focused Google Ads, Meta Ads and lead generation campaigns."
              },
              {
                icon: BarChart3,
                title: "Analytics & Tracking",
                desc: "Know exactly where every lead comes from with accurate reporting."
              },
              {
                icon: BrainCircuit,
                title: "AI Automation",
                desc: "Automate lead nurturing, customer support and repetitive tasks."
              },
              {
                icon: Zap,
                title: "Lightning Fast Websites",
                desc: "Beautiful websites optimized for conversions and Core Web Vitals."
              },
              {
                icon: ShieldCheck,
                title: "Growth Strategy",
                desc: "Custom digital strategies aligned with your business objectives."
              },
              {
                icon: Users,
                title: "Dedicated Partnership",
                desc: "We're invested in your long-term success—not just short-term campaigns."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-700 bg-slate-800/50 p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
              >
                <item.icon className="h-12 w-12 text-cyan-400" />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR PROCESS */}

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <span className="text-blue-600 uppercase tracking-widest font-semibold">
              Our Process
            </span>

            <h2 className="mt-4 text-5xl font-black text-slate-900">
              From Idea to Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Discover",
              "Strategize",
              "Build",
              "Scale",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {
                    [
                      "Understand your business, goals and audience.",
                      "Create a roadmap backed by data and research.",
                      "Launch websites, campaigns and automation.",
                      "Optimize continuously to maximize ROI."
                    ][index]
                  }
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOUNDER MESSAGE */}

      <section className="py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black text-slate-900">
            Our Promise
          </h2>

          <blockquote className="mt-10 text-2xl md:text-3xl italic leading-relaxed text-slate-700">
            "Great marketing isn't about making more noise.
            It's about creating meaningful experiences,
            solving real business problems,
            and delivering measurable growth."
          </blockquote>

          <div className="mt-8">
            <p className="font-bold text-slate-900">
              — Team Celeris
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <Rocket className="mx-auto h-16 w-16" />

          <h2 className="mt-8 text-5xl font-black">
            Let's Build Your Growth Story
          </h2>

          <p className="mt-6 text-xl max-w-3xl mx-auto text-blue-100 leading-8">
            Whether you're launching a startup, scaling an established business,
            or looking to improve your digital presence, Celeris is here to help
            you achieve sustainable growth through technology and performance
            marketing.
          </p>

          <div className="mt-12">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}