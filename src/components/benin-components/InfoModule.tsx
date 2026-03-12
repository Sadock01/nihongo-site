import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface InfoModuleProps {
  position: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay: number;
}

const InfoModule = ({ position, title, icon, children, delay }: InfoModuleProps) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'bottom-left': 'bottom-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`absolute z-20 w-72 bg-white p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-50 ${positions[position]}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-50 rounded-xl text-slate-700">{icon}</div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
          {title}
        </span>
      </div>
      <div className="content text-slate-700">{children}</div>
    </motion.div>
  );
};

export default InfoModule;