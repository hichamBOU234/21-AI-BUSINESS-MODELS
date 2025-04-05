import { Section, SectionHeading } from "@/components/ui/section";
import { useLocation } from "wouter";

// Sample blog posts data
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
  }
];

const BlogSection = () => {
  const [_, navigate] = useLocation();

  return (
    <Section id="blog" bgColor="bg-white">
      <SectionHeading
        title="Latest AI Insights"
        subtitle="Free resources and tips to help you start your AI-powered business journey."
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <button 
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="text-teal-600 font-medium hover:underline"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button 
          onClick={() => navigate('/blog')}
          className="inline-block border-2 border-teal-600 text-teal-600 font-medium px-8 py-3 rounded-md hover:bg-teal-600 hover:text-white transition-colors"
        >
          View All Articles
        </button>
      </div>
    </Section>
  );
};

export default BlogSection;
