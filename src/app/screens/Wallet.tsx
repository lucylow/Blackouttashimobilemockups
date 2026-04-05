import { useState } from "react";
import { motion } from "motion/react";
import { 
  Eye, 
  EyeOff, 
  Send, 
  Download, 
  QrCode,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Copy,
  Check
} from "lucide-react";

export function Wallet() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  const tokens = [
    {
      symbol: "TASHI",
      name: "Tashi Token",
      balance: "24,567.82",
      value: "$98,271.28",
      change: "+12.5%",
      positive: true,
      color: "from-purple-500 to-cyan-500",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      balance: "2.45",
      value: "$4,900.00",
      change: "+3.2%",
      positive: true,
      color: "from-blue-500 to-indigo-500",
    },
    {
      symbol: "USDC",
      name: "USD Coin",
      balance: "5,000.00",
      value: "$5,000.00",
      change: "0.0%",
      positive: true,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const transactions = [
    {
      type: "Received",
      token: "TASHI",
      amount: "+1,250.50",
      date: "Apr 5, 2026",
      time: "2:30 PM",
      status: "Confirmed",
      hash: "0x742d...a3f9",
    },
    {
      type: "Sent",
      token: "TASHI",
      amount: "-500.00",
      date: "Apr 5, 2026",
      time: "10:15 AM",
      status: "Confirmed",
      hash: "0x8f3c...b2e1",
    },
    {
      type: "Staked",
      token: "TASHI",
      amount: "-2,000.00",
      date: "Apr 4, 2026",
      time: "4:20 PM",
      status: "Confirmed",
      hash: "0x1a5d...c7f8",
    },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-5 pt-14 pb-6">
        <div className="flex items-center justify-between mb-7">
          <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
          <button
            onClick={() => setBalanceVisible(!balanceVisible)}
            className="w-11 h-11 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-800/70 hover:border-slate-600/50 transition-all"
          >
            {balanceVisible ? (
              <Eye className="w-5 h-5 text-slate-300" />
            ) : (
              <EyeOff className="w-5 h-5 text-slate-300" />
            )}
          </button>
        </div>

        {/* Total Portfolio - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[28px] bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30 p-[1px] mb-6 shadow-2xl shadow-purple-500/10"
        >
          <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[27px] p-7 relative overflow-hidden">
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-cyan-500/15"
            />
            <div className="relative z-10">
              <p className="text-slate-500 mb-3 tracking-wide uppercase text-xs font-medium">Total Portfolio Value</p>
              {balanceVisible ? (
                <>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-emerald-300 text-transparent bg-clip-text mb-2 tracking-tight">
                    $108,171.28
                  </h2>
                  <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 w-fit">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <TrendingUp className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-emerald-400 font-semibold">+8.7%</span>
                    <span className="text-slate-500 text-sm">24h</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-2 mb-2">
                  <div className="w-48 h-12 bg-slate-700/50 rounded-2xl animate-pulse" />
                  <div className="w-24 h-8 bg-slate-700/50 rounded-xl animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Wallet Address - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between p-4 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 mb-6 shadow-lg shadow-black/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
              T
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-0.5 uppercase tracking-wide font-medium">Wallet Address</p>
              <p className="font-mono text-slate-200 font-semibold">0x742d...a3f9</p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleCopy}
            className="w-10 h-10 rounded-xl bg-slate-700/60 flex items-center justify-center hover:bg-slate-700/80 transition-colors border border-slate-600/30"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-slate-300" />
            )}
          </motion.button>
        </motion.div>

        {/* Action Buttons - Improved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3 mb-8"
        >
          {[
            { icon: Send, label: "Send", color: "from-cyan-500 to-blue-600" },
            { icon: Download, label: "Receive", color: "from-emerald-500 to-teal-600" },
            { icon: QrCode, label: "Scan", color: "from-purple-500 to-pink-600" },
          ].map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.06, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.94 }}
                className="flex flex-col items-center gap-3 p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all shadow-lg shadow-black/10"
              >
                <div className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-slate-200">{action.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Assets - Enhanced */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 uppercase tracking-wider font-bold text-xs">Assets</h3>
            <button className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">Manage</button>
          </div>
          <div className="space-y-2.5">
            {tokens.map((token, index) => (
              <motion.button
                key={token.symbol}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.06, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all shadow-lg shadow-black/10"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${token.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg`}>
                    {token.symbol[0]}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-bold text-slate-100 mb-0.5">{token.symbol}</p>
                    <p className="text-xs text-slate-500">{token.name}</p>
                  </div>
                  <div className="text-right">
                    {balanceVisible ? (
                      <>
                        <p className="font-bold text-slate-100 mb-0.5">{token.balance}</p>
                        <div className="flex items-center gap-1.5 justify-end">
                          <p className="text-xs text-slate-500">{token.value}</p>
                          <span className={`text-xs font-semibold ${token.positive ? "text-emerald-400" : "text-red-400"}`}>
                            {token.change}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="w-20 h-4 bg-slate-700/50 rounded-lg ml-auto animate-pulse" />
                        <div className="w-16 h-3 bg-slate-700/50 rounded ml-auto animate-pulse" />
                      </div>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Recent Transactions - Enhanced */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 uppercase tracking-wider font-bold text-xs">Recent Transactions</h3>
            <button className="text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">View All</button>
          </div>
          <div className="space-y-2.5">
            {transactions.map((tx, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.06, type: "spring", stiffness: 200 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-4 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/70 transition-all shadow-lg shadow-black/10"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-bold text-slate-100">{tx.type}</span>
                    <span className="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-lg text-xs text-emerald-400 font-semibold">
                      {tx.status}
                    </span>
                  </div>
                  <span className={`font-bold ${tx.amount.startsWith("+") ? "text-emerald-400" : "text-slate-300"}`}>
                    {tx.amount} {tx.token}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{tx.date} at {tx.time}</span>
                  <span className="font-mono text-slate-400">{tx.hash}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}