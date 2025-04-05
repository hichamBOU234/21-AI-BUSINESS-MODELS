import { Section } from "@/components/ui/section";
import { useState } from "react";
import { subscribeToNewsletter, isValidEmail } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "Your AI Tools Checklist is on its way to your inbox!",
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: result.message || "Please try again later or contact support.",
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
    <Section id="signup" bgColor="bg-gradient-to-br from-black to-zinc-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-poppins font-bold text-3xl lg:text-4xl mb-6">Join 10,000+ Entrepreneurs</h2>
        <p className="text-gray-300 text-lg mb-8">
          Sign up to receive a free AI Tools Checklist and exclusive tips to accelerate your passive income journey.
        </p>
        
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-zinc-800 border border-zinc-700 text-white" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all whitespace-nowrap disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Checklist'}
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </div>
    </Section>
  );
};

export default EmailSignup;
