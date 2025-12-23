import { Layout } from "../Components/Layout/Layout";
import { HeroSection } from "../Sections/HeroSection/HeroSection";
import { ServicesSection } from "../Sections/ServiceSection/ServiceSection";

export const ServicesPage = () => {
	return (
		<Layout>
			<HeroSection />
			<ServicesSection />
		</Layout>
	);
};
