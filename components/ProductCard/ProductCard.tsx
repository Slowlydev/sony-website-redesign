"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ProductType } from "../../types/Product";

import styles from "./ProductCard.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

type ProductCardProps = {
	product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<Link href={`/products/${product.slug}`}>
			<motion.div className={styles.productCard} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
				<Image alt={product.image.alt} src={`/products/${product.image.src}`} width={660} height={660} className={styles.image} />

				<div className={styles.textContainer}>
					<p>{product.name}</p>
					<p>{product.marketingProductName}</p>

					<p className={layoutStyles.price}>{product.price} CHF</p>
				</div>
			</motion.div>
		</Link>
	);
}
