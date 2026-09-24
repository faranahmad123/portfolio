"use client";

import { useState, useEffect } from "react";
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
  const { seen, markSeen } = useIntroSeen();
  const [introComplete, setIntroComplete] = useState(false);

  // If already seen, skip intro immediately
  useEffect(() => {
    if (seen) setIntroComplete(true);
  }, [seen]);

  const handleIntroComplete = () => {
    markSeen();
    setIntroComplete(true);
  };

  return (
    <>
      {/* Cinematic intro — shown once per session */}
      {!introComplete && <Intro onComplete={handleIntroComplete} />}

      {/* Cursor glow — desktop only */}
      <CursorGlow />

      {/* Main site */}
      <Navbar />
      <main>
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
