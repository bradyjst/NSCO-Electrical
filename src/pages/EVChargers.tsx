import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { ImageGallery } from "../Components/ImageGallery/ImageGallery";
import { TextBlock } from "../Components/TextBlock/TextBock";
import { Callout } from "../Components/Callout/Callout";

export const EvChargersPage = () => {
	return (
		<Layout>
			<Navbar />

			<PageHeader
				title="EV Charger Installation"
				subtitle="Residential and commercial charging solutions"
			/>

			<TextBlock>
				<p>
					Make the switch to electric vehicles seamless with our professional EV
					charger installation services. We provide customized solutions for
					both residential and commercial properties to ensure you have access
					to convenient and efficient charging. Our team will guide you in
					choosing the right charging station and deliver safe installation,
					allowing you to charge your vehicle with ease.
				</p>
			</TextBlock>

			<ImageGallery
				images={[
					{ src: "/evcharger1.avif", alt: "EV charger installation" },
					// { src: "/ev2.avif", alt: "Home EV charging station" },
				]}
			/>
			<TextBlock>
				<p>
					At NSCO electric, we specialize in the professional installation of
					Electric Vehicle (EV) chargers, providing homeowners and businesses
					with reliable, efficient, and safe charging solutions. Our certified
					electricians ensure that your EV charger is installed according to
					local codes and safety standards, offering you peace of mind and
					convenience. Whether you’re upgrading your home or business to
					accommodate electric vehicles, we offer tailored solutions to meet
					your specific needs and ensure a smooth, hassle-free installation
					process.
				</p>
			</TextBlock>

			<Callout>
				<a href="/contact.html">
					<p>Book your EV charger installation today!</p>
				</a>
			</Callout>
		</Layout>
	);
};
