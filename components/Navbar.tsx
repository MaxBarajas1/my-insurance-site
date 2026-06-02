import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#1a3a5c] px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-base md:text-xl">Your Future <span className="text-[#f0c040]">Protection</span></Link>
        <div className="flex items-center gap-2 md:gap-5">
          <Link href="/" className="text-white hover:text-[#f0c040] transition-colors text-xs md:text-sm">Home</Link>
          <Link href="/iul" className="text-white hover:text-[#f0c040] transition-colors text-xs md:text-sm">IUL</Link>
          <Link href="/about" className="text-white hover:text-[#f0c040] transition-colors text-xs md:text-sm">About</Link>
          <a href="tel:9172703167" className="hidden md:block text-[#f0c040] font-semibold text-sm">Call: (917) 270-3167</a>
          <Link href="/quote" className="bg-[#c8a020] hover:bg-[#b8901a] text-white font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors">Free Quote</Link>
        </div>
      </div>
    </nav>
  );
}