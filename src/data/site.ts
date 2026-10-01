import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  Network,
  Palette,
  PiggyBank,
  Presentation,
  Rocket,
  Share2,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  UserCheck,
  Globe,
  Store,
  FolderKanban,
  CloudCog,
} from "lucide-react";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const contact = { phone: "+91 12345 67890", email: "info@itbc.world" };

export const logins = [
  { label: "Student Login", href: "/login/student" },
  { label: "Faculty Login", href: "/login/faculty" },
  { label: "Corporate Login", href: "/login/corporate" },
  { label: "Partner Login", href: "/login/partner" },
];

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About ITBC",
    href: "#about",
    children: [
      { label: "Who We Are", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Leadership", href: "#about" },
    ],
  },
  {
    label: "Our Wings",
    href: "#wings",
    children: [
      { label: "ITCCF", href: "#itccf" },
      { label: "Startup Hub", href: "#startups" },
      { label: "Research & Innovation", href: "#research" },
    ],
  },
  {
    label: "Membership",
    href: "#membership",
    children: [
      { label: "Student Membership", href: "#membership" },
      { label: "Institution Membership", href: "#membership" },
      { label: "Corporate Membership", href: "#membership" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    children: [
      { label: "Live Projects", href: "#projects" },
      { label: "Post a Project", href: "#projects" },
    ],
  },
  {
    label: "Internship & Jobs",
    href: "#jobs",
    children: [
      { label: "Internships", href: "#jobs" },
      { label: "Placements", href: "#jobs" },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Certifications", href: "#resources" },
      { label: "Blogs", href: "#resources" },
      { label: "ITBC Talks", href: "#resources" },
    ],
  },
  { label: "Events", href: "#events" },
  { label: "Contact Us", href: "#contact" },
];

export type Stat = { icon: LucideIcon; value: string; label: string; color?: string };

export const heroStats: Stat[] = [
  { icon: Users, value: "125K+", label: "Members" },
  { icon: Landmark, value: "850+", label: "Colleges" },
  { icon: Briefcase, value: "1200+", label: "Companies" },
  { icon: Code2, value: "3500+", label: "Live Projects" },
];

export const companyClasses = ["Class A++", "Class A+", "Class A", "Class B++", "Class B+", "Class B", "Class C", "Startups & Institutions"];
export const dependentClasses = ["Class A++", "Class A+", "Class A", "Class B++", "Class B+", "Class B", "Class C", "Entrepreneurs", "Digital Marketers"];

export const opportunities = [
  "Skill Development",
  "Live Projects",
  "Internships & Placements",
  "Innovation & Research",
  "Startup Incubation",
  "Digital Transformation",
  "AI & Emerging Technologies",
  "Investment & Funding",
  "Global Collaboration",
];

export type QuickLink = { icon: LucideIcon; label: string; href: string; color: string };

export const quickLinks: QuickLink[] = [
  { icon: FolderKanban, label: "Project Marketplace", href: "#projects", color: "text-blue-700" },
  { icon: Users, label: "Internship & Jobs", href: "#jobs", color: "text-blue-700" },
  { icon: BrainCircuit, label: "AI Career Guidance", href: "#ai", color: "text-blue-700" },
  { icon: Award, label: "Certifications & Courses", href: "#resources", color: "text-blue-700" },
  { icon: Rocket, label: "Startup Hub", href: "#startups", color: "text-orange-500" },
  { icon: Lightbulb, label: "Research & Innovation", href: "#research", color: "text-blue-700" },
  { icon: CloudCog, label: "Digital Transformation", href: "#digital", color: "text-blue-700" },
];

export type Stakeholder = {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  accent: string; // tailwind bg class for the badge
  titleColor: string;
};

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;

export const stakeholders: Stakeholder[] = [
  {
    icon: GraduationCap,
    title: "For Students",
    text: "Access live projects, training, internships and career guidance to build your future.",
    image: u("photo-1522202176988-66273c2fd55f"),
    accent: "bg-emerald-600",
    titleColor: "text-emerald-700",
  },
  {
    icon: UserCheck,
    title: "For Faculty",
    text: "Enhance teaching, research, industry connect and professional growth.",
    image: u("photo-1524178232363-1fb2b075b655"),
    accent: "bg-blue-600",
    titleColor: "text-blue-700",
  },
  {
    icon: Building2,
    title: "For Institutions",
    text: "Strengthen academia–industry connect, accreditations, placements and innovation.",
    image: u("photo-1562774053-701939374585"),
    accent: "bg-indigo-700",
    titleColor: "text-indigo-700",
  },
  {
    icon: Briefcase,
    title: "For Corporates",
    text: "Hire talent, outsource projects, CSR partnerships and drive innovation.",
    image: u("photo-1521791136064-7986c2920216"),
    accent: "bg-orange-500",
    titleColor: "text-orange-600",
  },
  {
    icon: Rocket,
    title: "For Startups",
    text: "Incubation, mentorship, funding support and market access to grow & scale.",
    image: u("photo-1552664730-d307ca884978"),
    accent: "bg-violet-600",
    titleColor: "text-violet-700",
  },
  {
    icon: BarChart3,
    title: "For Investors",
    text: "Discover startups, innovations and high impact investment opportunities.",
    image: u("photo-1556761175-b413da4baf72"),
    accent: "bg-blue-700",
    titleColor: "text-blue-800",
  },
];

export const projectCategories: { icon: LucideIcon; label: string }[] = [
  { icon: Code2, label: "Software Development" },
  { icon: BrainCircuit, label: "AI/ML & Data Science" },
  { icon: Smartphone, label: "Web & Mobile Apps" },
  { icon: Cloud, label: "Cloud & DevOps" },
  { icon: Cpu, label: "IoT & Automation" },
  { icon: Palette, label: "Design & Multimedia" },
];

export const placementStats = [
  { value: "2500+", label: "Internships" },
  { value: "1800+", label: "Companies Hiring" },
  { value: "28K+", label: "Placements" },
  { value: "12K+", label: "Active Jobs" },
];

export const startupPillars: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Mentorship" },
  { icon: Building2, label: "Incubation" },
  { icon: PiggyBank, label: "Funding" },
  { icon: Share2, label: "Networking" },
  { icon: Store, label: "Market Access" },
  { icon: Globe, label: "Global Exposure" },
];

