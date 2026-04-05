import { motion } from 'motion/react';
import { Wallet, Users, AlertTriangle } from 'lucide-react';
import { useScenario } from '../context/ScenarioContext';
import { ScenarioType } from '../data/mockData';

const scenarios = [
  {
    id: 'wallet' as ScenarioType,
    name: 'Wallet & Stake',
    description: 'Identity & Assets',
    icon: Wallet,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'swarm' as ScenarioType,
    name: 'Swarm Mission',
    description: 'Agent Coordination',
    icon: Users,
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'rescue' as ScenarioType,
    name: 'Search & Rescue',
    description: 'Emergency Ops',
    icon: AlertTriangle,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
  },
];

export default function ScenarioSelector() {
  const { currentScenario, setScenario } = useScenario();

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white mb-1">Select Scenario</h2>
        <p className="text-sm text-gray-400">Choose a demo scenario to explore</p>
      </div>

      <div className="space-y-3">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon;
          const isActive = currentScenario === scenario.id;

          return (
            <motion.button
              key={scenario.id}
              onClick={() => setScenario(scenario.id)}
              className={`w-full relative overflow-hidden rounded-2xl border transition-all ${
                isActive
                  ? `${scenario.borderColor} ${scenario.bgColor}`
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10 p-4 flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isActive ? scenario.bgColor : 'bg-white/10'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? `bg-gradient-to-br ${scenario.color} bg-clip-text text-transparent` : 'text-gray-400'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {scenario.name}
                  </h3>
                  <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                    {scenario.description}
                  </p>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className={`w-2 h-2 rounded-full bg-gradient-to-br ${scenario.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  />
                )}
              </div>

              {/* Gradient overlay */}
              {isActive && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-5`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.05 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Info text */}
      <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-gray-400 leading-relaxed">
          Each scenario contains realistic mock data designed to showcase different aspects of the Tashi blockchain
          platform. Switch scenarios to see how the app adapts to different operational contexts.
        </p>
      </div>
    </div>
  );
}
