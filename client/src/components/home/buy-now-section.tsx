import { Section } from "@/components/ui/section";
import bookCover from "@/assets/book-cover.png";
import priceTag from "@/assets/1.png";

const BuyNowSection = () => {
  const handleBuyNow = () => {
    // Link to Gumroad product page
    window.open("https://chimoshop.gumroad.com/l/AIbusinessmodels", "_blank");
  };

  const benefits = [
    "Instant digital delivery",
    "Free AI Tools Checklist ($27 value)",
    "30-day money-back guarantee",
    "Lifetime updates"
  ];

  return (
    <Section id="buy" bgColor="bg-gradient-to-br from-black via-zinc-900 to-blue-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-zinc-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 sm:p-6 shadow-2xl mx-auto max-w-md border border-zinc-800">
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
        </div>
        
        <div>
          <span className="inline-block bg-blue-600 bg-opacity-20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium mb-6">LIMITED TIME OFFER</span>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-6">Get Your Copy Today</h2>
          <p className="text-gray-300 text-lg mb-6">
            Start building your AI-powered passive income streams with our comprehensive guide. Unlock 21 proven business models with step-by-step implementation plans.
          </p>
          
          <div className="bg-zinc-900 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 mb-8 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-gray-400 text-lg line-through mr-2">$19.99</span>
                <span className="text-white text-3xl font-bold">$8.99</span>
              </div>
              <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">SAVE 55%</span>
            </div>
            
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={handleBuyNow}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full py-4 rounded-md shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all text-center block"
            >
              Buy Now for $8.99
            </button>
            
            <div className="flex items-center justify-center mt-4">
              {/* Payment method logos */}
              <div className="h-6 mx-2 opacity-70 text-white">
                <i className="fab fa-cc-stripe text-2xl"></i>
              </div>
              <div className="h-5 mx-2 opacity-70 text-white">
                <i className="fab fa-paypal text-2xl"></i>
              </div>
              <div className="h-4 mx-2 opacity-70 text-white">
                <i className="fab fa-cc-visa text-2xl"></i>
              </div>
              <div className="h-4 mx-2 opacity-70 text-white">
                <i className="fab fa-cc-mastercard text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BuyNowSection;
