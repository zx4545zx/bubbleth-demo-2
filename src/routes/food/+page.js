export const prerender = true;

import { landingImages } from '$lib/data/foodLanding';
import { slideImages } from '$lib/data/foodSlide';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		slideImages,
		landingImages
	};
}
