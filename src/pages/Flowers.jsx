import PageHeader from "../components/UI/PageHeader";
import MinimalGrid from "../components/Gallery/MinimalGrid";

const Flowers = ({ photos }) => (
    <>
    <PageHeader title="Flowers" subtitle="Quiet & close" />
    <MinimalGrid photos={photos} />
    </>
);

export default Flowers