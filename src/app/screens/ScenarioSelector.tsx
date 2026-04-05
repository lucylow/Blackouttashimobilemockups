import { useNavigate } from "react-router";
import { ArrowLeft, Wallet, Users, AlertTriangle, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useScenario } from "../context/ScenarioContext";
import { ScenarioType } from "../data/mockData";

export function ScenarioSelector() {
  const navigate = useNavigate();
  const { currentScenario, setScenario } = useScenario();

  const scenarios = [
    {
      id: 'wallet' as ScenarioType,
      title: "Wallet & Identity",
      subtitle: "Asset Management Scenario",
      description: "Manage blockchain identity, wallet assets, staking positions, and security settings. Features realistic transaction history, token balances, and trust scores.",
      icon: Wallet,
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-500/30 to-purple-500/10",
      borderColor: "border-purple-500/30",
      features: [
        "Multi-token portfolio tracking",
        "Staking & rewards management",
        "Identity verification system",
        "Transaction history",
        "Security & device management"
      ],
      stats: {
        portfolio: "18,420 TASHI",
        stake: "12,000 TASHI",
        trust: "94% Trust Score"
      }
    },
    {
      id: 'swarm' as ScenarioType,
      title: "Swarm Mission",
      subtitle: "Agent Coordination Scenario",
      description: "Coordinate a multi-agent swarm performing relay chain stabilization. Monitor agent health, network status, and participate in consensus-based decision making.",
      icon: Users,
      color: "cyan",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-500/30 to-cyan-500/10",
      borderColor: "border-cyan-500/30",
      features: [
        "10 coordinated agents",
        "Live mission tracking",
        "Consensus voting system",
        "Network health monitoring",
        "Real-time event stream"
      ],
      stats: {
        agents: "9/10 Active",
        progress: "68% Complete",
        success: "91% Probability"
      }
    },
    {
      id: 'rescue' as ScenarioType,
      title: "Search & Rescue",
      subtitle: "Emergency Operations Scenario",
      description: "Active rescue operation in a collapsed tunnel. Track victims, manage hazards, coordinate extraction teams, and monitor emergency protocols in real-time.",
      icon: AlertTriangle,
      color: "red",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/30 to-red-500/10",
      borderColor: "border-red-500/30",
      features: [
        "4 victim detections",
        "8 deployed rescue agents",
        "Hazard tracking system",
        "Task prioritization",
        "Emergency override controls"
      ],
      stats: {
        victims: "3/4 Confirmed",
        elapsed: "14 minutes",
        hazard: "High Level"
      }
    }
  ];

  const handleSelectScenario = (scenarioId: ScenarioType) => {
    setScenario(scenarioId);
    navigate("/");
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      purple: "text-purple-400",
      cyan: "text-cyan-400",
      red: "text-red-400"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50 flex-shrink-0">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-1">Demo Scenarios</h1>
        <p className="text-sm text-slate-400">Select a scenario to explore different aspects of Tashi</p>
      </div>

      {/* Scenarios List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {scenarios.map((scenario, idx) => {
          const Icon = scenario.icon;
          const isActive = currentScenario === scenario.id;
          const colorClass = getColorClasses(scenario.color);

          return (
            <motion.div
              key={scenario.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-gradient-to-br ${scenario.bgGradient} backdrop-blur-xl rounded-2xl p-5 border ${scenario.borderColor} overflow-hidden`}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </motion.div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scenario.bgGradient} border ${scenario.borderColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-7 h-7 ${colorClass}`} />
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-1">{scenario.title}</h3>
                <p className={`text-xs ${colorClass} mb-2`}>{scenario.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{scenario.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(scenario.stats).map(([key, value]) => (
                  <div key={key} className="bg-slate-900/50 rounded-lg p-2 border border-slate-700/50">
                    <p className="text-[10px] text-slate-400 uppercase mb-0.5">{key}</p>
                    <p className="text-xs font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-1.5 mb-4">
                {scenario.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className={`w-1 h-1 rounded-full ${colorClass} mt-1.5 flex-shrink-0`} />
                    <p className="text-xs text-slate-300">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectScenario(scenario.id)}
                disabled={isActive}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                    : `bg-gradient-to-r ${scenario.gradient} text-white hover:shadow-lg hover:shadow-${scenario.color}-500/20`
                }`}
              >
                {isActive ? 'Currently Active' : 'Switch to This Scenario'}
              </button>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${scenario.gradient} opacity-[0.03] pointer-events-none`} />
            </motion.div>
          );
        })}

        {/* Info Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: scenarios.length * 0.1 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-700/50"
        >
          <h3 className="text-sm font-semibold mb-2 text-slate-200">About Demo Scenarios</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Each scenario contains realistic mock data designed to showcase different aspects of the Tashi blockchain 
            platform. The active scenario determines what data is displayed throughout the app. Switch scenarios at 
            any time to explore different operational contexts.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
