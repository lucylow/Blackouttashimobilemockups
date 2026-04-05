import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Home,
  Wallet,
  Users,
  TrendingUp,
  User,
  Bell,
  Shield,
  Target,
  BarChart3,
  Wifi,
  History,
  AlertTriangle,
  Vote,
  Plus,
  Grid3x3,
  X,
  ChevronRight
} from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  icon: any;
  path?: string;
  action?: () => void;
  category: "navigation" | "action" | "recent";
}

export function CommandSheet({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const commands: CommandItem[] = [
    // Navigation
    { id: "home", label: "Home Dashboard", icon: Home, path: "/", category: "navigation" },
    { id: "wallet", label: "Wallet", icon: Wallet, path: "/wallet", category: "navigation" },
    { id: "swarm", label: "Swarm Status", icon: Users, path: "/swarm", category: "navigation" },
    { id: "stake", label: "Stake Summary", icon: TrendingUp, path: "/stake", category: "navigation" },
    { id: "profile", label: "Profile", icon: User, path: "/profile", category: "navigation" },
    { id: "identity", label: "Identity & Security", icon: Shield, path: "/identity", category: "navigation" },
    { id: "notifications", label: "Notifications", icon: Bell, path: "/notifications", category: "navigation" },
    { id: "mission", label: "Mission Control", icon: Target, path: "/mission/MSN-2847", category: "navigation" },
    { id: "fleet", label: "Agent Fleet", icon: Grid3x3, path: "/fleet", category: "navigation" },
    { id: "governance", label: "Governance", icon: Vote, path: "/governance", category: "navigation" },
    { id: "emergency", label: "Emergency Override", icon: AlertTriangle, path: "/emergency", category: "navigation" },
    { id: "history", label: "Mission History", icon: History, path: "/history", category: "navigation" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics", category: "navigation" },
    { id: "network", label: "Network Health", icon: Wifi, path: "/network", category: "navigation" },
    { id: "task-new", label: "New Task", icon: Plus, path: "/task/new", category: "action" },
    { id: "scenarios", label: "Scenarios", icon: Target, path: "/scenarios", category: "navigation" },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (command: CommandItem) => {
    if (command.path) {
      navigate(command.path);
    } else if (command.action) {
      command.action();
    }
    onClose();
    setSearchQuery("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Command Sheet - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-lg z-50"
          >
            <div className="bg-slate-900/98 backdrop-blur-2xl border border-slate-700/60 rounded-[24px] shadow-2xl overflow-hidden">
              {/* Search Header */}
              <div className="p-5 border-b border-slate-800/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/60 flex items-center justify-center flex-shrink-0 border border-slate-700/40">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search commands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none font-medium"
                  />
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-slate-800/60 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-[420px] overflow-y-auto p-3">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-12 px-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-slate-500" />
                    </div>
                    <p className="text-slate-500 font-medium">No commands found</p>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    {filteredCommands.map((command, idx) => {
                      const Icon = command.icon;
                      return (
                        <motion.button
                          key={command.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.025, type: "spring", stiffness: 300 }}
                          onClick={() => handleSelect(command)}
                          whileTap={{ scale: 0.97 }}
                          className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-[16px] hover:bg-slate-800/60 transition-all group border border-transparent hover:border-slate-700/40"
                        >
                          <div className="w-9 h-9 rounded-[12px] bg-slate-800/50 border border-slate-700/40 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/30 transition-all">
                            <Icon className="w-[18px] h-[18px] text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                          <span className="flex-1 text-left font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {command.label}
                          </span>
                          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              <div className="px-5 py-3 border-t border-slate-800/60 bg-slate-950/60">
                <p className="text-xs text-slate-500 text-center font-medium">
                  Tap outside or press ESC to close
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
