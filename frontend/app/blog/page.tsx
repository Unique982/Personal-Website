"use client";

import { useState } from "react";
import { Navbar } from "@/components/header";
import Footer from "@/components/footer";
import BlogGrid from "@/components/blog-grid";
import { getAllBlog } from "@/lib/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  const allBlogs = getAllBlog();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allBlogs.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Back */}
      <div className="fixed top-20 left-8 z-50">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Articles</h1>
          <p className="text-muted-foreground mt-4">
            All blog posts are listed here
          </p>
        </div>
      </section>

      {/* Blogs */}
      <BlogGrid posts={currentBlogs} />

      {/* Pagination */}
      {allBlogs.length > postsPerPage && (
        <div className="flex justify-center gap-2 py-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md border ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-background"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}
