import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import bookCover from "@/assets/book-cover.png";
import priceTag from "@/assets/1.png";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-black via-zinc-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <span className="inline-block bg-blue-600 bg-opacity-20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium">2025 EDITION</span>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              21 AI Business Models to Make Passive Income Online in 2025
            </h1>
            <p className="text-gray-300 text-lg">
              A Step-by-Step Guide to Leveraging AI for Digital Success — No Tech Skills Needed!
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#buy" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('buy');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-md shadow-lg hover:shadow-blue-900/50 hover:shadow-xl transition-all text-center inline-block"
              >
                Buy Now for $8.99
              </a>
              <a 
                href="#learn-more" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('about');
                }}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-medium px-8 py-3 rounded-md border border-zinc-700 transition-all text-center inline-block"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden bg-zinc-800">
                  <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden bg-zinc-800">
                  <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 overflow-hidden bg-zinc-800">
                  <svg className="h-full w-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <p className="ml-4 text-sm text-gray-300">
                <span className="font-semibold text-white">Join 10,000+ entrepreneurs</span> already using these strategies
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-zinc-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl relative z-10 mx-auto max-w-md border border-zinc-800">
              <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden aspect-[3/4] relative">
                <img 
                  src={bookCover} 
                  alt="21 AI Business Models Book Cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 transform translate-x-5 -translate-y-5 h-20 w-20">
                  <img
                    src={priceTag}
                    alt="$8.99 Price Tag"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
