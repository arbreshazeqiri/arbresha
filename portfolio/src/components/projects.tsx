import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kosova Makers League Website",
      description:
        "Modern website for Kosova Makers League, aligned with their brand identity and refreshed with a new, vibrant look.",
      image:
        "/projects/kml.png",
      technologies: ["Next.js", "React", "WordPress", "PHP"],
      githubUrl: "https://github.com/kosovamakersleague/kml-website",
      liveUrl: "https://kosovamakers.vercel.app/",
      featured: true,
    },
    {
      title: "Healthcare Analiza Website",
      description:
        "Website showcasing the services of a local healthcare clinic, focusing on accessibility and clear user navigation.",
      image:
        "/projects/healthcare-analiza.png",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/arbreshazeqiri/Healthcare-ANALIZA",
      liveUrl: "https://healthcareanaliza.com",
    },
    {
      title: "Pig Dice Game",
      description:
        "A desktop app built for playing the Pig Dice Game against other players or against the computer.",
      image:
        "/projects/pdg.png",
      technologies: ["Java", "JavaFX", "MYSQL"],
      githubUrl: "https://github.com/arbreshazeqiri/DiceRollSimulator",
    },
    {
      title: "Minesweeper Solver",
      description:
        "Minesweeper game in three difficulty levels. Solves the board using either Breadth-First Search or Depth-First Search algorithms.",
      image:
        "/projects/minesweeper-solver.png",
      technologies: ["React", "JavaScript", "BFS", "DFS"],
      githubUrl: "https://github.com/arbreshazeqiri/Minesweeper",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-gradient-end bg-clip-text text-transparent pb-2">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some of my proudest past projects, while better ones are on the way!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 group border-border bg-card hover:bg-secondary/20 hover:border-primary/30"
            >
              <div
                className="aspect-video bg-muted bg-cover bg-start"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="p-4">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8 text-xs"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3 mr-1.5" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 h-8 text-xs" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1.5" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
