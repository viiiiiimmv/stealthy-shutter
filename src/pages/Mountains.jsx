import MasonryGrid from "../components/GalleryLayouts/MasonryGrid";
import PageHeader from "../components/UI/PageHeader";

const Mountains = ({ photos }) => {
    return (
        <section className="px-6 md:px-12 py-16">
        <PageHeader
            title="Mountains"
            subtitle="Some places ask you to stop."
        />

        <div className="mt-20">
            <MasonryGrid photos={photos} />
        </div>
        </section>
    );
};

export default Mountains;