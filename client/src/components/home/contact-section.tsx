import { Section, SectionHeading } from "@/components/ui/section";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-6">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            Have questions about the book or need help implementing the strategies? We're here to help you succeed on your AI business journey.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600 bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-blue-400 text-xl"></i>
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Email</h3>
                <p className="text-gray-300">support@aibusinessmodels.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-indigo-600 bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-share-alt text-indigo-400 text-xl"></i>
              </div>
              <div>
                <h3 className="font-medium text-white mb-1">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8 border border-zinc-800">
            <h3 className="font-poppins font-semibold text-xl text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all w-full disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
