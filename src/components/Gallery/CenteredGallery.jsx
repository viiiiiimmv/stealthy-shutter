import PhotoCard from "../Photo/PhotoCard";
import { useEffect, useRef, useState } from "react";

const FreeFlowGrid = ({ photos }) => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const gap = 12; // 0.75rem = 12px
      const columnCount = 
        containerWidth >= 1536 ? 5 :
        containerWidth >= 1280 ? 4 :
        containerWidth >= 1024 ? 3 :
        containerWidth >= 640 ? 2 : 1;
      
      const columnWidth = (containerWidth - gap * (columnCount - 1)) / columnCount;
      const columnHeights = new Array(columnCount).fill(0);
      const newPositions = [];

      photos.forEach((photo, i) => {
        // Find shortest column
        const minHeight = Math.min(...columnHeights);
        const columnIndex = columnHeights.indexOf(minHeight);

        // Calculate position
        const x = columnIndex * (columnWidth + gap);
        const y = columnHeights[columnIndex];

        // Estimate height based on aspect ratio or use default
        const aspectRatio = photo.aspectRatio || 1.2;
        const estimatedHeight = columnWidth / aspectRatio;

        newPositions.push({
          x,
          y,
          width: columnWidth,
          height: estimatedHeight,
          rotation: (Math.random() - 0.5) * 1.5,
        });

        // Update column height
        columnHeights[columnIndex] += estimatedHeight + gap;
      });

      setPositions(newPositions);

      // Set container height
      const maxHeight = Math.max(...columnHeights);
      container.style.height = `${maxHeight}px`;
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);

    // Recalculate after images load
    const timer = setTimeout(calculateLayout, 100);

    return () => {
      window.removeEventListener('resize', calculateLayout);
      clearTimeout(timer);
    };
  }, [photos]);

  return (
    <div ref={containerRef} className="relative w-full">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="absolute transition-all duration-300 hover:scale-[1.02] hover:z-10"
          style={{
            left: `${positions[i]?.x || 0}px`,
            top: `${positions[i]?.y || 0}px`,
            width: `${positions[i]?.width || 300}px`,
            transform: `rotate(${positions[i]?.rotation || 0}deg)`,
          }}
        >
          <PhotoCard {...photo} />
        </div>
      ))}
    </div>
  );
};

export default FreeFlowGrid;