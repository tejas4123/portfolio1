"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import HomeView from "@/components/views/home-view";
import AboutView from "@/components/views/about-view";
import WorkView from "@/components/views/work-view";
import WorkflowView from "@/components/views/workflow-view";
import ContactView from "@/components/views/contact-view";

const TABS = ["Home", "About", "Work", "Workflow", "Contact"];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    }
  }),
};

export default function AppController() {
  const [activeTab, setActiveTab] = useState("Home");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (newTab: string) => {
    if (newTab === activeTab) return;
    const currentIndex = TABS.indexOf(activeTab);
    const newIndex = TABS.indexOf(newTab);
    
    if (newIndex > currentIndex) setDirection(1);
    else if (newIndex < currentIndex) setDirection(-1);
    
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="relative w-full min-h-screen pt-16">
        <AnimatePresence mode="wait" custom={direction}>
          {activeTab === "Home" && (
            <motion.div
              key="Home"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full origin-center"
            >
              <HomeView onTabChange={handleTabChange} />
              <Footer onTabChange={handleTabChange} />
            </motion.div>
          )}

          {activeTab === "About" && (
            <motion.div
              key="About"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full origin-center"
            >
              <AboutView />
              <Footer onTabChange={handleTabChange} />
            </motion.div>
          )}

          {activeTab === "Work" && (
            <motion.div
              key="Work"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full origin-center"
            >
              <WorkView />
              <Footer onTabChange={handleTabChange} />
            </motion.div>
          )}

          {activeTab === "Workflow" && (
            <motion.div
              key="Workflow"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full origin-center"
            >
              <WorkflowView />
              <Footer onTabChange={handleTabChange} />
            </motion.div>
          )}

          {activeTab === "Contact" && (
            <motion.div
              key="Contact"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full origin-center"
            >
              <ContactView />
              <Footer onTabChange={handleTabChange} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
