import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const benefits = [
  "Indexed to the S&P 500 - captures market gains",
  "Floor protection - you never lose money in a downturn",
  "Tax-free retirement income via policy loans",
  "Death benefit for your family",
  "Living benefits - access funds if critically ill",
  "No contribution limits unlike a 401(k)",
];

export default function IULPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] px-6 py-16 text-white">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-[#f0c040] text-[#1a3a5c] text-xs font-bold px-4 py-1 rounded-full mb-4">WEALTH BUILDING</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Build Wealth While You Are Protected</h1>
          <p className="text-blue-200 text-lg leading-relaxed mb-6">Indexed Universal Life Insurance is one of the most powerful financial tools available to American families today. Grow tax-free retirement income with market-linked growth and zero downside risk.</p>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Why Consider an IUL?</h2>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <span className="text-[#c8a020] font-bold text-lg mt-0.5">&#10003;</span>
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#f4f7fa] rounded-xl p-6 text-center">
            <h3 className="font-bold text-[#1a3a5c] mb-2">Interested in learning more?</h3>
            <p className="text-sm text-gray-600 mb-4">Leave your info and a licensed agent will reach out to discuss if an IUL is right for you.</p>
            <a href="/quote" className="inline-block bg-[#c8a020] hover:bg-[#b8901a] text-white font-bold px-6 py-3 rounded-lg transition-colors">Request Info</a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}