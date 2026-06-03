import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#c8a020] px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Protect Your Family?</h2>
        <p className="text-[#fff3d0] mb-6">Get your free, no-obligation quote today. Takes less than 2 minutes.</p>
        <a href="/quote" className="inline-block bg-[#1a3a5c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#15304d] transition-colors">Get My Free Quote</a>
      </div>
      <div className="bg-[#0f2235] text-[#8ab0cc] px-6 py-8 text-center text-xs leading-relaxed">
        <p>Your Future Protection | Independent Life Insurance Brokerage</p>
        <p className="mt-1">Phone: (917) 270-3167 | Email: yfpsupport@gmail.com</p>
        <div className="mt-3 flex justify-center gap-4">
          <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="underline hover:text-white">Terms and Conditions</Link>
        </div>
        <p className="mt-3">This website is for informational purposes only. Products and availability may vary by state. This is not an offer of insurance. Your Future Protection is an independent brokerage and is not affiliated with any single insurance carrier.</p>
        <p className="mt-2">By submitting your information, you consent to be contacted by a licensed insurance agent regarding life insurance options.</p>
      </div>
    </footer>
  );
}