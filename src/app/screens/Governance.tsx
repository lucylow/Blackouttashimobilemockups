import { useNavigate } from "react-router";
import { ArrowLeft, Vote, Clock, TrendingUp, Check, X, Minus, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Governance() {
  const navigate = useNavigate();
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);

  const userStake = 12500;
  const userVotingPower = 1.87; // as percentage

  const proposals = [
    {
      id: "PROP-047",
      title: "Increase Agent Battery Threshold",
      summary: "Adjust minimum battery requirement for mission deployment from 40% to 50% to improve reliability",
      status: "active",
      yesVotes: 67.3,
      noVotes: 28.1,
      abstain: 4.6,
      quorum: 78.5,
      timeLeft: "2d 14h",
      yourVote: null,
      category: "Safety"
    },
    {
      id: "PROP-046",
      title: "Deploy Mesh Network Upgrade",
      summary: "Enable advanced relay protocol v2.1 for improved signal efficiency in complex terrain",
      status: "active",
      yesVotes: 82.4,
      noVotes: 15.2,
      abstain: 2.4,
      quorum: 91.3,
      timeLeft: "5h 23m",
      yourVote: "yes",
      category: "Technical"
    },
    {
      id: "PROP-045",
      title: "Reduce Stake Slashing Penalty",
      summary: "Lower penalty for failed rescue missions from 15% to 10% when caused by environmental factors",
      status: "active",
      yesVotes: 45.8,
      noVotes: 51.2,
      abstain: 3.0,
      quorum: 68.9,
      timeLeft: "18h 41m",
      yourVote: null,
      category: "Economics"
    },
    {
      id: "PROP-044",
      title: "Emergency Protocol Update",
      summary: "Grant mission commanders ability to override agent assignments during critical scenarios",
      status: "passed",
      yesVotes: 89.7,
      noVotes: 8.3,
      abstain: 2.0,
      quorum: 95.2,
      timeLeft: "Ended",
      yourVote: "yes",
      category: "Governance"
    }
  ];

  const handleVote = (proposalId: string, vote: "yes" | "no" | "abstain") => {
    // Mock vote action
    console.log(`Voted ${vote} on ${proposalId}`);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      active: { bg: "bg-cyan-500/20", text: "text-cyan-400" },
      passed: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
      rejected: { bg: "bg-red-500/20", text: "text-red-400" },
      expired: { bg: "bg-slate-500/20", text: "text-slate-400" }
    };
    return colors[status] || colors.active;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Safety: "text-yellow-400 bg-yellow-500/20",
      Technical: "text-purple-400 bg-purple-500/20",
      Economics: "text-emerald-400 bg-emerald-500/20",
      Governance: "text-cyan-400 bg-cyan-500/20"
    };
    return colors[category] || "text-slate-400 bg-slate-500/20";
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
        <h1 className="text-2xl font-bold mb-1">Governance</h1>
        <p className="text-sm text-slate-400">Vote on proposals and shape the network</p>
      </div>

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 140px)' }}>
        {/* Voting Power Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-5 border border-purple-500/30"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-slate-300 mb-1">Your Voting Power</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {userVotingPower}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-300 mb-1">Staked</p>
              <p className="text-lg font-semibold text-purple-400">{userStake.toLocaleString()} TASHI</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <TrendingUp className="w-3 h-3" />
            <span>Stake more to increase your influence</span>
          </div>
        </motion.div>

        {/* Active Proposals */}
        <div>
          <h2 className="text-sm font-semibold mb-3 text-slate-300">Active Proposals</h2>
          <div className="space-y-3">
            {proposals.filter(p => p.status === "active").map((proposal, idx) => {
              const statusStyle = getStatusColor(proposal.status);
              const categoryStyle = getCategoryColor(proposal.category);
              
              return (
                <motion.div
                  key={proposal.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-4 border border-slate-800/50"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryStyle}`}>
                          {proposal.category}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                          {proposal.status}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold mb-1">{proposal.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{proposal.summary}</p>
                    </div>
                  </div>

                  {/* Vote Distribution */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-xs mb-2">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{proposal.timeLeft} remaining</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-cyan-400">{proposal.quorum}% quorum</span>
                    </div>
                    
                    {/* Progress bars */}
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-emerald-400">Yes</span>
                          <span className="text-emerald-400">{proposal.yesVotes}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${proposal.yesVotes}%` }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full bg-emerald-500"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-red-400">No</span>
                          <span className="text-red-400">{proposal.noVotes}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${proposal.noVotes}%` }}
                            transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                            className="h-full bg-red-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  {!proposal.yourVote ? (
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => handleVote(proposal.id, "yes")}
                        className="flex items-center justify-center gap-1 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg border border-emerald-500/30 transition-colors"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">Yes</span>
                      </button>
                      <button
                        onClick={() => handleVote(proposal.id, "no")}
                        className="flex items-center justify-center gap-1 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg border border-red-500/30 transition-colors"
                      >
                        <X className="w-3 h-3 text-red-400" />
                        <span className="text-xs font-medium text-red-400">No</span>
                      </button>
                      <button
                        onClick={() => handleVote(proposal.id, "abstain")}
                        className="flex items-center justify-center gap-1 py-2 bg-slate-700/50 hover:bg-slate-700/70 rounded-lg border border-slate-700 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-medium text-slate-400">Skip</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 py-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-medium text-cyan-400">
                        You voted {proposal.yourVote.toUpperCase()}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Past Proposals */}
        <div>
          <h2 className="text-sm font-semibold mb-3 text-slate-300">Recent Decisions</h2>
          <div className="space-y-2">
            {proposals.filter(p => p.status !== "active").map((proposal) => {
              const statusStyle = getStatusColor(proposal.status);
              const categoryStyle = getCategoryColor(proposal.category);
              
              return (
                <button
                  key={proposal.id}
                  className="w-full bg-slate-900/30 backdrop-blur-xl rounded-xl p-4 border border-slate-800/30 hover:border-slate-700/50 transition-all text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${categoryStyle}`}>
                          {proposal.category}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle.bg} ${statusStyle.text}`}>
                          {proposal.status}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold mb-1">{proposal.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>Yes: {proposal.yesVotes}%</span>
                        <span>No: {proposal.noVotes}%</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
