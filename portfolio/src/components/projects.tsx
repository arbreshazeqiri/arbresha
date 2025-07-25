import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kosova Makers League Website",
      description:
        "A full-stack e-commerce solution with modern payment integration, inventory management, and responsive design.",
      image:
        "https://private-user-images.githubusercontent.com/61945677/470822847-cef3fe4a-f1bd-4e6a-a455-357b66e0c36a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0NTI0MzAsIm5iZiI6MTc1MzQ1MjEzMCwicGF0aCI6Ii82MTk0NTY3Ny80NzA4MjI4NDctY2VmM2ZlNGEtZjFiZC00ZTZhLWE0NTUtMzU3YjY2ZTBjMzZhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDE0MDIxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVjMzc2YTAzMWQ1ZTg1NTYyMzY4ZTJiYTA2MzBiNGIyZTI1YWM2Yzc4MTczMGExMTYwZTIxNTk5OTdjMDZiNTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.CHj5Ej_QqQG5_G1634SPsF5clpeVhEL37Qjn0Ftfwrg",
      technologies: ["Next.js", "React", "WordPress", "PHP"],
      githubUrl: "https://github.com/kosovamakersleague/kml-website",
      liveUrl: "https://kosovamakers.vercel.app/",
      featured: true,
    },
    {
      title: "Healthcare Analiza Website",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://private-user-images.githubusercontent.com/61945677/470820678-9ec7e80a-29e7-446f-9ce2-a8381366ee36.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0NTIxODIsIm5iZiI6MTc1MzQ1MTg4MiwicGF0aCI6Ii82MTk0NTY3Ny80NzA4MjA2NzgtOWVjN2U4MGEtMjllNy00NDZmLTljZTItYTgzODEzNjZlZTM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDEzNTgwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFmNmQ5YzJlZGNlOGMwNDU5OWUzMTE2MjIxZWU2YzhkMWIzNzVlMjNkNTc3YmY1Y2E1OWNkOGNkOWEwODQ0ZDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.MgNzzzz8vWIGaHB3DuF1zQzAAkz33qfSC_7XrJHRqVo",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/arbreshazeqiri/Healthcare-ANALIZA",
      liveUrl: "https://healthcareanaliza.com",
    },
    {
      title: "Pig Dice Game",
      description:
        "An intuitive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image:
        "https://user-images.githubusercontent.com/61945677/126212213-ea6bb1b0-8e84-4c1f-9cc1-d5b7887915a6.png",
      technologies: ["Java", "JavaFX", "MYSQL"],
      githubUrl: "https://github.com/arbreshazeqiri/DiceRollSimulator",
    },
    {
      title: "Minesweeper Solver",
      description:
        "A custom content management system for bloggers with markdown support, SEO optimization, and social media integration.",
      image:
        "https://private-user-images.githubusercontent.com/61945677/239621271-6c6dba47-415f-43da-9286-0868b0c1c091.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0NTI2MTIsIm5iZiI6MTc1MzQ1MjMxMiwicGF0aCI6Ii82MTk0NTY3Ny8yMzk2MjEyNzEtNmM2ZGJhNDctNDE1Zi00M2RhLTkyODYtMDg2OGIwYzFjMDkxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDE0MDUxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlMTY0YmI4YjE3ODE1NjllYWQ0NDMwYTFlZmQ5MWM2MjljZjJkZjY4OTRkNWZhZDAxNWYxZjJjOWI5OGIwMWEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.E4gqj93vfKWurnty8m1vUnqs5g3O5nlYJ8P3wk4pwgI",
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
                className="aspect-video bg-muted bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="p-4">
                <CardHeader className="p-0 mb-3">
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2">
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
