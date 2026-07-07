import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, Bot, Clock, 
  CalendarCheck, MessageSquare, Zap, Smartphone,
  Users, Target
} from 'lucide-react';

export default function LeadRoutingService() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-purple-500/30">
      
      {/* 1. DARK HERO SECTION (Purple/Fuchsia Aurora) */}
      <section className="relative bg-[#0B0F19] pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0B0F19] to-[#0B0F19] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-purple-400 hover:text-purple-300 mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Infrastructure
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold backdrop-blur-sm uppercase tracking-widest">
              <Bot className="w-4 h-4" />
              <span>Phase 3: AI Automation</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Stop chasing leads.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Let AI close them 24/7.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            If you don't reply to a lead within 5 minutes, your closing rate drops by 80%. We deploy Agentic AI that instantly texts your inbound leads, asks qualifying questions, and books appointments straight to your calendar.
          </p>
          
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-purple-400 hover:bg-purple-300 rounded-full transition-all shadow-[0_0_30px_rgba(192,38,211,0.3)] hover:shadow-[0_0_40px_rgba(192,38,211,0.5)] hover:-translate-y-1">
            Automate My Sales Pipeline
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* 2. THE CHAT SIMULATION (Visual Proof) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Copy Side */}
          <div className="lg:w-1/2">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 border border-purple-100">
              <Zap className="w-8 h-8 flex-shrink-0" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">The 5-Minute Rule.</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Traditional agencies just dump raw leads into a Google Sheet and expect you to call them. By the time your sales rep dials the number 3 hours later, the lead has already hired your competitor.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our Agentic AI workflow connects directly to your ads. The millisecond someone submits their information, the AI reaches out via SMS or WhatsApp, sounding exactly like a human assistant.
            </p>
            <div className="flex items-center space-x-4 bg-purple-50 p-4 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-purple-900">
                Fact: Leads contacted within 5 minutes are <span className="text-purple-600 text-base">21x more likely</span> to enter the sales cycle.
              </p>
            </div>
          </div>

          {/* Interactive Phone UI Side */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="w-[320px] bg-slate-900 rounded-[3rem] p-4 shadow-[0_0_50px_rgba(0,0,0,0.2)] border-[8px] border-slate-800 relative">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content */}
              <div className="bg-slate-50 h-[500px] rounded-[2rem] overflow-hidden relative flex flex-col pt-10">
                {/* Chat Header */}
                <div className="bg-white px-6 py-4 border-b border-slate-200 flex items-center space-x-3 shadow-sm z-10">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white shadow-sm">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm">Celeris Assistant</h5>
                    <p className="text-xs text-emerald-500 font-medium">Online</p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                  {/* Fade out top for scrolling illusion */}
                  <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-slate-50 to-transparent z-10"></div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm font-medium animate-fade-in-up">
                      Hi Alex! Saw you just requested a quote on our site. To make sure we match you with the right expert, what is your current monthly marketing budget?
                    </div>
                  </div>
                  <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[85%] text-sm font-medium">
                      We're looking to spend around $10k/month to start.
                    </div>
                  </div>
                  <div className="flex justify-start animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <div className="bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm font-medium">
                      Perfect. Let's get you on a quick discovery call. Does tomorrow at 2:00 PM EST work for you? 📅
                    </div>
                  </div>
                  <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm shadow-md max-w-[85%] text-sm font-medium">
                      Yes, that works!
                    </div>
                  </div>
                  <div className="flex justify-start animate-fade-in-up" style={{ animationDelay: '2s' }}>
                    <div className="bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-sm font-medium">
                      Great! I've sent a calendar invite to your email. Talk to you then! 🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Engineered for autonomous growth.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">This isn't a simple chatbot. It is a highly intelligent, context-aware AI agent integrated directly into your CRM.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Smart Qualification</h4>
            <p className="text-slate-600 leading-relaxed">The AI asks pre-screening questions (budget, timeline, needs). It politely nurtures disqualified leads and aggressively pushes qualified leads to book a call.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center mb-6 border border-fuchsia-100">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Direct Scheduling</h4>
            <p className="text-slate-600 leading-relaxed">The AI reads your sales team's live calendar. Once a lead is qualified, the bot negotiates a time and books the meeting automatically.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Omnichannel Reach</h4>
            <p className="text-slate-600 leading-relaxed">Whether your customers prefer SMS, WhatsApp, or Instagram DMs, the Agentic AI can seamlessly engage them on their preferred platform.</p>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <div className="bg-purple-50 rounded-[3rem] p-12 md:p-20 border border-purple-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          
          <div className="relative z-10">
            <Users className="w-16 h-16 text-purple-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Wake up to booked calls.</h2>
            <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium">
              Stop letting expensive leads slip through the cracks. Let us build a custom AI agent tailored to your brand's voice and sales process.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-xl hover:-translate-y-1">
              Automate My Pipeline
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}