import { useNavigate } from "react-router";
import { ArrowLeft, Battery, Signal, Grid3x3, List, Search, Filter, SlidersHorizontal, Zap, TrendingDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function AgentFleet() {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"battery" | "signal" | "status">("battery");

  const agents = [
    { id: "D-01", role: "Scout", battery: 87, signal: 95, status: "exploring", temp: 42, task: "Scanning perimeter" },
    { id: "D-02", role: "Relay", battery: 92, signal: 98, status: "relaying", temp: 38, task: "Maintaining link" },
    { id: "D-03", role: "Scout", battery: 45, signal: 78, status: "exploring", temp: 51, task: "Zone exploration" },
    { id: "D-04", role: "Rescue", battery: 71, signal: 88, status: "converging", temp: 47, task: "Moving to target" },
    { id: "D-05", role: "Relay", battery: 88, signal: 94, status: "relaying", temp: 39, task: "Signal relay" },
    { id: "D-06", role: "Scout", battery: 34, signal: 65, status: "retreating", temp: 58, task: "Return to base" },
    { id: "D-07", role: "Scout", battery: 63, signal: 82, status: "detecting", temp: 55, task: "Thermal scan" },
    { id: "D-08", role: "Rescue", battery: 79, signal: 91, status: "standby", temp: 41, task: "Awaiting orders" },
    { id: "D-09", role: "Relay", battery: 15, signal: 42, status: "failed", temp: 62, task: "System error" },
    { id: "D-10", role: "Scout", battery: 81, signal: 87, status: "exploring", temp: 44, task: "Area survey" },
    { id: "D-11", role: "Rescue", battery: 68, signal: 85, status: "converging", temp: 49, task: "Extraction prep" },
    { id: "D-12", role: "Relay", battery: 91, signal: 96, status: "relaying", temp: 37, task: "Network bridge" }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, { bg: string; text: string; dot: string }> = {
      exploring: { bg: "bg-cyan-500/20", text: "text-cyan-400", dot: "bg-cyan-400" },
      detecting: { bg: "bg-yellow-500/20", text: "text-yellow-400", dot: "bg-yellow-400" },
      relaying: { bg: "bg-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
      converging: { bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
      standby: { bg: "bg-slate-500/20", text: "text-slate-400", dot: "bg-slate-400" },
      retreating: { bg: "bg-orange-500/20", text: "text-orange-400", dot: "bg-orange-400" },
      failed: { bg: "bg-red-500/20", text: "text-red-400", dot: "bg-red-400" }
    };
    return colors[status] || colors.standby;
  };

  const filteredAgents = agents
    .filter(agent => {
      const matchesSearch = agent.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            agent.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === "all" || agent.status === filter || agent.role.toLowerCase() === filter;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      if (sortBy === "battery") return b.battery - a.battery;
      if (sortBy === "signal") return b.signal - a.signal;
      return 0;
    });

  const statusCounts = {
    all: agents.length,
    exploring: agents.filter(a => a.status === "exploring").length,
    relaying: agents.filter(a => a.status === "relaying").length,
    converging: agents.filter(a => a.status === "converging").length,
    failed: agents.filter(a => a.status === "failed").length
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-slate-800/50 bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-slate-800 text-cyan-400" : "text-slate-400 hover:bg-slate-800/50"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-slate-800 text-cyan-400" : "text-slate-400 hover:bg-slate-800/50"
              }`}
            >
              <List className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold mb-1"
        >
          Agent Fleet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-slate-400"
        >
          {agents.length} total agents • {agents.filter(a => a.status !== 'failed').length} operational
        </motion.p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search agents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </motion.div>

        {/* Sort Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-400">Sort by:</span>
          <div className="flex gap-2">
            {(["battery", "signal", "status"] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  sortBy === sort
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar"
        >
          {Object.entries(statusCounts).map(([status, count]) => (
            <motion.button
              key={status}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filter === status
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} ({count})
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-3 gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-3 border border-slate-800/50"
          >
            <p className="text-xs text-slate-400 mb-1">Online</p>
            <p className="text-xl font-bold text-emerald-400">{agents.filter(a => a.status !== 'failed').length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-3 border border-slate-800/50"
          >
            <div className="flex items-center gap-1 mb-1">
              <Battery className="w-3 h-3 text-slate-400" />
              <p className="text-xs text-slate-400">Avg Battery</p>
            </div>
            <p className="text-xl font-bold text-cyan-400">
              {Math.round(agents.reduce((sum, a) => sum + a.battery, 0) / agents.length)}%
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-3 border border-slate-800/50"
          >
            <div className="flex items-center gap-1 mb-1">
              <Zap className="w-3 h-3 text-red-400" />
              <p className="text-xs text-slate-400">Failed</p>
            </div>
            <p className="text-xl font-bold text-red-400">{agents.filter(a => a.status === 'failed').length}</p>
          </motion.div>
        </motion.div>

        {/* Agent Grid/List */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              {filteredAgents.map((agent, idx) => {
                const statusStyle = getStatusColor(agent.status);
                return (
                  <motion.button
                    key={agent.id}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/agent/${agent.id}`)}
                    className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-800/50 hover:border-cyan-500/30 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                          className={`w-2 h-2 rounded-full ${statusStyle.dot}`}
                        />
                        <span className="text-sm font-bold">{agent.id}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                        {agent.role}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Battery</span>
                        <div className="flex items-center gap-1">
                          <Battery className={`w-3 h-3 ${agent.battery < 30 ? 'text-red-400' : 'text-emerald-400'}`} />
                          <span className={agent.battery < 30 ? 'text-red-400' : 'text-emerald-400'}>
                            {agent.battery}%
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Signal</span>
                        <div className="flex items-center gap-1">
                          <Signal className="w-3 h-3 text-cyan-400" />
                          <span className="text-cyan-400">{agent.signal}%</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-800/50">
                        <p className="text-slate-400 truncate">{agent.task}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              {filteredAgents.map((agent, idx) => {
                const statusStyle = getStatusColor(agent.status);
                return (
                  <motion.button
                    key={agent.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: idx * 0.02 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/agent/${agent.id}`)}
                    className="w-full bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-800/50 hover:border-cyan-500/30 transition-all text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2, delay: idx * 0.1 }}
                          className={`w-2 h-2 rounded-full ${statusStyle.dot}`}
                        />
                        <div>
                          <p className="text-sm font-bold">{agent.id}</p>
                          <p className="text-xs text-slate-400">{agent.role}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                        {agent.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs mb-2">
                      <div className="flex items-center gap-1">
                        <Battery className={`w-3 h-3 ${agent.battery < 30 ? 'text-red-400' : 'text-emerald-400'}`} />
                        <span className={agent.battery < 30 ? 'text-red-400' : 'text-emerald-400'}>
                          {agent.battery}%
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Signal className="w-3 h-3 text-cyan-400" />
                        <span className="text-cyan-400">{agent.signal}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-slate-400">{agent.temp}°C</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 truncate">{agent.task}</p>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredAgents.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Filter className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            </motion.div>
            <p className="text-slate-400">No agents found</p>
            <p className="text-sm text-slate-500 mt-1">Try adjusting your filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
