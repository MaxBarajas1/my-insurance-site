const steps = [
  { num: "1", title: "Answer a Few Questions", desc: "Takes less than 2 minutes. Basic info to help find plans that fit your needs." },
  { num: "2", title: "We Shop For You", desc: "As an independent brokerage, we compare options from multiple top-rated carriers to find your best fit." },
  { num: "3", title: "Choose Your Plan", desc: "Review your options and pick the coverage that works for your budget. No pressure, no obligation." },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-3">How It Works</h2>
      <p className="text-center text-gray-500 mb-10">Getting a quote has never been simpler</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="text-center bg-[#f4f7fa] rounded-xl border-t-4 border-[#1a3a5c] p-6">
            <div className="w-12 h-12 bg-[#1a3a5c] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.num}</div>
            <h3 className="font-bold text-[#1a3a5c] mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}