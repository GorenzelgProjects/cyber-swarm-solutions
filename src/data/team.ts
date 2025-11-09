export type TeamMember = {
  name: string;
  firstName: string;
  title: string;
  slug: string;
  image: string;
  focus?: string;
  intro?: string;
  background?: string[];
  caresAbout?: string;
  degree?: string;
  track?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Mikkel Romvig Grøngaard",
    firstName: "Mikkel",
    title: "CEO & Co-founder",
    slug: "mikkel-romvig-grongaard",
    image: "/images/team/mikkel.png",
    email: "Mikkelromvig@colleaiq.dk",
    linkedin: "https://www.linkedin.com/in/mikkel-gr%C3%B8ng%C3%A5rd-a8b149286/",
    focus: "Leads ColleaiQ's direction and partnerships.",
    intro:
      "Engineer from DTU; currently pursuing an MSc in Human-Centered Artificial Intelligence. Focused on building explainable, human-in-the-loop security.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Human-Centered Artificial Intelligence",
    background: [
      "DTU — BSc Engineering",
      "MSc track — Human-Centered Artificial Intelligence",
      "ColleaiQ — Co-founder, CEO",
    ],
    caresAbout:
      "Proactive security that real analysts can trust. Clear evidence, calm workflows, and tools that get better with each iteration.",
  },
  {
    name: "Martin Christoffersen",
    firstName: "Martin",
    title: "CTO & Co-founder",
    slug: "martin-christoffersen",
    image: "/images/team/martin.png",
    email: "Martinchristoffersen@colleaiq.dk",
    linkedin: "https://www.linkedin.com/in/martin-christoffersen-b48142253/",
    focus: "Builds the technical foundation of our multi-agent platform.",
    intro:
      "Engineer from DTU; currently pursuing an MSc in Business Analytics. Focused on building explainable, human-in-the-loop security.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Business Analytics",
    background: ["DTU — BSc Engineering", "MSc track — Business Analytics", "ColleaiQ — Co-founder, CTO"],
    caresAbout:
      "Proactive security that real analysts can trust. Clear evidence, calm workflows, and tools that get better with each iteration.",
  },
  {
    name: "Christoffer Christian Dreist",
    firstName: "Christoffer",
    title: "CFO & Co-founder",
    slug: "christoffer-christian-dreist",
    image: "/images/team/christoffer.png",
    email: "Christofferdreist@colleaiq.dk",
    linkedin: "https://www.linkedin.com/in/christoffer-dreist-b71849186/",
    focus: "Operations, funding and customer discovery.",
    intro:
      "Christoffer Christian Dreist is co-founder and CFO at ColleaiQ. He holds a BSc in Engineering from DTU and is completing an MSc in Business Analytics. Christoffer keeps pilots and partnerships on track: clear plans, clear handovers, and a product we can deliver as promised.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Business Analytics",
    phone: "+45 50 48 14 49",
    background: [
      "DTU — Bachelor of Science in Engineering",
      "DTU — MSc in Business Analytics",
      "Co-founder & CFO, ColleaiQ",
    ],
    caresAbout:
      "Plain language, tidy scope, and dependable execution. I like written decisions, realistic timelines, and a single owner for the next step.",
  },
];

export default teamMembers;
