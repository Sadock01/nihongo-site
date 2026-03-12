
import { motion } from 'framer-motion';

// 1. On isole les données de l'Atacora (Base + Détail)


const LITTORAL_PATH = "m 427.841,1479.227 8.476,-0.431 7.334,-1.191 0.315,-0.017 1.5025,-0.081 0.7325,-8.137 -0.17985,-9.6801 -19.82115,0.4291 -11.9865,19.14 z";

interface Props {
    isSelected: boolean;
    onClick: () => void;
  }
  
  const LittoralSvg = ({ isSelected, onClick }: Props) => {
    // Point cible (sur le département)
    const targetX = 435;
    const targetY = 1475;
    
    // Point d'ancrage du badge (déporté à droite et en haut)
    const badgeX = 520;
    const badgeY = 1450;
  
    return (
      <motion.g 
        onClick={onClick} 
        className="cursor-pointer"
        whileHover="hover" // Déclenche l'état hover pour les enfants
      >
        {/* Le tracé du Littoral */}
        <motion.path
          d={LITTORAL_PATH}
          animate={{
            fill: isSelected ? "#c12737" : "#f5f5dc",
            stroke: isSelected ? "#FFFFFF" : "#000000",
            strokeWidth: isSelected ? 2 : 1,
          }}
          variants={{
            hover: { scale: 1.1 }
          }}
          transition={{ duration: 0.3 }}
        />
  
        {/* Ligne indicatrice (La flèche) */}
        <motion.line
          x1={targetX}
          y1={targetY}
          x2={badgeX - 40}
          y2={badgeY}
          stroke={isSelected ? "#c12737" : "#666666"}
          strokeWidth="1.5"
          strokeDasharray="4 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
  
        {/* Badge déporté */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <rect 
            x={badgeX - 60} 
            y={badgeY - 22} 
            width="120" 
            height="45" 
            rx="10" 
            fill="rgba(0,0,0,0.85)" 
          />
          
          <text
            x={badgeX}
            y={badgeY - 2}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
            className="pointer-events-none select-none"
          >
            LITTORAL
          </text>
  
          <text
            x={badgeX}
            y={badgeY + 14}
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="10"
            className="pointer-events-none select-none"
          >
            1 Commune (Cotonou)
          </text>
        </motion.g>
      </motion.g>
    );
  };
export default LittoralSvg;