import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, LayoutTemplate, 
  Rocket, Zap, Smartphone, Gauge, 
  MousePointerClick, CheckCircle2, XCircle
} from 'lucide-react';

export default function LandingPagesService() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-cyan-500/30">
      
      {/* 1. DARK HERO SECTION (Cyan/Blue Aurora) */}
      <section className="relative bg-[#0B0F19] pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0B0F19] to-[#0B0F19] z-0"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-cyan-400 hover:text-cyan-300 mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Infrastructure
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold backdrop-blur-sm uppercase tracking-widest">
              <LayoutTemplate className="w-4 h-4" />
              <span>Phase 2: High Conversion</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Ads don't make money.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Landing pages do.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            If your site takes more than 3 seconds to load, you're losing 50% of your ad traffic immediately. We build sub-second, edge-deployed React experiences engineered strictly for one thing: turning clicks into revenue.
          </p>
          
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:-translate-y-1">
            Upgrade My Architecture
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* 2. THE PROBLEM VS SOLUTION (Visual Comparison) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* The Old Way */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-slate-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center mb-8 border border-slate-200">
                <Gauge className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">The "Standard" Website</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Traditional platforms like WordPress or ClickFunnels rely on bloated plugins and slow servers. They are designed to look pretty, not to run fast or convert paid traffic efficiently.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">3-5+ second load times kill conversion rates</span>
                </li>
                <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Generic templates fail to utilize buyer psychology</span>
                </li>
                <li className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Clunky mobile experiences frustrate 80% of your users</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Celeris Way */}
          <div className="bg-slate-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-cyan-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">The Edge-Deployed Funnel</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We build headless Next.js applications that are pre-rendered globally on server networks. The result? Instant load times anywhere in the world and a frictionless path to purchase.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start bg-cyan-900/20 p-3 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">&lt; 1 second load times retain maximum traffic</span>
                </li>
                <li className="flex items-start bg-cyan-900/20 p-3 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Data-driven UX design engineered to force clicks</span>
                </li>
                <li className="flex items-start bg-cyan-900/20 p-3 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Flawless, thumb-optimized mobile experiences</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PERFORMANCE VISUAL (Browser Mockup) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Engineered for psychology & speed.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We don't build "brochure" websites. We build digital sales machines. Every pixel, button placement, and headline is tested to guide the user to a single logical conclusion: opting in.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              By utilizing the modern React ecosystem, we create dynamic, app-like experiences that load instantly, preventing high bounce rates and maximizing your ad spend efficiency.
            </p>
            <div className="flex items-center space-x-4 bg-cyan-50 p-4 rounded-2xl border border-cyan-100">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Gauge className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-cyan-900">
                A 1-second delay in page response can result in a <span className="text-cyan-600 text-base">7% reduction</span> in conversions.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-[2rem] opacity-30 blur-2xl"></div>
            
            {/* Browser Window */}
            <div className="bg-white border border-slate-200 shadow-2xl rounded-[1.5rem] overflow-hidden relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Browser Header */}
              <div className="w-full h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-white border border-slate-200 rounded-md w-full max-w-[200px] mx-auto flex items-center justify-center text-[10px] text-slate-400 font-mono">
                    offer.yourdomain.com
                  </div>
                </div>
              </div>
              
              {/* Browser Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg"></div>
                  <div className="w-24 h-8 bg-slate-100 rounded-full"></div>
                </div>
                <div className="w-4/5 h-10 bg-slate-200 rounded-lg"></div>
                <div className="w-3/5 h-10 bg-slate-200 rounded-lg"></div>
                <div className="w-full h-4 bg-slate-50 rounded mt-6"></div>
                <div className="w-5/6 h-4 bg-slate-50 rounded"></div>
                <div className="flex gap-4 mt-8">
                  <div className="w-32 h-12 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-500/30"></div>
                  <div className="w-32 h-12 bg-slate-100 rounded-xl"></div>
                </div>
              </div>
              
              {/* "99/100" Lighthouse Score Overlay */}
              <div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-bounce">
                <div className="w-10 h-10 rounded-full border-4 border-emerald-500 flex items-center justify-center text-emerald-600 font-bold text-sm">
                  99
                </div>
                <div className="text-xs font-bold text-slate-700">
                  Performance<br/>Score
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Next.js Edge Delivery</h4>
            <p className="text-slate-600 leading-relaxed">Your landing pages are globally distributed via Edge networks (Vercel/AWS), ensuring users in any city experience instant load times.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Copywriting & UI</h4>
            <p className="text-slate-600 leading-relaxed">We don't just write code. Our in-house copywriters and designers create persuasive narratives that guide the user directly to the CTA.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Mobile-First Optimization</h4>
            <p className="text-slate-600 leading-relaxed">Over 90% of your ad traffic is on mobile. We design for thumbs first, ensuring frictionless forms and easily tappable buttons.</p>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <div className="bg-cyan-50 rounded-[3rem] p-12 md:p-20 border border-cyan-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          
          <div className="relative z-10">
            <LayoutTemplate className="w-16 h-16 text-cyan-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Is your website costing you sales?</h2>
            <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium">
              Let us audit your current landing pages. We will show you exactly where users are dropping off and how edge architecture can fix it.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-xl hover:-translate-y-1">
              Audit My Current Funnel
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}