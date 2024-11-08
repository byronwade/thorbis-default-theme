export default function Hero() {
	return (
		<div className="relative isolate overflow-hidden bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to Your Site</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">Build something amazing with this modern website template. Fully customizable and ready for your content.</p>
					<div className="mt-10 flex items-center gap-x-6">
						<a href="/get-started" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get started
						</a>
						<a href="/learn-more" className="text-sm font-semibold leading-6 text-gray-900">
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
