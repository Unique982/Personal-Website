"use client";
import {
  LayoutDashboard,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
  X,
  Wrench,
  Info,
  FolderOpen,
  BookOpen,
} from "lucide-react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.FC<any>;
  href: string;
};

export default function Sidebar() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Overview",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      id: "project",
      label: "Project",
      icon: FolderOpen,
      href: "/admin/dashboard/projects",
    },
    {
      id: "services",
      label: "Services",
      icon: Wrench,
      href: "/admin/dashboard/services",
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: BookOpen,
      href: "/admin/dashboard/blog",
    },
    {
      id: "aboutus",
      label: "About Us",
      icon: Info,
      href: "/admin/dashboard/about",
    },
    {
      id: "messages",
      label: "Messages",
      icon: MessageCircle,
      href: "/admin/dashboard/contact",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/dashboard/setting",
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md  bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-slate-700" />
        ) : (
          <Menu className="h-5 w-5 text-slate-700" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-40
          h-[calc(100vh-4rem)] w-64
          bg-white border-r border-slate-200
          flex flex-col p-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:h-full
        `}
      >
        {/* Profile Section */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-full border-4 border-white shadow-md overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="User Profile"
              width={100}
              height={100}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Unique Neupane
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold -mt-1">
              Portfolio
            </span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                router.push(item.href);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  currentPage === item.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 "
                    : "text-slate-700 hover:bg-slate-100"
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom Operations */}
        <div className="mt-auto border-t border-slate-100 pt-4 px-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition">
            <LogOut size={18} /> Log Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
