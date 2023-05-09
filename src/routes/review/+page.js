export const prerender = true;

import { landingImages } from '$lib/data/reviewLanding';

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
    landingImages
  };
}
