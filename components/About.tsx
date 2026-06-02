export default function About() {
  return (
    <section className="px-6 py-16 border-b border-[#dce8f0]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-4">About Your Future Protection</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">Your Future Protection is an independent life insurance brokerage dedicated to helping families, truckers, veterans, and individuals find the right coverage at the right price.</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-6">Because we are independent, we work for YOU - not any single insurance company. That means unbiased advice and access to top-rated carriers including Transamerica, Mutual of Omaha, Americo, Aetna, American General, Chubb, and more.</p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Licensed Agents</span>
          <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Independent Brokerage</span>
          <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Mortgage Protection</span>
          <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">IUL Specialists</span>
          <span className="bg-[#e8f0f8] text-[#1a3a5c] text-xs font-semibold px-3 py-1 rounded-full">Veteran Friendly</span>
        </div>
      </div>
    </section>
  );
}