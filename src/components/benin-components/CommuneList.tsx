import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';

interface CommuneListProps {
  departmentName: string | undefined;
  communes: string[] | undefined;
  selectedCommune: string | null;
  onSelectCommune: (name: string) => void;
}

const CommuneList = ({ departmentName, communes, selectedCommune, onSelectCommune }: CommuneListProps) => {
  return (
    <div className="w-full lg:w-96 bg-white border border-slate-100 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 min-h-[520px] flex flex-col">
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold text-slate-800">
          {departmentName ? departmentName : "Exploration"}
        </h3>
        <p className="text-sm text-slate-400">
          {communes ? `${communes.length} communes à découvrir` : "Sélection géographique"}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="wait">
          {communes && communes.length > 0 ? (
            <motion.div
              key={departmentName}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-2"
            >
              {communes.map((commune) => (
                <button
                  key={commune}
                  onClick={() => onSelectCommune(commune)}
                  className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl transition-all duration-300 group ${
                    selectedCommune === commune 
                      ? 'bg-[#d04a25] text-white shadow-lg shadow-orange-200 scale-[1.02]' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-medium">{commune}</span>
                  <ChevronRight size={16} className={selectedCommune === commune ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} />
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-10"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <Info className="text-[#d04a25]" size={24} />
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">
                Cliquez sur un département <br /> pour voir la liste de ses communes
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};