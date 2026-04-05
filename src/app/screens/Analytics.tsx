import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, TrendingDown, Activity, Zap, Clock, Target } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function Analytics() {
  const navigate = useNavigate();

  const missionData = [
    { day: "Mon", success: 8, failed: 1 },
    { day: "Tue", success: 12, failed: 2 },
    { day: "Wed", success: 10, failed: 1 },
    { day: "Thu", success: 15, failed: 0 },
    { day: "Fri", success: 14, failed: 3 },
    { day: "Sat", success: 11, failed: 1 },
    { day: "Sun", success: 13, failed: 2 }
  ];

  const batteryData = [
    { hour: "00:00", avg: 85 },
    { hour: "04:00", avg: 78 },
    { hour: "08:00", avg: 65 },
    { hour: "12:00", avg: 72 },
    { hour: "16:00", avg: 58 },
    { hour: "20:00", avg: 81 }
  ];

  const agentRoles = [
    { name: "Scout", value: 45, color: "#22d3ee" },
    { name: "Relay", value: 25, color: "#a855f7" },
    { name: "Rescue", value: 20, color: "#10b981" },
    { name: "Support", value: 10, color: "#f59e0b" }
  ];

  const metrics = [
    {
      label: "Mission Success Rate",
      value: "94.2%",
      change: "+2.3%",
      trend: "up",
      icon: Target,
      color: "emerald"
    },
    {
      label: "Avg. Response Time",
      value: "4.2m",
      change: "-0.8m",
      trend: "up",
      icon: Clock,
      color: "cyan"
    },
    {
      label: "Agent Uptime",
      value: "98.7%",
      change: "+1.2%",
      trend: "up",
      icon: Activity,
      color: "purple"
    },
    {
      label: "Network Latency",
      value: "42ms",
      change: "+5ms",
      trend: "down",
      icon: Zap,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
      cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
      purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
      orange: { bg: "bg-orange-500/20", text: "text-orange-400" }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-1">Analytics</h1>
        <p className="text-sm text-slate-400">Performance metrics and insights</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const colorClasses = getColorClasses(metric.color);
            const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
            
            return (
              <motion.div
                key={metric.label}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4 rounded-xl border border-slate-800/50 ${colorClasses.bg}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <Icon className={`w-4 h-4 ${colorClasses.text}`} />
                  <div className={`flex items-center gap-1 text-xs ${
                    metric.trend === "up" ? "text-emerald-400" : "text-red-400"
                  }`}>
                    <TrendIcon className="w-3 h-3" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <p className="text-xs text-slate-400">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Success Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Mission Outcomes (7 Days)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={missionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
              />
              <Bar dataKey="success" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="failed" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded" />
              <span className="text-slate-400">Success</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded" />
              <span className="text-slate-400">Failed</span>
            </div>
          </div>
        </motion.div>

        {/* Battery Efficiency */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Battery Efficiency</h3>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={batteryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="hour" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  fontSize: "12px"
                }}
              />
              <Line
                type="monotone"
                dataKey="avg"
                stroke="#22d3ee"
                strokeWidth={3}
                dot={{ fill: "#22d3ee", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Agent Role Distribution */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Agent Role Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={agentRoles}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {agentRoles.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    fontSize: "12px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {agentRoles.map((role) => (
              <div key={role.name} className="flex items-center gap-2 text-xs">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: role.color }}
                />
                <span className="text-slate-400">{role.name}</span>
                <span className="text-slate-300 ml-auto">{role.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-3">This Week</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Missions</span>
              <span className="font-semibold">83</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Avg. Duration</span>
              <span className="font-semibold">47m 32s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Agents Deployed</span>
              <span className="font-semibold">248</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Data Synced</span>
              <span className="font-semibold">12.4 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Consensus Events</span>
              <span className="font-semibold">1,247</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
