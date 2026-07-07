import Link from 'next/link';
import { 
  ArrowRight, Bot, Target, MousePointerClick, 
  ShieldCheck, Zap, TrendingUp, XCircle, CheckCircle2,
  Users, Handshake, BarChart3, Rocket, PlayCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-500/30">
      
      {/* 1. ULTIMATE HERO SECTION (Aurora Gradient + Glassmorphism) */}
      <section className="relative bg-[#0B0F19] pt-40 pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Animated Aurora Background Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen animate-pulse duration-1000"></div>
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-cyan-600/10 blur-[120px] mix-blend-screen"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            {/* Live pulsing badge */}
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
              GrowthGPT is the elite AI growth partner. We build the tracking, run the ads, and deploy AI agents that turn your traffic into booked appointments on autopilot.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Link href="/contact" className="relative flex items-center justify-center w-full sm:w-auto px-10 py-5 text-lg font-bold text-white bg-slate-900 border border-slate-700 rounded-full transition-all group-hover:bg-slate-800">
                  Claim Free Strategy Audit
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <Link href="/services" className="flex items-center text-slate-300 hover:text-white text-lg font-semibold transition-colors">
                <PlayCircle className="w-6 h-6 mr-2 opacity-70" />
                See how the system works
              </Link>
            </div>
          </div>
        </div>

        {/* High-Impact Hook Section (Replaced the empty dashboard) */}
        <div className="w-full max-w-4xl mx-auto mt-24 relative z-10 px-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-[2rem] bg-slate-800/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden group text-center">
            {/* Subtle hover gradient inside the box */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight relative z-10">
              Your ads are working. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Your funnel is leaking.</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed relative z-10 font-light">
              Most businesses lose 80% of their ad ROI to slow websites, broken tracking, and delayed sales follow-ups. We deploy AI infrastructure that plugs the leaks and books the calls.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PIPELINE (Visual 1-2-3 Grid) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The GrowthGPT Pipeline</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-20 tracking-tight">One system. <br/>Unlimited scalable growth.</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/tracking-infrastructure" className="group bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 bg-white shadow-md text-blue-600 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">1. Precision Traffic</h4>
              <p className="text-slate-600 mb-8 relative z-10 text-lg">We rebuild your tracking with server-side API pipelines so Meta & Google algorithms know exactly who your buyers are.</p>
              <div className="text-blue-600 font-bold text-sm flex items-center relative z-10">
                View Infrastructure <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/services/landing-pages" className="group bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-cyan-100 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 bg-white shadow-md text-cyan-600 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <MousePointerClick className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">2. High Conversion</h4>
              <p className="text-slate-600 mb-8 relative z-10 text-lg">We send traffic to custom-built, sub-second React landing pages engineered strictly with buyer psychology.</p>
              <div className="text-cyan-600 font-bold text-sm flex items-center relative z-10">
                View Architecture <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/services/lead-routing" className="group bg-slate-50 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:border-purple-100 hover:-translate-y-2 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full -z-0"></div>
              <div className="w-16 h-16 bg-white shadow-md text-purple-600 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">3. AI Sales Agents</h4>
              <p className="text-slate-600 mb-8 relative z-10 text-lg">The moment a lead opts in, our conversational AI texts them, qualifies them, and books a call on your calendar.</p>
              <div className="text-purple-600 font-bold text-sm flex items-center relative z-10">
                View Automation <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SHARP CONTRAST (Us vs Them) */}
      <section className="py-32 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why traditional marketing is dead.</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Standard agencies just "run ads" and blame your website when it fails. We take ownership of the entire revenue pipeline.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Standard Agency */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-800">
              <h3 className="text-2xl font-bold text-slate-300 mb-10 flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mr-4">
                  <XCircle className="w-6 h-6 text-slate-500" />
                </div>
                The "Standard" Agency
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-4">01</span>
                  <p className="text-slate-400 text-lg">They rely on broken browser pixels, missing 30% of your sales data due to Apple updates.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-4">02</span>
                  <p className="text-slate-400 text-lg">They send ad traffic to your existing, slow website and hope people figure out how to buy.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-600 font-bold mr-4">03</span>
                  <p className="text-slate-400 text-lg">They email you a spreadsheet of cold leads and leave you to chase them down manually.</p>
                </li>
              </ul>
            </div>

            {/* GrowthGPT */}
            <div className="bg-gradient-to-b from-blue-900/40 to-slate-900 backdrop-blur-md rounded-3xl p-10 border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                The GrowthGPT Partner
              </h3>
              <ul className="space-y-8">
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4">01</span>
                  <p className="text-slate-200 text-lg">We build 1st-party API pipelines, feeding the AI 100% accurate data to drop your Cost Per Lead.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4">02</span>
                  <p className="text-slate-200 text-lg">We build custom Next.js landing pages for you, engineered strictly to turn traffic into prospects.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 font-bold mr-4">03</span>
                  <p className="text-slate-200 text-lg">Our AI agents text your leads instantly and book qualified meetings straight onto your calendar.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METRICS / AUTHORITY GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center divide-x-0 md:divide-x divide-slate-100">
            <div>
              <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">100<span className="text-blue-600">%</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Done For You</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">&lt;5<span className="text-blue-600">s</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Lead Response Time</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">24<span className="text-blue-600">/7</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">AI Qualification</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">0<span className="text-blue-600">x</span></div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Wasted Ad Spend</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IRRESISTIBLE BOTTOM CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B0F19] z-0"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
          <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1]">Ready to stop chasing leads?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Book a free 30-minute discovery call. We'll audit your current ad account, find where you are bleeding money, and show you exactly how our system scales your revenue.
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <Link href="/contact" className="relative flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-slate-950 rounded-full transition-all group-hover:bg-slate-900">
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