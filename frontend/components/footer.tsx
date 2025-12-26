"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/Unique982",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/unique-neupane-10a108281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "developerunique123@gmail.com",
      label: "Email",
    },
  ];
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-extrabold text-sky-400 mb-3">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to my personal website! I am a web developer and passionate
            about building modern, responsive, and interactive web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {["Home", "About", "Skill", "Projects", "Blog", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-sky-400 transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Contact Me
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <MapPin size={20} className="text-sky-400 mt-1" />
              <span>Kathmandu, Nepal</span>
            </li>

            <li className="flex items-start gap-2">
              <Phone size={20} className="text-sky-400 mt-1" />
              <span>+977 9864728224</span>
            </li>

            <li className="flex items-start gap-2">
              <Mail size={20} className="text-sky-400 mt-1" />
              <span>developerunique123@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social / Subscribe */}
        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-gray-400 text-sm mb-4">
            Follow me for updates and new projects.
          </p>

          <div className="flex gap-3 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg
                           bg-gray-800 hover:bg-sky-600 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Subscribe */}
          <div className="flex rounded-lg overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none"
            />
            <button className="bg-sky-600 hover:bg-sky-700 px-4 flex items-center">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Unique Neupane. All rights reserved.
      </div>
    </footer>
  );
}
