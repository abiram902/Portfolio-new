import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Drawings from "@/assets/icons/Drawing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<nav>
					<Header />
				</nav>
				<div className="drawing">
					<Drawings />
				</div>
				{children}
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}