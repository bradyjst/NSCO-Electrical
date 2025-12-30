import { Layout } from "../Components/Layout/Layout";
import { MapSection } from "../Sections/MapSection/MapSection";
import { Navbar } from "../Components/NavBar/Navbar";
import { CoverageAreas } from "../Components/CoverageList/CoverageAreas";
import { TextBlock } from "../Components/TextBlock/TextBock";
import { PageHeader } from "../Components/PageHeader/PageHeader";

export const AboutPage = () => {
	return (
		<Layout>
			<Navbar />
			<PageHeader title="NSCO Electric" />
			<TextBlock>
				<p>
					NSCO Electric is a professional electrical contracting company serving
					residential and commercial clients across British Columbia. Our team
					of certified electricians is committed to delivering safe, reliable,
					and code‑compliant electrical solutions for every project. With
					extensive experience across home wiring, service upgrades, EV charging
					systems, and industrial electrical work, we bring a high level of
					technical expertise and attention to detail to each job. We operate
					with a strong focus on integrity, clear communication, and long‑term
					reliability. From the first consultation to final inspection, our team
					works collaboratively to ensure every installation meets the highest
					standards of safety and performance. Whether upgrading electrical
					systems, troubleshooting complex issues, or supporting permit and
					inspection requirements, NSCO Electric provides dependable service
					backed by industry knowledge and a commitment to excellence. At NSCO
					Electric, we believe quality workmanship and customer trust go hand in
					hand. Our mission is to power homes and businesses with
					professionalism, precision, and solutions built to last.
				</p>
			</TextBlock>
			<CoverageAreas />
			<MapSection />
		</Layout>
	);
};
