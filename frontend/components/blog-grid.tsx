import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Blog } from "@/lib/blog";
import Link from "next/link";

interface BlogGridProps {
  posts: Blog[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        No blogs available.
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.title}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              >
                <div className="space-y-4">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-lg leading-tight text-balance">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="flex-1">
                    <Button
                      variant="outline"
                      className="gap-2 p-1 h-auto font-semibold "
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
