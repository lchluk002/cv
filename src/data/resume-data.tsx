import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Luke Leach",
  initials: "LL",
  location: "Brisbane, Australia",
  locationLink: "https://www.google.com/maps/place/Brisbane+QLD",
  about:
    "Full Stack Engineer focused on building advanced, scalable web-apps",
  summary:
    `My engineering background has given me a strong foundation in problem solving and critical thinking, 
    which has proven to be invaluable in my career as a developer. 
    I have consistently proven to be a valuable asset to my team, confidently learning new technologies and adapting to new environments. 
    I am passionate about what I do and continually strive to deliver high-quality solutions.`,
  avatarUrl: "/Profile_No_BG.png",
  personalWebsiteUrl: null,
  contact: {
    email: "lukedleach@gmail.com",
    tel: "+6147150248",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/lchluk002",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lukeleach",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "University of Cape Town",
      degree: "BSc (Hons) in Mechanical & Mechatronic Engineering",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Zebra Labs LTD",
      link: "https://zebralabs.io",
      badges: ["Remote"],
      title: "Director",
      start: "Nov 2022",
      end: "Present",
      description:
        `Lead developer of our primary internal product, OneSea, and senior developer on "Program Finder" - a product for our client, Erickson Coaching International.`,
    },
    {
      company: "Yachting Industry",
      link: null,
      badges: [],
      title: "Deckhand",
      start: "Jun 2019",
      end: "Nov 2022",
      description:
        `Senior deckhand on a 135m private motor-yacht based in the Mediterranean. Worked long hours with a large crew. 
        Responsible for designing and 3D printing custom parts for vessel maintenance.`
    }
  ],
  skills: [
    "JavaScript",
    "React/Next.js",
    "React Native",
    "PostgreSQL",
    "GIT",
    "Supabase",
    "TailwindCSS",
    "CSS",
    "Python",
    "Django",
  ],
  projects: [
    {
      title: "OneSea",
      techStack: ["JavaScript", "React", "Next.js", "React Native", "SQL", "Prisma", "Playwright", "Vercel"],
      description: "A SaaS platform providing the maritime industry with a set of tools to manage their vessels and crew.",
      link: {
        label: "onesea.io",
        href: "https://onesea.io/",
      }
    },
    {
      title: "Program Finder",
      techStack: ["TypeScript", "React", "Next.js", "Prisma", "HubSpot", "Vercel"],
      description: "A platform to find programs, courses and classes provided by Erickson Coaching International",
      link: {
        label: "programfinder.erickson.edu",
        href: "https://programfinder.erickson.edu/",
      }
    }
  ],
} as const;
