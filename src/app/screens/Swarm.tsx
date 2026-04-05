import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { 
  Target, 
  MapPin, 
  Radio, 
  Battery, 
  Thermometer,
  Users,
  Activity,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  History,
  BarChart3,
  Wifi,
  Plus,
  Grid3x3
} from "lucide-react";

export function Swarm() {
  const navigate = useNavigate();
  const agents = [
    { id: "2847", status: "Active", battery: 87, temp: 42, signal: "Strong" },
    { id: "2848", status: "Active", battery: 92, temp: 38, signal: "Strong" },
    { id: "2849", status: "Standby", battery: 95, temp: 35, signal: "Medium" },
    { id: "2850", status: "Warning", battery: 23, temp: 51, signal: "Weak" },
  ];

  const missions = [
    {
      name: "Operation Phoenix",
      progress: 68,
      role: "Relay Agent",
      status: "Active",
      participants: 24,
    },
    {
      name: "Search Grid Alpha",
      progress: 45,
      role: "Scout",
      status: "Active",
      participants: 18,
    },
    {
      name: "Recovery Protocol",
      progress: 100,
      role: "Observer",
      status: "Completed",
      participants: 12,
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-5 pt-14 pb-6">
        <h1 className="text-3xl font-bold mb-7 tracking-tight">Swarm Coordination</h1>

        {/* Network Status - Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30 p-[1px] mb-6 shadow-2xl shadow-purple-500/10"
        >
          <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[27px] p-7 relative overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-cyan-500/15"
            />

            <div className="relative z-10">
              {/* Radar Visualization - Enhanced */}
              <div className="relative w-full aspect-square max-w-[220px] mx-auto mb-7">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
                <div className="absolute inset-5 rounded-full border-2 border-cyan-500/30" />
                <div className="absolute inset-10 rounded-full border-2 border-cyan-500/40" />
                <div className="absolute inset-[52px] rounded-full bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-emerald-500/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/20" />

                {/* Scanning Line */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-1/2 origin-bottom bg-gradient-to-t from-cyan-400 via-cyan-300 to-transparent"
                  style={{ transformOrigin: "bottom center" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Agent Dots - Animated */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/4 right-1/3 w-3.5 h-3.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute bottom-1/3 left-1/4 w-3.5 h-3.5 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  className="absolute top-1/3 left-1/2 w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                />
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">4</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Active Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">2</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Missions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">68%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Progress</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Access to Advanced Features - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-7"
        >
          <h3 className="text-slate-500 uppercase tracking-wider mb-4 font-bold text-xs">Mission Control</h3>
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/mission/MSN-2847")}
              className="p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/70 transition-all text-left shadow-lg shadow-black/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/15 rounded-[14px] flex items-center justify-center border border-cyan-500/30">
                  <Target className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <p className="font-bold text-slate-100 mb-0.5">Live Mission</p>
              <p className="text-xs text-slate-500">Control center</p>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/fleet")}
              className="p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-purple-500/50 hover:bg-slate-800/70 transition-all text-left shadow-lg shadow-black/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500/15 rounded-[14px] flex items-center justify-center border border-purple-500/30">
                  <Grid3x3 className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="font-bold text-slate-100 mb-0.5">Agent Fleet</p>
              <p className="text-xs text-slate-500">All agents</p>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/scenarios")}
              className="p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-emerald-500/50 hover:bg-slate-800/70 transition-all text-left shadow-lg shadow-black/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/15 rounded-[14px] flex items-center justify-center border border-emerald-500/30">
                  <Plus className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <p className="font-bold text-slate-100 mb-0.5">Scenarios</p>
              <p className="text-xs text-slate-500">Templates</p>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/emergency")}
              className="p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-red-500/50 hover:bg-slate-800/70 transition-all text-left shadow-lg shadow-black/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500/15 rounded-[14px] flex items-center justify-center border border-red-500/30">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
              </div>
              <p className="font-bold text-slate-100 mb-0.5">Emergency</p>
              <p className="text-xs text-slate-500">Safety panel</p>
            </motion.button>
          </div>
        </motion.div>

        {/* Active Missions - Enhanced */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 uppercase tracking-wider font-bold text-xs">Active Missions</h3>
            <button className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">View All</button>
          </div>
          <div className="space-y-2.5">
            {missions.map((mission, index) => (
              <motion.button
                key={mission.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.06, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all shadow-lg shadow-black/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-100 mb-1">{mission.name}</p>
                      <p className="text-xs text-slate-500">Role: <span className="text-slate-400 font-semibold">{mission.role}</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                      mission.status === "Active"
                        ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-400"
                        : "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
                    }`}>
                      {mission.status}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Users className="w-3.5 h-3.5" />
                      <span className="font-semibold">{mission.participants}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 uppercase tracking-wider text-xs font-medium">Progress</span>
                    <span className="text-slate-200 font-bold text-sm">{mission.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mission.progress}%` }}
                      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                      className={`h-full rounded-full ${
                        mission.progress === 100
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30"
                          : "bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 shadow-lg shadow-cyan-500/30"
                      }`}
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Agent Health - Enhanced */}
        <div className="mb-7">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 uppercase tracking-wider font-bold text-xs">Agent Status</h3>
            <button
              onClick={() => navigate("/fleet")}
              className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              View Fleet
            </button>
          </div>
          <div className="space-y-2.5">
            {agents.map((agent, index) => (
              <motion.button
                key={agent.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.06, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/agent/${agent.id}`)}
                className="w-full p-4 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all shadow-lg shadow-black/10"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center font-mono font-bold shadow-lg ${
                      agent.status === "Active"
                        ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-cyan-500/20"
                        : agent.status === "Warning"
                        ? "bg-orange-500/15 border border-orange-500/30 text-orange-400 shadow-orange-500/20"
                        : "bg-slate-600/15 border border-slate-600/30 text-slate-400"
                    }`}>
                      {agent.id}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-100 mb-0.5">Agent #{agent.id}</p>
                      <p className={`text-xs font-bold ${
                        agent.status === "Active"
                          ? "text-cyan-400"
                          : agent.status === "Warning"
                          ? "text-orange-400"
                          : "text-slate-500"
                      }`}>
                        {agent.status}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 px-2.5 py-2 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <Battery className={`w-4 h-4 ${
                      agent.battery > 80 ? "text-emerald-400"
                      : agent.battery > 30 ? "text-cyan-400"
                      : "text-orange-400"
                    }`} />
                    <span className="text-slate-300 font-semibold text-xs">{agent.battery}%</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <Thermometer className={`w-4 h-4 ${
                      agent.temp < 45 ? "text-cyan-400" : "text-orange-400"
                    }`} />
                    <span className="text-slate-300 font-semibold text-xs">{agent.temp}°C</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 bg-slate-700/30 rounded-xl border border-slate-600/30">
                    <Radio className={`w-4 h-4 ${
                      agent.signal === "Strong" ? "text-emerald-400"
                      : agent.signal === "Medium" ? "text-cyan-400"
                      : "text-orange-400"
                    }`} />
                    <span className="text-slate-300 font-semibold text-xs">{agent.signal}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Join Mission Button - Enhanced */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/task/new")}
          className="w-full py-5 px-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-600 rounded-[20px] font-bold text-white shadow-2xl shadow-cyan-500/30 flex items-center justify-center gap-2.5 hover:shadow-cyan-500/50 transition-shadow border border-cyan-400/20"
        >
          <Target className="w-5 h-5" />
          Join New Mission
        </motion.button>
      </div>
    </div>
  );
}