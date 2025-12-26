import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/project";
import { Navbar } from "@/components/header";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Back Button */}
        <div className="fixed top-20 left-8 z-50">
          <Link href="/projects">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Project
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <section className="py-12 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>

              {/* Banner Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    OverView
                  </h2>
                  <p className="text-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshots */}
                {project.screenshots.length > 0 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">
                      Screenshots
                    </h2>
                    <div className="grid gap-6">
                      {project.screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className="w-full rounded-xl overflow-hidden border border-border"
                        >
                          <Image
                            src={screenshot || "/placeholder.svg"}
                            alt={`Screenshot ${index + 1}`}
                            width={1200} // Optional: original width
                            height={700} // Optional: original height
                            className="object-contain w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-6 bg-card border-border sticky top-24">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-border">
                      {/* Status Badge */}
                      {/* Status Badge */}
                      {project.status && (
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Status
                          </h3>
                          <Badge
                            className={`mt-1 ${
                              project.status === "completed"
                                ? "bg-green-600 text-white"
                                : project.status === "ongoing"
                                ? "bg-red-600 text-white"
                                : "bg-yellow-400 text-black"
                            }`}
                          >
                            {project.status.charAt(0).toUpperCase() +
                              project.status.slice(1)}
                          </Badge>
                        </div>
                      )}

                      {/* Links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="space-y-3 pt-3 border-t border-border">
                          <h3 className="font-semibold text-foreground">
                            Links
                          </h3>
                          <div className="space-y-2">
                            {project.liveUrl && (
                              <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-start bg-transparent"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Live Demo
                                </Button>
                              </Link>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-start bg-transparent"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  GitHub Repo
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
