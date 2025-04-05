import { scrollToElement, subscribeToNewsletter } from "@/lib/utils";
import { useState } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [location, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNavigate = (path: string, hash?: string) => {
    if (path === location) {
      // If we're already on the correct page, just scroll to the section
      if (hash) {
        scrollToElement(hash);
      }
    } else {
      // Otherwise navigate to the page
      navigate(path);
      
      // After navigation, scroll to the section if needed
      if (hash) {
        setTimeout(() => {
          scrollToElement(hash);
        }, 100);
      }
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const success = await subscribeToNewsletter(email);
      
      if (success) {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: "Please try again later or contact support.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-zinc-800">
          <div>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('/');
              }}
              className="flex items-center space-x-2 mb-6"
            >
              <span className="text-white font-poppins font-bold text-xl">
                AI<span className="text-blue-500">Business</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Unlock the power of AI to build profitable passive income streams online. No tech skills required.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('/');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('/', 'about');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About the Book
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('/', 'testimonials');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('/', 'faq');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate('/contact');
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/refund" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest AI business tips and updates delivered to your inbox.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all w-full disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AI Business Models. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
