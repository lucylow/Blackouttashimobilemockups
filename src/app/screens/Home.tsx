import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Bell,
  Send,
  Download,
  TrendingUp,
  Vote,
  Target,
  Wifi,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Users,
  Activity,
  Radio,
  AlertTriangle,
  BarChart3,
  Search,
  Layers
} from "lucide-react";
import { CommandSheet } from "../components/CommandSheet";
import { useScenario } from "../context/ScenarioContext";
import { formatCurrency, formatRelativeTime, formatPercentage } from "../data/mockData";

export function Home() {
  const navigate = useNavigate();
  const [showCommand, setShowCommand] = useState(false);
  const { scenarioData, currentScenario } = useScenario();

  const activities = [
    {
      type: "receive",
      title: "Received TASHI",
      amount: "+1,250.50",
      time: "2 minutes ago",
      icon: ArrowDownRight,
      color: "text-emerald-400",
    },
    {
      type: "stake",
      title: "Staking Reward",
      amount: "+45.20",
      time: "1 hour ago",
      icon: TrendingUp,
      color: "text-purple-400",
    },
    {
      type: "send",
      title: "Sent TASHI",
      amount: "-500.00",
      time: "3 hours ago",
      icon: ArrowUpRight,
      color: "text-cyan-400",
    },
    {
      type: "mission",
      title: "Mission Completed",
      amount: "+200.00",
      time: "5 hours ago",
      icon: Target,
      color: "text-teal-400",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <CommandSheet isOpen={showCommand} onClose={() => setShowCommand(false)} />

      {/* Header */}
      <div className="px-5 pt-14 pb-6">
        {/* Scenario Banner - Refined */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/scenarios")}
          className="w-full mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/5 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Layers className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-medium text-slate-200">
                {currentScenario === 'wallet' && 'Wallet & Identity'}
                {currentScenario === 'swarm' && 'Swarm Mission'}
                {currentScenario === 'rescue' && 'Search & Rescue'}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </div>
        </motion.button>

        <div className="flex items-center justify-between mb-7">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-500 mb-0.5"
            >
              Welcome back
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-white tracking-tight"
            >
              Commander
            </motion.h1>
          </div>
          <div className="flex items-center gap-2.5">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setShowCommand(true)}
              className="relative w-11 h-11 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-800/70 hover:border-slate-600/50 transition-all"
            >
              <Search className="w-5 h-5 text-slate-300" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/notifications")}
              className="relative w-11 h-11 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-800/70 hover:border-slate-600/50 transition-all"
            >
              <Bell className="w-5 h-5 text-slate-300" />
              <motion.span
                animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              />
            </motion.button>
          </div>
        </div>

        {/* Balance Card - Premium Redesign */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30 p-[1px] mb-6 shadow-2xl shadow-purple-500/10"
        >
          <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[27px] p-7 relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-cyan-500/15"
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Network Status */}
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/15 rounded-full border border-emerald-500/30"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  >
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                  </motion.div>
                  <span className="text-xs text-emerald-300 font-semibold tracking-wide">ONLINE</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-3"
              >
                <p className="text-slate-500 mb-2 tracking-wide uppercase text-xs font-medium">Total Balance</p>
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
                  className="flex items-baseline gap-3 mb-1"
                >
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 text-transparent bg-clip-text tracking-tight">
                    24,567.82
                  </h2>
                </motion.div>
                <p className="text-slate-400 tracking-wider font-medium">TASHI</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 w-fit"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-emerald-400 font-semibold">+12.5%</span>
                <span className="text-slate-500">24h</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Status - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-[24px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 p-5 mb-6 cursor-pointer hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all shadow-lg shadow-black/20"
          onClick={() => navigate("/swarm")}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center"
              >
                <Target className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-0.5">Active Mission</p>
                <h3 className="font-bold text-slate-100">Operation Phoenix</h3>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.92 }}
              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold flex items-center gap-1.5 hover:bg-cyan-500/15 transition-colors"
            >
              <span>View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          <p className="text-slate-400 mb-4">Search & Relay Operations</p>

          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 uppercase tracking-wider text-xs font-medium">Progress</span>
              <span className="text-slate-200 font-bold text-sm">68%</span>
            </div>
            <div className="h-2.5 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full relative overflow-hidden shadow-lg shadow-cyan-500/30"
              >
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/2"
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="px-3 py-1.5 bg-purple-500/15 rounded-xl border border-purple-500/30 flex items-center gap-2"
            >
              <Users className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-purple-300 font-semibold text-xs">Agent #2847</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="px-3 py-1.5 bg-cyan-500/15 rounded-xl border border-cyan-500/30 flex items-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
              />
              <span className="text-cyan-300 font-semibold text-xs">Relay Active</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Actions - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-7"
        >
          <h3 className="text-slate-500 uppercase tracking-wider mb-4 font-bold text-xs">Quick Actions</h3>
          <div className="grid grid-cols-5 gap-2.5">
            {[
              { icon: Send, label: "Send", color: "from-cyan-500 to-blue-600" },
              { icon: Download, label: "Receive", color: "from-emerald-500 to-teal-600" },
              { icon: TrendingUp, label: "Stake", color: "from-purple-500 to-pink-600", action: () => navigate("/stake") },
              { icon: Vote, label: "Vote", color: "from-orange-500 to-red-600", action: () => navigate("/governance") },
              { icon: Target, label: "Mission", color: "from-teal-500 to-cyan-600", action: () => navigate("/swarm") },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.06,
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={action.action}
                  className="flex flex-col items-center gap-2.5 group"
                >
                  <div className={`w-[60px] h-[60px] rounded-[20px] bg-gradient-to-br ${action.color} p-[2px] transition-all shadow-lg hover:shadow-xl`}>
                    <div className="w-full h-full bg-slate-900/90 rounded-[18px] flex items-center justify-center group-hover:bg-slate-800/90 transition-colors">
                      <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-semibold group-hover:text-slate-300 transition-colors tracking-wide">{action.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Activity Feed - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 uppercase tracking-wider font-bold text-xs">Recent Activity</h3>
            <button className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">View All</button>
          </div>
          <div className="space-y-2.5">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.06, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.01, x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex items-center gap-3.5 p-4 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all cursor-pointer shadow-lg shadow-black/10"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-11 h-11 rounded-[14px] bg-slate-700/60 flex items-center justify-center flex-shrink-0 border border-slate-600/30"
                  >
                    <Icon className={`w-5 h-5 ${activity.color}`} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-100 mb-0.5">{activity.title}</p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                  <div className={`font-bold ${activity.color} text-right`}>
                    {activity.amount}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}