import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Battery, Signal, Thermometer, Activity, MapPin, Clock, Zap, AlertCircle, Radio } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function AgentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);

  // Mock agent data
  const agent = {
    id: id || "D-07",
    name: "Scout Delta-07",
    role: "Scout",
    status: "detecting",
    battery: 63,
    temperature: 55,
    signal: 82,
    stake: "1,250 TASHI",
    position: "Grid C4, Sector 7",
    lastHeartbeat: "2s ago",
    uptime: "4h 47m",
    tasksCompleted: 12,
    distance: "347m from base"
  };

  const recentActions = [
    { id: 1, action: "Detected thermal signature", time: "2m ago", type: "detection" },
    { id: 2, action: "Sent relay confirmation", time: "5m ago", type: "relay" },
    { id: 3, action: "Moved to Grid C4", time: "8m ago", type: "movement" },
    { id: 4, action: "Scanned zone successfully", time: "12m ago", type: "scan" },
    { id: 5, action: "Received new task assignment", time: "15m ago", type: "task" }
  ];

  const nearbyAgents = [
    { id: "D-02", role: "Relay", distance: "45m", signal: 98 },
    { id: "D-04", role: "Rescue", distance: "72m", signal: 88 },
    { id: "D-05", role: "Relay", distance: "103m", signal: 94 }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      exploring: "text-cyan-400 bg-cyan-500/20",
      detecting: "text-yellow-400 bg-yellow-500/20",
      relaying: "text-purple-400 bg-purple-500/20",
      converging: "text-emerald-400 bg-emerald-500/20",
      standby: "text-slate-400 bg-slate-500/20"
    };
    return colors[status] || "text-slate-400 bg-slate-500/20";
  };

  const getActionIcon = (type: string) => {
    const icons: Record<string, any> = {
      detection: AlertCircle,
      relay: Radio,
      movement: MapPin,
      scan: Activity,
      task: Clock
    };
    return icons[type] || Activity;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
            {agent.status}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-1">{agent.name}</h1>
        <p className="text-sm text-slate-400">{agent.id} • {agent.role}</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Health Meter */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Agent Health</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Battery */}
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-800" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - agent.battery / 100)}`}
                    className={agent.battery > 50 ? "text-emerald-400" : agent.battery > 20 ? "text-yellow-400" : "text-red-400"}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Battery className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-400">Battery</p>
              <p className="text-sm font-semibold">{agent.battery}%</p>
            </div>

            {/* Signal */}
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-800" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - agent.signal / 100)}`}
                    className="text-cyan-400"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Signal className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-400">Signal</p>
              <p className="text-sm font-semibold">{agent.signal}%</p>
            </div>

            {/* Temperature */}
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-800" />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - agent.temperature / 100)}`}
                    className={agent.temperature > 60 ? "text-red-400" : agent.temperature > 45 ? "text-orange-400" : "text-emerald-400"}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Thermometer className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-slate-400">Temp</p>
              <p className="text-sm font-semibold">{agent.temperature}°C</p>
            </div>
          </div>
        </motion.div>

        {/* Agent Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-3">Details</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Position</span>
              <span className="font-medium text-cyan-400">{agent.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Distance</span>
              <span className="font-medium">{agent.distance}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Stake Value</span>
              <span className="font-medium text-purple-400">{agent.stake}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Last Heartbeat</span>
              <span className="font-medium text-emerald-400">{agent.lastHeartbeat}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Uptime</span>
              <span className="font-medium">{agent.uptime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tasks Completed</span>
              <span className="font-medium">{agent.tasksCompleted}</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-3">Recent Activity</h3>
          <div className="space-y-2">
            {recentActions.map((action) => {
              const Icon = getActionIcon(action.type);
              return (
                <div key={action.id} className="flex items-start gap-3 p-3 bg-slate-950/50 rounded-lg">
                  <Icon className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{action.action}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{action.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Nearby Agents */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-3">Nearby Agents</h3>
          <div className="space-y-2">
            {nearbyAgents.map((nearby) => (
              <button
                key={nearby.id}
                onClick={() => navigate(`/agent/${nearby.id}`)}
                className="w-full flex items-center justify-between p-3 bg-slate-950/50 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <div className="text-left">
                    <p className="text-sm font-medium">{nearby.id}</p>
                    <p className="text-xs text-slate-400">{nearby.role}</p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <p className="text-slate-400">{nearby.distance}</p>
                  <p className="text-cyan-400">{nearby.signal}% signal</p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="flex items-center justify-center gap-2 p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl border border-purple-500/30 transition-colors">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Ping Agent</span>
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center justify-center gap-2 p-4 bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-700 transition-colors"
          >
            <Radio className={`w-4 h-4 ${isMuted ? 'text-slate-500' : 'text-slate-300'}`} />
            <span className={`text-sm font-medium ${isMuted ? 'text-slate-500' : 'text-slate-300'}`}>
              {isMuted ? 'Unmute' : 'Mute'} Alerts
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
