import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllBlog, getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/header";

export async function generateStaticParams() {
  const posts = getAllBlog();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Back */}
        <div className="fixed top-20 left-8 z-50">
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Meta Info */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  {post.title}
                </h1>

                {/* Author Info */}
                {/* <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">
                      {post.author.name}
                    </div>
                    <div className="text-sm text-muted-foreground">Author</div>
                  </div>
                </div> */}
              </div>

              {/* Cover Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-slate prose-invert max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-line space-y-6">
                  {post.longDescription
                    .split("\n\n")
                    .map((paragraph, index) => {
                      // Handle markdown-style headings
                      if (paragraph.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-2xl font-bold text-foreground mt-8 mb-4"
                          >
                            {paragraph.replace("## ", "")}
                          </h2>
                        );
                      }
                      // Handle code blocks
                      if (paragraph.includes("```")) {
                        const codeContent = paragraph
                          .replace(/```\w*\n?/g, "")
                          .trim();
                        return (
                          <pre
                            key={index}
                            className="bg-muted p-4 rounded-lg overflow-x-auto my-4"
                          >
                            <code className="text-sm text-foreground font-mono">
                              {codeContent}
                            </code>
                          </pre>
                        );
                      }
                      // Handle list items
                      if (
                        paragraph.match(/^\d+\./m) ||
                        paragraph.match(/^-/m)
                      ) {
                        const items = paragraph
                          .split("\n")
                          .filter((item) => item.trim());
                        return (
                          <ul key={index} className="space-y-2 my-4">
                            {items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{item.replace(/^(\d+\.|-)\s*/, "")}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      // Regular paragraphs
                      return (
                        <p key={index} className="text-base leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
