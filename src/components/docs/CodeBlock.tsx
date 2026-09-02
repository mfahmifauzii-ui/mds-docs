"use client";
import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg bg-[#0d1520] p-4 text-[13px] leading-6 text-[#d7e2ee]">
        <code className="font-mono">{code}</code>
      </pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute right-2 top-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-white/70 hover:bg-white/10"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
