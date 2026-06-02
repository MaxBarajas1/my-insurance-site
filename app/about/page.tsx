import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-16 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">About Your Future Protection</h1>
        <p className="text-blue-200 text-lg">Licensed. Independent. On your side.</p>
      </section>
      <About />
      <Footer />
    </main>
  );
}