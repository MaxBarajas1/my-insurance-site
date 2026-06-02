"use client";

import { useState } from "react";

const steps = [
  { title: "What best describes you?", subtitle: "This helps us find the right plans for your situation", field: "profile", type: "select", options: ["Truck Driver / CDL", "Veteran / Military", "Homeowner (Mortgage Protection)", "Senior (60+)", "Family Provider", "Other"] },
  { title: "Check plans in your area", subtitle: "Enter your zipcode to see what you may qualify for", field: "zipcode", type: "text", placeholder: "Enter your 5-digit zipcode" },
  { title: "What are you looking for?", subtitle: "Select what matters most to you", field: "interest", type: "select", options: ["Mortgage Protection", "Life Insurance (Whole Life)", "Final Expense / Burial Coverage", "IUL - Tax-Free Cash Growth", "Not Sure - Help Me Decide"] },
  { title: "What is your date of birth?", subtitle: "This helps us find age-appropriate plans", field: "dob", type: "date", placeholder: "" },
  { title: "What is your gender?", subtitle: "Rates may vary based on gender", field: "gender", type: "select", options: ["Male", "Female"] },
  { title: "Do you currently use tobacco?", subtitle: "Used in the last 12 months", field: "tobacco", type: "select", options: ["No", "Yes"] },
  { title: "What is your health status?", subtitle: "A general estimate is fine", field: "health", type: "select", options: ["Excellent", "Good", "Fair", "Poor"] },
  { title: "How much coverage do you need?", subtitle: "Choose an estimated amount", field: "coverage", type: "select", options: ["$25,000", "$50,000", "$100,000", "$250,000", "$500,000", "$1,000,000+"] },
  { title: "What is your full name?", subtitle: "So we know who to prepare the quote for", field: "name", type: "text", placeholder: "Full name" },
  { title: "What is your phone number?", subtitle: "A licensed agent will call you with your options", field: "phone", type: "tel", placeholder: "(555) 000-0000" },
  { title: "What is your email?", subtitle: "We will also send your quote details by email", field: "email", type: "email", placeholder: "you@email.com" },
];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const setValue = (val: string) => {
    setFormData({ ...formData, [current.field]: val });
  };

  const canContinue = formData[current.field] && formData[current.field].trim() !== "";

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-10 max-w-xl mx-auto text-center shadow-lg">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">&#10003;</div>
        <h2 className="text-2xl font-bold text-[#1a3a5c] mb-3">You may qualify!</h2>
        <p className="text-gray-600 mb-2">A licensed agent will review your info and reach out shortly with personalized options.</p>
        <p className="text-sm text-gray-400">Typical response time: within 24 hours</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 max-w-xl mx-auto shadow-lg">
      <div className="flex items-center gap-3 mb-1">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-[#c8a020] rounded-full transition-all duration-300" style={{ width: progress + "%" }}></div>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap">Step {step + 1} of {steps.length}</span>
      </div>
      <p className="text-xs text-gray-400 text-center mt-3 mb-6">Join hundreds of families who have checked their eligibility</p>
      <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-1">{current.title}</h2>
      <p className="text-sm text-gray-500 mb-6">{current.subtitle}</p>

      {current.type === "select" && current.options ? (
        <div className="flex flex-col gap-3 mb-6">
          {current.options.map((opt) => (
            <button key={opt} onClick={() => setValue(opt)} className={"w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors " + (formData[current.field] === opt ? "border-[#1a3a5c] bg-[#e8f0f8] text-[#1a3a5c]" : "border-[#c5d5e8] bg-[#f9fbfd] text-gray-700 hover:border-[#1a3a5c]")}>{opt}</button>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{current.field.charAt(0).toUpperCase() + current.field.slice(1)}</label>
          <input type={current.type} placeholder={current.placeholder} value={formData[current.field] || ""} onChange={(e) => setValue(e.target.value)} className="w-full border border-[#c5d5e8] rounded-lg px-4 py-3 text-base bg-[#f9fbfd] focus:outline-none focus:border-[#1a3a5c]" />
        </div>
      )}

      <div className="flex gap-3">
        {step > 0 && (
          <button onClick={handleBack} className="px-6 py-3 rounded-lg border border-[#c5d5e8] text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors">Back</button>
        )}
        <button onClick={handleNext} disabled={!canContinue} className={"flex-1 py-3 rounded-lg font-bold text-white text-base transition-colors " + (canContinue ? "bg-[#1a3a5c] hover:bg-[#15304d]" : "bg-gray-300 cursor-not-allowed")}>
          {step === steps.length - 1 ? "See My Options" : "Continue"}
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 mt-4">By submitting, you agree to be contacted by a licensed insurance agent regarding life insurance options.</p>
    </div>
  );
}