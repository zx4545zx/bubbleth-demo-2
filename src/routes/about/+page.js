export const prerender = true;

import { zoneImages } from '$lib/data/aboutLanding';
import { slideImages } from '$lib/data/aboutSlide';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
    zoneImages,
    slideImages 
  };
}
