"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { day: "MON", desktop: 2400, mobile: 1200 },
  { day: "TUE", desktop: 3200, mobile: 1400 },
  { day: "WED", desktop: 2800, mobile: 1600 },
  { day: "THU", desktop: 3600, mobile: 1800 },
  { day: "FRI", desktop: 4200, mobile: 2000 },
  { day: "SAT", desktop: 3800, mobile: 2200 },
  { day: "SUN", desktop: 2900, mobile: 1500 },
];

export default function TrafficChart() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-base md:text-lg font-bold text-slate-900 mb-1">
          Site Traffic Trend
        </h2>
        <p className="text-xs md:text-sm text-gray-500">
          Comparison of desktop vs mobile traffic
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.8} />{" "}
              <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6b7280" stopOpacity={0.3} />{" "}
              <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />{" "}
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
            }}
            labelStyle={{ color: "#1e3a8a" }}
          />
          <Legend />
          {/* Desktop */}
          <Area
            type="monotone"
            dataKey="desktop"
            stroke="#1e3a8a"
            fillOpacity={1}
            fill="url(#colorDesktop)"
            name="DESKTOP"
            strokeWidth={2}
          />
          {/* Mobile */}
          <Area
            type="monotone"
            dataKey="mobile"
            stroke="#6b7280"
            strokeDasharray="5 5"
            fillOpacity={1}
            fill="url(#colorMobile)"
            name="MOBILE"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
