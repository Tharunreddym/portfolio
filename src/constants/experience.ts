import type { IconType } from "react-icons";
import {
  SiPhp,
  SiJavascript,
  SiOpenjdk,
  SiSpringboot,
  SiAngular,
  SiVuedotjs,
  SiJenkins,
  SiGit,
  SiPython,
  SiFlask,
  SiMysql,
  SiFastapi,
  SiSqlalchemy,
  SiGnubash,
  SiDocker,
} from "react-icons/si";

// Reverting to original template imports to fix resolve errors
import nutanix from "@/assets/images/Experience/nutanix.png";
import flipkart from "@/assets/images/Experience/flipkart.png";
import appleute from "@/assets/images/Experience/appleute.svg";
import trinit from "@/assets/images/Experience/TriNit.jfif";

export interface TechItem {
  id: string;
  icon: IconType;
  name: string;
}

export interface Position {
  title: string;
  duration: string;
  content?: { text: string; link?: string; tech?: TechItem[] }[];
}

export interface Experience {
  organisation: string;
  logo: string;
  link: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: "Kaizen Family Dental",
    logo: nutanix, // Using existing asset
    link: "#",
    positions: [
      {
        title: "Software Development Engineer Intern",
        duration: "Oct 2024 — Apr 2025",
        content: [
          {
            text: "Developed and iterated on high-fidelity functional prototypes for internal tools, accelerating the transition from design to MVP by 3 weeks.",
            tech: [
              { id: "kz-1", icon: SiPhp, name: "PHP" },
              { id: "kz-2", icon: SiJavascript, name: "JavaScript" },
              { id: "kz-3", icon: SiMysql, name: "SQL/Database Encryption" },
            ],
          },
          {
            text: "Architected a secure, full stack intranet system using PHP and JavaScript, optimizing the frontend and reducing manual data entry by 40%.",
          },
          {
            text: "Engineered a HIPAA-compliant web application, implementing strict database encryption and durable data models to secure 10,000+ health records.",
          },
        ],
      },
    ],
  },
  {
    organisation: "WinIT",
    logo: flipkart, // Using existing asset
    link: "#",
    positions: [
      {
        title: "Full Stack Software Developer",
        duration: "Jun 2023 — Jul 2024",
        content: [
          {
            text: "Developed high-performance Java backend microservices using Spring Boot and implemented caching to optimize system throughput by 30%.",
            tech: [
              { id: "wi-1", icon: SiOpenjdk, name: "Java" },
              { id: "wi-2", icon: SiSpringboot, name: "Spring Boot" },
              { id: "wi-3", icon: SiAngular, name: "Angular" },
              { id: "wi-4", icon: SiVuedotjs, name: "Vue.js" },
              { id: "wi-5", icon: SiJenkins, name: "Jenkins" },
              { id: "wi-6", icon: SiGit, name: "Git" },
            ],
          },
          {
            text: "Crafted responsive, high-fidelity frontend UI components using Angular and Vue.js, improving page load performance by 20%.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Sanguine Solutions Pvt. Ltd.",
    logo: appleute, // Using existing asset
    link: "#",
    positions: [
      {
        title: "Technical Intern",
        duration: "Jul 2022 — Dec 2022",
        content: [
          {
            text: "Designed and deployed 12+ scalable REST APIs using Python and Flask, supporting 5,000+ daily requests.",
            tech: [
              { id: "ss-1", icon: SiPython, name: "Python" },
              { id: "ss-2", icon: SiFlask, name: "Flask" },
              { id: "ss-3", icon: SiMysql, name: "SQL" },
            ],
          },
          {
            text: "Implemented JWT authentication and request validation, reducing backend security vulnerabilities by 35%.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Pragmatic Solutions Pvt. Ltd.",
    logo: trinit, // Using existing asset
    link: "#",
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Mar 2022 — Jun 2022",
        content: [
          {
            text: "Built 8 FastAPI microservices to power real-time frontend dashboards for 1,000+ active users.",
            tech: [
              { id: "ps-1", icon: SiFastapi, name: "FastAPI" },
              { id: "ps-2", icon: SiSqlalchemy, name: "SQLAlchemy" },
              { id: "ps-3", icon: SiDocker, name: "Docker" },
            ],
          },
        ],
      },
    ],
  },
];