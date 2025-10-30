import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What are the best travel destinations for summer?",
    answer:
      "Popular summer destinations include Bali, Greece, Italy, and Japan. Each offers unique cultural experiences, beautiful beaches, and amazing cuisine perfect for summer vacations.",
  },
  {
    question: "Which destinations are best for budget travelers?",
    answer:
      "Thailand, Vietnam, Portugal, and Mexico offer excellent value for money with affordable accommodation, food, and activities while providing rich cultural experiences.",
  },
  {
    question: "What are the top romantic destinations for couples?",
    answer:
      "Paris, Santorini, Maldives, and Venice are renowned for their romantic ambiance, stunning scenery, and intimate experiences perfect for couples.",
  },
  {
    question: "Which destinations are family-friendly?",
    answer:
      "Orlando (for theme parks), Costa Rica (for nature and adventure), Singapore, and Canada are excellent choices for family vacations with activities for all ages.",
  },
  {
    question: "What are the must-visit destinations for adventure seekers?",
    answer:
      "New Zealand for extreme sports, Peru for hiking Machu Picchu, Norway for fjord exploration, and South Africa for safari adventures offer thrilling experiences.",
  },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8 border border-blue-100">
        <div className="flex items-center mb-8">
          <HelpCircle className="text-blue-600 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-blue-800">
            Travel Help & FAQs
          </h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-200 hover:border-blue-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between w-full text-left font-semibold text-blue-800 hover:text-blue-900">
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600" size={20} />
                ) : (
                  <ChevronDown className="text-blue-500" size={20} />
                )}
              </button>

              {openIndex === index && (
                <p className="mt-4 text-blue-700 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
