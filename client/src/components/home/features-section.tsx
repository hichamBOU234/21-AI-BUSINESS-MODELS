import { Section, SectionHeading } from "@/components/ui/section";

const features = [
  {
    icon: "fas fa-robot",
    title: "No Technical Skills Required",
    description: "Our step-by-step guides make it easy for complete beginners to start using AI tools effectively.",
    color: "bg-blue-600 bg-opacity-10",
    textColor: "text-blue-400"
  },
  {
    icon: "fas fa-chart-line",
    title: "Proven Business Models",
    description: "All 21 business models have been tested and validated with real-world success stories and case studies.",
    color: "bg-indigo-600 bg-opacity-10",
    textColor: "text-indigo-400"
  },
  {
    icon: "fas fa-coins",
    title: "Multiple Revenue Streams",
    description: "Learn how to build diverse income sources from YouTube, KDP, Etsy, affiliate marketing, and more.",
    color: "bg-yellow-600 bg-opacity-10",
    textColor: "text-yellow-400"
  },
  {
    icon: "fas fa-tools",
    title: "Essential AI Tools Guide",
    description: "Get access to a curated list of the best AI tools for content creation, marketing, and automation.",
    color: "bg-purple-600 bg-opacity-10",
    textColor: "text-purple-400"
  },
  {
    icon: "fas fa-video",
    title: "Faceless Content Strategies",
    description: "Build profitable YouTube channels, podcasts, and social media accounts without showing your face.",
    color: "bg-red-600 bg-opacity-10",
    textColor: "text-red-400"
  },
  {
    icon: "fas fa-cogs",
    title: "Automation Techniques",
    description: "Learn powerful automation strategies to scale your business while reclaiming your time.",
    color: "bg-green-600 bg-opacity-10",
    textColor: "text-green-400"
  }
];

const FeaturesSection = () => {
  return (
    <Section id="features">
      <SectionHeading
        title="Unlock AI-Powered Income Streams"
        subtitle="Discover how to leverage cutting-edge AI tools to create profitable digital businesses that generate income while you sleep."
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl shadow-lg p-6 card-hover border border-zinc-800">
            <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
              <i className={`${feature.icon} ${feature.textColor} text-2xl`}></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;
