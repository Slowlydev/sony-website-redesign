import classNames from "classnames";

import styles from "./ContactPage.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

import Footer from "../../components/Footer/Footer";

export default function Page() {
	return (
		<div className={layoutStyles.main}>
			<h1>Contact</h1>
			<p>Do you want to contact us? leave your contact card here!</p>

			<div className={styles.wallet}>
				<div className={styles.card} />
				<div className={styles.card} />
				<div className={classNames([styles.card, styles.heroCard])}>
					<div className={styles.inputs}>
						<h2>Contact Card</h2>

						<label>Name</label>
						<input placeholder="Your name" />

						<label>Email</label>
						<input placeholder="your.email@provider.com" />

						<label>Message</label>
						<textarea placeholder="Your message to us!" />
					</div>

					<button>Submit</button>
				</div>
			</div>

			<Footer />
		</div>
	);
}
