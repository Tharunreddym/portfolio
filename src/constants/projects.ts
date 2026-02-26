import type { IconType } from "react-icons";
import {
  SiPython,
  SiFlask,
  SiMysql,
  SiAwslambda,
  SiAmazondynamodb,
  SiPostgresql,
  SiMongodb,
  SiStreamlit,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPhp,
  SiJavascript,
} from "react-icons/si";
import { FaBrain, FaRobot, FaLock, FaShieldAlt } from "react-icons/fa";

// Reverting to the existing image assets from the template
import ehippo from "@/assets/images/Projects/favicon.ico";
import uncover from "@/assets/images/Projects/uncover.webp";
import bank from "@/assets/images/Projects/bank.jpg";
import bloodBank from "@/assets/images/Projects/bloodbank.webp";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  link?: string;
  image?: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Amazon Chime Meeting Assistant Bot",
    github: "https://github.com/tharunreddymopuru/amazon-chime-assistant",
    image: ehippo, // Using existing asset
    content:
        "Scalable, event-driven serverless application using AWS Lambda to automate voice and text workflows with real-time processing via Chime SDK.",
    stack: [
      { id: "icon-1", icon: SiAwslambda, name: "AWS Lambda" },
      { id: "icon-2", icon: SiAmazondynamodb, name: "DynamoDB" },
      { id: "icon-3", icon: SiPython, name: "Python" },
    ],
  },
  {
    id: "project-2",
    title: "Secure Patient Management System",
    github: "https://github.com/tharunreddymopuru/patient-management",
    image: uncover, // Using existing asset
    content:
        "HIPAA-compliant web application featuring end-to-end encryption, Role-Based Access Control (RBAC), and optimized SQL query performance.",
    stack: [
      { id: "icon-1", icon: SiPhp, name: "PHP" },
      { id: "icon-2", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-3", icon: SiMysql, name: "MySQL" },
      { id: "icon-4", icon: FaLock, name: "Encryption" },
    ],
  },
  {
    id: "project-3",
    title: "Fake Job Detection System",
    github: "https://github.com/tharunreddymopuru/fake-job-detection",
    image: bank, // Using existing asset
    content:
        "Machine learning project comparing XGBoost, Random Forest, and Decision Trees to identify fraudulent job postings with high accuracy.",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: FaBrain, name: "Machine Learning" },
      { id: "icon-3", icon: SiFlask, name: "Flask" },
      { id: "icon-4", icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    id: "project-4",
    title: "Social Media Content Moderator",
    github: "https://github.com/tharunreddymopuru/ai-content-moderator",
    image: bloodBank, // Using existing asset
    content:
        "AI-driven safety tool built during Revolution UC Hackathon using Google Gemini API to flag hate speech and misinformation in real-time.",
    stack: [
      { id: "icon-1", icon: FaRobot, name: "Google Gemini API" },
      { id: "icon-2", icon: SiStreamlit, name: "Streamlit" },
      { id: "icon-3", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-4", icon: FaShieldAlt, name: "AI Safety" },
    ],
  },
];