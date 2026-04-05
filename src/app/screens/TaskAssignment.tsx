import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Users, Zap, Clock, Shield, Plus, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function TaskAssignment() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [objective, setObjective] = useState("");
  const [urgency, setUrgency] = useState(50);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [estimatedTime, setEstimatedTime] = useState(30);

  const roles = ["Scout", "Relay", "Rescue", "Support"];
  
  const toggleRole = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handleDeploy = () => {
    // Mock deploy action
    console.log("Deploying task:", { taskName, objective, urgency, selectedRoles, estimatedTime });
    navigate("/swarm");
  };

  const getUrgencyColor = () => {
    if (urgency < 33) return "text-emerald-400 bg-emerald-500/20";
    if (urgency < 66) return "text-yellow-400 bg-yellow-500/20";
    return "text-red-400 bg-red-500/20";
  };

  const getUrgencyLabel = () => {
    if (urgency < 33) return "Low";
    if (urgency < 66) return "Medium";
    return "High";
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
        <h1 className="text-2xl font-bold mb-1">Create Mission</h1>
        <p className="text-sm text-slate-400">Define a new swarm task</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Task Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-slate-300">Mission Name</label>
          <input
            type="text"
            placeholder="e.g., Urban Search Sector 7"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </motion.div>

        {/* Objective */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-slate-300">Objective</label>
          <textarea
            placeholder="Describe the mission objective..."
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
          />
        </motion.div>

        {/* Required Roles */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-slate-300">Required Roles</label>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((role) => {
              const isSelected = selectedRoles.includes(role);
              return (
                <button
                  key={role}
                  onClick={() => toggleRole(role)}
                  className={`p-3 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400"
                      : "bg-slate-900/50 border-slate-800/50 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{role}</span>
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Urgency Level */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-300">Urgency Level</label>
            <span className={`text-xs px-3 py-1 rounded-full ${getUrgencyColor()}`}>
              {getUrgencyLabel()}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={urgency}
            onChange={(e) => setUrgency(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #10b981 0%, #eab308 50%, #ef4444 100%)`
            }}
          />
        </motion.div>

        {/* Estimated Time */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-slate-300">Est. Completion Time</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="10"
              max="180"
              step="10"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(Number(e.target.value))}
              className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <span className="text-sm font-semibold text-cyan-400 min-w-[60px] text-right">
              {estimatedTime}m
            </span>
          </div>
        </motion.div>

        {/* Mission Parameters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-3">Mission Parameters</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <p className="text-xs text-slate-400">Min Agents</p>
              </div>
              <input
                type="number"
                defaultValue={5}
                min={1}
                className="w-full bg-transparent text-lg font-bold text-cyan-400 focus:outline-none"
              />
            </div>
            <div className="p-3 bg-slate-950/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <p className="text-xs text-slate-400">Min Stake</p>
              </div>
              <input
                type="number"
                defaultValue={1000}
                step={100}
                className="w-full bg-transparent text-lg font-bold text-purple-400 focus:outline-none"
              />
            </div>
          </div>
        </motion.div>

        {/* Target Region */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <h3 className="text-sm font-semibold">Target Region</h3>
          </div>
          <div className="relative h-32 bg-slate-950/50 rounded-xl overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/10" />
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <MapPin className="w-8 h-8 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">Tap to select mission area</p>
        </motion.div>

        {/* Deploy Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={handleDeploy}
          disabled={!taskName || !objective || selectedRoles.length === 0}
          className="w-full p-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            <span>Deploy Mission</span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
