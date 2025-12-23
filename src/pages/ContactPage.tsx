import { Layout } from "../Components/Layout/Layout";
import { Navbar } from "../Components/NavBar/Navbar";
import { ContactCard } from "../Components/ContactCard/ContactCard";

export const ContactPage = () => {
	return (
		<Layout>
			<Navbar />
			<section style={{ padding: "4rem 1rem", textAlign: "center" }}>
				<ContactCard />
			</section>
		</Layout>
	);
};
