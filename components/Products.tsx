const products = [
  { title: "Term Life", desc: "Affordable protection for 10-30 years. Best for income replacement and mortgage coverage.", icon: "📅" },
  { title: "Whole Life", desc: "Lifetime coverage that builds cash value over time. Never expires as long as premiums are paid.", icon: "♾️" },
  { title: "Final Expense", desc: "Covers funeral and end-of-life costs so your loved ones are not burdened financially.", icon: "❤️" },
];

export default function Products() {
  return (
    <section className="bg-[#f4f7fa] px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-3">Insurance Products We Offer</h2>
        <p className="text-center text-gray-500 mb-10">We work with all ages and health backgrounds</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.title} className="bg-white border border-[#d0dff0] rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#1a3a5c] mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
          <div className="bg-white border-2 border-[#1a3a5c] rounded-xl p-6 text-center">
            <span className="inline-block bg-[#1a3a5c] text-[#f0c040] text-xs font-bold px-3 py-1 rounded-full mb-3">COMING SOON</span>
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-[#1a3a5c] mb-2">IUL Specialist</h3>
            <p className="text-sm text-gray-600">Indexed Universal Life - grow tax-free wealth while keeping your family protected.</p>
          </div>
        </div>
      </div>
    </section>
  );
}