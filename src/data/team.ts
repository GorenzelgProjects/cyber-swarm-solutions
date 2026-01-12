export type TeamMember = {
  name: string;
  firstName: string;
  title: string;
  slug: string;
  image: string;
  focus?: string;
  intro?: string;
  background?: string[];
  degree?: string;
  track?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
};

export type AdvisoryMember = {
  name: string;
  title: string;
  organization: string;
  slug: string;
  image?: string;
  linkedin?: string;
};

export const advisoryBoard: AdvisoryMember[] = [
  {
    name: "Christian Henriksen",
    title: "Co-founder",
    organization: "SagaLabs",
    slug: "christian-henriksen",
    linkedin: "https://www.linkedin.com/in/christian-henriksen/",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Mikkel Romvig Grøngård",
    firstName: "Mikkel",
    title: "CEO & Co-founder",
    slug: "mikkel-romvig-grongard",
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
      "Engineer from DTU; currently pursuing an MSc in Human-Centered Artificial Intelligences. Focused on building explainable, human-in-the-loop security.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Business Analytics",
    background: ["DTU — BSc Engineering", "MSc track — Business Analytics", "ColleaiQ — Co-founder, CTO"],
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
      "Christoffer Christian Dreist is co-founder and CFO at ColleaiQ. He holds a BSc in Engineering from DTU and is completing an MSc in Business Analytics. Christoffer keeps pilots and partnerships on track.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Business Analytics",
    background: ["DTU — BSc Engineering", "MSc track — Business Analytics", "ColleaiQ — Co-founder, CFO"],
  },
  {
    name: "Rasmus Saugmann Sørensen",
    firstName: "Rasmus",
    title: "Junior Developer",
    slug: "rasmus-saugmann-sorensen",
    image: "/images/team/rasmus.pn",
    focus: "Development and technical implementation.",
    intro:
      "Engineer from DTU; currently pursuing an MSc in Human-Centered Artificial Intelligence. Contributing to ColleaiQ's technical development.",
    degree: "DTU — BSc Engineering",
    track: "MSc track — Human-Centered Artificial Intelligence",
    background: [
      "DTU — BSc Engineering",
      "MSc track — Human-Centered Artificial Intelligence",
      "ColleaiQ — Junior Developer",
    ],
  },
];

export default teamMembers;
