import { motion } from "motion/react";
import { TrendingUp, Lock, Unlock, Plus, Award, ChevronRight } from "lucide-react";

export function Stake() {
  const validators = [
    { name: "Validator Alpha", apy: "18.5%", staked: "5,000 TASHI", status: "Active" },
    { name: "Validator Beta", apy: "17.2%", staked: "3,500 TASHI", status: "Active" },
    { name: "Validator Gamma", apy: "19.1%", staked: "2,000 TASHI", status: "Active" },
  ];

  const rewardHistory = [
    { date: "Apr 5, 2026", amount: "+45.20", value: "$180.80" },
    { date: "Apr 4, 2026", amount: "+44.85", value: "$179.40" },
    { date: "Apr 3, 2026", amount: "+45.50", value: "$182.00" },
    { date: "Apr 2, 2026", amount: "+45.10", value: "$180.40" },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold mb-6">Staking</h1>

        {/* Staking Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 p-0.5 mb-6"
        >
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-xs text-slate-400 mb-1">Total Staked</p>
                <h2 className="text-2xl font-bold text-white mb-1">10,500</h2>
                <p className="text-sm text-slate-400">TASHI</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Available</p>
                <h2 className="text-2xl font-bold text-white mb-1">14,067</h2>
                <p className="text-sm text-slate-400">TASHI</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-800/40 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-slate-300">Current APY</span>
                </div>
                <span className="text-sm font-semibold text-purple-400">18.2%</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-800/40 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Total Rewards</span>
                </div>
                <span className="text-sm font-semibold text-emerald-400">+1,245.50 TASHI</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 font-semibold text-white shadow-lg shadow-purple-500/20">
            <Plus className="w-5 h-5" />
            Stake More
          </button>
          <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 font-semibold text-slate-300">
            <Unlock className="w-5 h-5" />
            Unstake
          </button>
        </motion.div>

        {/* Staking Positions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-400">Your Validators</h3>
            <button className="text-xs text-cyan-400 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {validators.map((validator, index) => (
              <motion.button
                key={validator.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="w-full p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-slate-200">{validator.name}</p>
                      <p className="text-xs text-slate-400">{validator.staked}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg text-xs font-medium text-emerald-400">
                      {validator.status}
                    </span>
                    <span className="text-sm font-semibold text-purple-400">{validator.apy}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Staking Period</span>
                    <span className="text-slate-300">15 / 30 days</span>
                  </div>
                  <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Rewards History */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-400">Recent Rewards</h3>
            <button className="text-xs text-cyan-400 font-medium">View All</button>
          </div>
          <div className="space-y-3">
            {rewardHistory.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-200">Staking Reward</p>
                    <p className="text-xs text-slate-400">{reward.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-emerald-400">{reward.amount}</p>
                  <p className="text-xs text-slate-400">{reward.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-200 mb-1">Maximize Your Returns</p>
              <p className="text-xs text-slate-400">
                Stake with multiple validators to diversify your risk and earn consistent rewards. Unstaking has a 7-day cooldown period.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}