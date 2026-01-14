"use client";

import ActivityFeed from "@/components/admin/activity-feed";
import ProjectProgress from "@/components/admin/project-progress";
import StatsGrid from "@/components/admin/stats-grid";
import TrafficChart from "@/components/admin/traffic-chart";

export default function AdminDashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-slate-50 min-h-screen space-y-6">
      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto space-y-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
          Welcome back, Unique Neupane
        </h1>
        <p className="text-slate-700">
          You have 12 active projects, 5 new portfolio visitors, and 2 client
          messages waiting.
        </p>
      </div>

      {/* Dashboard Overview */}
      <StatsGrid />
      <TrafficChart />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <ActivityFeed />

        {/* Project Progress */}
        <ProjectProgress />
      </div>
    </div>
  );
}
