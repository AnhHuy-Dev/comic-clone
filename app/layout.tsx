import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Comic Clone",
	description: "This is comic clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				{/* <link href="https://fonts.cdnfonts.com/css/chocopy?styles=156276" rel="stylesheet" /> */}
				<link rel="icon" href="/logo.svg" sizes="any" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
