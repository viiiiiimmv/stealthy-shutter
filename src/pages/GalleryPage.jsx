import { photos } from "../assets/data/photos";

import MasonryGrid from "../components/Gallery/MasonryGrid";
import MinimalGrid from "../components/Gallery/MinimalGrid";
import FullscreenScroll from "../components/Gallery/FullscreenScroll";
import FreeFlowGrid from "../components/Gallery/FreeFlowGrid";
import CenteredGallery from "../components/Gallery/CenteredGallery";
import PageHeader from "../components/UI/PageHeader";

const sections = [
	{ key: "birds", title: "Birds & Animals", subtitle: "Moments that move", Layout: MasonryGrid },
	{ key: "flowers", title: "Flowers", subtitle: "Quiet & close", Layout: MinimalGrid },
	{ key: "sunsets", title: "Sunsets", subtitle: "Every day ends differently", Layout: FullscreenScroll },
	{ key: "randoms", title: "Randoms", subtitle: "No rules", Layout: FreeFlowGrid },
	{ key: "mountains", title: "Mountains", subtitle: "Stillness", Layout: MasonryGrid },
	{ key: "moon", title: "Moon", subtitle: "Always there", Layout: CenteredGallery },
];

const GalleryPage = () => {
	return (
		<main className="bg-black text-white p-10">
			{sections.map((section) => (
				<section key={section.key} className="mb-16">
					<PageHeader title={section.title} subtitle={section.subtitle} />
					<section.Layout photos={photos[section.key] || []} />
				</section>
			))}
		</main>
	);
};

export default GalleryPage;