"use client";

import { Card } from "@/components/ui/card";
import { Code, Database, Cpu, Zap, Shield, Workflow } from "lucide-react";

export const metadata = {
  title: "Services | Khemraj Neupane - Full-Stack Developer",
  description:
    "Professional services including WordPress, PHP, Web Development, App Development, and Automation",
};

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building modern, responsive websites and web applications using WordPress, PHP, HTML, CSS, and JavaScript.",
    features: [
      "WordPress Theme & Plugin Development",
      "Custom PHP Web Applications",
      "HTML5, CSS3, Tailwind & Bootstrap",
      "Responsive Design & Cross-Browser Compatibility",
    ],
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description:
      "Creating secure, scalable backend systems with database integration and RESTful APIs.",
    features: [
      "PHP & Laravel Development",
      "Node.js & Express.js Backend",
      "MySQL & PostgreSQL Databases",
      "JWT Authentication & Role-Based Access",
    ],
  },
  {
    icon: Cpu,
    title: "App Development",
    description:
      "Developing cross-platform applications and mobile-friendly web apps.",
    features: [
      "Web & Mobile App Development",
      "React.js & Next.js Frontend",
      "API Integration & Data Handling",
      "Performance & Scalability Optimization",
    ],
  },
  {
    icon: Zap,
    title: "Automation & AI Workflows",
    description:
      "Implementing automation and AI-powered workflows to save time and improve productivity.",
    features: [
      "Automated Task & Script Development",
      "AI / ML Workflow Integration",
      "Productivity Enhancement",
      "SaaS Platform Automation",
    ],
  },
  {
    icon: Shield,
    title: "Security & Testing",
    description:
      "Ensuring applications are secure, reliable, and maintainable with testing and audits.",
    features: [
      "Unit & Integration Testing",
      "Security Audits & Vulnerability Fixes",
      "Code Reviews & Best Practices",
      "Authentication & Authorization",
    ],
  },
  {
    icon: Code,
    title: "Full Stack Web Development",
    description:
      "Building scalable, responsive websites and web applications with modern technologies for both frontend and backend.",
    features: [
      "React.js & Next.js Frontend",
      "Node.js & Express.js Backend",
      "Laravel & PHP Development",
      "RESTful API Design",
    ],
  },
];

export default function ServicesSection() {
  return (
    <div className="min-h-screen flex flex-col" id="services">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Professional services aligned with my CV and real-world experience
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary transition-all group"
                  >
                    <div className="space-y-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
