import "./HeroSection.css";
import { Navbar } from "../NavBar/Navbar";
export const HeroSection = () => {
	return (
		<section className="homepage-image-container">
			<div className="homepage-image-content">
				<Navbar />
				<h1 className="homepage-image-h1">NSCO Electric</h1>
				<h2 className="homepage-image-h2">Call for an appointment today!</h2>
				<h3 className="homepage-image-h3">1-778-344-2686</h3>
			</div>
		</section>
	);
};
