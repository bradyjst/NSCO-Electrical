import { Layout } from "../Components/Layout/Layout";
import { HeroSection } from "../Components/HeroSection/HeroSection";
import { ServicesSection } from "../Components/ServiceSection/ServiceSection";

export const ServicesPage = () => {
	return (
		<Layout>
			<HeroSection />
			<ServicesSection />
		</Layout>
	);
};
