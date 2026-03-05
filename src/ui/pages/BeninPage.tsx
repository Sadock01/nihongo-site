import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BeninMapSVG from '@/components/benin-components/BeninMapSVG';
import CommuneDetailPanel from '@/components/benin-components/CommuneDetailPanel';
import { getDepartmentById, type CommuneData } from '@/data/benin-data';
import BeninMapInteractive from '@/components/benin-map/CarteInteractive';
import CarteInteractiveBenin from '@/components/benin-map/CarteInteractive';

const BeninPage = () => {
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<CommuneData | null>(null);

  const selectedDepartment = selectedDeptId ? getDepartmentById(selectedDeptId) ?? null : null;

  const handleSelectDepartment = (id: string) => {
    setSelectedDeptId(id);
    setSelectedCommune(null);
  };

  const handleClose = () => {
    setSelectedDeptId(null);
    setSelectedCommune(null);
  };

  return (
    <div className="benin-page">
      
      {/* SECTION HEADER */}
      <section style={{ backgroundColor: 'var(--bg-creme)', padding: '100px 0 80px 0' }}>
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

      {/* SECTION CARTE */}
      <section style={{backgroundColor: '#FFFFFF', padding: '80px 0' }}>
        <div className="page-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Carte du Bénin</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Cliquez sur un département pour explorer ses communes</p>
          </div>

          <div style={{ 
            backgroundColor: '#F3F4F6', 
            borderRadius: '40px', 
            padding: '60px 20px',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <CarteInteractiveBenin
              // selectedDepartment={selectedDeptId} 
              // onSelectDepartment={handleSelectDepartment} 
            />
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#D1CEC5' }} />
                <span>Département</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }} />
                <span>Sélectionné</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION STATS */}
      <section style={{ backgroundColor: 'var(--bg-creme)', padding: '100px 0', borderTop: '1px solid #E5E7EB' }}>
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
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};

export default BeninPage;