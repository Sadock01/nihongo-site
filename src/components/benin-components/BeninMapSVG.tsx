import { useState } from 'react';
import { motion } from 'framer-motion';
import { departments } from '@/data/benin-data'; 
import type { DepartmentData } from '@/data/benin-data';

const BeninMapSVG = ({ selectedDepartment, onSelectDepartment }: { 
  selectedDepartment: string | null, 
  onSelectDepartment: (id: string) => void 
}) => {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  return (
    <div className="w-full flex justify-center items-center bg-slate-50 rounded-3xl p-4 shadow-inner">
      <svg
        // Tes données vont de Y=12 à Y=635 environ. 
        // Ce viewBox est optimisé pour tes coordonnées spécifiques.
        viewBox="0 0 300 650" 
        className="w-full h-auto max-h-[75vh] drop-shadow-2xl"
      >
        <defs>
          <filter id="innerShadow">
            <feDropShadow dx="0.5" dy="1" stdDeviation="1" floodOpacity="0.2"/>
          </filter>
        </defs>

        {departments.map((dept: DepartmentData) => {
          const isSelected = selectedDepartment === dept.id;
          const isHovered = hoveredDept === dept.id;

          return (
            <motion.g
              key={dept.id}
              onClick={() => onSelectDepartment(dept.id)}
              onMouseEnter={() => setHoveredDept(dept.id)}
              onMouseLeave={() => setHoveredDept(null)}
              className="cursor-pointer"
            >
              {/* IMPORTANT : Utilisation de <motion.path d={...} /> */}
              <motion.path
                d={dept.path}
                fill={isSelected || isHovered ? '#d04a25' : 'hsl(30, 40%, 75%)'}
                stroke="#FFFFFF"
                strokeWidth={isSelected ? 2 : 1}
                strokeLinejoin="round"
                filter="url(#innerShadow)"
                initial={false}
                animate={{
                  fill: isSelected || isHovered ? '#d04a25' : 'hsl(30, 40%, 75%)',
                  scale: isSelected ? 1.02 : 1,
                  transition: { duration: 0.2 }
                }}
              />

              {/* Nom du département (Gras) */}
              <text
                x={dept.labelPos.x}
                y={dept.labelPos.y}
                textAnchor="middle"
                fill={isSelected || isHovered ? '#FFFFFF' : '#1e293b'}
                className="select-none pointer-events-none"
                style={{ 
                  fontSize: dept.id === 'littoral' ? '6px' : '9px', 
                  fontWeight: 'bold',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {dept.name}
              </text>

              {/* Nombre de communes (Gris discret) */}
              <text
                x={dept.labelPos.x}
                y={dept.labelPos.y + 11}
                textAnchor="middle"
                fill={isSelected || isHovered ? 'rgba(255,255,255,0.8)' : '#64748b'}
                className="select-none pointer-events-none"
                style={{ 
                  fontSize: '7px',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {dept.communes.length} communes
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

export default BeninMapSVG;