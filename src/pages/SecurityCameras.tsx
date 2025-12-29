import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { ImageGallery } from "../Components/ImageGallery/ImageGallery";
import { TextBlock } from "../Components/TextBlock/TextBock";
import { Callout } from "../Components/Callout/Callout";

export const SecurityCamerasPage = () => {
	return (
		<Layout>
			<Navbar />

			<PageHeader
				title="Security Camera Installation"
				subtitle="Residential and commercial Security solutions"
			/>

			<TextBlock>
				<p>
					Enhance the security and safety of your property with our professional
					security camera system installation services. At NSCO ELECTRIC we
					offer state-of-the-art surveillance solutions tailored to meet your
					specific needs. Whether it’s for your home or business, our
					experienced team will help design, install, and maintain a
					comprehensive security system that keeps a watchful eye around the
					clock. Trust us to provide you with clear, reliable, and accessible
					security footage that ensures maximum protection and peace of mind.
				</p>
			</TextBlock>

			<ImageGallery
				images={[
					{ src: "/securitycam1.avif", alt: "Security Camera Installation" },
				]}
			/>
			<TextBlock>
				<p>
					Benefits of Security Camera Installation Installing a security camera
					system offers numerous benefits, including enhanced protection for
					your home or business by deterring potential intruders and providing
					real-time monitoring. With clear and reliable footage, you can have
					peace of mind knowing that your property is under constant
					surveillance, even when you're not around. Security cameras also help
					in the event of incidents by providing valuable evidence, assisting in
					investigations, and improving response times. Additionally, modern
					systems allow remote access, enabling you to monitor your property
					from anywhere, anytime, further ensuring safety
				</p>
			</TextBlock>

			<Callout>
				<a href="/contact.html">
					<p>Book your security camera installation today!</p>
				</a>
			</Callout>
		</Layout>
	);
};
