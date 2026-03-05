import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import beninUrl from "../../assets/benin.geojson?url";

const CarteInteractiveBenin = () => {
  const [data, setData] = useState<any>(null);
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  useEffect(() => {
    // On va chercher le fichier directement via l'URL (dossier public)
    fetch(beninUrl)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur de chargement du GeoJSON:", err));
  }, []);

  if (!data) return <div className="text-center p-10">Chargement de la carte...</div>;

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white p-4">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 5500, center: [2.35, 9.3] }}
      >
        <Geographies geography={data}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => setHoveredDept(geo.properties.name || geo.properties.NAME_1)}
                onMouseLeave={() => setHoveredDept(null)}
                style={{
                  default: { fill: "#FDE6E6", stroke: "#E11D48", outline: "none" },
                  hover: { fill: "#E11D48", outline: "none", cursor: "pointer" }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredDept && (
        <div className="absolute top-0 left-0 bg-black text-white p-2 rounded">
          {hoveredDept}
        </div>
      )}
    </div>
  );
};

export default CarteInteractiveBenin;