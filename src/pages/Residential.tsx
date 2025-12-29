import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { ImageGallery } from "../Components/ImageGallery/ImageGallery";
import { TextBlock } from "../Components/TextBlock/TextBock";
import { Callout } from "../Components/Callout/Callout";

export const ResidentialPage = () => {
	return (
		<Layout>
			<Navbar />

			<PageHeader
				title="Residential Electrical Services"
				subtitle="Residential Electrical solutions"
			/>

			<TextBlock>
				<p>
					At NSCO Electric, we understand that your home is your sanctuary. Our
					residential electrical services are designed to enhance the safety,
					efficiency, and convenience of your home. From lighting installations
					and electrical panel upgrades to wiring repairs and home automation
					integration, we cater to all your residential electrical needs. Trust
					our skilled professionals to deliver dependable solutions that
					illuminate and energize your living space.
				</p>
			</TextBlock>

			<ImageGallery
				images={[{ src: "/residential2.avif", alt: "Home Electrical Service" }]}
			/>
			<TextBlock>
				<p>
					We prioritize the safety, efficiency, and comfort of your home. Our
					residential electrical services are designed to enhance your living
					space by providing reliable solutions for lighting installations,
					electrical panel upgrades, wiring repairs, and home automation
					integration. With our skilled professionals, you can trust that your
					electrical systems are in expert hands, ensuring optimal
					functionality, reduced energy costs, and a safer, more convenient
					environment for you and your family. Let us help create a brighter,
					more efficient home that meets all your electrical needs.
				</p>
			</TextBlock>

			<Callout>
				<a href="/contact.html">
					<p>Book your in home electrical service today!</p>
				</a>
			</Callout>
		</Layout>
	);
};
