import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import CommuneDetailPanel from '@/components/benin-components/CommuneDetailPanel';
import { getDepartmentById, type CommuneData } from '@/data/benin-data';
import BeninMapInteractive from '@/components/benin-map/BeninMapInteractive';

const BeninPage = () => {
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<CommuneData | null>(null);

  // Liste fictive ou réelle des communes pour l'affichage initial
  // Vous pouvez adapter ceci pour afficher les communes du département sélectionné ou une liste globale
  const departmentsList = [
    "Alibori", "Atacora", "Atlantique", "Borgou", "Collines", "Couffo", 
    "Donga", "Littoral", "Mono", "Ouémé", "Plateau", "Zou"
  ];

  const handleSelectDepartment = (id: string) => {
    setSelectedDeptId(id);
    setSelectedCommune(null);
  };

  return (
    <div className="benin-page">
            
      {/* SECTION HEADER */}
      <section style={{ backgroundColor: 'var(--bg-creme)', padding: '10px 0 80px 0' }}>
        <div className="page-container" style={{ textAlign: 'center' }}>
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              color: '#d04a25', // Guillemets ajoutés ici
              fontSize: '14px', 
              fontWeight: 900, 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '5px'
            }}
          >
            Explorer le Bénin
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 900, marginBottom: '24px' }}
          >
            Les 77 Communes du Bénin
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              color: 'var(--color-text-muted)', // Guillemets ajoutés ici
              fontSize: '1.1rem', 
              lineHeight: 1.6 
            }}
          >
            Découvrez chaque département et ses communes : spécialités, hôtels, lieux historiques, 
            gastronomie, traditions et habillement traditionnel.
          </motion.p>
        </div>
      </section>

    

      {/* SECTION HEADER (Inchangée) */}
      
      {/* SECTION CARTE + LISTE */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="page-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Carte du Bénin</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Cliquez sur un département pour explorer ses communes</p>
          </div>

          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '40px', 
            alignItems: 'flex-start',
            flexWrap: 'wrap', // Responsive
            justifyContent: 'center'
          }}>
            
            {/* BLOC CARTE */}
            <div style={{ 
              flex: '1',
              minWidth: '300px',
              backgroundColor: '#F3F4F6', 
              borderRadius: '40px', 
              padding: '60px 20px',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
            }}>
              <BeninMapInteractive
                selectedDepartment={selectedDeptId} 
                onSelectDepartment={handleSelectDepartment} 
              />
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f5f5dc' }} />
                  <span>Département</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#c12737' }} />
                  <span>Sélectionné</span>
                </div>
              </div>
            </div>

            {/* BLOC LISTE ANIMÉ (Descente) */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              style={{ 
                width: '300px',
                maxHeight: '600px',
                overflowY: 'auto',
                padding: '20px',
                border: '1px solid #E5E7EB',
                borderRadius: '24px'
              }}
              className="custom-scrollbar"
            >
              <h3 className="font-serif" style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Départements</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {departmentsList.map((dept) => (
                  <motion.li 
                    key={dept}
                    whileHover={{ x: 5, color: '#d04a25' }}
                    style={{ 
                      padding: '12px 0', 
                      borderBottom: '1px solid #F3F4F6',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: selectedDeptId === dept ? '700' : '400',
                      transition: 'color 0.2s'
                    }}
                    onClick={() => handleSelectDepartment(dept)}
                  >
                    {dept}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION STATS */}
      <section style={{ backgroundColor: 'var(--bg-creme)', padding: '10px 0', borderTop: '1px solid #E5E7EB' }}>
        <div className="page-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {[
              { label: 'Départements', value: '12' },
              { label: 'Communes', value: '77' },
              { label: 'Habitants', value: '14M+' },
              { label: 'km²', value: '114 763' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="text-center"
              >
                <div className="font-serif" style={{ fontSize: '4rem', color: '#d04a25', fontWeight: 700, marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', fontWeight: 600, textAlign: 'center' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PANNEAU LATÉRAL */}
      {/* <AnimatePresence>
        {selectedDeptId && (
          <>
            <CommuneDetailPanel
              department={selectedDepartment}
              selectedCommune={selectedCommune}
              onSelectCommune={setSelectedCommune}
              onClose={handleClose}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 cursor-pointer"
            />
          </>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default BeninPage;