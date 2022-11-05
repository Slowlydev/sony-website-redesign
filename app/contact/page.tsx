import styles from "./ContactPage.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

import Footer from "../../components/Footer/Footer";
import ContactCard from "../../components/ContactCard/ContactCard";
import { use } from "react";

type Contact = {
	message: string;
	name: string;
};

async function getContacts(): Promise<Contact[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/api/contact`);
	const json = await res.json();
	return json;
}

export default function Page() {
	const contacts = use(getContacts());

	return (
		<div className={layoutStyles.main}>
			<h1>Contact</h1>
			<p>Do you want to contact us? leave your contact card here!</p>

			<ContactCard />

			<div className={styles.cardContainer}>
				{contacts.map((contact, index) => (
					<div key={`contact.card.${index}`} className={styles.card}>
						<p className={styles.label}>Name</p>
						<p>{contact.name}</p>
						<p className={styles.label}>Message</p>
						<p>{contact.message}</p>
					</div>
				))}
			</div>

			<Footer />
		</div>
	);
}
