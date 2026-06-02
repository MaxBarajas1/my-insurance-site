import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-24 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">&#10003;</div>
          <h1 className="text-3xl font-bold text-[#1a3a5c] mb-3">Thank You!</h1>
          <p className="text-gray-600 mb-2">We received your information successfully.</p>
          <p className="text-gray-600 mb-8">A licensed agent will contact you shortly with your personalized quote options.</p>
          <a href="/" className="inline-block bg-[#1a3a5c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#15304d] transition-colors">Back to Home</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}