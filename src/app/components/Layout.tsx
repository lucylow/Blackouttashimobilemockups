import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Wallet, Users, TrendingUp, User, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { CommandSheet } from "./CommandSheet";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCommand, setShowCommand] = useState(false);

  const tabs = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "wallet", label: "Wallet", icon: Wallet, path: "/wallet" },
    { id: "swarm", label: "Swarm", icon: Users, path: "/swarm" },
    { id: "stake", label: "Stake", icon: TrendingUp, path: "/stake" },
    { id: "profile", label: "Profile", icon: User, path: "/profile" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <CommandSheet isOpen={showCommand} onClose={() => setShowCommand(false)} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-28">
        <Outlet />
      </main>

      {/* Floating Command Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowCommand(true)}
        className="fixed bottom-32 right-6 w-14 h-14 rounded-[18px] bg-gradient-to-br from-cyan-500 to-purple-600 shadow-2xl shadow-cyan-500/40 flex items-center justify-center z-40 hover:shadow-cyan-500/60 transition-all border border-cyan-400/20"
      >
        <Search className="w-6 h-6 text-white drop-shadow-lg" />
      </motion.button>

      {/* Bottom Navigation - Enhanced Premium Design */}
      <nav className="absolute bottom-0 left-0 right-0 bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800/80 shadow-2xl">
        <div className="flex justify-around items-center h-[84px] px-3 pb-3">
          {tabs.map((tab) => {
            const active = isActive(tab.path);
            const Icon = tab.icon;

            return (
              <motion.button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                whileTap={{ scale: 0.92 }}
                className="flex flex-col items-center justify-center flex-1 h-full relative min-w-0"
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-1 inset-y-1 bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 rounded-[18px] border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-all ${
                    active
                      ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20"
                      : ""
                  }`}>
                    <Icon
                      className={`w-[22px] h-[22px] transition-all ${
                        active
                          ? "text-cyan-400"
                          : "text-slate-500"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[11px] font-bold transition-all tracking-wide ${
                      active
                        ? "text-cyan-400"
                        : "text-slate-600"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}