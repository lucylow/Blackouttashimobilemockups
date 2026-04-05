import { useNavigate } from "react-router";
import { ArrowLeft, AlertTriangle, Shield, StopCircle, Radio, Navigation, AlertOctagon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Emergency() {
  const navigate = useNavigate();
  const [confirmAction, setConfirmAction] = useState<string | null>(null);
  const [activeOverride, setActiveOverride] = useState<string | null>(null);

  const riskLevel = "moderate";
  const activeThreats = 2;
  const affectedAgents = 3;

  const emergencyActions = [
    {
      id: "retreat",
      title: "Emergency Retreat",
      description: "Recall all agents to safe zone immediately",
      icon: Navigation,
      color: "orange",
      severity: "high"
    },
    {
      id: "hold",
      title: "Hold Position",
      description: "Freeze all agent movement and await instructions",
      icon: StopCircle,
      color: "yellow",
      severity: "medium"
    },
    {
      id: "cancel",
      title: "Cancel Mission",
      description: "Abort current mission and return agents to standby",
      icon: AlertOctagon,
      color: "red",
      severity: "critical"
    },
    {
      id: "broadcast",
      title: "Broadcast Alert",
      description: "Send emergency message to all active agents",
      icon: Radio,
      color: "cyan",
      severity: "low"
    }
  ];

  const activeAlerts = [
    {
      id: 1,
      type: "Battery Critical",
      description: "Agent D-06 battery at 15% - recommend immediate return",
      severity: "high",
      time: "2m ago"
    },
    {
      id: 2,
      type: "Signal Degraded",
      description: "Lost relay connection in Grid B3, agents isolated",
      severity: "medium",
      time: "5m ago"
    }
  ];

  const handleEmergencyAction = (actionId: string) => {
    setConfirmAction(actionId);
  };

  const confirmEmergencyAction = () => {
    if (confirmAction) {
      setActiveOverride(confirmAction);
      setTimeout(() => {
        setConfirmAction(null);
        // Navigate back after 3 seconds
        setTimeout(() => navigate(-1), 3000);
      }, 1000);
    }
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      orange: {
        bg: "bg-orange-500/20",
        border: "border-orange-500/40",
        text: "text-orange-400",
        glow: "shadow-orange-500/20"
      },
      yellow: {
        bg: "bg-yellow-500/20",
        border: "border-yellow-500/40",
        text: "text-yellow-400",
        glow: "shadow-yellow-500/20"
      },
      red: {
        bg: "bg-red-500/20",
        border: "border-red-500/40",
        text: "text-red-400",
        glow: "shadow-red-500/20"
      },
      cyan: {
        bg: "bg-cyan-500/20",
        border: "border-cyan-500/40",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/20"
      }
    };
    return colors[color] || colors.red;
  };

  const getRiskColor = (level: string) => {
    const colors: Record<string, string> = {
      low: "text-emerald-400 bg-emerald-500/20",
      moderate: "text-yellow-400 bg-yellow-500/20",
      high: "text-orange-400 bg-orange-500/20",
      critical: "text-red-400 bg-red-500/20"
    };
    return colors[level] || colors.moderate;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-red-900/30 bg-red-950/10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskColor(riskLevel)}`}>
              {riskLevel.toUpperCase()} RISK
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-1 text-red-100">Emergency Control</h1>
        <p className="text-sm text-slate-400">Safety-critical override panel</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Current Status */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-yellow-400" />
            <h3 className="text-sm font-semibold">Current Situation</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-2xl font-bold text-yellow-400">{activeThreats}</p>
              <p className="text-xs text-slate-400 mt-1">Active Threats</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-400">{affectedAgents}</p>
              <p className="text-xs text-slate-400 mt-1">At Risk</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">12</p>
              <p className="text-xs text-slate-400 mt-1">Safe Agents</p>
            </div>
          </div>
        </motion.div>

        {/* Active Alerts */}
        {activeAlerts.length > 0 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold mb-3 text-slate-300">Active Alerts</h3>
            <div className="space-y-2">
              {activeAlerts.map((alert, idx) => (
                <motion.div
                  key={alert.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    alert.severity === "high"
                      ? "bg-red-500/10 border-red-500/30"
                      : "bg-yellow-500/10 border-yellow-500/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                      alert.severity === "high" ? "text-red-400" : "text-yellow-400"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1">{alert.type}</p>
                      <p className="text-xs text-slate-400">{alert.description}</p>
                      <p className="text-xs text-slate-500 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Emergency Actions */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-slate-300">Emergency Actions</h3>
          <div className="space-y-3">
            {emergencyActions.map((action, idx) => {
              const Icon = action.icon;
              const colorClasses = getColorClasses(action.color);
              
              return (
                <motion.button
                  key={action.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  onClick={() => handleEmergencyAction(action.id)}
                  disabled={!!activeOverride}
                  className={`w-full p-4 rounded-xl border-2 ${colorClasses.bg} ${colorClasses.border} hover:${colorClasses.glow} shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}>
                      <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className={`text-sm font-semibold ${colorClasses.text}`}>
                        {action.title}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {action.description}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${colorClasses.bg} ${colorClasses.text}`}>
                      {action.severity}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-900/30 backdrop-blur-xl rounded-xl p-4 border border-slate-800/30"
        >
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Safety Notice:</strong> Emergency overrides affect all active agents and cannot be undone. Use these controls only when necessary to protect agent safety or mission integrity.
          </p>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmAction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-6 border-2 border-red-500/50 max-w-sm w-full"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">Confirm Emergency Action</h3>
                <p className="text-sm text-slate-400">
                  {emergencyActions.find(a => a.id === confirmAction)?.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={confirmEmergencyAction}
                  className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition-colors"
                >
                  Confirm Action
                </button>
                <button
                  onClick={() => setConfirmAction(null)}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Override Active */}
      <AnimatePresence>
        {activeOverride && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Shield className="w-10 h-10 text-emerald-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Override Active</h3>
              <p className="text-slate-400">Emergency protocol executing...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
