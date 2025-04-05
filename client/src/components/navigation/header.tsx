import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

const Header = () => {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events to apply shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleLinkClick = (path: string, hash?: string) => {
    setIsOpen(false);
    
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

  return (
    <header 
      id="header" 
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-black ${isScrolled ? 'shadow-md shadow-blue-900/20 border-b border-zinc-800' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" onClick={() => handleLinkClick('/')} className="flex items-center space-x-2">
            <span className="text-white font-poppins font-bold text-xl md:text-2xl">
              AI<span className="text-blue-500">Business</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={() => handleLinkClick('/')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => handleLinkClick('/', 'about')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              About the Book
            </a>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('/contact')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <a 
              href="#buy" 
              onClick={() => handleLinkClick('/', 'buy')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md shadow-lg hover:shadow-xl transition-all"
            >
              Buy Now
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-zinc-900 shadow-lg shadow-blue-900/10 absolute w-full border-t border-zinc-800 ${isOpen ? '' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 pb-4">
            <a 
              href="#" 
              onClick={() => handleLinkClick('/')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => handleLinkClick('/', 'about')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              About the Book
            </a>
            <a 
              href="#contact" 
              onClick={() => handleLinkClick('/contact')}
              className="font-medium text-gray-300 hover:text-blue-400 transition-colors py-2"
            >
              Contact
            </a>
            <a 
              href="#buy" 
              onClick={() => handleLinkClick('/', 'buy')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md shadow-lg text-center"
            >
              Buy Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
