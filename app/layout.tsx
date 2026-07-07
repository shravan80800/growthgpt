import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Zap } from "lucide-react";
import Navbar from "./navbar"; // <-- Importing your interactive navbar

const inter = Inter({ subsets: ["latin"] });

// Upgraded SEO Metadata for the new Celeris brand
export const metadata: Metadata = {
  title: "Celeris | Elite AI Growth Infrastructure",
  description: "Stop paying for clicks. Pay for clients. We deploy server-side tracking, high-velocity landing pages, and AI sales agents to scale your revenue.",
  keywords: ["AI Growth Agency", "Server-Side Tracking", "Next.js Landing Pages", "B2B Lead Generation", "Performance Marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 selection:bg-blue-500/30`}>
        
        {/* Global Navigation */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Upgraded Global Footer */}
        <footer className="bg-[#0B0F19] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
          {/* Subtle footer glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
              
              {/* Brand Column (Takes up more space) */}
              <div className="col-span-1 md:col-span-6 lg:col-span-4">
                <Link href="/" className="flex items-center space-x-2 mb-6 group w-fit">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-2xl font-extrabold text-white tracking-tight">
                    Celeris<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">.</span>
                  </span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
                  Stop wasting ad spend. We build predictive, AI-powered growth engines that convert traffic into booked appointments on autopilot.
                </p>
                <div className="flex space-x-5 text-slate-500">
                  <a href="#" className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links Column */}
              <div className="col-span-1 md:col-span-3 lg:col-span-2 lg:col-start-7">
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Infrastructure</h4>
                <ul className="space-y-4">
                  <li><Link href="/services/tracking-infrastructure" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Server-Side Tracking</Link></li>
                  <li><Link href="/services/lead-routing" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">AI Lead Agents</Link></li>
                  <li><Link href="/services/landing-pages" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Edge Architecture</Link></li>
                </ul>
              </div>

              {/* Company Column */}
              <div className="col-span-1 md:col-span-3 lg:col-span-2">
                <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Home</Link></li>
                  <li><Link href="/services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Our Approach</Link></li>
                  <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Strategy Audit</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Celeris. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}