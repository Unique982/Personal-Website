import { Navbar } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { TechSkillsSection } from "@/components/skill-section";
// </CHANGE>

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TechSkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
      {/* </CHANGE> */}
    </div>
  );
}
