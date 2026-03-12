import { useState } from 'react';
import AliboriSvg from '@/components/benin-map/AliboriSvg';
import AtacoraSvg from '@/components/benin-map/AtacoraSvg';
import BorgouSvg from '@/components/benin-map/BorgouSvg';
import DongaSvg from '@/components/benin-map/DongaSvg';
import CollinesSvg from './CollinesSvg';
import PlateauSvg from './PlateauSvg';
import AtlantiqueSvg from './AtlantiqueSvg';
import OuemeSvg from './OuemeSvg';
import CouffoSvg from './CouffoSvg';
import ZouSvg from './ZouSvg';
import MonoSvg from './MonoSvg';
import LittoralSvg from './LittoralSvg';

const BeninMapInteractive = () => {
  // On stocke l'ID du département sélectionné
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const handleSelect = (name: string) => {
    // Si on clique sur le même, on désélectionne, sinon on change
    setSelectedDept(selectedDept === name ? null : name);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      

      <svg
         viewBox="0 0 827.668 1559.46" // Très important : garde le même pour tous
        className="w-full max-w-2xl h-auto drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* On appelle les composants comme des balises HTML simples */}
        
        <AliboriSvg 
          isSelected={selectedDept === 'Alibori'} 
          onClick={() => handleSelect('Alibori')} 
        />

        <AtacoraSvg 
          isSelected={selectedDept === 'Atacora'} 
          onClick={() => handleSelect('Atacora')} 
        />

<BorgouSvg 
          isSelected={selectedDept === 'Borgou'} 
          onClick={() => handleSelect('Borgou')} 
        />
        <DongaSvg 
          isSelected={selectedDept === 'Donga'} 
          onClick={() => handleSelect('Donga')} 
        />
        <CollinesSvg 
        isSelected={selectedDept === 'Collines'} 
        onClick={() => handleSelect('Collines')} 
      />
      <PlateauSvg 
        isSelected={selectedDept === 'Plateau'} 
        onClick={() => handleSelect('Plateau')} 
      />
      <AtlantiqueSvg 
        isSelected={selectedDept === 'Atlantique'} 
        onClick={() => handleSelect('Atlantique')} 
      />
      <OuemeSvg 
        isSelected={selectedDept === 'Ouemé'} 
        onClick={() => handleSelect('Ouemé')} 
      />
       <CouffoSvg 
        isSelected={selectedDept === 'Kouffo'} 
        onClick={() => handleSelect('Kouffo')} 
      />
       <ZouSvg 
        isSelected={selectedDept === 'Zou'} 
        onClick={() => handleSelect('Zou')} 
      />
      <MonoSvg 
        isSelected={selectedDept === 'Mono'} 
        onClick={() => handleSelect('Mono')} 
      />
       <LittoralSvg 
        isSelected={selectedDept === 'Littoral'} 
        onClick={() => handleSelect('Littoral')} 
      />
      </svg>

      {/* Affichage des infos du département sélectionné */}
      {selectedDept && (
        <div className="mt-10 p-4 bg-white rounded-lg shadow-md border-t-4 border-orange-500">
          <p className="text-lg font-semibold uppercase">Département : {selectedDept}</p>
        </div>
      )}
    </div>
  );
};

export default BeninMapInteractive;