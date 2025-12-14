import PhotoCard from "../Photo/PhotoCard";

const MasonryGrid = ({ photos = [] }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
      {photos.map((photo, i) => (
        <PhotoCard key={i} {...photo} />
      ))}
    </div>
  );
};

export default MasonryGrid;
