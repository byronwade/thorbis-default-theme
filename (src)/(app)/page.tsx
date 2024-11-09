import { Suspense, lazy } from "react";
import DefaultLayout from "@/app/layout/Default";

const Hero = lazy(() => import("@/app/components/Hero"));

export default function App() {
	return (
		<DefaultLayout>
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
			</Suspense>
		</DefaultLayout>
	);
}
