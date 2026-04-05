import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Activity, AlertTriangle, Users, Battery, Signal, MapPin, Clock, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function MissionControl() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(67);

  // Mock mission data
  const mission = {
    id: id || "MSN-2847",
    title: "Urban Search Sector 7",
    objective: "Locate and extract survivors from collapsed structure, establish relay chain for communication",
    phase: "Converging",
    activeAgents: 12,
    totalAgents: 15,
    startTime: "14:23:07",
    elapsed: "00:47:32",
    lastEvent: "Agent D-07 detected thermal signature at Grid C4"
  };

  const agents = [
    { id: "D-01", role: "Scout", battery: 87, signal: 95, status: "exploring", temp: 42 },
    { id: "D-02", role: "Relay", battery: 92, signal: 98, status: "relaying", temp: 38 },
    { id: "D-03", role: "Scout", battery: 45, signal: 78, status: "detecting", temp: 51 },
    { id: "D-04", role: "Rescue", battery: 71, signal: 88, status: "converging", temp: 47 },
    { id: "D-05", role: "Relay", battery: 88, signal: 94, status: "relaying", temp: 39 },
    { id: "D-07", role: "Scout", battery: 63, signal: 82, status: "detecting", temp: 55 }
  ];

  const tasks = [
    { id: 1, desc: "Establish perimeter relay chain", status: "complete", time: "14:28" },
    { id: 2, desc: "Scan thermal zones A-D", status: "complete", time: "14:35" },
    { id: 3, desc: "Deploy rescue units to C4", status: "active", time: "15:07" },
    { id: 4, desc: "Maintain communication bridge", status: "active", time: "ongoing" },
    { id: 5, desc: "Extract victims to safe zone", status: "pending", time: "-" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 0.5 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      exploring: "bg-cyan-500",
      detecting: "bg-yellow-500",
      relaying: "bg-purple-500",
      converging: "bg-emerald-500",
      extracting: "bg-orange-500",
      complete: "bg-emerald-500",
      active: "bg-cyan-500",
      pending: "bg-slate-600"
    };
    return colors[status] || "bg-slate-500";
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 bg-emerald-400 rounded-full"
            />
            <span className="text-xs text-emerald-400 font-medium">LIVE</span>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold mb-1"
        >
          {mission.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-slate-400"
        >
          Mission ID: {mission.id}
        </motion.p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Mission Status Ring */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50 overflow-hidden"
        >
          {/* Animated background pulse */}
          <motion.div
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg font-semibold text-emerald-400"
                >
                  {mission.phase}
                </motion.h3>
                <p className="text-xs text-slate-400">Current Phase</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-slate-800"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 36}`}
                    initial={{ strokeDashoffset: `${2 * Math.PI * 36}` }}
                    animate={{ strokeDashoffset: `${2 * Math.PI * 36 * (1 - progress / 100)}` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-emerald-400"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-sm font-bold"
                  >
                    {Math.round(progress)}%
                  </motion.span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-slate-400">Started</p>
                <p className="font-semibold">{mission.startTime}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-slate-400">Elapsed</p>
                <p className="font-semibold text-cyan-400">{mission.elapsed}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Radar Visualization */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Mission Map</h3>
          <div className="relative w-full h-48 bg-slate-950/50 rounded-xl overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/10" />
              ))}
            </div>
            {/* Agent positions */}
            {agents.map((agent, idx) => (
              <motion.button
                key={agent.id}
                onClick={() => navigate(`/agent/${agent.id}`)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="absolute"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                }}
              >
                <div className="relative group">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)} animate-pulse`} />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-950 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {agent.id} - {agent.role}
                  </div>
                </div>
              </motion.button>
            ))}
            {/* Target marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Last Event Banner */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-xl p-4 border border-yellow-500/30"
        >
          {/* Animated shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
          />

          <div className="relative z-10 flex items-start gap-3">
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            </motion.div>
            <div>
              <p className="text-sm font-medium text-yellow-200">Latest Event</p>
              <p className="text-xs text-slate-300 mt-1">{mission.lastEvent}</p>
              <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
            </div>
          </div>
        </motion.div>

        {/* Active Agents Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Active Agents</h3>
            <button
              onClick={() => navigate('/fleet')}
              className="text-xs text-cyan-400 hover:text-cyan-300"
            >
              View All →
            </button>
          </div>
          <div className="space-y-3">
            {agents.slice(0, 4).map((agent) => (
              <button
                key={agent.id}
                onClick={() => navigate(`/agent/${agent.id}`)}
                className="w-full flex items-center justify-between p-3 bg-slate-950/50 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`} />
                  <div className="text-left">
                    <p className="text-sm font-medium">{agent.id}</p>
                    <p className="text-xs text-slate-400">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <Battery className="w-3 h-3" />
                    <span>{agent.battery}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    <span>{agent.signal}%</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Task List */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Mission Tasks</h3>
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-start gap-3 p-3 bg-slate-950/50 rounded-lg"
              >
                <div className={`w-2 h-2 rounded-full mt-1.5 ${getStatusColor(task.status)}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">{task.desc}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">{task.time}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      task.status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' :
                      task.status === 'active' ? 'bg-cyan-500/20 text-cyan-400' :
                      'bg-slate-700/50 text-slate-400'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/emergency')}
            className="relative overflow-hidden flex items-center justify-center gap-2 p-4 bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-500/30 transition-colors"
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </motion.div>
            <span className="text-sm font-medium text-red-400">Emergency</span>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/fleet')}
            className="flex items-center justify-center gap-2 p-4 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-xl border border-cyan-500/30 transition-colors"
          >
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">View Fleet</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
