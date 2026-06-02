export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] px-6 py-16 md:py-24 text-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl mx-auto mb-4">
        Get Affordable Life Insurance{" "}
        <span className="text-[#f0c040]">You Can Trust</span>
      </h1>
      <p className="text-lg text-blue-200 max-w-md mx-auto mb-8">
        Protecting your family future is easier than you think. Get a free no-obligation quote in minutes.
      </p>
      <a href="/quote" className="inline-block bg-[#c8a020] hover:bg-[#b8901a] text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors">Get My Free Quote</a>
    </section>
  );
}