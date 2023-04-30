<script>
	import { landingImages } from '$lib/data/foodLanding';
	import { slideImages } from "$lib/data/foodSlide"
	import Slide from '../components/Slide.svelte';
</script>

<svelte:head>
	<title>Food - Bubble in the Forrest</title>
	<meta name="description" content="Food - Bubble in the Forrest" />
</svelte:head>

<Slide {slideImages} />

<div class="mx-auto mb-4 text-center">
	<h1 class="text-3xl font-bold">Food & Drink</h1>
</div>

<div class="flex flex-col gap-4 px-4">
	{#each landingImages as img}
	<div class="w-full overflow-hidden shadow-xl rounded-3xl bg-none">
		<img src={img} alt="food" class="object-cover w-full"/>
	</div>
	{/each}
</div>
