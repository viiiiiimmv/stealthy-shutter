import PageHeader from "../components/UI/PageHeader"
import FullscreenScroll from "../components/Gallery/FullscreenScroll"

const Sunsets = ({ photos }) => (
    <>
    <PageHeader title="Sunsets" subtitle="Every day ends differently" />
    <FullscreenScroll photos={photos} />
    </>
);

export default Sunsets