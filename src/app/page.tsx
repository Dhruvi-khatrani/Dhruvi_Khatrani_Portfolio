import { AnimatedBackground } from "@/components/AnimatedBackground";
import { About } from "@/components/About";
import { Automation } from "@/components/Automation";
import { ChatFeature } from "@/components/ChatFeature";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PortfolioAnimations } from "@/components/PortfolioAnimations";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ChatFeature />
        <Automation />
        <Contact />
      </main>
      <Footer />
      <PortfolioAnimations />
    </>
  );
}
