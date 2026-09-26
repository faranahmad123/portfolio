"use client";

import { AnimatePresence } from "framer-motion";
import { useIntroSeen } from "@/hooks/useIntroSeen";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillInspector from "@/components/SkillInspector";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certs from "@/components/Certs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function PortfolioClient() {
  const { isReady, shouldShowIntro, markSeen } = useIntroSeen();

  return (
    <>
      {/* Full-screen loading intro: rendered conditionally based on mount session check, unmounts cleanly with slide-up curtain via AnimatePresence */}
      <AnimatePresence mode="wait">
        {isReady && shouldShowIntro && (
          <Intro key="portfolio-intro" onComplete={markSeen} />
        )}
      </AnimatePresence>

      {/* Cursor glow — desktop only */}
      <CursorGlow />

      {/* Main site content rendered underneath intro overlay */}
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <SkillInspector />
        <Services />
        <Projects />
        <Experience />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
