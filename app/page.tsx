import classNames from "classnames";
import Image from "next/image";

import styles from "./HomePage.module.scss";

import cam from "../public/assets/cameras/ILCE-7RM5.png";

import bike from "../public/assets/images/bike.jpg";
import clouds from "../public/assets/images/clouds.jpg";
import landscape from "../public/assets/images/landscape.jpg";
import rocks from "../public/assets/images/rocks.jpg";
import matterhorn from "../public/assets/images/matterhorn.jpg";
import skyscrapers from "../public/assets/images/skyscrapers.jpg";

const images = [
	{ src: bike, alt: "Bike", portrait: false, pos: { x: -300, y: 200, rotation: -10 } },
	{ src: clouds, alt: "Clouds", portrait: true, pos: { x: -100, y: -250, rotation: 10 } },
	{ src: landscape, alt: "Landscape", portrait: false, pos: { x: 300, y: -200, rotation: 3 } },
	{ src: rocks, alt: "Rocks", portrait: true, pos: { x: 100, y: 250, rotation: 15 } },
	{ src: matterhorn, alt: "Matterhorn", portrait: true, pos: { x: 450, y: 200, rotation: -10 } },
	{ src: skyscrapers, alt: "Skyscrapers", portrait: true, pos: { x: -450, y: -200, rotation: -10 } },
];

export default function Page() {
	return (
		<>
			<section className={classNames([styles.page, styles.hero])}>
				<h1>Create Stunning Pictures</h1>

				<div className={styles.imageContainer}>
					{images.map((image) => (
						<Image
							key={`image.${image.alt}`}
							style={{ transform: `translate(${image.pos.x}px, ${image.pos.y}px) rotate(${image.pos.rotation}deg)` }}
							className={classNames([styles.image, { [styles.alternate]: !image.portrait }])}
							src={image.src}
							alt={`image of ${image.alt}`}
						/>
					))}
				</div>
			</section>

			<section className={classNames([styles.page, styles.second])}>
				<div className={styles.content}>
					<h1>The new Sony α7R V </h1>
					<Image src={cam} alt="" />
					<p>
						Mit der α7R V können Sie Ihre Visionen noch besser umsetzen - mit dedizierter KI-Verarbeitung zum Erkennen und Verfolgen Ihrer Motive.
						Fotografen profitieren von einem völlig neuen Maß an Bildqualität und Auflösung, Videoaufnahmen mit 8K, stark verbesserter
						Bildstabilisierung mit 8 Stufen sowie erweiterter Konnektivität und fortschrittlicheren Workflows.
					</p>
				</div>
			</section>
		</>
	);
}
