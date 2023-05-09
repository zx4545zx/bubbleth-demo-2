<script>
// @ts-nocheck

	import Slide from '../components/Slide.svelte';
	import SlideFrame from '../components/SlideFrame.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';
	import { lang } from "$lib/stores/language";

	/** @type {import('./$types').PageData} */
	export let data;

	let allEvent = [...data.sk, ...data.cm];
</script>

<svelte:head>
	<title>Event - Bubble in the Forest</title>
	<meta name="description" content="Event - Bubble in the Forest" />
</svelte:head>

<SlideFrame images={allEvent} />

<WoodenSign label="Events" />

<div class="flex flex-col lg:grid lg:grid-cols-2 gap-4 px-4">
	{#each data.landingImages as img}
		<div class="w-full shadow-xl card card-compact bg-base-100">
			<figure>
				<Slide slideImages={img.slide} type="fade" arrows={false} />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{img.title[$lang]}</h2>
				<p>{img.des[$lang]}</p>
			</div>
		</div>
	{/each}
</div>
