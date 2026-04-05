import { useNavigate } from "react-router";
import { ArrowLeft, Clock, CheckCircle, XCircle, AlertTriangle, Users, Download, Filter } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function MissionHistory() {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState("all");

  const events = [
    {
      id: 1,
      type: "mission_complete",
      title: "Mission MSN-2847 Completed",
      description: "Urban search completed successfully, 2 survivors located",
      timestamp: "2024-04-05 15:42:18",
      mission: "MSN-2847",
      icon: CheckCircle,
      color: "emerald"
    },
    {
      id: 2,
      type: "detection",
      title: "Thermal Signature Detected",
      description: "Agent D-07 detected possible survivor at Grid C4",
      timestamp: "2024-04-05 15:07:33",
      mission: "MSN-2847",
      icon: AlertTriangle,
      color: "yellow"
    },
    {
      id: 3,
      type: "relay",
      title: "Relay Chain Established",
      description: "Communication bridge active across 4 nodes",
      timestamp: "2024-04-05 14:35:12",
      mission: "MSN-2847",
      icon: Users,
      color: "purple"
    },
    {
      id: 4,
      type: "agent_failure",
      title: "Agent D-09 System Error",
      description: "Critical failure, agent returned to base for diagnostics",
      timestamp: "2024-04-05 14:28:45",
      mission: "MSN-2847",
      icon: XCircle,
      color: "red"
    },
    {
      id: 5,
      type: "mission_start",
      title: "Mission MSN-2847 Started",
      description: "Urban search operation initiated with 15 agents",
      timestamp: "2024-04-05 14:23:07",
      mission: "MSN-2847",
      icon: CheckCircle,
      color: "cyan"
    },
    {
      id: 6,
      type: "mission_complete",
      title: "Mission MSN-2846 Completed",
      description: "Warehouse inventory scan completed, no anomalies",
      timestamp: "2024-04-05 12:15:22",
      mission: "MSN-2846",
      icon: CheckCircle,
      color: "emerald"
    },
    {
      id: 7,
      type: "governance",
      title: "Vote Cast on PROP-046",
      description: "Voted YES on mesh network upgrade proposal",
      timestamp: "2024-04-05 09:34:11",
      mission: null,
      icon: CheckCircle,
      color: "cyan"
    },
    {
      id: 8,
      type: "agent_failure",
      title: "Agent D-03 Low Battery",
      description: "Emergency return triggered at 18% battery",
      timestamp: "2024-04-05 08:52:04",
      mission: "MSN-2845",
      icon: AlertTriangle,
      color: "orange"
    }
  ];

  const filteredEvents = filterType === "all" 
    ? events 
    : events.filter(e => e.type === filterType);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; dot: string }> = {
      emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
      yellow: { bg: "bg-yellow-500/20", text: "text-yellow-400", dot: "bg-yellow-400" },
      purple: { bg: "bg-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
      red: { bg: "bg-red-500/20", text: "text-red-400", dot: "bg-red-400" },
      cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", dot: "bg-cyan-400" },
      orange: { bg: "bg-orange-500/20", text: "text-orange-400", dot: "bg-orange-400" }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors">
            <Download className="w-5 h-5 text-cyan-400" />
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-1">Mission History</h1>
        <p className="text-sm text-slate-400">Complete event timeline and audit log</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {["all", "mission_complete", "detection", "agent_failure", "governance"].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filterType === type
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {type === "all" ? "All Events" : type.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800" />

          <div className="space-y-4">
            {filteredEvents.map((event, idx) => {
              const Icon = event.icon;
              const colorClasses = getColorClasses(event.color);
              
              return (
                <motion.div
                  key={event.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 top-3 w-3 h-3 rounded-full ${colorClasses.dot} ring-4 ring-slate-950`} />
                  
                  <div className={`p-4 rounded-xl border ${colorClasses.bg} border-slate-800/50`}>
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${colorClasses.bg}`}>
                        <Icon className={`w-4 h-4 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1">{event.title}</h3>
                        <p className="text-xs text-slate-400 mb-2">{event.description}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{event.timestamp}</span>
                          </div>
                          {event.mission && (
                            <span className="text-cyan-400">{event.mission}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            <p className="text-slate-400">No events found</p>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
