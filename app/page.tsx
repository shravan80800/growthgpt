import Link from 'next/link';
import { 
  ArrowRight, Bot, Target, MousePointerClick, 
  ShieldCheck, Zap, TrendingUp, XCircle, CheckCircle2,
  BarChart3, Rocket, Layers, AlertTriangle, 
  LineChart, BrainCircuit, Quote, ChevronDown, MessageSquare
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-500/30 font-sans">
      
      {/* 1. ULTIMATE HERO SECTION */}
      <section className="relative bg-[#0B0F19] pt-40 pb-32 overflow-hidden flex flex-col justify-center min-h-[95vh] border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen animate-pulse duration-1000"></div>
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-3 w-3 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Accepting 3 new partners this month</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
              Stop paying for clicks.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Pay for clients.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
              <strong className="text-white font-semibold">Celeris</strong> is the elite AI growth partner. We build the tracking, run the algorithms, and deploy infrastructure that turns your traffic into booked appointments on autopilot.
            </p>
            
            {/* SWAPPED & REDESIGNED BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              
              {/* PRIMARY BUTTON: Explore Infrastructure (Now with glowing gradient) */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link href="/services" className="relative flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-slate-950 border border-slate-800 rounded-full transition-all group-hover:bg-slate-900 shadow-2xl">
                  <Layers className="w-6 h-6 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                  Explore Full Infrastructure
                </Link>
              </div>

              {/* SECONDARY BUTTON: Strategy Audit (Now Glassmorphic) */}
              <Link href="/contact" className="relative flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-white/5 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all group shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Claim Free Strategy Audit
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOGO STRIP (Trust & Authority) */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Engineered for scalable brands across the globe</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black text-slate-800 tracking-tighter">AcmeCorp</div>
            <div className="text-2xl font-black text-slate-800 tracking-tighter">TechFlow</div>
            <div className="text-2xl font-black text-slate-800 tracking-tighter">Vertex AI</div>
            <div className="text-2xl font-black text-slate-800 tracking-tighter">Nexus Labs</div>
            <div className="text-2xl font-black text-slate-800 tracking-tighter">Elevate</div>
          </div>
        </div>
      </section>

      {/* 3. NEW SEO SECTION: The Problem Agitation */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">The Revenue Leak</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Why your ad spend isn't scaling.</h3>
            <p className="text-lg text-slate-600">Most businesses blame the ad platforms. The truth? Your infrastructure is broken. We fix the three silent killers of ROI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 border border-red-100">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Data Blindness</h4>
              <p className="text-slate-600 leading-relaxed">Ad blockers and iOS updates block 30% of your sales data. Meta's algorithm bids blindly, driving up your Customer Acquisition Cost (CAC).</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 border border-orange-100">
                <BarChart3 className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Sluggish Web Pages</h4>
              <p className="text-slate-600 leading-relaxed">If your landing page takes longer than 3 seconds to load, you lose 50% of your paid traffic before they even see your offer.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 border border-yellow-100">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Slow Speed-to-Lead</h4>
              <p className="text-slate-600 leading-relaxed">Leads grow cold in minutes. If your sales team takes hours to reply, your prospect has already hired your competitor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PIPELINE (The Solution) */}
      <section className="py-32 bg-slate-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">The Celeris Solution</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">One system. <br/>Unlimited scalable growth.</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/tracking-infrastructure" className="group bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-slate-800 hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">1. Server-Side Traffic</h4>
              <p className="text-slate-400 mb-8 relative z-10 text-lg leading-relaxed">We deploy advanced Conversions API (CAPI) pipelines so Meta & Google algorithms learn exactly who your buyers are.</p>
              <div className="text-blue-400 font-bold text-sm flex items-center relative z-10 group-hover:text-blue-300">
                View Infrastructure <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/services/landing-pages" className="group bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-slate-800 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">2. Edge Conversion</h4>
              <p className="text-slate-400 mb-8 relative z-10 text-lg leading-relaxed">We route ad traffic to custom-built, sub-second React landing pages engineered strictly with buyer psychology.</p>
              <div className="text-cyan-400 font-bold text-sm flex items-center relative z-10 group-hover:text-cyan-300">
                View Architecture <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/services/lead-routing" className="group bg-slate-800/50 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-slate-800 hover:border-purple-400/50 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">3. AI Sales Agents</h4>
              <p className="text-slate-400 mb-8 relative z-10 text-lg leading-relaxed">The millisecond a lead opts in, our conversational AI texts them via WhatsApp, qualifies them, and books a call.</p>
              <div className="text-purple-400 font-bold text-sm flex items-center relative z-10 group-hover:text-purple-300">
                View Automation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. UNIFIED GROWTH PREVIEW (Bento Grid) */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Beyond The Click</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Unified Growth Infrastructure.</h3>
              <p className="text-lg text-slate-600">No siloed vendors. No misaligned incentives. We support every marketing lever you need to dominate your market share.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-extrabold rounded-full flex items-center">
                  +340% Avg. ROAS
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">Performance Marketing</h4>
              <p className="text-slate-600 text-lg mb-6">Hyper-targeted Meta, Google, and TikTok campaigns engineered to convert. We test relentlessly, isolate winning creatives, and scale aggressively.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Full-Funnel Management</li>
                <li className="flex items-center text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" /> Dynamic Creative Optimization</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 bg-slate-800 text-cyan-400 rounded-2xl flex items-center justify-center border border-slate-700">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <div className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-extrabold rounded-full flex items-center">
                  100% Attribution
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Advanced Analytics & CRO</h4>
              <p className="text-slate-400 text-lg mb-6 relative z-10">Traffic means nothing if it doesn't convert. We design high-velocity landing pages and deploy multi-touch attribution models.</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3" /> Multivariate A/B Testing</li>
                <li className="flex items-center text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3" /> Real-time ROI Dashboards</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 group text-lg">
              View all 6 Core Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEW SEO SECTION: Case Studies & Social Proof */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Don't take our word for it.</h2>
            <p className="text-lg text-slate-600">Look at the data from our latest scaling partners.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative">
              <Quote className="w-12 h-12 text-blue-100 absolute top-8 right-8" />
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xl">JD</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">James D.</h4>
                  <p className="text-slate-500 text-sm">Founder, SaaS Operations</p>
                </div>
              </div>
              <p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                "Before Celeris, our Meta ads were bleeding money. Within 3 weeks of deploying their Next.js landing pages and WhatsApp AI agent, our Cost Per Lead dropped by 42% and sales velocity doubled."
              </p>
              <div className="flex items-center text-emerald-600 font-bold text-sm bg-emerald-50 w-fit px-3 py-1.5 rounded-lg border border-emerald-100">
                <TrendingUp className="w-4 h-4 mr-2" /> -42% CAC in 21 Days
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative">
              <Quote className="w-12 h-12 text-purple-100 absolute top-8 right-8" />
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xl">SM</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Sarah M.</h4>
                  <p className="text-slate-500 text-sm">CMO, Enterprise B2B</p>
                </div>
              </div>
              <p className="text-slate-700 text-lg italic leading-relaxed mb-6">
                "The server-side tracking infrastructure completely changed the game. We finally have 100% attribution clarity. Celeris doesn't just run ads; they build scalable business assets."
              </p>
              <div className="flex items-center text-purple-600 font-bold text-sm bg-purple-50 w-fit px-3 py-1.5 rounded-lg border border-purple-100">
                <LineChart className="w-4 h-4 mr-2" /> 2.5x Pipeline Volume
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AUTHORITY METRICS GRID */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center divide-x-0 md:divide-x divide-slate-700">
            <div>
              <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">100<span className="text-blue-500">%</span></div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Done For You</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">&lt;5<span className="text-blue-500">s</span></div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Lead Response Time</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">24<span className="text-blue-500">/7</span></div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">AI Qualification</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">0<span className="text-blue-500">x</span></div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Wasted Ad Spend</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEW SEO SECTION: Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Common Questions</h2>
            <p className="text-slate-600">Everything you need to know about partnering with Celeris.</p>
          </div>
          
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
              <h4 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                What makes Celeris different from a standard marketing agency?
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </h4>
              <p className="mt-4 text-slate-600 leading-relaxed">Standard agencies focus purely on running ad campaigns and delivering "clicks." Celeris is a full-stack growth partner. We build server-side tracking pipelines, code custom Next.js landing pages, and deploy AI WhatsApp agents to ensure every click actually converts into revenue.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
              <h4 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                How does the AI Lead Routing work?
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </h4>
              <p className="mt-4 text-slate-600 leading-relaxed">When a prospect fills out a form on your landing page, our webhook infrastructure catches their data instantly. Within milliseconds, our AI agent reaches out to them via SMS or WhatsApp, sounding exactly like a human assistant, to qualify their intent and book them on your calendar.</p>
            </div>
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
              <h4 className="text-lg font-bold text-slate-900 flex items-center justify-between">
                Do I need to replace my current website?
                <ChevronDown className="w-5 h-5 text-slate-400" />
              </h4>
              <p className="mt-4 text-slate-600 leading-relaxed">No. Your main corporate website will remain untouched. We deploy our high-velocity React marketing funnels on a dedicated subdomain (e.g., <code>offer.yourbrand.com</code>) to ensure maximum speed and conversion without disrupting your existing operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. IRRESISTIBLE BOTTOM CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F19] z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
          <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">Ready to scale aggressively?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free 30-minute discovery call. We'll audit your current ad account, find where you are bleeding money, and show you exactly how Celeris scales your revenue.
          </p>
          <div className="relative inline-block group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <Link href="/contact" className="relative flex items-center justify-center w-full sm:w-auto px-12 py-6 text-xl font-bold text-white bg-slate-950 rounded-full transition-all group-hover:bg-slate-900">
              Claim Your Free Strategy Audit
              <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 font-medium">No obligation. 100% custom insights for your business.</p>
        </div>
      </section>

    </div>
  );
}