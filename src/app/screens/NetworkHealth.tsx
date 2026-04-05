import { useNavigate } from "react-router";
import { ArrowLeft, Wifi, WifiOff, Signal, Users, Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { motion } from "motion/react";

export function NetworkHealth() {
  const navigate = useNavigate();

  const networkStatus = {
    status: "synced",
    peers: 24,
    blockHeight: 4728392,
    latency: 42,
    syncProgress: 100,
    packetLoss: 0.3,
    bandwidth: "4.2 MB/s"
  };

  const peers = [
    { id: "peer-1", name: "Node Alpha", latency: 23, blocks: 4728392, status: "synced", region: "US-West" },
    { id: "peer-2", name: "Node Beta", latency: 45, blocks: 4728391, status: "syncing", region: "EU-Central" },
    { id: "peer-3", name: "Node Gamma", latency: 67, blocks: 4728392, status: "synced", region: "Asia-East" },
    { id: "peer-4", name: "Node Delta", latency: 34, blocks: 4728392, status: "synced", region: "US-East" },
    { id: "peer-5", name: "Node Epsilon", latency: 89, blocks: 4728385, status: "degraded", region: "SA-South" }
  ];

  const relayChain = [
    { id: 1, node: "Base Station", status: "healthy", agents: 12, signal: 98 },
    { id: 2, node: "Relay D-02", status: "healthy", agents: 8, signal: 94 },
    { id: 3, node: "Relay D-05", status: "healthy", agents: 5, signal: 91 },
    { id: 4, node: "Relay D-12", status: "healthy", agents: 3, signal: 87 }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, { bg: string; text: string; dot: string }> = {
      synced: { bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
      syncing: { bg: "bg-cyan-500/20", text: "text-cyan-400", dot: "bg-cyan-400" },
      degraded: { bg: "bg-yellow-500/20", text: "text-yellow-400", dot: "bg-yellow-400" },
      offline: { bg: "bg-red-500/20", text: "text-red-400", dot: "bg-red-400" },
      healthy: { bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" }
    };
    return colors[status] || colors.synced;
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
        <h1 className="text-2xl font-bold mb-1">Network Health</h1>
        <p className="text-sm text-slate-400">Connectivity and mesh status</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Network Status */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-5 border border-emerald-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">Fully Synced</h3>
              <p className="text-xs text-slate-300">Network operating normally</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <p className="text-slate-300 mb-1">Peers</p>
              <p className="text-xl font-bold text-cyan-400">{networkStatus.peers}</p>
            </div>
            <div>
              <p className="text-slate-300 mb-1">Latency</p>
              <p className="text-xl font-bold text-emerald-400">{networkStatus.latency}ms</p>
            </div>
            <div>
              <p className="text-slate-300 mb-1">Block</p>
              <p className="text-xl font-bold text-purple-400">{networkStatus.blockHeight.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-800/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <p className="text-xs text-slate-400">Bandwidth</p>
            </div>
            <p className="text-lg font-bold text-cyan-400">{networkStatus.bandwidth}</p>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-800/50"
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              <p className="text-xs text-slate-400">Packet Loss</p>
            </div>
            <p className="text-lg font-bold text-emerald-400">{networkStatus.packetLoss}%</p>
          </motion.div>
        </div>

        {/* Relay Chain */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Active Relay Chain</h3>
          <div className="space-y-3">
            {relayChain.map((relay, idx) => {
              const statusStyle = getStatusColor(relay.status);
              return (
                <div key={relay.id} className="relative">
                  {idx < relayChain.length - 1 && (
                    <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-cyan-500/30" />
                  )}
                  <div className="flex items-center gap-3 p-3 bg-slate-950/50 rounded-lg">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full ${statusStyle.bg} flex items-center justify-center`}>
                        <Wifi className={`w-5 h-5 ${statusStyle.text}`} />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${statusStyle.dot} ring-2 ring-slate-950`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{relay.node}</p>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                        <span>{relay.agents} agents</span>
                        <span>Signal: {relay.signal}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Connected Peers */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold">Connected Peers</h3>
            <span className="text-xs text-slate-400">{peers.length} nodes</span>
          </div>
          <div className="space-y-2">
            {peers.map((peer) => {
              const statusStyle = getStatusColor(peer.status);
              return (
                <div
                  key={peer.id}
                  className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${statusStyle.dot}`} />
                    <div>
                      <p className="text-sm font-medium">{peer.name}</p>
                      <p className="text-xs text-slate-400">{peer.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cyan-400">{peer.latency}ms</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                      {peer.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Network Topology */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/50"
        >
          <h3 className="text-sm font-semibold mb-4">Mesh Topology</h3>
          <div className="relative h-40 bg-slate-950/50 rounded-xl overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border border-cyan-500/10" />
              ))}
            </div>
            
            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Center node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-emerald-500/30 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full" />
                  </div>
                </div>
                
                {/* Surrounding nodes */}
                {[
                  { x: "25%", y: "30%" },
                  { x: "75%", y: "30%" },
                  { x: "25%", y: "70%" },
                  { x: "75%", y: "70%" }
                ].map((pos, idx) => (
                  <div
                    key={idx}
                    className="absolute"
                    style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="w-6 h-6 bg-cyan-500/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            Decentralized mesh with 5 active nodes
          </p>
        </motion.div>
      </div>
    </div>
  );
}
