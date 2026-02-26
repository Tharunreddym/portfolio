import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiCplusplus,
  SiSwift,
  SiPostgresql,
  SiGnubash,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiVuedotjs,
  // Removed unused SiHtml5 and SiCss3 to clear IDE warnings
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiSpringboot,
  SiFlask,
  SiFastapi,
  SiGraphql,
  SiSqlalchemy,
  SiMysql,
  SiMongodb,
  SiAmazondynamodb,
  SiRedis,
  SiApachehadoop,
  SiAmazon, // Fixed: Changed from SiAmazonaws
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

export interface Skill {
  id: string;
  icon: IconType;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: SiTypescript, name: "TypeScript" },
      { id: "pl-3", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-4", icon: SiOpenjdk, name: "Java" },
      { id: "pl-5", icon: SiCplusplus, name: "C++" },
      { id: "pl-6", icon: SiSwift, name: "Swift" },
      { id: "pl-7", icon: SiPostgresql, name: "SQL" },
      { id: "pl-8", icon: SiGnubash, name: "Bash" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "f-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "f-2", icon: SiReact, name: "React" },
      { id: "f-3", icon: SiAngular, name: "Angular" },
      { id: "f-4", icon: SiVuedotjs, name: "Vue.js" },
      { id: "f-5", icon: SiNodedotjs, name: "Node.js" },
      { id: "f-6", icon: SiSpringboot, name: "Spring Boot" },
      { id: "f-7", icon: SiFlask, name: "Flask" },
      { id: "f-8", icon: SiFastapi, name: "FastAPI" },
      { id: "f-9", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "f-10", icon: SiRedux, name: "Redux" },
      { id: "f-11", icon: SiGraphql, name: "GraphQL" },
      { id: "f-12", icon: SiSqlalchemy, name: "SQLAlchemy" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { id: "dc-1", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "dc-2", icon: SiMysql, name: "MySQL" },
      { id: "dc-3", icon: SiMongodb, name: "MongoDB" },
      { id: "dc-4", icon: SiAmazondynamodb, name: "DynamoDB" },
      { id: "dc-5", icon: SiRedis, name: "Redis" },
      { id: "dc-6", icon: SiApachehadoop, name: "Hadoop" },
      { id: "dc-7", icon: SiAmazon, name: "AWS" }, // Fixed icon reference
      { id: "dc-8", icon: SiGooglecloud, name: "GCP" },
    ],
  },
  {
    title: "Tools & AI",
    items: [
      { id: "ta-1", icon: SiDocker, name: "Docker" },
      { id: "ta-2", icon: SiKubernetes, name: "Kubernetes" },
      { id: "ta-3", icon: SiJenkins, name: "Jenkins" },
      { id: "ta-4", icon: SiGit, name: "Git" },
      { id: "ta-5", icon: SiScikitlearn, name: "Scikit-Learn" },
      { id: "ta-6", icon: SiPandas, name: "Pandas" },
      { id: "ta-7", icon: SiNumpy, name: "NumPy" },
    ],
  },
];