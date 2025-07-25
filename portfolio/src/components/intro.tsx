import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Intro = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col">
      <div className="flex items-center self-end gap-6 pt-2 px-4">
        <a
          href="https://github.com/arbreshazeqiri"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-lg"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/arbreshazeqiri"
          target="_blank"
          className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-lg"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:arbreshazeqiri0@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-lg"
        >
          <Mail size={20} />
        </a>
      </div>
      <div className="min-h-screen flex items-center justify-center relative bg-hero-bg overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-art-purple rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-valorant-red rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-glow rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <span>Hey there, I&apos;m</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                  <span className="block text-foreground">Arbresha</span>
                  <span className="pb-2 block bg-gradient-to-r from-primary via-art-purple to-primary bg-clip-text text-transparent">
                    Zeqiri
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  I&apos;m drawn to early-stage chaos and the challenge of turning <span className="text-primary">vision </span>into something<span className="text-art-purple"> tangible, useful, and beautiful.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-lg shadow-primary/25 cursor-pointer"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary/50 cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "mailto:arbreshazeqiri0@gmail.com?subject=Contact%20Request&body=Hi%20there,")
                  }
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 right-8 text-muted-foreground hover:text-primary transition-colors animate-bounce p-3 hover:bg-secondary/50 rounded-full"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Intro;
