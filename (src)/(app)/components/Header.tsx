// @ts-nocheck
import { thorbis } from "@/lib/sdk/thorbis";
import Link from "next/link";

export default async function Header() {
	const siteConfig = await thorbis.getSiteConfig();

	return (
		<header className="bg-white shadow">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<span className="text-2xl font-bold">{siteConfig?.name || "Site Name"}</span>
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<div className="space-x-4">
							<Link href="/" className="px-3 py-2 text-sm font-medium text-gray-900">
								Home
							</Link>
							<a href="/about" className="px-3 py-2 text-sm font-medium text-gray-900">
								About
							</a>
							<a href="/contact" className="px-3 py-2 text-sm font-medium text-gray-900">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
