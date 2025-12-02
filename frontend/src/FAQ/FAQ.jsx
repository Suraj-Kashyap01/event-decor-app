
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of event decorations do you offer?",
      answer: "We provide wedding centerpieces, lanterns, floral arrangements, and customized event décor to match your theme."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order directly through our website by selecting the products and adding them to the cart."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. Shipping charges and delivery time depend on your location."
    },
    {
      question: "Can I customize my order?",
      answer: "Absolutely! Contact us through our website or email to discuss custom designs and requirements."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery for unused products in original condition."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 ">
      <h2 className="text-2xl font-bold mb-4 text-center text-brandBlue">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b py-3 cursor-pointer" onClick={() => toggleFAQ(index)}>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
