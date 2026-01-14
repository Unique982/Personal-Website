"use client";
import { Bell, LogOut, Search, Settings, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Optional if used with sidebar

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-40">
      {/* LEFT */}
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Button (optional) */}
        <button
          className="lg:hidden  p-2 rounded-md hover:bg-slate-100 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="bg-black" />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects, tasks, clients..."
            className="w-full bg-white border border-slate-300 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-600 relative transition"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
                <span className="font-semibold text-sm text-slate-800">
                  Notifications
                </span>
                <button className="text-indigo-600 text-xs font-medium">
                  Mark all as read
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto">
                <div className="p-4 text-sm text-slate-500 text-center">
                  No notifications
                </div>
              </div>
              <div className="p-3 text-center border-t border-slate-100">
                <button className="text-sm text-slate-500 font-medium">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 rounded-full transition"
          >
            <div className="text-right hidden sm:flex flex-col">
              <p className="text-xs font-semibold text-slate-800 capitalize">
                Admin
              </p>
              <p className="text-[10px] text-slate-400">
                devunique123@gmail.com
              </p>
            </div>
            <img
              src="/profile.jpg"
              className="w-8 h-8 rounded-full object-cover"
              alt="Profile"
            />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-56 sm:w-60 bg-white border border-slate-200 rounded-xl shadow-xl z-50 p-2">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                <User size={16} /> Profile
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg">
                <Settings size={16} /> Settings
              </button>
              <div className="h-px bg-slate-200 my-2"></div>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                <LogOut size={16} /> Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
