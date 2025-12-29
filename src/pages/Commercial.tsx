import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";
import { PageHeader } from "../Components/PageHeader/PageHeader";
import { ImageGallery } from "../Components/ImageGallery/ImageGallery";
import { TextBlock } from "../Components/TextBlock/TextBock";
import { Callout } from "../Components/Callout/Callout";

export const CommercialPage = () => {
	return (
		<Layout>
			<Navbar />

			<PageHeader
				title="Commercial Electrical Services"
				subtitle="Commercial Electrical solutions"
			/>

			<TextBlock>
				<p>
					Keeping your business powered and operational is crucial. Our
					commercial electrical services provide businesses with efficient,
					reliable, and safe electrical solutions tailored to meet the demands
					of any commercial environment. Whether it's new construction,
					retrofitting, or routine maintenance, we ensure minimal downtime and
					maximum productivity. Partner with us for comprehensive electrical
					support that aligns with your business objectives.
				</p>
			</TextBlock>

			<ImageGallery
				images={[
					{ src: "/commercial2.avif", alt: "Commercial Electrical Service" },
				]}
			/>
			<TextBlock>
				<p>
					At NSCO Electric, our commercial electrical services are designed to
					keep your business powered, efficient, and running smoothly. We
					provide tailored electrical solutions that ensure minimal disruptions,
					enhance safety, and optimize performance for your commercial
					environment. Whether it’s new construction, retrofitting, or routine
					maintenance, we focus on reducing downtime, increasing productivity,
					and maintaining system reliability. Our team of experts works closely
					with your business to address specific needs and ensure that your
					electrical infrastructure supports your goals, so you can focus on
					growing your business while we take care of your electrical systems.
				</p>
			</TextBlock>

			<Callout>
				<a href="contact.html">
					<p>Book your in commercial electrical service today!</p>
				</a>
			</Callout>
		</Layout>
	);
};
