import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Life Insurance That <span className="text-[#f0c040]">Works as Hard as You Do</span></h1>
            <p className="text-lg text-blue-200 mb-6">Whether you are a truck driver, veteran, homeowner, or planning for retirement - find coverage built for your life.</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> No-Exam Plans Available</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Multiple Top-Rated Carriers</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Independent Brokerage</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Free No-Obligation Quote</div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="bg-[#f4f7fa] px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-8">Coverage for Every Walk of Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl p-6 text-center border border-[#d0dff0]">
              <div className="text-3xl mb-3">&#128666;</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">Truckers and CDL Drivers</h3>
              <p className="text-sm text-gray-600">Life on the road is tough. Protect your family while you are out making a living. Plans designed for high-risk occupations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[#d0dff0]">
              <div className="text-3xl mb-3">&#127894;</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">Veterans and Military</h3>
              <p className="text-sm text-gray-600">You served your country. Now let us help protect your family with coverage that honors your service.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[#d0dff0]">
              <div className="text-3xl mb-3">&#127968;</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">Mortgage Protection</h3>
              <p className="text-sm text-gray-600">Make sure your family keeps the home if something happens to you. Coverage designed to pay off your mortgage.</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-[#d0dff0]">
              <div className="text-3xl mb-3">&#128106;</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">Families and Individuals</h3>
              <p className="text-sm text-gray-600">Whole life, final expense, or IUL - whatever stage of life you are in, there is a plan that fits your budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="inline-block bg-[#f0c040] text-[#1a3a5c] text-xs font-bold px-4 py-1 rounded-full mb-4">WEALTH BUILDING</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Just Protection - <span className="text-[#f0c040]">Build Tax-Free Wealth</span></h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">Indexed Universal Life (IUL) insurance lets you grow cash value tied to the market - with zero downside risk. Your money grows tax-free and you can access it for retirement, emergencies, or opportunities.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-[#f0c040] text-2xl font-bold mb-1">Tax-Free Growth</div>
              <p className="text-blue-200 text-sm">Cash value grows without being taxed. Access it through policy loans with no tax penalties.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-[#f0c040] text-2xl font-bold mb-1">Market Gains, No Losses</div>
              <p className="text-blue-200 text-sm">Indexed to the S&P 500. When the market goes up, you earn. When it drops, your floor protects you.</p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <div className="text-[#f0c040] text-2xl font-bold mb-1">Living Benefits</div>
              <p className="text-blue-200 text-sm">Access your cash value while you are alive for retirement income, emergencies, or funding a business.</p>
            </div>
          </div>
          <a href="/iul" className="inline-block bg-[#c8a020] hover:bg-[#b8901a] text-white font-bold px-6 py-3 rounded-lg transition-colors">Learn More About IUL</a>
        </div>
      </section>

      <HowItWorks />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}