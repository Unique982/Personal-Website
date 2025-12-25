import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/project";
import ProjectsGrid from "./projects-grid";

// Sample Projects Data

export default function ProjectsSection() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              A selection of my recent work showcasing different technologies
              and design approaches.
            </p>
          </div>
        </div>
      </section>

      <ProjectsGrid limit={3} />
      <div className="text-center mt-2">
        <Link href="/projects">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
