import FreeFlowGrid from "../components/GalleryLayouts/FreeFlowGrid";
import PageHeader from "../components/UI/PageHeader";

const Randoms = ({ photos }) => {
    return (
        <section className="px-6 md:px-12 py-16">
            <PageHeader
                title="Randoms"
                subtitle="No theme. No rules."
            />

            <div className="mt-24">
                <FreeFlowGrid photos={photos} />
            </div>
        </section>
    );
};

export default Randoms;