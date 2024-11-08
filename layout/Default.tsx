import { Suspense } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), {
	loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import("../components/Footer"), {
	loading: () => <div className="h-40 bg-gray-100 animate-pulse" />,
});

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col">
			<Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse" />}>
				<Header />
			</Suspense>

			<main className="flex-grow">{children}</main>

			<Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse" />}>
				<Footer />
			</Suspense>
		</div>
	);
}
