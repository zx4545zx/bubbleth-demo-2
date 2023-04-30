<script>
	import { slideImages } from "$lib/data/eventSlide";
	import { landingImages } from '$lib/data/eventLanding';
	import Slide from "../components/Slide.svelte";
	
</script>

<svelte:head>
	<title>Event - Bubble in the Forrest</title>
	<meta name="description" content="Event - Bubble in the Forrest" />
</svelte:head>

<Slide {slideImages} />

<div class="mx-auto mb-4 text-center">
	<h1 class="text-3xl font-bold">Events</h1>
</div>

<div class="flex flex-col gap-4 px-4">
	{#each landingImages as img}
	

	<div class="w-full shadow-xl card card-compact bg-base-100">
		<figure><img src={img.url} alt="event" /></figure>
		<div class="card-body">
			<h2 class="card-title">{img.title}</h2>
			<p>{img.des}</p>
		</div>
	</div>


	{/each}
</div>