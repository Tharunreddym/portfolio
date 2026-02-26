import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowDown, FileText, Linkedin } from "lucide-react";
import { ABOUT_ME, SOCIAL_MEDIA, RESUME_LINK } from "@/constants";
import Magnetic from "./Magnetic";
import heroAnimation from "@/assets/images/Hero/main_comp.json";

const LINKEDIN_URL = "https://www.linkedin.com/in/tharunrm/";

export default function Hero() {
  return (
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="section-container relative">
          <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-3">
              {/* Header Status */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
                Available for opportunities
              </motion.div>

              {/* Name and Tagline */}
              <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I'm <span className="gradient-text">{ABOUT_ME.firstName}</span><br />
                <span className="gradient-text">{ABOUT_ME.lastName}</span>
              </motion.h1>

              <motion.p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
                {ABOUT_ME.tagLine}
              </motion.p>

              {/* Resume and Connect Buttons */}
              <motion.div className="mt-7 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.2}>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-all hover:opacity-90">
                    Let's Connect <Linkedin className="h-4 w-4" />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            {/* Animation */}
            <div className="hidden md:col-span-2 md:block">
              <Lottie animationData={heroAnimation} loop className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>
  );
}
