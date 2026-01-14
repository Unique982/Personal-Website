import { MessageSquare, GitBranch, AlertTriangle, Star } from "lucide-react";

const activities = [
  {
    icon: MessageSquare,
    title: 'New comment on "The future of React"',
    description: "Sarah Miller · Great insights on Server Components...",
    time: "2m ago",
    color: "text-blue-500",
  },
  {
    icon: GitBranch,
    title: "Project CloudSync updated",
    description: "Deployed version 1.2.0-beta to production.",
    time: "45m ago",
    color: "text-green-500",
  },
  {
    icon: AlertTriangle,
    title: "SSL Certificate Expiration",
    description: "Your domain 'alexrivera.dev' expires in 12 days.",
    time: "3h ago",
    color: "text-yellow-500",
  },
  {
    icon: Star,
    title: "New GitHub Star",
    description: "User 'dev_master99' starred your 'Next-Portfolio' repo.",
    time: "5h ago",
    color: "text-purple-500",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-gray-50 border border-gray-200  rounded-lg p-4 md:p-5 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-bold text-slate-900">
          Recent Activity
        </h2>
        <a
          href="#"
          className="text-xs md:text-sm text-indigo-700 text-bold transition-colors"
        >
          View All
        </a>
      </div>

      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex gap-3 pb-3 border-b border-gray-200 last:border-b-0"
          >
            <div
              className={` w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center ${activity.color}`}
            >
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-slate-900 text-sm truncate">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {activity.description}
              </p>
            </div>
            <span className="text-xs text-muted-foreground flex-shrink-0 whitespace-nowrap">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
