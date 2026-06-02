import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function QuotePage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] px-6 py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Get Your Free Quote</h1>
        <p className="text-blue-200 text-center mb-8">No obligation. No spam. Just honest coverage options.</p>
        <QuoteForm />
      </section>
      <Footer />
    </main>
  );
}