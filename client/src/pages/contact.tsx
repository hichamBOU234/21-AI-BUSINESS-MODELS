import { Section, SectionHeading } from "@/components/ui/section";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Contact() {
  // Set page title
  useEffect(() => {
    document.title = "Contact Us | 21 AI Business Models";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        toast({
          title: "Message failed to send",
          description: data.message || "Please try again later or contact us directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <Section bgColor="bg-white">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions about the book or need help implementing the strategies? We're here to help!"
          center
        />
        
        <div className="max-w-4xl mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-navy-800 text-white rounded-xl p-6 shadow-lg">
                <h3 className="font-poppins font-semibold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-teal-400"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm">Email</h4>
                      <p className="text-white font-medium">support@aibusinessmodels.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-teal-400"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm">Support Hours</h4>
                      <p className="text-white font-medium">Monday-Friday: 9am to 5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-share-alt text-teal-400"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 text-sm">Follow Us</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-white font-medium mb-3">Frequently Asked</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Refund requests</li>
                    <li>• Technical support</li>
                    <li>• Implementation help</li>
                    <li>• Business collaborations</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="font-poppins font-semibold text-xl text-navy-800 mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-teal-600 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-teal-700 transition-colors w-full disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
