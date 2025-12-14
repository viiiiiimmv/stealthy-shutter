import PhotoCard from "../Photo/PhotoCard";

const MinimalGrid = ({ photos }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {photos.map((photo, i) => (
        <PhotoCard key={i} {...photo} hover="none" />
    ))}
    </div>
);

export default MinimalGrid;