import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { 
  User, 
  Shield, 
  Bell, 
  Moon, 
  Globe, 
  Lock,
  ChevronRight,
  LogOut,
  Smartphone,
  Settings,
  HelpCircle,
  BarChart3,
  Wifi,
  History,
  Vote,
  Layers
} from "lucide-react";
import { useScenario } from "../context/ScenarioContext";

export function Profile() {
  const navigate = useNavigate();
  const { currentScenario } = useScenario();

  const menuItems = [
    {
      section: "Demo",
      items: [
        { icon: Layers, label: "Scenario Selector", path: "/scenarios", color: "text-pink-400", subtitle: currentScenario === 'wallet' ? 'Wallet & Identity' : currentScenario === 'swarm' ? 'Swarm Mission' : 'Search & Rescue' },
      ],
    },
    {
      section: "Mission & Analytics",
      items: [
        { icon: BarChart3, label: "Analytics", path: "/analytics", color: "text-cyan-400" },
        { icon: History, label: "Mission History", path: "/history", color: "text-purple-400" },
        { icon: Vote, label: "Governance", path: "/governance", color: "text-emerald-400" },
        { icon: Wifi, label: "Network Health", path: "/network", color: "text-yellow-400" },
      ],
    },
    {
      section: "Account",
      items: [
        { icon: Shield, label: "Identity & Security", path: "/identity", color: "text-purple-400" },
        { icon: Bell, label: "Notifications", path: "/notifications", color: "text-cyan-400" },
        { icon: Smartphone, label: "Connected Devices", color: "text-emerald-400" },
      ],
    },
    {
      section: "Preferences",
      items: [
        { icon: Moon, label: "Appearance", subtitle: "Dark Mode", color: "text-blue-400" },
        { icon: Globe, label: "Language", subtitle: "English", color: "text-teal-400" },
        { icon: Settings, label: "Advanced Settings", color: "text-slate-400" },
      ],
    },
    {
      section: "Support",
      items: [
        { icon: HelpCircle, label: "Help Center", color: "text-orange-400" },
      ],
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 p-0.5 mb-6"
        >
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-3xl font-bold">
                C
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-200 mb-1">Commander</h2>
                <p className="text-sm text-slate-400 font-mono">0x742d...a3f9</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-cyan-400">4</div>
                <div className="text-xs text-slate-400">Agents</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">12</div>
                <div className="text-xs text-slate-400">Missions</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-400">98</div>
                <div className="text-xs text-slate-400">Trust Score</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Sections */}
        {menuItems.map((section, sectionIndex) => (
          <div key={section.section} className="mb-6">
            <h3 className="text-sm font-semibold text-slate-400 mb-3">{section.section}</h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                    onClick={() => item.path && navigate(item.path)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-slate-200">{item.label}</p>
                        {item.subtitle && (
                          <p className="text-xs text-slate-400">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate("/welcome")}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 font-semibold hover:bg-red-500/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </motion.button>

        {/* Version */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Tashi Mobile v1.0.0
        </p>
      </div>
    </div>
  );
}