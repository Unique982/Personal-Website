"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Eye, Code2, BookMarked, Mail } from "lucide-react";

const stats = [
  {
    icon: Eye,
    label: "Total Views",
    value: "12,482",
    change: "+12%",
    changePositive: true,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Code2,
    label: "Active Projects",
    value: "8",
    change: "Stable",
    changePositive: true,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: BookMarked,
    label: "Blog Posts",
    value: "45",
    change: "+5%",
    changePositive: true,
    subtitle: "70% target reached this month",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: Mail,
    label: "Unread Messages",
    value: "3",
    change: "New",
    changePositive: true,
    badge: true,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="bg-gray-50 border border-gray-200 rounded-lg transition-shadow hover:shadow-md"
        >
          <CardHeader className="flex items-center justify-between pb-2">
            <div className={`p-2 rounded-lg ${stat.iconBg}`}>
              <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
            </div>
            <div className="text-right">
              {stat.changePositive ? (
                stat.change === "Stable" ? (
                  <span className="text-sm text-gray-500 font-medium">
                    {stat.change}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-sm font-medium text-green-500">
                    ↗ {stat.change}
                  </span>
                )
              ) : (
                <span className="text-sm font-medium text-red-500">
                  {stat.change}
                </span>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <CardTitle className="text-xl md:text-2xl text-gray-900">
              {stat.value}
            </CardTitle>
            <CardDescription className="text-sm text-gray-500">
              {stat.label}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
