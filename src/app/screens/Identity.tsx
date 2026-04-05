import { useState } from "react";
import { motion } from "motion/react";
import { 
  Shield, 
  Fingerprint, 
  Key, 
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Copy,
  QrCode,
  Eye,
  EyeOff,
  Check
} from "lucide-react";

export function Identity() {
  const [showPhrase, setShowPhrase] = useState(false);
  const [copied, setCopied] = useState(false);

  const recoveryPhrase = [
    "warrior", "galaxy", "thunder", "planet", "secure", "mountain",
    "ocean", "crystal", "phoenix", "harmony", "velocity", "quantum"
  ];

  const devices = [
    { name: "iPhone 15 Pro", location: "New York, US", lastActive: "Active now", current: true },
    { name: "MacBook Pro", location: "New York, US", lastActive: "2 hours ago", current: false },
    { name: "iPad Air", location: "New York, US", lastActive: "1 day ago", current: false },
  ];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pb-6">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold mb-6">Identity & Security</h1>

        {/* Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 p-0.5 mb-6"
        >
          <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-2xl font-bold">
                  C
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-200">Commander</h2>
                  <p className="text-sm text-slate-400">Tashi Identity</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Verified</span>
              </div>
            </div>

            {/* Wallet Address */}
            <div className="p-4 bg-slate-800/40 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-400 font-medium">Wallet Address</p>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center">
                    <QrCode className="w-4 h-4 text-slate-300" />
                  </button>
                </div>
              </div>
              <p className="text-sm font-mono text-slate-200">0x742d35f8a9b2c1e6f079c5a7ead8f927f5a5a3f9</p>
            </div>
          </div>
        </motion.div>

        {/* Security Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-5 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h3 className="font-semibold text-slate-200">Security Score</h3>
            </div>
            <span className="text-2xl font-bold text-emerald-400">98/100</span>
          </div>
          
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            />
          </div>

          <p className="text-xs text-slate-400">
            Excellent security. Keep your recovery phrase safe and enable additional protections.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Security Features</h3>
          <div className="space-y-3">
            {[
              { icon: Fingerprint, label: "Biometric Authentication", enabled: true, color: "text-emerald-400" },
              { icon: Key, label: "Two-Factor Authentication", enabled: true, color: "text-cyan-400" },
              { icon: Shield, label: "Transaction Signing", enabled: true, color: "text-purple-400" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{feature.label}</p>
                  </div>
                  {feature.enabled && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs text-emerald-400 font-medium">Enabled</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recovery Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-5 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Key className="w-5 h-5 text-orange-400" />
              <h3 className="font-semibold text-slate-200">Recovery Phrase</h3>
            </div>
            <button
              onClick={() => setShowPhrase(!showPhrase)}
              className="w-9 h-9 rounded-xl bg-slate-700/50 flex items-center justify-center"
            >
              {showPhrase ? (
                <EyeOff className="w-4 h-4 text-slate-300" />
              ) : (
                <Eye className="w-4 h-4 text-slate-300" />
              )}
            </button>
          </div>

          {showPhrase ? (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {recoveryPhrase.map((word, index) => (
                <div
                  key={index}
                  className="p-2 bg-slate-700/50 rounded-lg text-center"
                >
                  <span className="text-xs text-slate-500">{index + 1}.</span>
                  <p className="text-sm font-mono text-slate-200">{word}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-slate-700/30 rounded-xl text-center mb-4">
              <p className="text-sm text-slate-400">
                Tap the eye icon to reveal your recovery phrase
              </p>
            </div>
          )}

          <div className="flex items-start gap-2 p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl">
            <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-orange-400">
              Never share your recovery phrase. Anyone with these words can access your wallet.
            </p>
          </div>
        </motion.div>

        {/* Connected Devices */}
        <div>
          <h3 className="text-sm font-semibold text-slate-400 mb-3">Connected Devices</h3>
          <div className="space-y-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-slate-200">{device.name}</p>
                      {device.current && (
                        <span className="px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/30 rounded text-xs text-cyan-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400">{device.location}</p>
                    <p className="text-xs text-slate-500">{device.lastActive}</p>
                  </div>
                </div>
                {!device.current && (
                  <button className="text-xs text-red-400 font-medium">
                    Remove
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}