<script>
	import { cm, sk } from "$lib/data/eventSlide";
	import { landingImages } from '$lib/data/eventLanding';
	import Slide from "../components/Slide.svelte";
	import SlideFrame from "../components/SlideFrame.svelte";
	// import { slide } from "svelte/transition";
	
	let allEvent = [...sk, ...cm]
</script>

<svelte:head>
	<title>Event - Bubble in the Forrest</title>
	<meta name="description" content="Event - Bubble in the Forrest" />
</svelte:head>

<!-- <Slide {slideImages} /> -->
<SlideFrame images={allEvent} />

<div class="mx-auto mb-4 text-center">
	<h1 class="text-3xl font-bold">Events</h1>
</div>

<div class="flex flex-col gap-4 px-4">
	{#each landingImages as img}
	
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