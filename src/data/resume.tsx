import { Icons } from "@/components/icons"
import { House, Library } from "lucide-react"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Nodejs } from "@/components/ui/svgs/nodejs"
import { Python } from "@/components/ui/svgs/python"
import { Postgresql } from "@/components/ui/svgs/postgresql"
import { Docker } from "@/components/ui/svgs/docker"
import { Flutter } from "@/components/ui/svgs/flutter"
import { Dart } from "@/components/ui/svgs/dart"
import { Firebase } from "@/components/ui/svgs/firebase"
import { Fastapi } from "@/components/ui/svgs/fastapi"
import { ReactLight } from "@/components/ui/svgs/reactLight"

export const DATA = {
  name: "Ridwan Dwi Adani - Mobile Developer",
  initials: "RDA",
  url: "https://ridwandwiadani.my.id",
  location: "Bogor, West Java",
  locationLink: "",
  description:
    "Mobile Developer backed with 3+ years of full stack experienced. Building mobile apps with Flutter across POS, IoT, and interactive learning apps. Eager to master not just Flutter and native side, but also other mobile app ecosystems, like React Native.",
  summary:
    "I was a Full Stack Developer for 3 years on my previous role. I am grateful of that opportunity which gave me a broad view of a complex system architecture. Reflecting on those 3 years made me realize that I really enjoy building seamless apps for users. Now, I am focusing my effort on becoming a mobile application expert - not only mastering Flutter and native side (Android/Kotlin & iOS/Swift), but also adapt to new mobile app ecosystems.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: {
      order: 2,
      enabled: true,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    education: { order: 4, enabled: true, heading: "Education" },
    skills: { order: 3, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    contact: {
      order: 6,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just email me with a direct question and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  skills: [
    { name: "Flutter", icon: Flutter },
    { name: "Dart", icon: Dart },
    { name: "Firebase", icon: Firebase },
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: Fastapi },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "ridwandani12@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RDA-12",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ridwandwiadani",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ridwandani12@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/6281211954277",
        icon: Icons.whatsapp,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Impactlabs",
      href: "https://impactlabs.id",
      badges: ["Full Stack Developer"],
      location: "Bandung, West Java",
      title: "Full Stack Developer",
      logoUrl: "https://impactlabs.id/assets/logo-impactlabs.png",
      start: "2023",
      end: "2026",
      description:
        "Managing end-to-end development across Flutter mobile apps, NextJS web platform, and FastAPI backend for multiple client requests, including ERP system and IoT solutions. Collaborated closely with product owners, UI/UX designers, and business stakeholder to translate requirements into technology.",
    },
  ],
  education: [
    {
      school: "Universitas Pendidikan Indonesia",
      href: "https://www.upi.edu",
      degree: "Bachelor of Engineering, Electrical",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
    {
      school: "Alterra Academy",
      href: "#",
      degree: "Flutter developer bootcamp",
      logoUrl: "",
      start: "2022",
      end: "2022",
    },
    {
      school: "Orbit Future Academy",
      href: "#",
      degree: "General AI bootcamp",
      logoUrl: "",
      start: "2021",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Kamar Gadget ERP",
      href: "#",
      dates: "2026 - 2026",
      active: false,
      description:
        "Built an ERP system end-to-end with Flutter, NextJS, FastAPI, and PostgreSQL. Ensured financial data precision by using decimal type instead of float/double to prevent floating-point rounding error.",
      technologies: [
        "Dart",
        "Flutter",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "TypeScript",
        "Next.js",
      ],
      links: [],
      image: "/erp-kg-thumbnail.png",
      video: "",
    },
    {
      title: "Smart Mushroom Cultivation System",
      href: "#",
      dates: "2025 - 2025",
      active: false,
      description:
        "Built mobile apps to help mushroom cultivation with Flutter. Monitoring realtime IoT devices and remotely control them through Firebase realtime database.",
      technologies: ["Dart", "Flutter", "Firebase"],
      links: [],
      image: "/jamur-thumbnail.png",
      video: "",
    },
    {
      title: "MyHazim",
      href: "#",
      dates: "2023 - 2024",
      active: false,
      description:
        "An interactive learning apps to helps children develop their speech (in Bahasa Indonesia). Leveraged Speech-to-text to test voice articulation.",
      technologies: ["Dart", "Flutter", "Firebase", "Xendit"],
      links: [],
      image: "/myhazim-thumbnail.png",
      video: "",
    },
    {
      title: "Evobird",
      href: "#",
      dates: "2024 - 2025",
      active: false,
      description: "An omnichannel messaging apps that allow users to manage various messaging channels in just 1 platform. Leveraged OpenAI model to create AI agent that can take order, save new customer data, and give answer based on dynamic product knowledge.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Firebase",
        "Chakra UI",
        "Xendit",
        "OpenAI API",
      ],
      links: [],
      image: "/evobird-thumbnail.png",
      video: "",
    },
  ],
} as const
