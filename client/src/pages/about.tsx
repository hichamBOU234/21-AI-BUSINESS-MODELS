import { Section, SectionHeading } from "@/components/ui/section";
import { scrollToElement } from "@/lib/utils";
import { useEffect } from "react";

export default function About() {
  // Set page title
  useEffect(() => {
    document.title = "About the Book | 21 AI Business Models";
  }, []);

  const chapters = [
    "Faceless YouTube Channels with AI",
    "AI-Generated Audiobooks for KDP",
    "Instagram Growth & Monetization",
    "AI Content Websites",
    "Etsy Print-on-Demand with AI Art",
    "ChatGPT Consulting Services",
    "AI-Powered Affiliate Marketing",
    "Digital Product Creation with AI",
    "Podcast Creation & Monetization",
    "AI Video Editing Services",
    "TikTok Growth & Monetization",
    "AI Resume & Cover Letter Services",
    "Online Course Creation with AI",
    "Automated Niche Websites",
    "AI Email Marketing Services",
    "Facebook Group Monetization",
    "AI-Generated Art Sales",
    "Automated Webinar Funnels",
    "AI SEO Services",
    "LinkedIn Content Strategy",
    "AI Chatbot Creation & Sales"
  ];

  return (
    <div className="pt-24">
      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="About the Book"
            subtitle="A comprehensive guide to leveraging AI for building profitable online businesses in 2025"
            center
          />
          
          <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-navy-800 to-teal-600 p-4 rounded-lg shadow-xl">
                <div className="bg-white rounded shadow">
                  <div className="aspect-[3/4] bg-gray-200 rounded flex items-center justify-center">
                    <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex justify-center mb-2">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">234 reviews</p>
                <div className="mt-4">
                  <span className="text-gray-500 text-sm line-through">$67</span>
                  <span className="text-navy-800 text-2xl font-bold ml-2">$47</span>
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded ml-2">30% OFF</span>
                </div>
                <button 
                  onClick={() => scrollToElement('buy')}
                  className="btn-gradient text-white font-bold px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow mt-4"
                >
                  Get Your Copy Now
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-600 text-lg mb-6">
                <span className="font-semibold text-navy-800">'21 AI Business Models to Make Passive Income Online in 2025'</span> is your essential guide to navigating the AI-powered digital economy. This comprehensive resource is designed for entrepreneurs, freelancers, creators, and beginners who want to leverage artificial intelligence to create sustainable online income streams.
              </p>
              
              <p className="text-gray-600 text-lg mb-6">
                Written with clarity and practical insight, this book breaks down 21 distinct business models that are thriving in the current market, providing you with step-by-step implementation strategies for each one. Whether you're looking to create a faceless YouTube channel, publish AI-generated books, build automated websites, or sell AI-created digital products, this guide gives you the exact blueprint to follow.
              </p>
              
              <p className="text-gray-600 text-lg">
                What sets this book apart is its focus on implementation rather than theory. Each business model includes actionable steps, recommended AI tools, monetization strategies, and real-world case studies to inspire your journey.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="font-poppins font-semibold text-2xl text-navy-800 mb-6 text-center">Complete Table of Contents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {chapters.map((chapter, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <span className="flex-shrink-0 w-8 h-8 bg-navy-800 text-white rounded-full flex items-center justify-center mr-3">{index + 1}</span>
                  <span className="font-medium text-gray-700">{chapter}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl text-navy-800 mb-6 text-center">Who This Book Is For</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-teal-600 text-xl mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Aspiring Entrepreneurs</h4>
                  <p className="text-gray-600">Looking to start an online business without significant investment or technical skills</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-check-circle text-teal-600 text-xl mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Content Creators</h4>
                  <p className="text-gray-600">Seeking to scale their output and monetize their content more effectively</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-check-circle text-teal-600 text-xl mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">Freelancers & Digital Nomads</h4>
                  <p className="text-gray-600">Wanting to build passive income streams alongside their service-based business</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="fas fa-check-circle text-teal-600 text-xl mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium text-navy-800 mb-1">9-5 Employees</h4>
                  <p className="text-gray-600">Planning their exit strategy with a side hustle that could replace their full-time income</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
