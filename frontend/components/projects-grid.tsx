import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Github } from "lucide-react";
import { getAllProjects, Project } from "@/lib/project";
interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        No Project available.
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all group rounded-2xl shadow-md flex flex-col hover:shadow-lg "
              >
                {/* Project Image */}
                <div className="relative w-full h-64 md:h-80 lg:h-72 bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Project Feature
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <h4 className="text-sm font-semibold text-white mb-1">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-muted text-muted-foreground text-xs"
                        >
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
