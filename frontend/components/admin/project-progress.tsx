import { Button } from "../ui/button";

const projects = [
  {
    name: "E-commerce API",
    milestone: "MILESTONE 4: AUTH SYSTEM",
    progress: 80,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "AI Chatbot UI",
    milestone: "MILESTONE 2: INTEGRATION",
    progress: 45,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Unity Game Engine",
    milestone: "MILESTONE 1: PROTOTYPE",
    progress: 15,
    color: "from-orange-400 to-orange-600",
  },
];

export default function ProjectProgress() {
  return (
    <div className="bg-gray-50 border border-gray-200  rounded-lg p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base md:text-lg font-bold text-slate-900">
          Active Project Progress
        </h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx} className="flex items-center gap-3 md:gap-4">
            <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full `}>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray={`${2.83 * project.progress} 283`}
                  strokeLinecap="round"
                  className="transition-all"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "50px 50px",
                  }}
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs md:text-sm font-bold text-slate-900">
                  {project.progress}%
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-sm ">
                {project.name}
              </p>
              <p className="text-xs text-black ">{project.milestone}</p>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full mt-4 px-3 py-2 bg-indigo-200 text-slate-900 rounded-lg text-sm font-medium  ">
        View Project Details
      </Button>
    </div>
  );
}
