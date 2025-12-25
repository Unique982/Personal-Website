"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I’m{" "}
                <span className="text-primary mt-12">Unique Neupane</span>
              </h1>

              <p className="text-muted-foreground text-lg font-mono">
                Full Stack Developer • Backend Focused
              </p>

              <p className="max-w-xl text-muted-foreground text-lg">
                I build scalable, secure, and impactful web applications using
                modern frontend and backend technologies. Passionate about
                creating EdTech platforms that make learning more accessible.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Hire Me <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {[
                ["2+", "Years Experience"],
                ["7+", "Projects Done"],
                ["3+", "Ongoing Projects"],
                ["2", "In Development"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="text-3xl font-bold text-primary">{v}</p>
                  <p className="text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE / EDITOR ================= */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* ===== COLORFUL CODE EDITOR ===== */}
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl  from-[#0f172a] via-[#020617] to-black">
                {/* Editor Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs font-mono text-gray-400">
                    portfolio.tsx
                  </span>
                </div>

                {/* Fake Code */}
                <div className="p-5 text-sm  space-y-2 text-gray-300 h-64 md:h-80 lg:h-96"></div>
              </div>

              {/* ===== FLOATING PROFILE CARD ===== */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-50 h-56 md:w-56 md:h-72 rounded-2xl overflow-hidden border bg-background shadow-2xl">
                  <img
                    src="https://imgs.search.brave.com/n-t7L9uvyT99itnm1Bhs0WEgHZfGNp2uVk0C9LP_y2w/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91LzEzMzg4MDQy/OD92PTQ"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  from-black/40" />
                </div>
              </div>

              {/* ===== FEATURE TOOLTIPS ===== */}
              <div className="hidden lg:flex absolute -right-10 top-24 flex-col gap-4">
                <Feature icon={Code} text="Clean Architecture" />
                <Feature icon={Database} text="Scalable Backend" />
                <Feature icon={Sparkles} text="Modern UI/UX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="group relative flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 shadow-lg hover:scale-105 transition">
      <Icon className="w-5 h-5 text-primary" />
      <span className="text-sm text-muted-foreground">{text}</span>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-primary/10 blur-xl -z-10" />
    </div>
  );
}
