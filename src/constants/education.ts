import nitk from "@/assets/images/Education/nitk.png"; // Using the original file

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: nitk,
    title: "University of Cincinnati",
    degree: "Master of Science in Computer Engineering",
    duration: "Aug 2024 — May 2026",
    content1: "GPA: 3.417/4.0",
    content2: "Cincinnati, OH",
  },
  {
    id: "education-2",
    icon: nitk, // Re-using the same image to avoid errors
    title: "Annamacharya Institute of Technology and Sciences",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Aug 2019 — Jul 2023",
    content1: "GPA: 8.13/10.0",
    content2: "Rajampet, India",
  }
];