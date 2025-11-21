export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  thumbnail: string; // public path
  readTime?: string;
  author?: string; // team member slug
};

export const posts: BlogPost[] = [
  {
    slug: "pentagon-ai-hacking",
    title: "The US And China Are Pouring Money Into AI Hacking. Where Does That Leave Europe?",
    excerpt:
      "ChatGPT and other versions of generative AI have taken most of the spotlight over the past few years. But in a less sexy corner of AI, huge shifts are happening right now with AI-driven hacking capabilities.",
    date: "2025-11-21",
    thumbnail: "/images/blog/ai-hacking-europe.png",
    readTime: "6 min read",
    author: "christoffer-christian-dreist",
  },
];

export default posts;
