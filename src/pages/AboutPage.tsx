import { Layout } from "../Components/Layout/Layout";
import { HeroSection } from "../Components/HeroSection/HeroSection";

export const AboutPage = () => {
	return (
		<Layout>
			<HeroSection />
			<section
				style={{ padding: "4rem 1rem", maxWidth: "800px", margin: "0 auto" }}
			>
				<p>
					NSCO Electric is a licensed and insured electrical contractor serving
					the local community with reliable, high-quality work.
				</p>
			</section>
		</Layout>
	);
};
