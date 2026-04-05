import { motion } from "motion/react";
import { 
  Bell, 
  ArrowDownRight, 
  ArrowUpRight, 
  Target, 
  Vote,
  Radio,
  AlertTriangle,
  Battery,
  Thermometer,
  Shield,
  CheckCircle
} from "lucide-react";

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "transaction",
      icon: ArrowDownRight,
      title: "Received TASHI",
      description: "You received 1,250.50 TASHI from 0x8f3c...b2e1",
      time: "2 minutes ago",
      severity: "info",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      unread: true,
    },
    {
      id: 2,
      type: "mission",
      icon: Target,
      title: "Mission Progress Update",
      description: "Operation Phoenix reached 68% completion",
      time: "15 minutes ago",
      severity: "info",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      unread: true,
    },
    {
      id: 3,
      type: "swarm",
      icon: Radio,
      title: "Signal Relayed Successfully",
      description: "Agent #2847 relayed 156 signals to the network",
      time: "1 hour ago",
      severity: "success",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      unread: false,
    },
    {
      id: 4,
      type: "alert",
      icon: Battery,
      title: "Low Battery Warning",
      description: "Agent #2850 battery level at 23%",
      time: "2 hours ago",
      severity: "warning",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      unread: false,
    },
    {
      id: 5,
      type: "governance",
      icon: Vote,
      title: "New Governance Proposal",
      description: "Vote on TIP-042: Network Upgrade Parameters",
      time: "3 hours ago",
      severity: "info",
      color: "text-teal-400",
      bgColor: "bg-teal-500/20",
      borderColor: "border-teal-500/30",
      unread: false,
    },
    {
      id: 6,
      type: "transaction",
      icon: ArrowUpRight,
      title: "Transaction Confirmed",
      description: "Your transaction of 500 TASHI has been confirmed",
      time: "5 hours ago",
      severity: "success",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      unread: false,
    },
    {
      id: 7,
      type: "alert",
      icon: Thermometer,
      title: "Thermal Alert",
      description: "Agent #2850 temperature reached 51°C",
      time: "6 hours ago",
      severity: "warning",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      unread: false,
    },
    {
      id: 8,
      type: "security",
      icon: Shield,
      title: "Security Check Complete",
      description: "Your wallet security score updated to 98/100",
      time: "1 day ago",
      severity: "success",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-500/30",
      unread: false,
    },
  ];

  const categories = [
    { label: "All", count: notifications.length },
    { label: "Unread", count: notifications.filter(n => n.unread).length },
    { label: "On-chain", count: 3 },
    { label: "Swarm", count: 2 },
    { label: "Safety", count: 2 },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-sm text-cyan-400 font-medium">
            Mark all read
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {categories.map((category, index) => (
            <motion.button
              key={category.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border flex-shrink-0 ${
                index === 0
                  ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                  : "bg-slate-800/40 border-slate-700/50 text-slate-300"
              }`}
            >
              <span className="text-sm font-medium">{category.label}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-xs font-semibold ${
                index === 0
                  ? "bg-cyan-500/30"
                  : "bg-slate-700/50"
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 space-y-3">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.button
              key={notification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`w-full p-4 rounded-2xl backdrop-blur-sm border transition-colors ${
                notification.unread
                  ? "bg-slate-800/60 border-slate-700/70"
                  : "bg-slate-800/40 border-slate-700/50"
              } hover:border-slate-600/50`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${notification.bgColor} border ${notification.borderColor} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${notification.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-slate-200 text-sm">
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mb-2">
                    {notification.description}
                  </p>
                  <p className="text-xs text-slate-500">
                    {notification.time}
                  </p>
                </div>
              </div>

              {/* Action Button (only for certain types) */}
              {notification.type === "governance" && (
                <div className="mt-3 pt-3 border-t border-slate-700/50">
                  <button className="text-sm text-cyan-400 font-medium">
                    View Proposal →
                  </button>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Empty State (hidden when there are notifications) */}
      {notifications.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center px-6 py-16"
        >
          <div className="w-20 h-20 rounded-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center mb-4">
            <Bell className="w-10 h-10 text-slate-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-300 mb-2">
            All caught up!
          </h3>
          <p className="text-sm text-slate-400 text-center">
            You don't have any notifications right now
          </p>
        </motion.div>
      )}
    </div>
  );
}