import { motion } from "motion/react";

interface SkeletonProps {
  className?: string;
  variant?: "card" | "text" | "circle" | "stat";
}

export function Skeleton({ className = "", variant = "text" }: SkeletonProps) {
  const baseClasses = "bg-slate-700/30 animate-pulse";

  const variantClasses = {
    card: "rounded-[20px] h-32",
    text: "rounded-lg h-4",
    circle: "rounded-full w-12 h-12",
    stat: "rounded-2xl h-48"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className} relative overflow-hidden`}
    >
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent"
      />
    </motion.div>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-5 rounded-[20px] bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 shadow-lg shadow-black/10">
      <div className="flex items-center gap-3.5 mb-4">
        <Skeleton variant="circle" />
        <div className="flex-1 space-y-2">
          <Skeleton className="w-3/4" />
          <Skeleton className="w-1/2" />
        </div>
      </div>
      <Skeleton className="w-full h-2.5 rounded-full mb-2" />
      <div className="flex justify-between">
        <Skeleton className="w-20" />
        <Skeleton className="w-16" />
      </div>
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-emerald-500/30 p-[1px] shadow-2xl shadow-purple-500/10">
      <div className="bg-slate-900/95 backdrop-blur-2xl rounded-[27px] p-7">
        <Skeleton className="w-32 h-4 mb-4" />
        <Skeleton className="w-48 h-12 mb-2 rounded-2xl" />
        <Skeleton className="w-24 h-8 rounded-xl" />
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-2.5">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
