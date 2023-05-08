<script>
// @ts-nocheck

	import { landingImages } from '$lib/data/foodLanding';
	import { slideImages } from '$lib/data/foodSlide';
	import { slideText } from '$lib/data/foodDes';
	import { lang } from "$lib/stores/language"

	import SlideFrame from '../components/SlideFrame.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';
</script>

<svelte:head>
	<title>Food - Bubble in the Forrest</title>
	<meta name="description" content="Food - Bubble in the Forrest" />
</svelte:head>

<SlideFrame images={slideImages} />

<WoodenSign label="Food & Drinks" />
<div class="mb-6 mx-4 text-center">
	<p>
		{slideText.des[$lang]}
	</p>
</div>
<div class="flex flex-col gap-4 px-4">
	{#each landingImages as img}
		<div class="w-full overflow-hidden shadow-xl rounded-3xl bg-none">
			<img src={img} alt="food" class="object-cover w-full" />
		</div>
	{/each}
</div>
