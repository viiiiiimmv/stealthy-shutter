import PhotoCard from "../Photo/PhotoCard";

const TallGallery = ({ photos }) => (
    <div className="space-y-24">
        {photos.map((photo, i) => (
        <PhotoCard key={i} {...photo} hover="zoom" />
        ))}
    </div>
);

export default TallGallery;