import Link from 'next/link';
import { 
  ArrowRight, CheckCircle2, Target, 
  Code, MessageSquare, Zap, 
  Layers, ShieldCheck, Cpu, 
  Smartphone, BarChart, Rocket, 
  Globe, Megaphone, MousePointerClick, Workflow
} from 'lucide-react';

export default function ServicesHubPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (Aurora Dark Mode & Elevator Pitch) */}
      <section className="relative bg-[#0B0F19] pt-40 pb-32 overflow-hidden flex flex-col justify-center border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-bold mb-8 backdrop-blur-md uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>The Technical Growth Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">scalable revenue.</span>
          </h1>
          
          {/* The Core Elevator Pitch */}
          <div className="max-w-5xl mx-auto bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light relative z-10 italic">
              "We build high-velocity React landing pages, deploy server-side tracking, and run algorithmic ad campaigns that route hot leads directly to your WhatsApp via API."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE "FULL STACK" GUARANTEE BANNER */}
      <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-1 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
          <div className="bg-slate-900 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start">
                <Globe className="w-6 h-6 mr-3 text-blue-400" />
                Comprehensive Marketing Support
              </h3>
              <p className="text-slate-400 text-lg max-w-2xl">
                While we specialize in elite technical infrastructure, <span className="text-white font-semibold">we support every marketing need you have.</span> From branding and copywriting to SEO and email automation, we are your end-to-end growth partner.
              </p>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THE ECOSYSTEM MAP (Visual Flow restored) */}
      <section className="bg-slate-900 py-32 mt-20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Architecture of Scale</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">How our technology turns a stranger into a booked appointment in milliseconds.</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Animated Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-emerald-500/20 -translate-y-1/2 z-0">
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                  <Megaphone className="w-7 h-7" />
                </div>
                <h4 className="text-xl text-white font-bold mb-3">1. Algorithmic Ads</h4>
                <p className="text-slate-400 leading-relaxed">Meta/Google ML engines find the exact buyer using server-side API data pipelines.</p>
              </div>
              
              <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                  <Code className="w-7 h-7" />
                </div>
                <h4 className="text-xl text-white font-bold mb-3">2. React Funnel</h4>
                <p className="text-slate-400 leading-relaxed">User clicks and loads a sub-second Next.js landing page engineered to convert.</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                  <Workflow className="w-7 h-7" />
                </div>
                <h4 className="text-xl text-white font-bold mb-3">3. API Routing</h4>
                <p className="text-slate-400 leading-relaxed">Webhook catches the lead instantly, pinging our agentic AI and your CRM with zero data loss.</p>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h4 className="text-xl text-white font-bold mb-3">4. WhatsApp Close</h4>
                <p className="text-slate-400 leading-relaxed">AI texts the lead via WhatsApp, qualifies their intent, and books your calendar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES DEEP DIVE (The Technical Hybrid Stack) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-24">
        
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Engine Room</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Our Core Technical Pillars</h3>
        </div>

        {/* SERVICE 1: Algorithmic Traffic Generation */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center gap-16 group hover:border-blue-200 transition-all duration-500 hover:shadow-2xl">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-blue-100 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Algorithmic Traffic Generation</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't just run ads and hope for the best. We build <strong className="text-slate-900">data-driven ad campaigns</strong> that train Meta and Google's algorithms to find your ideal customers. By constantly A/B testing the creatives and optimizing the algorithmic bidding, we ensure your ad budget is only spent on high-intent local traffic.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Algorithmic Bidding Optimization</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Machine Learning Audience Targeting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Continuous Creative A/B Testing</span>
              </li>
            </ul>
            <Link href="/services/tracking-infrastructure" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 group/btn">
              Explore Traffic & Tracking
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full"></div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-white font-bold">Meta Ads ML Engine</div>
                  <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 animate-pulse">Learning Phase Complete</div>
                </div>
                <div className="h-14 w-full bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 flex items-center px-5 justify-between shadow-inner">
                  <span className="text-slate-400 font-mono text-sm">Winning_Creative_V4</span>
                  <span className="text-emerald-400 font-mono text-sm font-bold">Scaling Budget +20%</span>
                </div>
                <div className="h-14 w-full bg-slate-800/80 backdrop-blur rounded-xl border border-slate-700 flex items-center px-5 justify-between shadow-inner">
                  <span className="text-slate-400 font-mono text-sm">Audience_Lookalike_1%</span>
                  <span className="text-blue-400 font-mono text-sm font-bold">Target Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE 2: High-Velocity React Landing Pages (Reversed) */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row-reverse items-center gap-16 group hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-cyan-100 group-hover:scale-110 transition-transform duration-500">
              <Code className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">High-Velocity React Landing Pages</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Traditional WordPress sites are bloated and slow, which kills your ad performance. We hard-code your offer pages using <strong className="text-slate-900">Next.js and React</strong>—the exact same enterprise architecture used by platforms like Netflix. This guarantees <strong className="text-slate-900">millisecond load times</strong>, dropping your bounce rate and forcing more visitors to convert into leads.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Enterprise Next.js Architecture</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Millisecond Global Load Times</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Zero-Bloat Custom Codebase</span>
              </li>
            </ul>
            <Link href="/services/landing-pages" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-cyan-600 rounded-full transition-all shadow-lg hover:shadow-cyan-500/30 group/btn">
              Explore Edge Architecture
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-50 rounded-3xl p-6 shadow-inner border border-slate-200 group-hover:-translate-y-2 transition-transform duration-500 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
              <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 overflow-hidden relative z-10">
                <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs text-slate-500 ml-2 font-mono">terminal - Next.js Build</span>
                </div>
                <div className="p-8 font-mono text-sm space-y-4">
                  <div className="text-emerald-400">✓ Compiled successfully in 142ms</div>
                  <div className="text-slate-300">Route (app)                              Size     First Load JS</div>
                  <div className="text-slate-300">┌ ○ /                                    1.2 kB         84.2 kB</div>
                  <div className="text-slate-300">├ ○ /offer                               <span className="text-emerald-400 font-bold">945 B</span>          <span className="text-emerald-400 font-bold">83.9 kB</span></div>
                  <div className="text-cyan-400 pt-4 font-bold animate-pulse">⚡ Page load time: 0.08s (Sub-second)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICE 3: Server-Side Tracking & Routing */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row items-center gap-16 group hover:border-purple-200 transition-all duration-500 hover:shadow-2xl">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-purple-100 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Server-Side API Lead Routing</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ad blockers are destroying standard marketing data. We deploy <strong className="text-slate-900">Server-Side Tagging (CAPI)</strong> to bypass the browser and ensure 100% clean data attribution. Then, we use <strong className="text-slate-900">custom webhooks</strong> to catch a prospect's data the millisecond they hit "Submit" and route it via API directly to your WhatsApp. You get the lead in real-time, with <strong className="text-slate-900">zero data loss</strong>.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Meta & Google CAPI (Zero Data Loss)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Custom Webhook Infrastructure</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                <span className="text-slate-700 font-medium">Instant WhatsApp API Delivery</span>
              </li>
            </ul>
            <Link href="/services/lead-routing" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-purple-600 rounded-full transition-all shadow-lg hover:shadow-purple-500/30 group/btn">
              Explore API Automation
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-50 rounded-3xl p-6 shadow-inner border border-slate-200 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="space-y-8">
                {/* Visual Data Flow */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between relative">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 border border-slate-200 z-10"><MousePointerClick className="w-7 h-7"/></div>
                  <div className="absolute top-1/2 left-14 right-14 h-1 bg-slate-100 -translate-y-1/2">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-purple-600 w-full animate-[pulse_1s_ease-in-out_infinite]"></div>
                  </div>
                  <div className="px-5 py-2 bg-white border border-purple-200 text-purple-600 text-xs font-bold rounded-full z-10 shadow-sm whitespace-nowrap">Webhook Triggered</div>
                  <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100 z-10"><Smartphone className="w-7 h-7"/></div>
                </div>
                
                {/* Mockup WhatsApp message */}
                <div className="bg-emerald-50/50 border border-emerald-200 p-6 rounded-2xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 shadow-sm">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <span className="text-emerald-900 font-bold text-base">New Lead (WhatsApp API)</span>
                    <span className="ml-auto text-emerald-600 text-sm font-mono font-bold bg-emerald-100 px-3 py-1 rounded-full">0ms delay</span>
                  </div>
                  <p className="text-slate-800 text-base font-medium bg-white p-5 rounded-xl border border-emerald-100 shadow-sm">
                    🔥 HOT LEAD ALERT<br/><br/>
                    Name: John Doe<br/>
                    Phone: (555) 123-4567<br/>
                    Intent: Ready to buy today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECH STACK / INTEGRATIONS (Builds Trust) */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Plays nice with your current stack.</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            You don't need to rip out your existing software. We layer our AI and tracking infrastructure directly on top of the tools you already use.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {['Meta Ads API', 'Google Ads', 'Next.js', 'Make.com', 'Zapier', 'HubSpot', 'GoHighLevel', 'Salesforce', 'Stripe', 'LangGraph', 'WhatsApp API', 'OpenAI'].map((tech) => (
              <div key={tech} className="px-6 py-4 bg-white border-2 border-slate-100 rounded-full text-slate-700 font-bold shadow-sm hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-default text-lg">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXECUTIVE FAQ */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Executive FAQ</h2>
            <p className="text-lg text-slate-600">Common questions from business owners.</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <ShieldCheck className="w-7 h-7 text-blue-500 mr-4 flex-shrink-0" /> 
                Do I need to replace my entire website?
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed pl-11">No. We can build our Next.js landing pages on a subdomain (e.g., <code>offer.yourwebsite.com</code>). Your main corporate website remains completely untouched while we run all ad traffic to our high-converting funnels.</p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <BarChart className="w-7 h-7 text-blue-500 mr-4 flex-shrink-0" /> 
                How fast until we see ROI?
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed pl-11">Once we launch the tracking pipeline and new landing pages (usually within 14 days of onboarding), clients typically see a 20-30% drop in Cost Per Lead within the first 72 hours of ad spend as the ML algorithms calibrate.</p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow">
              <h4 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <MessageSquare className="w-7 h-7 text-blue-500 mr-4 flex-shrink-0" /> 
                Will the AI sound like a robot to my customers?
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed pl-11">Not at all. We custom-prompt the LLM to match your brand's exact tone of voice. To the customer, it feels like they are texting a highly responsive human assistant on WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-blue-600/30 via-slate-900 to-slate-900 z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">Ready for enterprise architecture?</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Let us audit your current ad account, website, and tracking setup to show you exactly how our technical infrastructure can scale your revenue.
            </p>
            
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
              <Link href="/contact" className="relative flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-slate-950 rounded-full transition-all group-hover:bg-slate-900">
                Claim Your Free Strategy Audit
                <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}