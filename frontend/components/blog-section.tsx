import { Button } from "@/components/ui/button";
import { getAllBlog } from "@/lib/blog";
import BlogGrid from "./blog-grid";
import Link from "next/link";

export function BlogSection() {
  const posts = getAllBlog().slice(0, 6);
  return (
    <section id="blog" className="py-12 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Thoughts on web development, design patterns, and building better
              digital experiences.
            </p>
          </div>

          <BlogGrid posts={posts} />
          <div className="text-center mt-2">
            <Link href={"/blog"}>
              <Button size="lg" variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
