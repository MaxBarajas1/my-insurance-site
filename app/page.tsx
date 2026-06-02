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
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">Affordable Life Insurance <span className="text-[#f0c040]">Your Family Can Count On</span></h1>
            <p className="text-lg text-blue-200 mb-6">See what coverage options are available to you. Many plans require no medical exam.</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> No-Exam Options Available</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Multiple Top-Rated Carriers</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Independent Broker</div>
              <div className="flex items-center gap-2"><span className="text-[#f0c040] font-bold">&#10003;</span> Free No-Obligation Quote</div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <HowItWorks />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
}