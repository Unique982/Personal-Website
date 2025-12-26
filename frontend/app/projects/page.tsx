"use client";
import Footer from "@/components/footer";
import { getAllProjects } from "@/lib/project";
import ProjectsGrid from "@/components/projects-grid";

import { useState } from "react";
import { Navbar } from "@/components/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
export default function ProjectsPage() {
  const projects = getAllProjects();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 12;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProject = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Hero Section */}
        <div className="fixed top-20 left-8 z-50">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 shadow-md bg-background"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
            </Button>
          </Link>
        </div>
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
                Projects
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                A showcase of my recent work and development projects
              </p>
            </div>
          </div>
        </section>
        <ProjectsGrid projects={currentProject} />
        {projects.length > projectsPerPage && (
          <div className="flex justify-center gap-2 mt-4 py-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
