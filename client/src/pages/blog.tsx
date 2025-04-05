import { Section, SectionHeading } from "@/components/ui/section";
import { useEffect } from "react";

// Sample blog posts data with more posts
const blogPosts = [
  {
    id: 1,
    title: "Top 5 AI Tools for Beginners in 2025",
    excerpt: "Discover the most user-friendly AI tools that can help you get started with content creation, automation, and digital product development without any technical background.",
    category: "Beginners",
    categoryColor: "bg-teal-600 bg-opacity-10 text-teal-600",
    date: "April 15, 2025",
    slug: "top-5-ai-tools-beginners-2025"
  },
  {
    id: 2,
    title: "How to Start a Faceless YouTube Channel",
    excerpt: "Learn how to create engaging YouTube content without showing your face, using AI tools for script writing, voiceovers, and video editing to build a profitable channel.",
    category: "YouTube",
    categoryColor: "bg-electric-600 bg-opacity-10 text-electric-600",
    date: "April 8, 2025",
    slug: "start-faceless-youtube-channel"
  },
  {
    id: 3,
    title: "Passive Income with AI-Generated Books",
    excerpt: "Explore how to use AI to create and publish books on Amazon KDP, from market research and content generation to cover design and marketing strategies.",
    category: "KDP",
    categoryColor: "bg-gold-500 bg-opacity-10 text-gold-500",
    date: "April 1, 2025",
    slug: "passive-income-ai-generated-books"
  },
  {
    id: 4,
    title: "AI Art Generators for Etsy Sellers: A Complete Guide",
    excerpt: "Learn how to use AI art generators to create stunning designs for your Etsy shop, including legal considerations, model selection, and optimization techniques.",
    category: "Etsy",
    categoryColor: "bg-pink-600 bg-opacity-10 text-pink-600",
    date: "March 25, 2025",
    slug: "ai-art-generators-etsy-sellers"
  },
  {
    id: 5,
    title: "Scaling Your AI Content Website: From $0 to $5K/Month",
    excerpt: "A comprehensive guide to building and scaling an AI-powered content website that generates passive income through affiliate marketing and display advertising.",
    category: "Websites",
    categoryColor: "bg-purple-600 bg-opacity-10 text-purple-600",
    date: "March 18, 2025",
    slug: "scaling-ai-content-website"
  },
  {
    id: 6,
    title: "Instagram Growth Hacks Using AI in 2025",
    excerpt: "Discover how to use AI tools to grow your Instagram following, create engaging content, and monetize your audience with minimal time investment.",
    category: "Social Media",
    categoryColor: "bg-blue-600 bg-opacity-10 text-blue-600",
    date: "March 11, 2025",
    slug: "instagram-growth-hacks-ai-2025"
  }
];

export default function Blog() {
  // Set page title
  useEffect(() => {
    document.title = "Blog | 21 AI Business Models";
  }, []);

  return (
    <div className="pt-24">
      <Section bgColor="bg-white">
        <SectionHeading
          title="AI Business Blog"
          subtitle="Discover the latest tips, strategies, and insights for building AI-powered income streams in 2025."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                {/* Placeholder for blog image */}
                <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className={`${post.categoryColor} text-xs font-medium px-3 py-1 rounded-full`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-navy-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href={`/blog/${post.slug}`} className="text-teal-600 font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Email signup section for blog visitors */}
      <Section bgColor="bg-navy-800 text-white" paddingY="small">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-2xl lg:text-3xl mb-4">Want More AI Business Insights?</h2>
          <p className="text-gray-300 mb-6">
            Join our newsletter for exclusive tips and strategies not shared on the blog.
          </p>
          
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800" 
                required
              />
              <button type="submit" className="btn-gradient text-white font-bold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
}
