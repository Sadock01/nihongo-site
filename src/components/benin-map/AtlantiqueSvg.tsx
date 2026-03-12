
import { motion } from 'framer-motion';

// 1. On isole les données de l'Atacora (Base + Détail)


const ATLANTIQUE_PATH = "m 446.701,1435.37 -11,-0.5 c 0,0 -3,-14 -4,-17 -1,-3 -2,-6 0,-9 2,-3 4,-9 4,-9 0,0 0,-9.5 1,-13 1,-3.5 2,-7 2,-9.5 0,-2.5 -0.5,-6 -0.5,-6 l -7,-16 -0.877,-10.617 c -0.208,-0.051 -0.477,-0.113 -0.756,-0.187 -0.555,-0.146 -1.019,-0.845 -0.938,-1.413 0.516,-3.608 -0.053,-4.182 1.673,-7.288 0.242,-0.436 0.358,-0.753 0.333,-1.096 -1.193,-0.767 -1.43,-1.756 -0.937,-3.147 -0.765,-0.636 -1.264,-1.193 -1.573,-1.706 l -9.426,7.454 -5.5,0 -5.5,-8 -9,6.5 -41.99852,0.9985 -0.49852,10.4985 -6.5,6 -1,12 -5.827,5.271 c -0.147,1.062 -0.566,2.367 -1.58,4.103 -2.09486,3.5875 0.3752,6.792 0.0372,11.107 -0.15749,2.0105 -0.9246,4.2622 -3.04716,6.906 -4.661,5.806 0.825,6.623 -0.997,12.753 -0.465,1.566 -1.637,2.708 -2.85,3.715 l -1.143,0.932 c -0.648,0.533 -0.784,0.404 -1.22,0.965 l -1.875,0.25 c 0,0 -11.5,1 -17.5,1.5 -6,0.5 -5,4.5 -3,6.5 2,2 11.5,9.5 11.5,9.5 l 7.5,18.125 c 0,0 -3.5,11.375 -5.25,15.75 -1.75,4.375 -0.612,8.891 -0.612,8.891 -0.215,1.009 0.465,3.06 1.278,4.372 2.032,0.931 2.906,0.461 3.214,3.219 0.199,1.777 -0.225,3.556 -0.151,5.333 1.712,1.111 1.842,1.215 2.353,3.055 0.147,0.531 -0.242,1.356 -0.788,1.929 l 0.009,1.2555 16.622,-2.6295 9.654,-1.924 5.61,-1.117 12.82,-0.813 10.213,-2.334 0.822,-0.068 14.987,-1.231 9.073,-1.409 5.6585,-0.014 11.9865,-19.14 19.82115,-0.4291 z";

interface Props {
    isSelected: boolean;
    onClick: () => void;
  }
  
  const AtlantiqueSvg = ({ isSelected, onClick }: Props) => {
    // Centre approximatif pour le département de l'Atlantique
    const centerX = 380; 
    const centerY = 1380;
  
    return (
      <motion.g 
        onClick={onClick} 
        className="cursor-pointer"
        whileHover={{ scale: 1.01 }}
      >
        <motion.path
          d={ATLANTIQUE_PATH}
          animate={{
            fill: isSelected ? "#c12737" : "#f5f5dc",
            stroke: isSelected ? "#FFFFFF" : "#000000",
            strokeWidth: isSelected ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Badge dynamique pour l'Atlantique */}
        <motion.g
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        >
          <rect 
            x={centerX - 65} 
            y={centerY - 22} 
            width="130" 
            height="45" 
            rx="8" 
            fill="rgba(0,0,0,0.75)" 
          />
          
          <text
            x={centerX}
            y={centerY - 2}
            textAnchor="middle"
            fill="white"
            fontSize="13"
            fontWeight="bold"
            className="pointer-events-none select-none"
          >
            ATLANTIQUE
          </text>
  
          <text
            x={centerX}
            y={centerY + 15}
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="11"
            className="pointer-events-none select-none"
          >
            8 Communes
          </text>
        </motion.g>
      </motion.g>
    );
  };

export default AtlantiqueSvg;