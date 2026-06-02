const faqs = [
  { q: "I am a truck driver. Can I get life insurance?", a: "Yes. We work with carriers that cover CDL drivers and other high-risk occupations. Rates vary based on your driving record and health, but affordable options are available." },
  { q: "Do you offer coverage for veterans?", a: "Absolutely. Whether you are active duty, retired, or a veteran, we can help you find plans that fit your needs. Some carriers offer preferred rates for military service members." },
  { q: "What is mortgage protection insurance?", a: "Mortgage protection is a life insurance policy designed to pay off your remaining mortgage balance if something happens to you. It ensures your family keeps the home no matter what." },
  { q: "What is an IUL and how does cash growth work?", a: "An Indexed Universal Life (IUL) policy is life insurance that also builds cash value tied to a market index like the S&P 500. Your cash grows tax-free when the market goes up, and a floor protects you from losses when it drops. You can access that cash for retirement, emergencies, or any reason through policy loans." },
  { q: "Do I need a medical exam?", a: "It depends on the plan. Many of the carriers we work with offer no-exam options where coverage can be based on a few health questions. Some plans may require an exam for higher coverage amounts." },
  { q: "How much does life insurance cost?", a: "Rates depend on your age, health, coverage amount, and plan type. A licensed agent will compare options from multiple carriers to find the most competitive rate for your situation." },
  { q: "Is my information kept private?", a: "Yes. Your information is only used to find coverage options for you. It is never sold to third parties." },
  { q: "Can I get coverage if I have health issues?", a: "In many cases, yes. We work with carriers that offer guaranteed issue and simplified issue plans designed for applicants with pre-existing conditions. Eligibility varies by carrier and plan." },
  { q: "Which insurance companies do you work with?", a: "As an independent brokerage, we work with multiple top-rated carriers including Transamerica, Mutual of Omaha, Americo, Aetna, American General, Chubb, Ethos, TruStage, and others." },
];

export default function FAQ() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a5c] text-center mb-3">Frequently Asked Questions</h2>
        <p className="text-center text-gray-500 mb-10">Common questions about our services</p>
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