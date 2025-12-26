"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <Link href={"#contact"}>
                <Button size="lg" className="gap-2">
                  Hire Me <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href={"/projects"}>
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
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

          {/* ================= RIGHT IMAGE WITH TOOLTIPS ================= */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 flex-1 w-full max-w-md md:max-w-lg">
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden border border-gray-200 bg-white/20 shadow-md">
              <Image
                src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/491799846_1169284674662162_1326970635664012583_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=WSdCkkL6FUAQ7kNvwEA2-vG&_nc_oc=AdlMYbXM1z7vwGyhOr3zGrJeCIPFfXsFnl9Xc0KkiAXi2NkDE3vMSrvF5c-BJu3oD0wfPZyVFRez4BEWGFwWBsJd&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=dv2GbughnXfBWaSvzdTx_w&oh=00_AflqchnsBb8MDniTK3jS9PdxuMM8KM9RIxCjtrawv2YAMA&oe=6952EDA3"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Feature Tooltips */}
            <div className="hidden lg:flex absolute -right-10 top-80 flex-col gap-4">
              <Feature icon={Code} text="Clean Architecture" />
              <Feature icon={Database} text="Scalable Backend" />
              <Feature icon={Sparkles} text="Modern UI/UX" />
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
