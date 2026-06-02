export default function Testimonials() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-3">What Families Are Saying</h2>
        <p className="text-center text-gray-500 mb-10">Real people, real peace of mind</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-[#f4f7fa] border border-dashed border-[#c5d5e8] rounded-xl p-6 text-center flex flex-col items-center justify-center min-h-[180px]">
              <div className="text-[#c5d5e8] text-3xl mb-3">★★★★★</div>
              <p className="text-sm text-gray-400 italic">Client testimonial coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}