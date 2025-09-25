"use client";

import React, { useState, useRef } from 'react';
import { useTranslation } from "@/hooks/useTranslation"

export function FAQSection() {
  const { t } = useTranslation()
  
  const faqData = [
    {
      question: t.faq.q1,
      answer: t.faq.a1
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{t.faq.title}</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 sm:p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">
                    {item.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-gray-600 leading-7">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}