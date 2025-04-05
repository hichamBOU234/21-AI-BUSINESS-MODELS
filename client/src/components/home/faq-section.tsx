import { Section, SectionHeading } from "@/components/ui/section";
import { useState } from "react";

const faqs = [
  {
    question: "Do I need technical skills to implement these business models?",
    answer: "No! The book is specifically designed for beginners with no technical background. All 21 business models are explained step-by-step with detailed instructions on using AI tools that don't require coding or technical expertise."
  },
  {
    question: "How much money can I expect to make?",
    answer: "Results vary based on effort, implementation, and market conditions. The book includes case studies of individuals earning anywhere from $500 to $10,000+ per month. Most beginners can expect to see their first income within 30-90 days of consistent implementation."
  },
  {
    question: "Is the eBook updated for 2025?",
    answer: "Yes! This is the latest 2025 edition, completely updated with the newest AI tools, platforms, and strategies. We regularly update the content to ensure you have access to the most current information and opportunities."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely! We offer a 60-day money-back guarantee. If you're not satisfied with the content or don't see results after implementing the strategies, simply email us for a full refund. No questions asked."
  },
  {
    question: "How do I receive the eBook after purchase?",
    answer: "After completing your purchase through Gumroad, you'll receive an email with download instructions. You can access the eBook in PDF, ePub, and Mobi formats compatible with all devices. The bonus materials will be included with your download."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the eBook and AI business models."
        center
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-zinc-800">
              <button 
                className="w-full flex justify-between items-center p-6 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium text-white text-left">{faq.question}</h3>
                <i className={`fas fa-chevron-down text-gray-400 transition-transform transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`px-6 pb-6 ${openIndex === index ? '' : 'hidden'}`}>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;
