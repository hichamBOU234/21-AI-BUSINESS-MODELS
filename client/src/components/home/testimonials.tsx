import { Section, SectionHeading } from "@/components/ui/section";
import { useEffect, useState } from "react";
import type { Testimonial } from "@shared/schema";

// Fallback testimonials in case API fails
const fallbackTestimonials: Testimonial[] = [
  {
    id: 1,
    content: "This book helped me earn $5K/month in 90 days! The faceless YouTube strategy was a game-changer for me. I now have three channels generating passive income.",
    name: "Jake Roberts",
    position: "YouTuber",
    rating: 5,
    isApproved: true,
    createdAt: new Date()
  },
  {
    id: 2,
    content: "I was skeptical at first, but after implementing the Etsy AI art strategy, I'm now making consistent sales every day. This book paid for itself within the first week!",
    name: "Sarah Johnson",
    position: "Etsy Seller",
    rating: 5,
    isApproved: true,
    createdAt: new Date()
  },
  {
    id: 3,
    content: "The automation techniques alone are worth 10x the price of this book. I've cut my content creation time by 80% while doubling my output. My blog now earns $3K/month.",
    name: "Michael Chen",
    position: "Blogger",
    rating: 5,
    isApproved: true,
    createdAt: new Date()
  }
];

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/testimonials");
        const data = await response.json();
        
        if (response.ok && data.success) {
          setTestimonials(data.testimonials);
        } else {
          console.log("API error:", data);
          setTestimonials(fallbackTestimonials);
          setError("Failed to load testimonials from server. Showing sample testimonials instead.");
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials(fallbackTestimonials);
        setError("Failed to load testimonials from server. Showing sample testimonials instead.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <Section id="testimonials">
        <SectionHeading
          title="What Readers Are Saying"
          subtitle="Real success stories from entrepreneurs who have implemented these AI business models."
          center
        />
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="testimonials">
      <SectionHeading
        title="What Readers Are Saying"
        subtitle="Real success stories from entrepreneurs who have implemented these AI business models."
        center
      />
      
      {error && (
        <div className="text-orange-500 text-center mb-6">
          <p>{error}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-zinc-900 rounded-xl shadow-lg p-6 card-hover border border-zinc-800">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-6 italic">
              "{testimonial.content}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full mr-4 bg-zinc-800 flex items-center justify-center">
                <svg className="h-7 w-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-white">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.position || "Reader"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;
