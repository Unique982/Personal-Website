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
import { Blog, getAllBlog } from "@/lib/blog";

export default function BlogManagement() {
  const allBlogs = getAllBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const blogsPerPage = 5;
  // Filter logic
  const filteredBlogs = allBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.category.toLowerCase().includes(search.toLowerCase())
  );
  const postsPerPage = 12;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allBlogs.length / postsPerPage);

  // const handleDelete = (id: string) => {
  //   if (confirm("Are you sure you want to delete this blog?")) {
  //     setBlogs(allBlogs.filter((b) => b.id !== id));
  //   }
  // };
  return (
    <div className="space-y-4">
      <Card className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-5">
        <CardHeader className="mb-5">
          <CardTitle className="text-xl font-bold text-slate-900">
            Blog Management
          </CardTitle>
          <p className="text-sm text-gray-500">
            Manage all Blog projects, update status, edit or delete Blog easily.
          </p>
        </CardHeader>

        <CardContent>
          {/* Add button + Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3">
            {/* <Link href="/admin/dashboard/projects/add"> */}
            <Button className="px-4 py-2 bg-blue-100 text-blue-900 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
              + Add New Blog
            </Button>
            {/* </Link> */}
            <Input
              placeholder="🔍 Search project by title..."
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
                    Title
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    Description
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    Category
                  </TableHead>
                  <TableHead className="px-4 py-3 text-slate-950">
                    ReadTime
                  </TableHead>
                  <TableHead className="px-4 py-3 text-right text-slate-950">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentBlogs.map((blog) => (
                  <TableRow
                    key={blog.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="px-4 py-3 text-sm text-slate-900">
                      {blog.title.substring(0, 20)}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-gray-600">
                      {blog.description.substring(0, 20)}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-gray-700">
                      {blog.category}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-gray-700">
                      {/* <button
                        onClick={() => toggleStatus(blog.id)}
                        className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors ${
                          blog.status === "Completed"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {blog.status}
                      </button> */}
                      {blog.readTime}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-right flex gap-2 justify-end">
                      <button className="flex items-center gap-1 px-3 py-1 text-xs text-blue-900 bg-blue-100 rounded hover:bg-blue-200 transition-colors">
                        <Edit className="w-3 h-3" /> Edit
                      </button>
                      <button
                        // onClick={() => handleDelete(blog.id)}
                        className="flex items-center gap-1 px-3 py-1 text-xs text-red-600 bg-red-100 rounded hover:bg-red-200 transition-colors"
                      >
                        <Trash className="w-5 h-5" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}

                {currentBlogs.length === 0 && (
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
