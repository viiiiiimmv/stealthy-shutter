import PhotoCard from "../Photo/PhotoCard";

const FreeFlowGrid = ({ photos }) => (
  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
    {photos.map((photo, i) => (
      <div
        key={i}
        className="break-inside-avoid mb-3 transition-transform hover:scale-[1.02]"
        style={{ transform: `rotate(${(Math.random() - 0.5) * 1.5}deg)` }}
      >
        <PhotoCard {...photo} />
      </div>
    ))}
  </div>
);

export default FreeFlowGrid;