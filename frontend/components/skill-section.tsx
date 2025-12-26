"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export function TechSkillsSection() {
  const skills = [
    {
      name: "JavaScript",
      image: "/js.png",
    },
    {
      name: "TypeScript",
      image: "/typescript.png",
    },
    {
      name: "Node.js",
      image:
        "https://imgs.search.brave.com/8vvoZfcLX3RTeOVZlPlvpxTJkJIP7U7eozWs83HkAx8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL25vZGUt/anMtaWNvbi0yLnBu/Zw",
    },
    {
      name: "Express.js",
      image:
        "https://imgs.search.brave.com/aKPJGHohETaD3LzBBSiq7P-Qq9WFJw_sG9ZXGxzChyc/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL2V4cHJl/c3MtanMtaWNvbi0x/MC5wbmc",
    },
    {
      name: "React.js",
      image: "/react.png",
    },
    {
      name: "Next.js",
      image:
        "https://imgs.search.brave.com/2ZrQa2_uxFs306DpffrqV-yCmrgBD-OoizDQ9ZD1ka4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ0LzIvbmV4dC1q/cy1pY29uLWxvZ28t/cG5nX3NlZWtsb2dv/LTQ0OTgyNS5wbmc",
    },
    {
      name: "PostgreSQL",

      image:
        "https://imgs.search.brave.com/I7blnnsAQUfEbvh890WKjjy8RghN4CQCFSFO6uX770s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9wb3N0/Z3Jlc3FsLWljb24v/cG9zdGdyZXNxbC1p/Y29uLTExLmpwZw",
    },
    {
      name: "MongoDB",
      image:
        "https://imgs.search.brave.com/BLnUQkwzO3b9vHhq3Y7DLP1XAWNWLgwYbOr7eYZ4UAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Rl/dGFpbi9zdmctbG9n/b3MvbWFzdGVyL3N2/Zy9tL21vbmdvZGIt/aWNvbi0xLnN2Zw",
    },
  ];

  return (
    <section className="w-full" id="skill">
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
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={48}
                      height={48}
                    />
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
