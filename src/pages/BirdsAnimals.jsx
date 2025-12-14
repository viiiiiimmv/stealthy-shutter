import MasonryGrid from "../components/Gallery/MasonryGrid";
import PageHeader from "../components/UI/PageHeader";

const BirdsAnimals = ({ photos }) => (
    <>
    <PageHeader title="Birds & Animals" subtitle="Moments that move" />
    <MasonryGrid photos={photos} />
    </>
);

export default BirdsAnimals