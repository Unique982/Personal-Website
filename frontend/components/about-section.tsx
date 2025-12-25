"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full">
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
                src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/491799846_1169284674662162_1326970635664012583_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WSdCkkL6FUAQ7kNvwEA2-vG&_nc_oc=AdlMYbXM1z7vwGyhOr3zGrJeCIPFfXsFnl9Xc0KkiAXi2NkDE3vMSrvF5c-BJu3oD0wfPZyVFRez4BEWGFwWBsJd&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=dv2GbughnXfBWaSvzdTx_w&oh=00_AflqchnsBb8MDniTK3jS9PdxuMM8KM9RIxCjtrawv2YAMA&oe=6952EDA3"
                alt="Profile"
                fill
                className="object-cover"
                priority
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
