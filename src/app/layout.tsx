import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/common/navbar";
import Footer from "@/common/footer";
import "swiper/css/bundle";
import { CartStoreProvider } from "@/store/cartStoreContext";
import CookieBanner from "@/common/cookie-banner";
import ToastComponent from "./components/toast-component";
// import 'daisyui/dist/full.css';

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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
		<html lang="en" data-theme="light">
			<body
				className={`${geistSans.variable} ${geistMono.variable} container mx-auto bg-base-100 antialiased`}
			>
				<CartStoreProvider>
					<Navbar />
					<ToastComponent />
					{children}
					<Footer />
					<CookieBanner />
				</CartStoreProvider>
			</body>
		</html>
	);
}