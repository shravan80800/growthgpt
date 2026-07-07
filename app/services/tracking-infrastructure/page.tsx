import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, ShieldAlert, Database, 
  Server, Lock, TrendingDown, CheckCircle2, XCircle,
  Activity, Zap
} from 'lucide-react';

export default function TrackingInfrastructureService() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans selection:bg-emerald-500/30">
      
      {/* 1. DARK HERO SECTION (Emerald/Teal Aurora) */}
      <section className="relative bg-[#0B0F19] pt-32 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#0B0F19] to-[#0B0F19] z-0"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link href="/services" className="inline-flex items-center text-sm font-bold text-emerald-400 hover:text-emerald-300 mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Infrastructure
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold backdrop-blur-sm uppercase tracking-widest">
              <Database className="w-4 h-4" />
              <span>Phase 1: Data Accuracy</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Stop flying blind.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Reclaim 100% of your data.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl mx-auto font-light">
            Apple's iOS updates and modern ad-blockers have killed the traditional tracking pixel. We build secure, server-side data pipelines that feed pristine conversion data directly to Meta and Google algorithms.
          </p>
          
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] hover:-translate-y-1">
            Audit My Tracking Setup
            <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>

      {/* 2. THE PROBLEM VS SOLUTION (Visual Comparison) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* The Old Way */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-red-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-8 border border-red-100">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">The Old Way <span className="text-slate-400 font-medium text-xl">(Failing)</span></h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Relying on a piece of code (a Pixel) inside the user's browser. When Safari, iOS 14, or AdBlockers block that code, your ad platform thinks the ad failed—even if the customer actually bought.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Loses 20-30% of actual sales data</span>
                </li>
                <li className="flex items-start bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Algorithms optimize blindly, raising ad costs</span>
                </li>
                <li className="flex items-start bg-red-50/50 p-3 rounded-xl border border-red-100/50">
                  <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Your ROI looks significantly worse than reality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Celeris Way */}
          <div className="bg-slate-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-emerald-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">The Celeris Way</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We capture the conversion on our secure backend server, then instantly route the data back to Meta/Google via their Conversions API (CAPI). The user's browser cannot block a server-to-server connection.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start bg-emerald-900/20 p-3 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Captures 100% of real purchases and leads</span>
                </li>
                <li className="flex items-start bg-emerald-900/20 p-3 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Feeds the AI exactly what it needs to find buyers</span>
                </li>
                <li className="flex items-start bg-emerald-900/20 p-3 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Instantly lowers your Cost Per Acquisition (CPA)</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THREE CORE BENEFITS BENTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Why tracking is your biggest lever.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">If you feed the algorithm bad data, it will buy you bad traffic. Fixing your tracking is the fastest way to increase profitability.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Lower Ad Costs</h4>
            <p className="text-slate-600 leading-relaxed">By sending back the exact demographic and behavioral data of buyers, the ad platforms stop wasting your budget on tire-kickers.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
              <Activity className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Predictive AI Scaling</h4>
            <p className="text-slate-600 leading-relaxed">CAPI (Conversions API) allows us to send offline data, lifetime value, and lead quality scores back to the algorithms for elite optimization.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">Future-Proof Privacy</h4>
            <p className="text-slate-600 leading-relaxed">Browser cookies are going extinct. Server-side tracking makes you immune to future Google Chrome and Apple privacy updates.</p>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center">
        <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 border border-emerald-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/40 blur-[80px] rounded-full mix-blend-multiply"></div>
          
          <div className="relative z-10">
            <Zap className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Are your ads bleeding data?</h2>
            <p className="text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium">
              Let us run a free diagnostic on your Meta and Google tracking setup to show you exactly how much data you are currently losing.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-xl hover:-translate-y-1">
              Request Tracking Audit
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}