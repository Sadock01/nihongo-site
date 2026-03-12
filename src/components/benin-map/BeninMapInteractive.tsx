// On enlève useState d'ici, car c'est BeninPage qui gère l'état
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

// On définit les types pour recevoir les fonctions de BeninPage
interface BeninMapProps {
  selectedDepartment: string | null;
  onSelectDepartment: (id: string) => void;
}

const BeninMapInteractive = ({ selectedDepartment, onSelectDepartment }: BeninMapProps) => {

  const handleSelect = (name: string) => {
    // On appelle la fonction reçue en "props"
    onSelectDepartment(name);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent">
      <svg
        viewBox="0 0 827.668 1559.46"
        className="w-full max-w-2xl h-auto drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AliboriSvg 
          isSelected={selectedDepartment === 'Alibori'} 
          onClick={() => handleSelect('Alibori')} 
        />
        <AtacoraSvg 
          isSelected={selectedDepartment === 'Atacora'} 
          onClick={() => handleSelect('Atacora')} 
        />
        <BorgouSvg 
          isSelected={selectedDepartment === 'Borgou'} 
          onClick={() => handleSelect('Borgou')} 
        />
        <DongaSvg 
          isSelected={selectedDepartment === 'Donga'} 
          onClick={() => handleSelect('Donga')} 
        />
        <CollinesSvg 
          isSelected={selectedDepartment === 'Collines'} 
          onClick={() => handleSelect('Collines')} 
        />
        <PlateauSvg 
          isSelected={selectedDepartment === 'Plateau'} 
          onClick={() => handleSelect('Plateau')} 
        />
        <AtlantiqueSvg 
          isSelected={selectedDepartment === 'Atlantique'} 
          onClick={() => handleSelect('Atlantique')} 
        />
        <OuemeSvg 
          isSelected={selectedDepartment === 'Ouemé'} 
          onClick={() => handleSelect('Ouemé')} 
        />
        <CouffoSvg 
          isSelected={selectedDepartment === 'Kouffo'} 
          onClick={() => handleSelect('Kouffo')} 
        />
        <ZouSvg 
          isSelected={selectedDepartment === 'Zou'} 
          onClick={() => handleSelect('Zou')} 
        />
        <MonoSvg 
          isSelected={selectedDepartment === 'Mono'} 
          onClick={() => handleSelect('Mono')} 
        />
        <LittoralSvg 
          isSelected={selectedDepartment === 'Littoral'} 
          onClick={() => handleSelect('Littoral')} 
        />
      </svg>
    </div>
  );
};

export default BeninMapInteractive;