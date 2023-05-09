export const prerender = true;

import { cm, sk } from '$lib/data/eventSlide';
import { landingImages } from '$lib/data/eventLanding';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		cm,
		sk,
		landingImages
	};
}
