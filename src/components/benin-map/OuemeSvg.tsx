
import { motion } from 'framer-motion';

// 1. On isole les données de l'Atacora (Base + Détail)


const OUEME_PATH = "m 446.201,1469.37 -0.7325,8.137 8.0695,-0.439 6.737,-0.811 8.095,-0.267 5.355,-0.667 14.584,-1.817 5.868,-0.321 4.639,-0.914 c -0.103,-3.183 -0.123,-6.398 -0.31,-9.576 -0.069,-1.199 -0.542,-2.663 -0.476,-3.837 0.214,-3.835 1.501,-7.097 2.634,-10.665 1.017,-3.206 0.241,-6.917 1.023,-10.21 l 0.695,-2.933 c 0.21414,-0.6308 0.55134,-1.172 0.89064,-1.6726 l -12.57264,-0.01 0,-6.5 c 0,0 4,-2.5 3,-9 -1,-6.5 -2,-8 -6,-8 -4,0 -7.5,-1 -7.5,-1 l -13.5,-8 c 0,0 1,-10 2.5,-13 1.5,-3 3,-6 1,-9.5 -2,-3.5 -2.5,-24.5 -2.5,-24.5 0,0 1,-2.5 -1.5,-5 -2.5,-2.5 -5.5,-6.5 -5.5,-6.5 0,0 -5,0 -5,-3 0,-3 0.5,-8 0.5,-8 l -26.501,0.2533 c -0.493,1.3923 -0.256,2.3813 0.937,3.1483 0.025,0.343 -0.091,0.66 -0.333,1.096 -1.726,3.106 -1.157,3.68 -1.673,7.288 -0.081,0.568 0.383,1.267 0.938,1.413 0.279,0.074 0.548,0.136 0.756,0.187 l 0.877,10.617 7,16 c 0,0 0.5,3.5 0.5,6 0,2.5 -1,6 -2,9.5 -1,3.5 -1,13 -1,13 0,0 -2,6 -4,9 -2,3 -1,6 0,9 1,3 4,17 4,17 l 11,0.5 -0.35869,24.3908 z";

const INSERT_PATH = "m 446.201,1469.37 -0.7325,8.137 8.0695,-0.439 6.737,-0.811 8.095,-0.267 5.355,-0.667 14.584,-1.817 5.868,-0.321 4.639,-0.914 c -0.103,-3.183 -0.123,-6.398 -0.31,-9.576 -0.069,-1.199 -0.542,-2.663 -0.476,-3.837 0.214,-3.835 1.501,-7.097 2.634,-10.665 1.017,-3.206 0.241,-6.917 1.023,-10.21 l 0.695,-2.933 c 0.21414,-0.6308 0.55134,-1.172 0.89064,-1.6726 l -12.57264,-0.01 0,-6.5 c 0,0 4,-2.5 3,-9 -1,-6.5 -2,-8 -6,-8 -4,0 -7.5,-1 -7.5,-1 l -13.5,-8 c 0,0 1,-10 2.5,-13 1.5,-3 3,-6 1,-9.5 -2,-3.5 -2.5,-24.5 -2.5,-24.5 0,0 1,-2.5 -1.5,-5 -2.5,-2.5 -5.5,-6.5 -5.5,-6.5 0,0 -5,0 -5,-3 0,-3 0.5,-8 0.5,-8 l -26.501,0.2533 c -0.493,1.3923 -0.256,2.3813 0.937,3.1483 0.025,0.343 -0.091,0.66 -0.333,1.096 -1.726,3.106 -1.157,3.68 -1.673,7.288 -0.081,0.568 0.383,1.267 0.938,1.413 0.279,0.074 0.548,0.136 0.756,0.187 l 0.877,10.617 7,16 c 0,0 0.5,3.5 0.5,6 0,2.5 -1,6 -2,9.5 -1,3.5 -1,13 -1,13 0,0 -2,6 -4,9 -2,3 -1,6 0,9 1,3 4,17 4,17 l 11,0.5 -0.35869,24.3908 z";

interface Props {
    isSelected: boolean;
    onClick: () => void;
  }
  
  const OuemeSvg = ({ isSelected, onClick }: Props) => {
    // Centre approximatif pour l'Ouémé (Sud-Est)
    const centerX = 470; 
    const centerY = 1430;
  
    return (
      <motion.g 
        onClick={onClick} 
        className="cursor-pointer"
        whileHover={{ scale: 1.01 }}
      >
        {/* Premier tracé (Base) */}
        <motion.path
          d={OUEME_PATH}
          animate={{
            fill: isSelected ? "#d04a25" : "#c12737",
            stroke: "#FFFFFF",
            strokeWidth: 1,
          }}
        />
  
        {/* Second tracé (Détail/Insert) */}
        <motion.path
          d={INSERT_PATH}
          animate={{
            fill: isSelected ? "#c12737" : "#f5f5dc",
            stroke: isSelected ? "#FFFFFF" : "#000000",
            strokeWidth: isSelected ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Badge dynamique pour l'Ouémé */}
        <motion.g
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        >
          <rect 
            x={centerX - 60} 
            y={centerY - 22} 
            width="120" 
            height="45" 
            rx="8" 
            fill="rgba(0,0,0,0.75)" 
          />
          
          <text
            x={centerX}
            y={centerY - 2}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
            className="pointer-events-none select-none"
          >
            OUÉMÉ
          </text>
  
          <text
            x={centerX}
            y={centerY + 15}
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="11"
            className="pointer-events-none select-none"
          >
            9 Communes
          </text>
        </motion.g>
      </motion.g>
    );
  };

export default OuemeSvg;