import CenteredGallery from "../components/GalleryLayouts/CenteredGallery";
import PageHeader from "../components/UI/PageHeader";

const Moon = ({ photos }) => {
    return (
        <section className="bg-black min-h-screen px-6 py-20">
        <PageHeader
            title="Moon"
            subtitle="Always there. Never close."
        />

        <CenteredGallery photos={photos} />
        </section>
    );
};

export default Moon;