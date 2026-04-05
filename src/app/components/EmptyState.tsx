import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  iconColor?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  iconColor = "text-slate-500"
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="mb-5"
      >
        <div className="w-24 h-24 rounded-[24px] bg-slate-800/50 border border-slate-700/60 flex items-center justify-center shadow-lg shadow-black/20">
          <Icon className={`w-12 h-12 ${iconColor}`} />
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-bold text-slate-100 mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-500 mb-8 max-w-xs leading-relaxed"
      >
        {description}
      </motion.p>

      {actionLabel && onAction && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-600 rounded-[18px] text-white font-bold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all border border-cyan-400/20 shadow-lg shadow-cyan-500/20"
        >
          {actionLabel}
        </motion.button>
      )}
    </motion.div>
  );
}

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-20 h-20 rounded-[20px] bg-gradient-to-br from-cyan-500 via-purple-500 to-cyan-600 mb-5 shadow-2xl shadow-cyan-500/30"
      />
      <p className="text-slate-400 font-medium">{message}</p>
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message: string;
  actionLabel?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message,
  actionLabel = "Try Again",
  onRetry
}: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-24 h-24 rounded-[24px] bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-5 shadow-lg shadow-red-500/10"
      >
        <motion.div
          animate={{ rotate: [0, -12, 12, -12, 0] }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl"
        >
          ⚠️
        </motion.div>
      </motion.div>

      <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">{message}</p>

      {onRetry && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="px-7 py-3.5 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-[18px] text-white font-bold transition-all shadow-lg hover:shadow-xl"
        >
          {actionLabel}
        </motion.button>
      )}
    </motion.div>
  );
}
