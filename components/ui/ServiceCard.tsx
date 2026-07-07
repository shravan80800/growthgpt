import React from 'react';
import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({ 
  title, 
  description, 
  href, 
  icon: Icon
}: ServiceCardProps) {
  return (
    <Link href={href} className="block group h-full">
      <div className="h-full bg-white border border-slate-200 p-8 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 flex flex-col">
        
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-blue-600 mt-auto">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
}