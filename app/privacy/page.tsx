import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-16 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="text-blue-200 mt-2">Last updated: June 2, 2026</p>
      </section>
      <section className="px-6 py-12 max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Who We Are</h2>
        <p className="mb-6">Your Future Protection is an independent life insurance brokerage. This website, yourfutureprotection.com, is operated for the purpose of connecting individuals with licensed insurance agents who can assist with life insurance coverage options.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Information We Collect</h2>
        <p className="mb-2">When you use our quote form, we collect the following information:</p>
        <p className="mb-6">Name, phone number, email address, date of birth, gender, zipcode, tobacco use, general health status, coverage interests, desired coverage amount, and any additional details you provide such as mortgage balance or IUL contribution preferences. We do not collect Social Security numbers, financial account numbers, or payment information through this website.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">How We Use Your Information</h2>
        <p className="mb-2">Your information is used solely for the following purposes:</p>
        <p className="mb-6">To connect you with a licensed insurance agent who can provide quotes and coverage options tailored to your needs. To contact you by phone, email, or text regarding your quote request. To improve our services and website experience. We do not sell, rent, or share your personal information with third parties for marketing purposes unrelated to your insurance inquiry.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Who Receives Your Information</h2>
        <p className="mb-6">Your information is shared only with licensed insurance agents affiliated with Your Future Protection who will assist you with your coverage options. We may also use third-party service providers (such as email delivery services) to facilitate communication. These providers are bound by their own privacy policies and do not use your data for independent purposes.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Data Security</h2>
        <p className="mb-6">We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. Our website uses SSL encryption to protect data transmitted through our forms. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Cookies and Tracking</h2>
        <p className="mb-6">This website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can disable cookies through your browser settings at any time.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Your Rights</h2>
        <p className="mb-6">You may request access to, correction of, or deletion of your personal information at any time by contacting us at yfpsupport@gmail.com. If you no longer wish to be contacted regarding insurance options, you may opt out by replying to any communication or contacting us directly.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Children</h2>
        <p className="mb-6">This website is not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Changes to This Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Contact Us</h2>
        <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
        <p>Email: yfpsupport@gmail.com</p>
        <p>Phone: (917) 270-3167</p>
      </section>
      <Footer />
    </main>
  );
}