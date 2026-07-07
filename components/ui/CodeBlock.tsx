import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'bash', filename }: CodeBlockProps) {
  return (
    <div className="rounded-md overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        {filename && <div className="text-xs font-mono text-slate-400">{filename}</div>}
        <div className="text-xs font-mono text-slate-500 uppercase">{language}</div>
      </div>
      <div className="p-4 overflow-x-auto relative group">
        <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-cyan-400">
          <Copy className="w-4 h-4" />
        </button>
        <pre className="text-sm font-mono text-cyan-50">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}