import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Terminal,
  Brush,
  Gamepad2,
  Library,
  Smartphone,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Terminal,
      title: "Backend",
      description: "Server-side development and database management",
      techs: ["Node.js", "Serverless", "PostgreSQL", "API Design"],
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Frontend",
      description: "Modern UI development with powerful frameworks",
      techs: ["React", "TypeScript", "Next.js", "Tailwind", "Shadcn"],
      color: "text-art-purple",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description:
        "Cross-platform mobile app development with native performance",
      techs: ["React Native", "Expo"],
      color: "text-valorant-red",
    },
    {
      icon: Brush,
      title: "Art & Design",
      description: "Website design and creative expression",
      techs: ["Digital Art", "UI/UX", "Creative Direction", "Aesthetics"],
      color: "text-art-purple",
    },
  ];

  return (
    <section id="about" className="py-15 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary"></div>
              <span className="text-sm text-muted-foreground">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting digital experiences with
              <span className="block bg-gradient-to-r from-primary via-art-purple to-primary bg-clip-text text-transparent pb-2">
                passion & precision
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              I&apos;m a Fullstack Developer from Prishtina Kosovo, currently
              working at{" "}
              <span className="text-valorant-red">
                <a href="https://ve2max.com" target="_blank">
                  ve2max{" "}
                </a>
              </span>
              as a Lead Developer on{" "}
              <span className="text-art-purple">
                <a href="https://mediamorph.ai" target="_blank">
                  MediaMorph
                </a>
              </span>
              , an AI-powered social media tool. As a Computer Engineering
              graduate turned Software Developer, I believe the best code
              combines technical excellence with creative vision.
            </p>

            <div className="my-5 flex flex-col gap-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                When I’m not working, you’ll probably find me reading… or
                playing Valorant (more than I’d like to admit).
              </p>

              <div className="flex items-center gap-6 pt-2">
                <a
                  href="https://tracker.gg/valorant/profile/riot/vajzallave%231472"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-lg"
                >
                  <Gamepad2 size={24} />
                </a>
                <a
                  href="https://www.goodreads.com/vajzallave"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary/50 rounded-lg"
                >
                  <Library size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:bg-secondary/20 transition-all duration-300 group hover:border-primary/30"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-secondary/50 ${skill.color} group-hover:bg-primary/10 transition-colors`}
                    >
                      <skill.icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary/70 text-secondary-foreground rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
