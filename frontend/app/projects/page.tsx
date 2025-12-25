"use client";
import Footer from "@/components/footer";
import { getAllProjects } from "@/lib/project";
import ProjectsGrid from "@/components/projects-grid";

import { useState } from "react";
import { Navbar } from "@/components/header";
export default function ProjectsPage() {
  const projects = getAllProjects();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentCourses = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {/* Hero Section */}
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
        <ProjectsGrid />
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

        <Footer />
      </div>
    </>
  );
}
