import { useEffect, useState } from "react";

export enum AspectRatio {
	PORTRAIT,
	LANDSCAPE,
};

const useAspectRatio = () => {
	const [aspectRatio, setAspectRatio] = useState(AspectRatio.PORTRAIT);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			if ( width > height ) {
				setAspectRatio(AspectRatio.LANDSCAPE);
			} else {
				setAspectRatio(AspectRatio.PORTRAIT);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return aspectRatio;
};

export default useAspectRatio;
