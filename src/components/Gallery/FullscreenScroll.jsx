import PhotoCard from "../Photo/PhotoCard";

const FullscreenScroll = ({ photos }) => (
    <div className="space-y-32">
        {photos.map((photo, i) => (
        <div key={i} className="h-screen flex items-center">
            <PhotoCard {...photo} />
        </div>
        ))}
    </div>
);

export default FullscreenScroll;