import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      title: "Fullstack Developer",
      company: "ve2max",
      location: "Amsterdam, Netherlands",
      period: "Jan 2025 - Present",
      description: "Implementing software ideas from scratch.",
      achievements: [
        "Leading development at MediaMorph, an AI-powered social media tool.",
        "Helped develop Inbound, an app which pairs investors with startups.",
      ],
      technologies: ["Next.js", "TypeScript", "Postgres", "tRPC", "Vercel"]
    },
    {
      title: "Software Development Engineer (Internship)",
      company: "Everest Systems, GmbH.",
      location: "Heidelberg, Germany",
      period: "June 2024 - Dec 2024",
      description: "Developed an HR hiring tool for an ERP product with smart planning features.",
      achievements: [
        "Developed the prototype using Python and Streamlit.",
        "Implemented this prototype into a React-based dashboard with TypeScript.",
        "Designed interactive D3 visualizations for data representation and analysis.",
        "Utilized OLAP for efficient data querying and management in large-scale workforce planning.",
      ],
      technologies: ["Python", "Streamlit", "TypeScript", "OLAP", "D3"]
    },
    {
      title: "Fullstack Developer",
      company: "Attributy Inc.",
      location: "Prishtina, Kosovo",
      period: "Sep 2022 - June 2024",
      description: "Helped develop and maintain an AdTech product, leveraging AI for marketing optimization.",
      achievements: [
        "Redesigned platform with React/Next.js, increasing clients by 120%.",
        "Developed new features with reusable React components and Tailwind CSS.",
        "Engineered backend solutions using TypeScript in a serverless framework.",
        "Ensured efficient data management using AWS S3, AWS DynamoDB and SQS."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Serverless", "AWS"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of Prishtina",
      location: "Prishtina, Kosovo",
      period: "2019 - 2024",
      description: "Focused on software engineering, hardware systems, and computer architecture.",
      achievements: [
        "Grade: 9.19/10.0",
        "Scholarships (3x)",
        "CyberSecurity competition winner"
      ]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Coding Dojo",
      location: "Online",
      period: "2022",
      description: "Intensive 6-month program covering development using the MERN stack.",
      achievements: [
        "Grade: 10.0/10.0",
        "Built many individual projects",
        "Led a successful group project"
      ]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="pb-2 text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-gradient-end bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{job.company}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium text-primary">{edu.school}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;