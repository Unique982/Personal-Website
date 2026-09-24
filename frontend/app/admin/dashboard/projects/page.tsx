"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

interface Project {
  id: number;
  name: string;
  milestone: string;
  progress: number;
  status: "Completed" | "Ongoing" | "Pending";
}

const initialProjects: Project[] = [
  {
    id: 1,
    name: "E-commerce API",
    milestone: "MILESTONE 4: AUTH SYSTEM",
    progress: 80,
    status: "Completed",
  },
  {
    id: 2,
    name: "AI Chatbot UI",
    milestone: "MILESTONE 2: INTEGRATION",
    progress: 45,
    status: "Pending",
  },
  {
    id: 3,
    name: "Unity Game Engine",
    milestone: "MILESTONE 1: PROTOTYPE",
    progress: 15,
    status: "Completed",
  },
  {
    id: 4,
    name: "Portfolio Website",
    milestone: "MILESTONE 3: UI/UX",
    progress: 70,
    status: "Completed",
  },
  {
    id: 5,
    name: "React Dashboard",
    milestone: "MILESTONE 2: COMPONENTS",
    progress: 50,
    status: "Completed",
  },
  {
    id: 6,
    name: "Node API",
    milestone: "MILESTONE 1: CRUD",
    progress: 30,
    status: "Ongoing",
  },
];

export default function ProjectManagementTable() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const toggleStatus = (id: number) => {
    setProjects(
      projects.map((p) =>
        p.id === id
          ? {
              ...p,
              status:
                p.status === "Completed"
                  ? "Ongoing"
                  : p.status === "Ongoing"
                  ? "Pending"
                  : "Completed",
            }
          : p
      )
    );
  };

  // Filtered projects
  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination calculation
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="space-y-4">
      <Card className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-5">
        <CardHeader className="mb-5">
          <CardTitle className="text-xl font-bold text-slate-900">
            Project Management
          </CardTitle>
          <p className="text-sm text-gray-500">
            Manage all projects, update status, edit or delete projects easily.
          </p>
        </CardHeader>

        <CardContent>
          {/* Add button + Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
            <Link href="/admin/dashboard/projects/add">
              <Button className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                + Add New Project
              </Button>
            </Link>
            <Input
              placeholder="🔍 Search project by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 text-black placeholder-gray-400"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Table className="w-full text-left border-collapse">
              <TableHeader className="bg-gray-100">
                <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                  <TableHead className="px-4 py-3 text-slate-950">
                    Project Name
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    Project Description
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    Progress
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    Project Status
                  </TableHead>
                  <TableHead className="px-4 py-3 text-right text-slate-950">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentProjects.map((project) => (
                  <TableRow
                    key={project.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="px-4 py-3 text-sm text-slate-900">
                      {project.name}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-gray-600">
                      {project.milestone}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-gray-700">
                      {project.progress}%
                    </TableCell>

                    <TableCell className="px-4 py-3">
                      <button
                        onClick={() => toggleStatus(project.id)}
                        className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {project.status}
                      </button>
                    </TableCell>

                    <TableCell className="px-4 py-3 text-right flex gap-2 justify-end">
                      <button className="flex items-center gap-1 px-3 py-1 text-xs text-blue-900 bg-blue-100 rounded hover:bg-blue-200 transition-colors">
                        <Edit className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="flex items-center gap-1 px-3 py-1 text-xs text-red-600 bg-red-100 rounded hover:bg-red-200 transition-colors"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}

                {currentProjects.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="px-4 py-5 text-center text-gray-400"
                    >
                      No projects found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                    currentPage === i + 1
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="px-3 py-1 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
