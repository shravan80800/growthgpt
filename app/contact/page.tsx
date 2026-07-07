"use client";

import { useState } from 'react';
import { 
  CheckCircle2, ShieldCheck, TrendingUp, Clock, 
  Loader2, Zap, ArrowRight, CheckCircle 
} from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // 1. Capture all form data automatically using the 'name' attributes
    const formData = new FormData(e.currentTarget);
    const leadData = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      website: formData.get('website'),
      budget: formData.get('budget'),
      goals: formData.get('goals'),
    };

    try {
      // 2. Send the data silently to your Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit form", error);
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen relative overflow-hidden pt-20">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Premium Value Proposition */}
          <div className="space-y-10 lg:sticky lg:top-32">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span>Free Growth Audit</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Let's build your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">revenue engine.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Fill out the form to request your free strategy session. We'll audit your current ad account, tracking setup, and landing pages to show you exactly where you're leaving money on the table.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8">What happens next?</h3>
              <ul className="space-y-8">
                <li className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white font-bold text-lg">1. Quick Discovery</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">We'll review your website and current ad presence within 24 hours.</p>
                  </div>
                </li>
                <li className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white font-bold text-lg">2. Strategy Call</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">A 30-minute consultation going over a custom predictive-growth plan.</p>
                  </div>
                </li>
                <li className="flex group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-white font-bold text-lg">3. Execute & Scale</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">If it's a fit, we deploy our AI infrastructure and start scaling your ROI.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-3 text-slate-500 text-sm">
              <ShieldCheck className="w-5 h-5 text-slate-400" />
              <span>Your data is strictly confidential. No spam, just actionable insights.</span>
            </div>
          </div>

          {/* Right Column: Clean White Form Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-16 h-full space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center mb-4 shadow-xl shadow-emerald-500/30">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Request Received!</h2>
                <p className="text-slate-600 text-lg max-w-sm leading-relaxed">
                  Thank you for reaching out. The GrowthGPT team is reviewing your details and will be in touch shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="mt-8 px-6 py-2 border-2 border-slate-200 text-slate-600 font-bold rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Claim Your Audit</h2>
                <p className="text-slate-500 mb-8">Fill out the details below so we can prepare.</p>
                
                {errorMessage && (
                  <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100 flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="block text-sm font-bold text-slate-700">First Name</label>
                      <input required type="text" id="first-name" name="first-name" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="block text-sm font-bold text-slate-700">Last Name</label>
                      <input required type="text" id="last-name" name="last-name" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700">Work Email</label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="block text-sm font-bold text-slate-700">Company Website</label>
                    <input required type="text" id="website" name="website" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900" placeholder="yourwebsite.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="block text-sm font-bold text-slate-700">Monthly Marketing Budget</label>
                    <div className="relative">
                      <select required id="budget" name="budget" defaultValue="" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-700 appearance-none">
                        <option value="" disabled>Select an option...</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="goals" className="block text-sm font-bold text-slate-700">What is your biggest growth challenge?</label>
                    <textarea required id="goals" name="goals" rows={4} className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 resize-none" placeholder="e.g., We are getting traffic but our cost-per-lead is too high..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full flex items-center justify-center py-4.5 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-70 disabled:cursor-not-allowed rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 mt-8"
                  >
                    <div className="py-1 flex items-center">
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Routing Request...</>
                      ) : (
                        <><Zap className="w-5 h-5 mr-2" /> Request Strategy Audit</>
                      )}
                    </div>
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}