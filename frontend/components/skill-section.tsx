"use client";

import {
  Code2,
  Braces,
  Server,
  Cpu,
  Layers,
  Wind,
  Database,
  Leaf,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TechSkillsSection() {
  const skills = [
    { name: "JavaScript", icon: Code2 },
    { name: "TypeScript", icon: Braces },
    { name: "Node.js", icon: Code2 },
    { name: "Express.js", icon: Cpu },
    { name: "React.js", icon: Layers },
    { name: "Next.js", icon: Wind },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Leaf },
  ];

  return (
    <section className="w-full">
      {/* HERO */}
      <div className="bg-gradient-to-b from-card to-background py-12 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Tech Stack
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tools & Technologies I Work With
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="max-w-6xl mx-auto px-2 py-12 sm:py-16">
        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-border bg-card px-6 py-6 text-center transition ">
                    <skill.icon className="h-8 w-8 text-foreground" />
                  </div>
                </TooltipTrigger>

                <TooltipContent side="bottom">
                  <span className="text-sm font-medium">{skill.name}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
