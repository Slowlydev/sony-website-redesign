import { Inter } from "@next/font/google";

import "../styles/globals.scss";
import styles from "../styles/layout.module.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { ScreenSizeProvider } from "../lib/context/ScreenSizeProvider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<ScreenSizeProvider>
					<Navbar />
					<main className={styles.main}>
						{children}
						<Footer />
					</main>
				</ScreenSizeProvider>
			</body>
		</html>
	);
}
