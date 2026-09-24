"use client";

import type React from "react";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const whatsappNumber = "977986472822";

    const whatsappMessage = `
Hello Unique 👋

I contacted you through your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);

    form.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "developerunique123@gmail.com",
      href: "mailto:developerunique123@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977-9864728224",
      href: "tel:+9779864728224",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dang, Nepal",
      href: "https://maps.app.goo.gl/7vfKCQhbyDNmzvxAA",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-muted/30 px-4 py-12 md:py-32"
    >
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
              Get In Touch
            </h2>

            <p className="mx-auto max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
              Have a project in mind or want to collaborate? Feel free to reach
              out and let's create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <Card key={info.title} className="p-6">
                    <a
                      href={info.href}
                      target={
                        info.title === "Location" ? "_blank" : undefined
                      }
                      rel={
                        info.title === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <div>
                        <p className="mb-1 font-semibold">
                          {info.title}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}

              {/* WhatsApp Card */}
              <Card className="p-6">
                <a
                  href="https://wa.me/9779864728224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 transition-colors group-hover:bg-green-500/20">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    <p className="mb-1 font-semibold">WhatsApp</p>

                    <p className="text-sm text-muted-foreground">
                      Chat directly on WhatsApp
                    </p>
                  </div>
                </a>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 sm:p-8 lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>

                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="How can I help you?"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <MessageCircle className="h-4 w-4" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Your message will open securely in WhatsApp.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}