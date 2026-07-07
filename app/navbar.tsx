"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Growth<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GPT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Infrastructure
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA & Mobile Hamburger Toggle */}
          <div className="flex items-center">
            <Link 
              href="/contact" 
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
            >
              Get Free Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none ml-4"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-[#0B0F19] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pt-4 pb-8 space-y-2">
          <Link 
            href="/" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            Infrastructure
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu} 
            className="block px-4 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
          >
            Contact
          </Link>
          <div className="pt-4">
            <Link 
              href="/contact" 
              onClick={closeMenu} 
              className="flex items-center justify-center w-full px-5 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}