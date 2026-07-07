import { 
  Target, 
  ShieldCheck, 
  Cpu, 
  Users, 
  ArrowRight, 
  BrainCircuit, 
  Zap, 
  BarChart3, 
  Rocket, 
  MessageSquare, 
  Code, 
  Gauge 
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. HERO: The Manifesto */}
      <section className="bg-[#0B0F19] text-white py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-6">The Celeris Manifesto</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[1.05]">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Velocity.</span>
          </h1>
          <p className="text-2xl text-slate-400 leading-relaxed font-light">
            We are not just a marketing agency. We are a technical infrastructure firm that treats every ad campaign like a software release.
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM: Industry Context */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">The Status Quo</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Why 90% of agencies fail.</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For the last decade, "growth" has been defined by vanity metrics—clicks, impressions, and likes. But in the current digital landscape, these metrics are illusions. Privacy updates have crippled traditional tracking, and generic website builders have crippled performance.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Businesses are burning capital on ad platforms that are flying blind, sending traffic to landing pages that were never optimized for the modern mobile user. The result? A massive "revenue leak" at every step of the funnel.
            </p>
          </div>
          {/* VISUAL EFFECT PLACEHOLDER: Insert "Leaking Funnel" abstract 3D render here */}
          <div className="h-[400px] bg-gradient-to-br from-slate-200 to-slate-100 rounded-[3rem] border-4 border-white shadow-2xl flex items-center justify-center">
            <span className="text-slate-400 font-bold uppercase tracking-widest">[ Abstract Data Leak Visualization ]</span>
          </div>
        </div>
      </section>

      {/* 3. THE CELERIS DIFFERENCE (Core Pillars) */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-extrabold text-slate-900">The Celeris Difference</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cpu, title: "Engineering First", desc: "Our marketing stack is built on the same architecture as top-tier SaaS platforms." },
              { icon: ShieldCheck, title: "Data Integrity", desc: "Server-side tracking ensures 100% accurate conversion data." },
              { icon: Zap, title: "Sub-Second Delivery", desc: "Edge-deployed funnels for instant load times." },
              { icon: BrainCircuit, title: "AI Integration", desc: "Autonomous sales agents that work 24/7." }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all">
                <p.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                <p className="text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE TEAM & CULTURE */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
          <h3 className="text-4xl font-extrabold mb-8">Who We Are</h3>
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            Celeris is a collective of engineers, conversion strategists, and data scientists. We don't believe in "creative meetings"—we believe in A/B tests, load-time benchmarks, and clear, measurable revenue growth. We are obsessed with the technical details that most agencies simply ignore.
          </p>
          <div className="flex justify-center gap-8">
            {/* VISUAL EFFECT: Insert 3 Portrait shots here */}
            <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-slate-800"></div>
            <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-slate-800"></div>
            <div className="w-24 h-24 rounded-full bg-slate-700 border-4 border-slate-800"></div>
          </div>
        </div>
      </section>

      {/* 5. LONG-FORM STORY / NARRATIVE */}
      <section className="py-24 max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
        <h3 className="text-3xl font-extrabold mb-8 text-center">The Celeris Story</h3>
        <p>The name "Celeris" comes from the Latin word for swift, quick, and agile. In digital growth, speed is the ultimate advantage. If your landing page is 100ms faster than your competitor's, you win the customer.</p>
        <p>We started Celeris because we realized that the modern marketing landscape had become overly complex. Agencies were forcing businesses to manage 15+ different tools, none of which talked to each other. We decided to build a unified system.</p>
        <p>Today, Celeris stands as a partner for brands that are ready to stop playing games with "ad optimization" and start building scalable, automated revenue engines.</p>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center px-4">
        <Rocket className="w-16 h-16 mx-auto mb-8" />
        <h2 className="text-5xl font-black tracking-tight mb-8">Ready to transform your growth?</h2>
        <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto">Join the new standard of digital growth. Let's build your infrastructure together.</p>
        <Link href="/contact" className="inline-flex items-center px-10 py-5 text-lg font-bold text-blue-900 bg-white rounded-full hover:bg-slate-100 transition-all hover:scale-105">
          Get Started Today <ArrowRight className="w-6 h-6 ml-2" />
        </Link>
      </section>

    </div>
  );
}