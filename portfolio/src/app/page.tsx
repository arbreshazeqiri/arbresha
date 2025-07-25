"use client"
import Intro from "@/components/intro";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
