"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full" id="about">
      {/* ===== HERO ===== */}
      <div className="bg-gradient-to-b from-card to-background py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground">
            Building robust systems that solve real problems
          </p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* IMAGE */}
          <div className="w-full max-w-md mx-auto lg:max-w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 448px, 600px"
                // quality={85}
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          {/* TEXT CONTENT */}
          <div className="flex flex-col gap-8">
            <h3 className="mb-4 text-2xl font-bold">
              Passionate Backend Developer & Problem Solver
            </h3>

            <div className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I am a backend developer passionate about building scalable,
                secure, and high-performance applications. I enjoy turning
                complex business problems into clean and efficient backend
                solutions.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                My experience includes developing REST APIs, working with
                databases, automation systems, and AI-powered workflows. I focus
                on writing maintainable code, optimizing performance, and
                designing systems that grow with real-world needs.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I have worked on multiple full-stack projects including EdTech
                SaaS platforms, hospital management systems, blog management
                systems, and news portals. I am experienced in role-based
                authentication, JWT security, and designing APIs that are robust
                and scalable.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In addition to backend development, I am comfortable with
                frontend technologies like React.js and Next.js, which allows me
                to bridge the gap between user experience and server-side
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
