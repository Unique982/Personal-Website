import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  const posts = [
    {
      title: "How AI Is Changing Modern Web Applications",
      excerpt:
        "Artificial Intelligence is no longer limited to research labs. From smart search to personalized dashboards, AI is now deeply integrated into modern web applications. This article explains real-world use cases of AI in web development.",
      date: "Dec 18, 2024",
      readTime: "7 min read",
      category: "AI",
    },
    {
      title: "Building a Scalable Backend with Node.js",
      excerpt:
        "A strong backend is the backbone of any application. In this post, we explore how Node.js helps developers build fast, scalable, and maintainable backend systems using APIs, databases, and clean architecture.",
      date: "Dec 12, 2024",
      readTime: "9 min read",
      category: "Backend",
    },
    {
      title: "Frontend vs Backend: What Should You Learn First?",
      excerpt:
        "Many beginners struggle to choose between frontend and backend development. This article explains the core differences, real responsibilities, and helps you decide the right learning path based on your goals.",
      date: "Dec 6, 2024",
      readTime: "6 min read",
      category: "Frontend",
    },
    {
      title: "Using REST APIs to Connect Frontend and Backend",
      excerpt:
        "REST APIs act as a bridge between frontend and backend systems. Learn how APIs work, why they matter, and how data flows securely between client and server in modern software applications.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "API",
    },
    {
      title: "Introduction to Automation in Software Development",
      excerpt:
        "Automation helps developers save time and reduce errors. This blog covers simple automation examples like cron jobs, background workers, and AI-powered workflows used in real software projects.",
      date: "Nov 20, 2024",
      readTime: "7 min read",
      category: "Automation",
    },
    {
      title: "Clean Code Principles Every Developer Should Follow",
      excerpt:
        "Writing clean code makes software easier to maintain and scale. This article explains simple clean code principles with real examples that every frontend and backend developer should understand.",
      date: "Nov 12, 2024",
      readTime: "10 min read",
      category: "Software",
    },
  ];

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
                  <Button
                    variant="outline"
                    className="gap-2 p-0 h-auto font-semibold "
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Articles
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