export const itccfPillars: { icon: LucideIcon; label: string }[] = [
  { icon: Network, label: "National Network of TPOs" },
  { icon: BookOpen, label: "Knowledge Sharing" },
  { icon: Presentation, label: "Best Practices Exchange" },
  { icon: Users, label: "Training & Development" },
  { icon: Handshake, label: "Placement Collaboration" },
  { icon: Building2, label: "Industry Connect" },
];

export const itccfBenefits = [
  "Connect with 1000+ TPOs Across India",
  "Access Industry Requirements & Opportunities",
  "Share Placement Data & Insights",
  "Collaborate for Student Success",
  "Be Recognised. Be Connected. Be a Leader.",
];

export const impactStats: Stat[] = [
  { icon: Users, value: "125K+", label: "Members", color: "text-emerald-400" },
  { icon: Landmark, value: "850+", label: "Colleges", color: "text-amber-400" },
  { icon: Briefcase, value: "1200+", label: "Companies", color: "text-sky-400" },
  { icon: Code2, value: "3500+", label: "Live Projects", color: "text-violet-400" },
  { icon: GraduationCap, value: "45K+", label: "Internships", color: "text-emerald-400" },
  { icon: TrendingUp, value: "28K+", label: "Placements", color: "text-fuchsia-400" },
  { icon: Rocket, value: "1500+", label: "Startups", color: "text-sky-400" },
  { icon: Target, value: "250+", label: "Investors", color: "text-orange-400" },
];

export const events = [
  { title: "ITBC Tech Summit 2025", date: "25 May 2025", place: "New Delhi" },
  { title: "AI & Future Skills Workshop", date: "10 June 2025", place: "Online" },
  { title: "Startup Pitch & Investor Meet", date: "18 June 2025", place: "Bengaluru" },
];

export const trustedBy = ["NITI Aayog", "Digital India", "MeitY", "AICTE", "Skill India", "Startup India", "MSME"];

