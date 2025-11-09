export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  thumbnail: string; // public path
};

export const posts: BlogPost[] = [
  {
    slug: "safe-sandbox-threat-hunting",
    title: "Safe Sandbox Threat Hunting",
    excerpt:
      "[[Post excerpt – a short summary introducing the safe sandbox approach for enterprise threat hunting.]]",
    date: "2025-03-01",
    thumbnail: "/images/blog/safe-sandbox-thumb.webp",
  },
];

export default posts;
