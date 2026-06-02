const faqs = [
  { q: "Do I need a medical exam?", a: "It depends on the plan. Many of the carriers Cameron works with offer no-exam options where coverage can be based on a few health questions. Some plans may require an exam for higher coverage amounts." },
  { q: "How much does life insurance cost?", a: "Rates depend on your age, health, coverage amount, and plan type. Cameron will compare options from multiple carriers to find the most competitive rate for your situation." },
  { q: "Is my information kept private?", a: "Yes. Your information is only used to find coverage options for you. It is never sold to third parties." },
  { q: "Can I get coverage if I have health issues?", a: "In many cases, yes. Cameron works with carriers that offer guaranteed issue and simplified issue plans designed for applicants with pre-existing conditions. Eligibility varies by carrier and plan." },
  { q: "What is the difference between term and whole life?", a: "Term life covers you for a set period (10-30 years) and is typically more affordable. Whole life covers you for your entire lifetime and can build cash value. Cameron can help you determine which type fits your needs." },
  { q: "Which insurance companies do you work with?", a: "As an independent broker, Cameron works with multiple top-rated carriers including Transamerica, Mutual of Omaha, Americo, Aetna, American General, Chubb, Ethos, TruStage, and others." },
];

export default function FAQ() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-3">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 mb-10">Common questions about working with Cameron</p>
        <div className="space-y-0">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-[#dce8f0] py-5">
              <h3 className="font-bold text-[#1a3a5c] mb-2">{f.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}