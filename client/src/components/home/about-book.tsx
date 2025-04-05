import { Section } from "@/components/ui/section";
import { scrollToElement } from "@/lib/utils";
import bookCover from "@/assets/book-cover.png";
import whoIsItFor from "@/assets/2.png";
import whyNow from "@/assets/4.png";

const aboutChecklist = [
  "How to leverage ChatGPT, Canva, and Eleven Labs for content creation",
  "Step-by-step guides for each business model with exact implementation steps",
  "Monetization strategies to maximize revenue from each business",
  "Automation techniques to create truly passive income streams",
  "Real-world case studies of successful AI entrepreneurs"
];

const tableOfContents = [
  "Faceless YouTube Channels with AI",
  "AI-Generated Audiobooks for KDP",
  "Instagram Growth & Monetization",
  "AI Content Websites",
  "Etsy Print-on-Demand with AI Art"
];

const AboutBook = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">About the Book</h2>
          <p className="text-gray-300 text-lg mb-6">
            This comprehensive guide takes you through 21 different AI-powered business models that are revolutionizing the digital economy in 2025. Whether you're an entrepreneur looking for new opportunities, a creator seeking to expand your income streams, or a complete beginner eager to leverage AI, this book provides actionable strategies with step-by-step implementation plans.
          </p>
          <p className="text-gray-300 text-lg mb-8">
            From faceless YouTube channels and AI audiobooks to Instagram growth hacks and print-on-demand businesses, you'll discover multiple ways to generate passive income using the latest AI technologies.
          </p>
          
          <div className="space-y-4 mb-8">
            <h3 className="font-poppins font-semibold text-xl text-blue-400">What You'll Learn:</h3>
            <ul className="space-y-3 text-gray-300">
              {aboutChecklist.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-blue-400 mt-1 mr-3"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <a 
            href="#buy" 
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('buy');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-md shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all inline-block"
          >
            Get Your Copy Now
          </a>
        </div>
        
        <div>
          <div className="rounded-xl overflow-hidden bg-zinc-900 shadow-xl border border-zinc-800">
            <div className="relative w-full p-4 bg-black">
              <img 
                src={bookCover} 
                alt="21 AI Business Models Book Cover"
                className="w-full h-auto rounded shadow-md mx-auto max-w-xs"
              />
            </div>
            
            <div className="p-6 border-b border-zinc-800">
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">Table of Contents</h3>
              
              <div className="space-y-4">
                {tableOfContents.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">{index + 1}</span>
                    <span className="font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-500 text-sm mt-4">+ 16 more profitable AI business models...</p>
            </div>
            
            <div className="p-6 bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="ml-2 text-gray-300 font-medium">5.0</span>
                </div>
                <span className="text-gray-400 text-sm">234 reviews</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-500 text-sm line-through">$19.99</span>
                  <span className="text-blue-400 text-2xl font-bold ml-2">$8.99</span>
                </div>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">55% OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Who is this book for section */}
      <div className="mt-16">
        <div className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-zinc-800">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 border-r border-zinc-800">
              <img src={whoIsItFor} alt="Who is this book for?" className="w-full h-auto"/>
            </div>
            <div className="md:w-1/2 p-6">
              <img src={whyNow} alt="Why act now?" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutBook;
