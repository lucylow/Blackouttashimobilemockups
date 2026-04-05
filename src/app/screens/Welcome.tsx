import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Wallet, Users, Bell, ChevronRight, Fingerprint } from "lucide-react";

const slides = [
  {
    icon: Shield,
    title: "Identity and Security",
    description: "Own your identity with blockchain-native security. Your keys, your control.",
    color: "from-purple-500 to-cyan-500",
  },
  {
    icon: Wallet,
    title: "Blockchain Assets & Staking",
    description: "Manage your Tashi tokens, stake for rewards, and participate in network consensus.",
    color: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Swarm Coordination",
    description: "Join decentralized missions and coordinate with autonomous agents in real time.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay informed with instant updates on transactions, missions, and governance.",
    color: "from-teal-500 to-purple-500",
  },
];

export function Welcome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!showOnboarding) {
      setShowOnboarding(true);
      return;
    }
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/");
    }
  };

  const currentSlideData = slides[currentSlide];
  const SlideIcon = currentSlideData.icon;

  return (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "10%", right: "10%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-between px-6 py-12">
        <AnimatePresence mode="wait">
          {!showOnboarding ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center flex-1"
            >
              {/* Logo */}
              <motion.div
                className="mb-8"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500 via-cyan-500 to-emerald-500 flex items-center justify-center">
                  <div className="text-4xl font-bold">T</div>
                </div>
              </motion.div>

              <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                Tashi
              </h1>
              
              <p className="text-xl text-slate-300 mb-2 text-center font-medium">
                Coordinate on-chain.
              </p>
              <p className="text-xl text-slate-300 mb-2 text-center font-medium">
                Operate in real time.
              </p>
              
              <p className="text-sm text-slate-400 mt-6 text-center max-w-xs">
                Your mobile command center for secure identity, staking, swarm tasks, and mission control.
              </p>

              {/* Security Note */}
              <div className="mt-8 p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl max-w-xs">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-300 font-medium mb-1">
                      Blockchain Security
                    </p>
                    <p className="text-xs text-slate-400">
                      You own your wallet and identity. Keep your recovery phrase safe.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`slide-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex flex-col items-center justify-center flex-1 max-w-sm"
            >
              {/* Icon */}
              <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${currentSlideData.color} p-0.5 mb-8`}>
                <div className="w-full h-full bg-slate-900 rounded-3xl flex items-center justify-center">
                  <SlideIcon className="w-16 h-16 text-cyan-400" />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-center">
                {currentSlideData.title}
              </h2>
              
              <p className="text-slate-300 text-center text-lg">
                {currentSlideData.description}
              </p>

              {/* Progress Dots */}
              <div className="flex gap-2 mt-12">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-400"
                        : "w-2 bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="w-full max-w-sm space-y-3">
          <button
            onClick={handleGetStarted}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 rounded-2xl font-semibold text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group"
          >
            {!showOnboarding ? "Get Started" : currentSlide === slides.length - 1 ? "Enter Tashi" : "Next"}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {!showOnboarding && (
            <button
              onClick={() => navigate("/")}
              className="w-full py-4 px-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl font-semibold text-slate-300 flex items-center justify-center gap-2"
            >
              <Fingerprint className="w-5 h-5" />
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}