import { Layout } from "../Components/Layout/Layout";
import { MapSection } from "../Sections/MapSection/MapSection";
import { Navbar } from "../Components/NavBar/Navbar";
import { CoverageAreas } from "../Components/CoverageList/CoverageAreas";

export const AboutPage = () => {
	return (
		<Layout>
			<Navbar />
			<MapSection />
			<CoverageAreas />
		</Layout>
	);
};
