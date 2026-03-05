import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Hotel, Landmark, BookOpen, UtensilsCrossed, Sparkles, Shirt, ChevronRight, ChevronLeft, Users } from 'lucide-react';
import type { DepartmentData, CommuneData } from '@/data/benin-data';

interface CommuneDetailPanelProps {
  department: DepartmentData | null;
  selectedCommune: CommuneData | null;
  onSelectCommune: (commune: CommuneData | null) => void;
  onClose: () => void;
}

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <Icon className="w-4 h-4 text-accent" />
    <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
  </div>
);

const InfoList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5 mb-6">
    {items.map((item, i) => (
      <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const CommuneDetailPanel = ({ department, selectedCommune, onSelectCommune, onClose }: CommuneDetailPanelProps) => {
  return (
    <AnimatePresence mode="wait">
      {department && (
        <motion.div
          key="panel"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-background border-l border-border shadow-elegant-lg z-50 overflow-y-auto"
        >
          <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {selectedCommune && (
                    <button
                      onClick={() => onSelectCommune(null)}
                      className="p-1 rounded-full hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                    </button>
                  )}
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {selectedCommune ? selectedCommune.name : department.name}
                    </h2>
                    {!selectedCommune && (
                      <p className="font-body text-sm text-muted-foreground">
                        Chef-lieu : {department.chefLieu} · {department.communes.length} communes
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {selectedCommune ? (
                  <motion.div
                    key={selectedCommune.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Specialités */}
                    <SectionTitle icon={Sparkles} title="Spécialités" />
                    <InfoList items={selectedCommune.specialites} />

                    {/* Hotels */}
                    <SectionTitle icon={Hotel} title="Hôtels & Hébergements" />
                    <InfoList items={selectedCommune.hotels} />

                    {/* Lieux Historiques */}
                    <SectionTitle icon={Landmark} title="Lieux Historiques" />
                    <InfoList items={selectedCommune.lieuxHistoriques} />

                    {/* Histoire */}
                    <SectionTitle icon={BookOpen} title="Histoire" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {selectedCommune.histoire}
                    </p>

                    {/* Mets & Gastronomie */}
                    <SectionTitle icon={UtensilsCrossed} title="Mets & Gastronomie" />
                    <InfoList items={selectedCommune.mets} />

                    {/* Traditions */}
                    <SectionTitle icon={Users} title="Traditions & Culture" />
                    <InfoList items={selectedCommune.traditions} />

                    {/* Habillement */}
                    <SectionTitle icon={Shirt} title="Habillement Traditionnel" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                      {selectedCommune.habillement}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="commune-list"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Sélectionnez une commune pour voir ses détails :
                    </p>
                    <div className="space-y-2">
                      {department.communes.map((commune: CommuneData, index: number) => (
                        <motion.button
                          key={commune.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.3 }}
                          onClick={() => onSelectCommune(commune)}
                          className="w-full flex items-center justify-between p-4 rounded-xl bg-card hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-accent" />
                            <div className="text-left">
                              <span className="font-body font-medium text-foreground block text-sm">
                                {commune.name}
                              </span>
                              <span className="font-body text-xs text-muted-foreground">
                                {commune.specialites[0]}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommuneDetailPanel;
