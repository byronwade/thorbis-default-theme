export default function Footer() {
	return (
		<footer className="bg-white border-t">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-gray-900">About</h3>
						<ul className="space-y-2">
							<li>
								<a href="/about" className="text-sm text-gray-600 hover:text-gray-900">
									Our Story
								</a>
							</li>
							<li>
								<a href="/team" className="text-sm text-gray-600 hover:text-gray-900">
									Team
								</a>
							</li>
						</ul>
					</div>

					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-gray-900">Support</h3>
						<ul className="space-y-2">
							<li>
								<a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
									Contact
								</a>
							</li>
							<li>
								<a href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t pt-8">
					<p className="text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
