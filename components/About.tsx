export default function About() {
  return (
    <section className="px-6 py-16 border-b border-[#dce8f0]">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="w-24 h-24 bg-[#c5d5e8] rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
          <span className="text-4xl text-[#1a3a5c]">CP</span>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-2 text-center md:text-left">About Cameron Pelke</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">Cameron Pelke is a licensed independent life insurance broker dedicated to helping families find the right coverage at the right price. As an independent broker, he works for YOU - not any single insurance company.</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">That means unbiased advice and access to top-rated carriers including Transamerica, Mutual of Omaha, Americo, Aetna, American General, Chubb, and more - so you always get the best rate available.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Licensed Life and Health Agent</span>
            <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">NPN: 21747874</span>
            <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Independent Broker</span>
            <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">IUL Specialist (In Training)</span>
          </div>
        </div>
      </div>
    </section>
  );
}