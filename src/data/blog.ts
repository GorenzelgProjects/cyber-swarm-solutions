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
    slug: "safe-sandbox-threat-hunting",
    title: "Safe Sandbox Threat Hunting",
    excerpt:
      "We rehearse attacks in a sandbox that mirrors production—never on live systems—and ship evidence, impact and a practical fix for a human to approve.",
    date: "2025-03-01",
    thumbnail: "/images/blog/safe-sandbox-thumb.webp",
    readTime: "4 min read",
    author: "mikkel-romvig-grongaard",
  },
];

export default posts;
