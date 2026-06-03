import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="px-6 py-16 bg-gradient-to-br from-[#1a3a5c] via-[#1e4a72] to-[#15527a] text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Terms and Conditions</h1>
        <p className="text-blue-200 mt-2">Last updated: June 2, 2026</p>
      </section>
      <section className="px-6 py-12 max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Agreement to Terms</h2>
        <p className="mb-6">By accessing and using yourfutureprotection.com, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Nature of Service</h2>
        <p className="mb-6">Your Future Protection is an independent life insurance brokerage that connects individuals with licensed insurance agents. We are not an insurance company and do not underwrite, issue, or bind any insurance policies. All insurance products and services are provided exclusively by the insurance carriers. Descriptions of coverage on this website are for informational purposes only and are subject to the terms and conditions of the actual insurance policy issued.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Not an Offer of Insurance</h2>
        <p className="mb-6">Nothing on this website constitutes an offer, solicitation, or agreement to provide insurance. Coverage availability, pricing, and eligibility vary by state, carrier, and individual circumstances. Submitting a quote request does not guarantee coverage or any specific rate.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Consent to Contact</h2>
        <p className="mb-6">By submitting your information through our quote form, you provide your prior express written consent to be contacted by Your Future Protection and its affiliated licensed insurance agents by phone, email, or text message regarding life insurance options. This contact may include the use of automated telephone dialing systems, prerecorded or artificial voice messages, or SMS text messages, delivered to the phone number and email address you provided. You understand and agree that your consent is not a condition of purchasing any insurance product or service. You may revoke your consent at any time by replying STOP to any text message, by emailing yfpsupport@gmail.com, or by calling (917) 270-3167. Opt-out requests will be honored within 10 business days.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Accuracy of Information</h2>
        <p className="mb-6">While we strive to provide accurate and up-to-date information, we make no warranties or representations about the completeness, accuracy, or reliability of any content on this website. Insurance products, rates, and availability are subject to change without notice.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">No Professional Advice</h2>
        <p className="mb-6">The content on this website is for general informational purposes only and should not be considered financial, legal, tax, or insurance advice. You should consult with a qualified professional before making any insurance or financial decisions.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Limitation of Liability</h2>
        <p className="mb-6">Your Future Protection, its agents, employees, and affiliates shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Third-Party Links</h2>
        <p className="mb-6">This website may contain links to third-party websites. We have no control over the content or practices of these sites and assume no responsibility for their privacy policies or terms of use.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Intellectual Property</h2>
        <p className="mb-6">All content on this website, including text, graphics, logos, and design, is the property of Your Future Protection and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content without prior written permission.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Governing Law</h2>
        <p className="mb-6">These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of the State of Illinois.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Changes to Terms</h2>
        <p className="mb-6">We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>

        <h2 className="text-lg font-bold text-[#1a3a5c] mb-3">Contact Us</h2>
        <p className="mb-2">If you have questions about these Terms, contact us at:</p>
        <p>Email: yfpsupport@gmail.com</p>
        <p>Phone: (917) 270-3167</p>
      </section>
      <Footer />
    </main>
  );
}