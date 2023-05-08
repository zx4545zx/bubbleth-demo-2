<script>
	import Slide from '../components/Slide.svelte';
	import SlideFrame from '../components/SlideFrame.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// import { cm, sk } from '$lib/data/eventSlide';
	// import { landingImages } from '$lib/data/eventLanding';

	let allEvent = [...data.sk, ...data.cm];
</script>

<svelte:head>
	<title>Event - Bubble in the Forrest</title>
	<meta name="description" content="Event - Bubble in the Forrest" />
</svelte:head>

<SlideFrame images={allEvent} />

<WoodenSign label="Events" />

<div class="flex flex-col gap-4 px-4">
	{#each data.landingImages as img}
		<div class="w-full shadow-xl card card-compact bg-base-100">
			<figure>
				<Slide slideImages={img.slide} type="fade" arrows={false} />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{img.title}</h2>
				<p>{img.des}</p>
			</div>
		</div>
	{/each}
</div>
