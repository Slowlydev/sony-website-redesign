"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Images.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

import { Slider } from "../../components/Slider/Slider";

import bike from "../../public/assets/images/bike.jpg";
import city from "../../public/assets/images/city.jpg";
import clouds from "../../public/assets/images/clouds.jpg";
import highways from "../../public/assets/images/highways.jpg";
import landscape from "../../public/assets/images/landscape.jpg";
import matterhorn from "../../public/assets/images/matterhorn.jpg";
import rocks from "../../public/assets/images/rocks.jpg";
import skyscrapers from "../../public/assets/images/skyscrapers.jpg";

const images = [
	{
		title: "Bike",
		src: bike,
	},
	{
		title: "City",
		src: city,
	},
	{
		title: "Clouds",
		src: clouds,
	},
	{
		title: "Highways",
		src: highways,
	},
	{
		title: "Landscape",
		src: landscape,
	},
	{
		title: "Matterhorn",
		src: matterhorn,
	},
	{
		title: "Rocks",
		src: rocks,
	},
	{
		title: "Skyscrapers",
		src: skyscrapers,
	},
];

export default function Page() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className={layoutStyles.main}>
			<h1>Images</h1>

			<div className={styles.sliderWrapper}>
				<Slider selectedIndexUpdate={setSelectedIndex} items={images} slideClassName={[styles.slide]} contentClassName={styles.container}>
					<Image className={styles.sliderImage} src={images[selectedIndex].src} alt={images[selectedIndex].title} fill />
					<div className={styles.contentWrapper}>
						<div className={styles.content}>
							<h2>{images[selectedIndex].title}</h2>
						</div>
					</div>
				</Slider>
			</div>

			<h2>More images!</h2>

			{/* <div>
				{images.map((image, index) => (
					<Image src={image.src} alt={image.title} key={`images.${index}`} />
				))}
			</div> */}
		</div>
	);
}
