<script>
// @ts-nocheck

	import { slideText } from '$lib/data/foodDes';
	import { lang } from "$lib/stores/language"

	import SlideFrame from '../components/SlideFrame.svelte';
	import WoodenSign from '../components/WoodenSign.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Food - Bubble in the Forrest</title>
	<meta name="description" content="Food - Bubble in the Forrest" />
</svelte:head>

<SlideFrame images={data.slideImages} />

<WoodenSign label="Food & Drinks" />
<div class="mb-6 mx-4 text-center">
	<p>
		{slideText.des[$lang]}
	</p>
</div>
<div class="flex flex-wrap justify-center gap-4 px-4">
	{#each data.landingImages as img}
		<div class="w-[16rem] overflow-hidden shadow-xl rounded-3xl bg-none">
			<img src={img} alt="food" class="object-cover w-full" />
		</div>
	{/each}
</div>
