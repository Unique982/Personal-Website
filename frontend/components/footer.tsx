"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Facebook,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-extrabold text-sky-400 mb-3">About</h2>
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
            {["Home", "About Me", "Projects", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:text-sky-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
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
              <span>uniqueneupane@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social / Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Connect</h3>

          <p className="text-gray-400 mb-3">
            Follow me on social media to see my latest projects, tutorials, and
            updates.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <a
              href="https://github.com/khemrajnyaupane"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://facebook.com/khemrajnyaupane"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://youtube.com/@khemrajnyaupane"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <Youtube size={24} />
            </a>
          </div>

          {/* Optional: Email Subscribe */}
          <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-transparent text-gray-200 focus:outline-none"
            />
            <button className="bg-sky-600 hover:bg-sky-700 px-4 py-3 flex items-center justify-center transition">
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-gray-500">
        © 2025 Unique Neupane. All Rights Reserved.
      </div>
    </footer>
  );
}
