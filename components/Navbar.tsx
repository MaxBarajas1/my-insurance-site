"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#1a3a5c] px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">Your Future <span className="text-[#f0c040]">Protection</span></Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white hover:text-[#f0c040] transition-colors text-sm">Home</Link>
          <Link href="/iul" className="text-white hover:text-[#f0c040] transition-colors text-sm">IUL</Link>
          <Link href="/about" className="text-white hover:text-[#f0c040] transition-colors text-sm">About</Link>
          <a href="tel:8154198954" className="text-[#f0c040] font-semibold text-sm">Call: (815) 419-8954</a>
          <Link href="/quote" className="bg-[#c8a020] hover:bg-[#b8901a] text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors">Free Quote</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="Menu">{open ? "\u2715" : "\u2630"}</button>
      </div>
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 pb-2">
          <Link href="/" onClick={() => setOpen(false)} className="text-white hover:text-[#f0c040] transition-colors">Home</Link>
          <Link href="/iul" onClick={() => setOpen(false)} className="text-white hover:text-[#f0c040] transition-colors">IUL</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-white hover:text-[#f0c040] transition-colors">About</Link>
          <a href="tel:8154198954" className="text-[#f0c040] font-semibold">Call: (815) 419-8954</a>
          <Link href="/quote" onClick={() => setOpen(false)} className="bg-[#c8a020] text-white font-bold text-center py-3 rounded-lg">Free Quote</Link>
        </div>
      )}
    </nav>
  );
}